import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { useLms } from '../context/LmsContext';
import { courses } from '@/education/data/coursesData';
import { lmsCourses, getLmsCourseBySlug } from '../data/lmsCoursesData';
import { useSEO } from '@/main/utils/useSEO';
import { 
  BookOpen, Award, Clock, Flame, 
  ArrowRight, Lock, Unlock, Play, 
  User, CheckCircle, BarChart3, Star
} from 'lucide-react';
import { motion } from 'motion/react';
import { EnrollmentModal } from '@/education/components/EnrollmentModal';

export function LmsDashboardPage() {
  useSEO(
    'Student LMS Dashboard | Scaro Academy',
    'Track your technical course progression, view study analytics, take quizzes, and earn industry-certified credentials.'
  );

  const navigate = useNavigate();
  const { user, enrollments, progress, logout } = useLms();
  const [selectedCourseToEnroll, setSelectedCourseToEnroll] = useState<{ title: string; price: string } | null>(null);

  // Dynamic greeting based on time of day
  const greeting = useMemo(() => {
    const hours = new Date().getHours();
    if (hours < 12) return 'Good Morning';
    if (hours < 18) return 'Good Afternoon';
    return 'Good Evening';
  }, []);



  // Handle course card click
  const handleCourseClick = (slug: string, title: string) => {
    if (enrollments.includes(title)) {
      navigate(`/lms/course/${slug}`);
    } else {
      setSelectedCourseToEnroll({ title, price: 'Free (Academy Trial)' });
    }
  };

  return (
    <div className="min-h-screen bg-page-bg py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--primary-maroon)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[var(--primary-gold)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        {/* Top welcome profile banner */}
        <div className="bg-surface border border-surface-border rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary-maroon)] to-[var(--primary-gold)] flex items-center justify-center text-white text-xl font-bold border border-white/10 shadow-lg">
              {user?.name ? user.name.split(' ').map(n => n[0]).join('') : 'ST'}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-heading leading-tight flex items-center gap-2">
                {greeting}, {user?.name || 'Student'}!
              </h1>
              <p className="text-sm text-text-muted mt-1 font-medium">
                {user?.collegeName ? `${user.collegeName} · Registration: ${user.crNumber}` : 'Welcome to your Scaro Academy workspace'}
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button aria-label="Action button"
              onClick={() => navigate('/lms/profile')}
              className="flex-1 md:flex-none px-5 py-2.5 bg-surface-hover hover:bg-surface border border-surface-border rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 text-heading"
            >
              <User className="w-4 h-4" /> Profile & Certificates
            </button>
            <button aria-label="Action button"
              onClick={logout}
              className="flex-1 md:flex-none px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-xl text-sm font-semibold border border-red-500/20 transition-all text-center"
            >
              Log Out
            </button>
          </div>
        </div>



        {/* Section: Resume Learning */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-black text-heading tracking-tight">Active Courses</h2>

          {enrollments.length === 0 ? (
            <div className="bg-surface border border-surface-border rounded-3xl p-8 text-center max-w-xl mx-auto space-y-4">
              <div className="w-16 h-16 bg-[var(--primary-gold)]/10 text-[var(--primary-gold)] flex items-center justify-center rounded-full mx-auto">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-black text-heading">Unlock Your First Course</h3>
              <p className="text-sm text-text-muted">
                You are currently not enrolled in any technical courses. Scroll down to browse courses and click "Enroll" to begin your learning journey.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {courses
                .filter(course => enrollments.includes(course.title))
                .map(course => {
                  // Compute completed lessons of this course
                  const fullCourse = getLmsCourseBySlug(course.slug, course.title);
                  const totalLessons = fullCourse.modules.reduce((sum, m) => sum + m.lessons.length, 0);
                  const completedLessons = progress[course.slug]?.length || 0;
                  const percent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

                  return (
                    <div 
                      key={course.id}
                      className="bg-surface border border-surface-border rounded-3xl p-6 shadow-xl flex flex-col justify-between gap-6 hover-lift relative overflow-hidden group"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-start gap-3">
                          <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary-gold)] bg-[var(--primary-gold)]/10 px-2.5 py-1 rounded-md">
                            {course.category}
                          </span>
                          <span className="text-xs text-text-muted font-bold">
                            {completedLessons} / {totalLessons} Lessons
                          </span>
                        </div>
                        <h3 className="text-xl font-black text-heading group-hover:text-[var(--primary-gold)] transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-sm text-text-secondary line-clamp-2">
                          {course.tagline}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="relative">
                          <div className="h-2 bg-border rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-[var(--primary-maroon)] to-[var(--primary-gold)] transition-all duration-500" 
                              style={{ width: `${percent}%` }}
                            />
                          </div>
                          <div className="flex justify-between items-center text-xs text-text-muted mt-2 font-semibold">
                            <span>Progress</span>
                            <span>{percent}% Complete</span>
                          </div>
                        </div>

                        <button aria-label="Action button"
                          onClick={() => navigate(`/lms/course/${course.slug}`)}
                          className="w-full py-3 bg-[var(--primary-maroon)] hover:bg-[var(--dark-maroon)] text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group/btn"
                        >
                          <Play className="w-4 h-4 fill-current group-hover/btn:scale-110 transition-transform" />
                          Resume Learning
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>

        {/* Section: Browse Academy Courses */}
        <div className="space-y-6">
          <div className="border-b border-surface-border pb-4">
            <h2 className="text-xl md:text-2xl font-black text-heading tracking-tight">Academy Curriculum Catalog</h2>
            <p className="text-sm text-text-muted mt-1">Enroll in these programs to unlock their modules and start learning.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map(course => {
              const isEnrolled = enrollments.includes(course.title);

              return (
                <div
                  key={course.id}
                  className={`bg-surface border rounded-3xl p-6 flex flex-col justify-between gap-5 relative overflow-hidden transition-all duration-300 shadow-md ${
                    isEnrolled 
                      ? 'border-[var(--primary-gold)]/50 shadow-[var(--primary-gold)]/5' 
                      : 'border-surface-border opacity-95'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-text-muted bg-surface-hover border border-surface-border px-2.5 py-0.5 rounded-md">
                        {course.category}
                      </span>
                      {isEnrolled ? (
                        <span className="text-[10px] font-black uppercase tracking-wider text-green-500 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Unlock className="w-3 h-3" /> Unlocked
                        </span>
                      ) : (
                        <span className="text-[10px] font-black uppercase tracking-wider text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Lock className="w-3 h-3" /> Locked
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-black text-heading leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs text-text-secondary line-clamp-3">
                      {course.tagline}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-surface-border/50 flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-text-muted uppercase">Learning Mode</span>
                      <span className="text-xs font-bold text-heading">{course.stats.learningMode}</span>
                    </div>

                    <button aria-label="Action button"
                      onClick={() => handleCourseClick(course.slug, course.title)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        isEnrolled 
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg' 
                          : 'bg-gradient-to-r from-[var(--primary-maroon)] to-[var(--primary-gold)] text-white hover:shadow-lg'
                      }`}
                    >
                      {isEnrolled ? 'Open Course' : 'Enroll Now'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enrollment Modal Hookup */}
      {selectedCourseToEnroll && (
        <EnrollmentModal
          isOpen={true}
          onClose={() => setSelectedCourseToEnroll(null)}
          courseName={selectedCourseToEnroll.title}
          coursePrice={selectedCourseToEnroll.price}
        />
      )}
    </div>
  );
}
