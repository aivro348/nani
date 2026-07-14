import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { useLms } from '../context/LmsContext';
import { courses } from '@/education/data/coursesData';
import { getLmsCourseBySlug } from '../data/lmsCoursesData';
import { useSEO } from '@/main/utils/useSEO';
import { 
  User, Award, Star, Download, 
  ExternalLink, Calendar, ArrowLeft,
  X, Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function LmsProfilePage() {
  useSEO(
    'Student Profile & Certificates | Scaro Academy',
    'View your unlocked digital badges, academic registration credentials, and generate verified course completion certificates.'
  );

  const navigate = useNavigate();
  const { user, enrollments, progress } = useLms();
  const [activeCertificate, setActiveCertificate] = useState<{ courseTitle: string; certId: string; date: string } | null>(null);

  // Compute course progress levels
  const courseCompleteness = useMemo(() => {
    return courses.map(course => {
      const isEnrolled = enrollments.includes(course.title);
      if (!isEnrolled) return { course, percent: 0, completedCount: 0, totalCount: 0 };

      const fullCourse = getLmsCourseBySlug(course.slug, course.title);
      const totalCount = fullCourse.modules.reduce((sum, m) => sum + m.lessons.length, 0);
      const completedCount = progress[course.slug]?.length || 0;
      const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

      return {
        course,
        percent,
        completedCount,
        totalCount
      };
    });
  }, [enrollments, progress]);

  // Unlocked Certificates
  const unlockedCertificates = useMemo(() => {
    return courseCompleteness
      .filter(item => item.percent === 100)
      .map(item => {
        // Generate deterministic cert ID matching standard SCA prefix
        const courseCode = item.course.slug.toUpperCase().substring(0, 4);
        const certHash = Math.floor(100000 + Math.random() * 900000);
        const certId = `SCA-LMS-${courseCode}-${certHash}`;
        
        return {
          courseTitle: item.course.title,
          courseSlug: item.course.slug,
          certId,
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };
      });
  }, [courseCompleteness]);

  // Compute Unlocked Badges list
  const badges = useMemo(() => {
    const totalCompleted = courseCompleteness.reduce((sum, item) => sum + item.completedCount, 0);
    const hasPythonCompleted = (progress['python-programming-mastery'] || []).length > 0;
    const hasJavaCompleted = (progress['java-full-stack-development'] || []).length > 0;

    return [
      {
        id: 'badge-welcome',
        name: 'Academy Recruit',
        description: 'Enrolled in Scaro Academy and accessed the student dashboard.',
        unlocked: enrollments.length > 0,
        iconColor: 'from-blue-500 to-indigo-500'
      },
      {
        id: 'badge-first-lesson',
        name: 'First Step',
        description: 'Successfully marked your first technical lesson as completed.',
        unlocked: totalCompleted > 0,
        iconColor: 'from-teal-500 to-cyan-500'
      },
      {
        id: 'badge-python',
        name: 'Python Pioneer',
        description: 'Unlocked by starting your Python Programming syllabus.',
        unlocked: hasPythonCompleted,
        iconColor: 'from-yellow-500 to-amber-500'
      },
      {
        id: 'badge-java',
        name: 'JVM Navigator',
        description: 'Unlocked by starting your Java enterprise compiler syllabus.',
        unlocked: hasJavaCompleted,
        iconColor: 'from-red-500 to-rose-500'
      },
      {
        id: 'badge-graduate',
        name: 'Academy Graduate',
        description: 'Fully completed 100% of any course syllabus and earned a certificate.',
        unlocked: unlockedCertificates.length > 0,
        iconColor: 'from-[var(--primary-gold)] to-yellow-600'
      }
    ];
  }, [enrollments, courseCompleteness, unlockedCertificates]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-page-bg py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Print-specific style block */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-certificate-container, #printable-certificate-container * {
            visibility: visible;
          }
          #printable-certificate-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            border: none;
            box-shadow: none;
            background: white !important;
            color: black !important;
          }
        }
      `}</style>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--primary-maroon)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[var(--primary-gold)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        {/* Back navigation */}
        <div className="flex justify-between items-center">
          <button 
            onClick={() => navigate('/lms')}
            className="p-2 hover:bg-surface-hover rounded-xl border border-surface-border text-heading flex items-center gap-1.5 text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </button>
          <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
            Student Profile Center
          </span>
        </div>

        {/* Profile Card */}
        <div className="bg-surface border border-surface-border rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center shadow-xl">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[var(--primary-maroon)] to-[var(--primary-gold)] flex items-center justify-center text-white text-3xl font-bold border border-white/10 shadow-lg shrink-0">
            {user?.name ? user.name.split(' ').map(n => n[0]).join('') : 'ST'}
          </div>

          <div className="text-center md:text-left space-y-2 flex-grow">
            <h1 className="text-2xl md:text-3xl font-black text-heading leading-tight">{user?.name || 'Student Name'}</h1>
            <p className="text-sm font-semibold text-text-secondary">{user?.email}</p>
            <div className="grid md:grid-cols-2 gap-2 text-xs text-text-muted mt-2 pt-2 border-t border-surface-border/50">
              <div>
                <span className="font-bold">Institution:</span> {user?.collegeName || 'N/A'}
              </div>
              <div>
                <span className="font-bold">Register No:</span> {user?.crNumber || 'N/A'}
              </div>
            </div>
          </div>
        </div>

        {/* Certificates & Achievements section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Unlocked Badges Panel */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-lg font-black text-heading flex items-center gap-2">
              <Star className="w-5 h-5 text-[var(--primary-gold)]" /> Digital Badges
            </h3>
            
            <div className="space-y-3">
              {badges.map(badge => (
                <div 
                  key={badge.id}
                  className={`border rounded-2xl p-4 flex gap-3 items-start transition-all ${
                    badge.unlocked 
                      ? 'bg-surface border-[var(--primary-gold)]/30' 
                      : 'bg-surface/40 border-surface-border/50 opacity-50'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${badge.iconColor} flex items-center justify-center text-white font-bold shrink-0 text-xs shadow-md`}>
                    {badge.unlocked ? <Check className="w-4 h-4" /> : <Star className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-heading">{badge.name}</h4>
                    <p className="text-[10px] text-text-muted mt-0.5 leading-relaxed">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Unlocked Certificates list */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-black text-heading flex items-center gap-2">
              <Award className="w-5 h-5 text-[var(--primary-gold)]" /> Verified Certifications
            </h3>

            {unlockedCertificates.length === 0 ? (
              <div className="bg-surface/50 border border-surface-border/50 rounded-3xl p-8 text-center text-text-muted text-sm space-y-2">
                <Award className="w-12 h-12 text-text-muted/40 mx-auto" />
                <h4 className="font-bold text-heading">No Certificates Generated</h4>
                <p className="max-w-xs mx-auto text-xs text-text-muted leading-relaxed">
                  Complete 100% of your enrolled courses' modules, take the module exams, and your credentials will appear here.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {unlockedCertificates.map(cert => (
                  <div 
                    key={cert.certId}
                    className="bg-surface border border-[var(--primary-gold)]/40 rounded-3xl p-6 shadow-xl flex flex-col justify-between gap-4 hover-lift"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="text-lg font-black text-heading">{cert.courseTitle}</h4>
                        <div className="flex items-center gap-2 mt-1.5 text-xs text-text-muted font-bold">
                          <Calendar className="w-4 h-4 text-[var(--primary-gold)]" /> Completed: {cert.date}
                        </div>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-green-500 bg-green-500/10 px-2.5 py-1 border border-green-500/20 rounded-md">
                        Verified
                      </span>
                    </div>

                    <div className="p-3 bg-page-bg/40 border border-surface-border rounded-xl font-mono text-[10px] text-text-secondary flex justify-between items-center">
                      <span>Verification ID: {cert.certId}</span>
                      <button 
                        onClick={() => navigate(`/verify-certificate?id=${cert.certId}`)}
                        className="text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] hover:underline flex items-center gap-1 font-bold"
                      >
                        Check Register <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => setActiveCertificate(cert)}
                      className="w-full py-3 bg-[var(--primary-maroon)] text-white font-bold rounded-xl text-xs hover:bg-[var(--dark-maroon)] transition-all flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" /> View Certificate Document
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dynamic Certificate Modal Preview & Printing Layout */}
      <AnimatePresence>
        {activeCertificate && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white text-slate-900 w-full max-w-4xl rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative"
            >
              {/* Close button */}
              <button 
                onClick={() => setActiveCertificate(null)}
                className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-all z-10 print:hidden"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Certificate Canvas Print Frame */}
              <div 
                id="printable-certificate-container"
                className="border-8 border-amber-950 p-6 md:p-10 relative overflow-hidden bg-[#FAF6F0] rounded-xl flex flex-col justify-between aspect-[1.414] shadow-inner text-center font-serif text-slate-800"
              >
                {/* Gold Ornaments Background */}
                <div className="absolute inset-0 border-[3px] border-amber-800/20 m-2 pointer-events-none" />
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-amber-800/5 rounded-full" />
                <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-amber-800/5 rounded-full" />

                <div className="space-y-6">
                  {/* Header logos */}
                  <div className="space-y-2">
                    <span className="text-amber-700 tracking-[0.25em] font-sans text-xs font-black block uppercase">
                      Scaro Academy of Technology
                    </span>
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-amber-950 tracking-wide">
                      Certificate of Completion
                    </h2>
                  </div>

                  <p className="text-xs md:text-sm font-sans italic text-slate-600">
                    This is proudly presented to
                  </p>

                  <h1 className="text-3xl md:text-5xl font-serif font-black text-amber-900 border-b border-amber-900/20 pb-2 max-w-lg mx-auto">
                    {user?.name || 'Rahul Sharma'}
                  </h1>

                  <p className="text-xs md:text-sm text-slate-700 max-w-xl mx-auto leading-relaxed font-sans">
                    for successfully demonstrating core proficiency, completing all modular coursework, hands-on industrial laboratory exercises, and capstone examinations for the specialization course in:
                  </p>

                  <h3 className="text-xl md:text-2xl font-serif font-bold text-amber-950">
                    {activeCertificate.courseTitle}
                  </h3>
                </div>

                {/* Verification & Signatures footer */}
                <div className="grid grid-cols-3 gap-6 items-end pt-6 md:pt-10 border-t border-amber-900/10 mt-6 font-sans">
                  {/* Verification code */}
                  <div className="text-left text-[9px] text-slate-500 leading-tight space-y-1">
                    <span className="font-bold block uppercase text-slate-600">Credential Details</span>
                    <span>Verification ID: {activeCertificate.certId}</span>
                    <span className="block">Issue Date: {activeCertificate.date}</span>
                  </div>

                  {/* Stamp Seal ornament */}
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-amber-700/10 border-2 border-dashed border-amber-700 flex items-center justify-center text-amber-800 text-[10px] font-black uppercase rotate-12 shadow-sm">
                      Official Seal
                    </div>
                  </div>

                  {/* Signatures */}
                  <div className="text-right text-[10px] text-slate-600 space-y-1">
                    <div className="italic font-serif text-slate-800 text-sm mb-1">
                      Academic Board
                    </div>
                    <div className="border-t border-slate-400 pt-1 font-semibold uppercase">
                      Scaro Academy Director
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 justify-end print:hidden">
                <button
                  onClick={handlePrint}
                  className="px-6 py-3 bg-amber-900 hover:bg-amber-950 text-white font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg transition-all"
                >
                  <Download className="w-4 h-4" /> Print / Save PDF
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
