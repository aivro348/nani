import { useParams, Navigate, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { MonitorPlay, GitBranch, Users, Briefcase, CheckCircle2, ChevronDown, ArrowLeft } from 'lucide-react';
import { courses } from '../data/coursesData';
import { useSEO } from '../../main/utils/useSEO';
import { EducationContact } from '../components/EducationContact';
import { useLms } from '@/student-portal/lms/context/LmsContext';
import { EnrollmentModal } from '../components/EnrollmentModal';


export function CourseDetailsPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState<number | null>(0);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const { user, enrollments } = useLms();

  const course = courses.find(c => c.slug === courseId);
  const isEnrolled = !!(user && course && enrollments.includes(course.title));

  const handleEnrollClick = () => {
    if (!course) return;
    setIsEnrollModalOpen(true);
  };


  useSEO(
    course ? `${course.title} | Scaro Academy` : 'Course Not Found',
    course ? course.tagline : ''
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <div className="min-h-screen bg-[#fafcfc] pt-20">
      
      {/* 1. Hero Section (Dark gradient with image) */}
      <section className="relative w-full bg-slate-900 py-24 overflow-hidden">
        {/* Subtle background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800/80 to-transparent z-10" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${course.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <button aria-label="Action button" 
            onClick={() => navigate('/courses#programs-section')}
            className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm font-semibold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Programs
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--primary-gold)] mb-6 leading-tight">
                  {course.title}
                </h1>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
                  {course.tagline}
                </p>
              </div>

              <button aria-label="Action button"
                onClick={handleEnrollClick}
                className="bg-[var(--primary-gold)] hover:bg-[#e63500] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 text-sm uppercase tracking-wider block"
              >
                {isEnrolled ? 'Open LMS Workspace' : 'Enroll in Program'}
              </button>
            </motion.div>


            {/* Right: Hero Image Card matching screenshot */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative mx-auto w-full max-w-lg lg:ml-auto">
              <div className="bg-white rounded-2xl p-2 shadow-2xl">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                  <img loading="lazy" decoding="async" src={course.heroImage} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40" />
                  
                  {/* Red Pill Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[var(--primary-gold)] text-white px-6 py-2.5 rounded-full text-lg font-bold shadow-xl tracking-wide uppercase">
                      {course.title}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. 4 Stat Cards Row */}
      <section className="relative z-30 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <StatCard icon={MonitorPlay} title="Learning Mode" desc={course.stats.learningMode} delay={0.1} />
          <StatCard icon={GitBranch} title="Real-Time Projects" desc={course.stats.projectsDesc} delay={0.2} />
          <StatCard icon={Users} title="Expert Mentorship" desc={course.stats.mentorshipDesc} delay={0.3} />
          <StatCard icon={Briefcase} title="Career Support" desc={course.stats.careerDesc} delay={0.4} />
        </div>
      </section>

      {/* 3. About the Course */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-[var(--primary-gold)] rounded-full"></span>
                About the Course
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {course.about}
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {course.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Side Panel for Sticky CTA (Optional but good UX) */}
          <div className="lg:col-span-5 hidden lg:block">
             <div className="sticky top-32 bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to start?</h3>
                <p className="text-slate-500 mb-6">Enroll now and start your journey towards mastering {course.title}.</p>
                <button aria-label="Action button" 
                  onClick={handleEnrollClick}
                  className="w-full bg-[var(--primary-gold)] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#e63500] hover:shadow-lg transition-all active:scale-95"
                >
                  {isEnrolled ? 'Open LMS Workspace' : 'Enroll Now'}
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Curriculum Accordion */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">Course Curriculum</h2>
          
          <div className="space-y-4">
            {course.curriculum.map((mod, idx) => {
              const isOpen = activeModule === idx;
              return (
                <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all hover:border-slate-300">
                  <button aria-label="Action button"
                    onClick={() => setActiveModule(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between bg-white text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-bold text-slate-400">Module {idx + 1}</span>
                      <span className="text-lg font-bold text-slate-800">{mod.module}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50">
                          <ul className="space-y-3">
                            {mod.topics.map((topic, tidx) => (
                              <li key={tidx} className="flex items-start gap-3 text-slate-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-gold)] mt-2 shrink-0" />
                                <span className="leading-relaxed">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Projects Section */}
      {course.projects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">Projects You Will Work On</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {course.projects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-50 text-[var(--primary-gold)] rounded-xl flex items-center justify-center mb-6">
                  <GitBranch className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{proj.title}</h3>
                <p className="text-slate-600 leading-relaxed">{proj.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* 6. Testimonials */}
      {course.testimonials.length > 0 && (
        <section className="bg-slate-900 py-20 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black mb-12">Student Testimonials</h2>
            {course.testimonials.map((test, idx) => (
              <div key={idx} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                <p className="text-xl italic text-slate-300 mb-6">"{test.quote}"</p>
                <p className="font-bold text-[var(--primary-gold)]">- {test.author}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact Section at bottom */}
      <EducationContact />

      {/* Enrollment modal rendering */}
      {isEnrollModalOpen && (
        <EnrollmentModal
          isOpen={true}
          onClose={() => setIsEnrollModalOpen(false)}
          courseName={course.title}
          coursePrice="Free (Academy Trial)"
        />
      )}
    </div>
  );
}

function StatCard({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
    >
      <div className="w-14 h-14 rounded-full bg-red-50 text-[var(--primary-gold)] flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 font-medium">{desc}</p>
    </motion.div>
  );
}
