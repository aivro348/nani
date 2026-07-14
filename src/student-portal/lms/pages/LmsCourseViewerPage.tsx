import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useLms } from '../context/LmsContext';
import { courses } from '@/education/data/coursesData';
import { getLmsCourseBySlug } from '../data/lmsCoursesData';
import { 
  PlayCircle, FileText, HelpCircle, 
  CheckCircle, ArrowLeft, ArrowRight, 
  Menu, X, Lock, Unlock, Play, 
  ChevronRight, ChevronDown, Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { EnrollmentModal } from '@/education/components/EnrollmentModal';

export function LmsCourseViewerPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { enrollments, progress, markLessonCompleted, submitQuizScore } = useLms();

  // Find course matching slug
  const courseMeta = useMemo(() => {
    return courses.find(c => c.slug === courseId);
  }, [courseId]);

  // Load complete course syllabus data
  const lmsCourse = useMemo(() => {
    if (!courseMeta) return null;
    return getLmsCourseBySlug(courseMeta.slug, courseMeta.title);
  }, [courseMeta]);

  // Enrollment Status check
  const isEnrolled = useMemo(() => {
    if (!courseMeta) return false;
    return enrollments.includes(courseMeta.title);
  }, [courseMeta, enrollments]);

  // Enrollment modal state for locked screen
  const [showEnrollModal, setShowEnrollModal] = useState(false);

  // Layout states
  const [activeLessonId, setActiveLessonId] = useState<string>('');
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Video playback speed state
  const [videoSpeed, setVideoSpeed] = useState<number>(1);
  const [isTheatreMode, setIsTheatreMode] = useState<boolean>(false);

  // Quiz interactive state
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({}); // { [questionId]: selectedOption }
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  // Set initial active lesson and expand first module
  useEffect(() => {
    if (lmsCourse?.modules && lmsCourse.modules.length > 0) {
      const firstModule = lmsCourse.modules[0];
      setExpandedModules(prev => ({ ...prev, [firstModule.id]: true }));
      
      if (firstModule.lessons && firstModule.lessons.length > 0) {
        setActiveLessonId(firstModule.lessons[0].id);
      }
    }
  }, [lmsCourse]);

  // Reset quiz states when switching lessons
  useEffect(() => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(null);
  }, [activeLessonId]);

  // Find current active lesson and module
  const { activeLesson, activeModule } = useMemo(() => {
    if (!lmsCourse) return { activeLesson: null, activeModule: null };
    for (const mod of lmsCourse.modules) {
      const les = mod.lessons.find(l => l.id === activeLessonId);
      if (les) return { activeLesson: les, activeModule: mod };
    }
    return { activeLesson: null, activeModule: null };
  }, [lmsCourse, activeLessonId]);

  // All lessons flat array for prev/next calculations
  const allLessons = useMemo(() => {
    if (!lmsCourse) return [];
    return lmsCourse.modules.flatMap(m => m.lessons);
  }, [lmsCourse]);

  const activeLessonIndex = allLessons.findIndex(l => l.id === activeLessonId);

  // Toggle module expansion
  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => ({ ...prev, [moduleId]: !prev[moduleId] }));
  };

  // Handle lesson navigation
  const handlePrev = () => {
    if (activeLessonIndex > 0) {
      setActiveLessonId(allLessons[activeLessonIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (activeLessonIndex < allLessons.length - 1) {
      setActiveLessonId(allLessons[activeLessonIndex + 1].id);
    }
  };

  // Complete lesson checkmark logic
  const handleMarkCompleted = () => {
    if (!courseId || !activeLessonId) return;
    markLessonCompleted(courseId, activeLessonId);
    
    // Automatically advance to next lesson if available
    if (activeLessonIndex < allLessons.length - 1) {
      setTimeout(() => {
        handleNext();
      }, 500);
    }
  };

  // Quiz option selection
  const handleQuizSelect = (questionId: string, optionIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  // Quiz grade submission
  const handleQuizSubmit = () => {
    if (!activeLesson?.quiz) return;
    const questions = activeLesson.quiz.questions;
    let correctCount = 0;
    
    questions.forEach(q => {
      if (quizAnswers[q.id] === q.correctOption) {
        correctCount++;
      }
    });

    const finalScore = Math.round((correctCount / questions.length) * 100);
    setQuizScore(finalScore);
    setQuizSubmitted(true);
    submitQuizScore(activeLessonId, finalScore);
  };

  if (!courseMeta || !lmsCourse) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-page-bg py-24 text-center text-heading">
        <div>
          <h2 className="text-2xl font-black">Course Not Found</h2>
          <button onClick={() => navigate('/lms')} className="mt-4 px-6 py-2.5 bg-[var(--primary-maroon)] text-white rounded-xl font-bold">
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // 1. LOCKED SCREEN FOR UNENROLLED STUDENTS
  if (!isEnrolled) {
    return (
      <div className="min-h-screen bg-page-bg py-24 px-4 sm:px-6 relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--primary-maroon)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[var(--primary-gold)]/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg bg-surface border border-surface-border rounded-3xl p-8 shadow-2xl text-center space-y-6 relative z-10"
        >
          {/* Glowing Lock Icon */}
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 rounded-full bg-[var(--primary-gold)]/15 animate-ping" />
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary-maroon)] to-[var(--primary-gold)] flex items-center justify-center shadow-lg border border-white/10">
              <Lock className="w-9 h-9 text-white" />
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[var(--primary-gold)] bg-[var(--primary-gold)]/10 px-3 py-1 rounded-md">
              Restricted Workspace
            </span>
            <h1 className="text-2xl md:text-3xl font-black text-heading leading-tight pt-2">
              {courseMeta.title} is Locked
            </h1>
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm mx-auto">
              This curriculum outline, interactive code modules, video courses, and certification keys are locked to enrolled students. Complete the registration form below to grant immediate access.
            </p>
          </div>

          {/* Quick Course Details */}
          <div className="bg-page-bg/40 border border-surface-border/50 rounded-2xl p-4 text-left grid grid-cols-2 gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-text-muted">Academic Category</span>
              <span className="text-sm font-extrabold text-heading block mt-0.5">{courseMeta.category.toUpperCase()}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-text-muted">Learning Mode</span>
              <span className="text-sm font-extrabold text-heading block mt-0.5">{courseMeta.stats.learningMode}</span>
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            <button
              onClick={() => navigate('/lms')}
              className="flex-1 py-3.5 bg-surface border border-surface-border hover:bg-surface-hover text-heading font-bold rounded-xl transition-all"
            >
              Cancel
            </button>
            <button
              onClick={() => setShowEnrollModal(true)}
              className="flex-1 py-3.5 bg-gradient-to-r from-[var(--primary-maroon)] to-[var(--primary-gold)] hover:shadow-xl text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group"
            >
              Enroll Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {showEnrollModal && (
          <EnrollmentModal
            isOpen={true}
            onClose={() => setShowEnrollModal(false)}
            courseName={courseMeta.title}
            coursePrice="Free (Academy Trial)"
          />
        )}
      </div>
    );
  }

  // Calculate course completeness percentage
  const totalCourseLessons = allLessons.length;
  const completedCourseLessons = progress[courseMeta.slug]?.length || 0;
  const progressPercent = totalCourseLessons > 0 ? Math.round((completedCourseLessons / totalCourseLessons) * 100) : 0;

  // 2. ENROLLED COURSE WORKSPACE
  return (
    <div className="min-h-screen bg-page-bg pt-20 flex relative overflow-hidden">
      {/* Collapsible Outline Sidebar */}
      <AnimatePresence initial={false}>
        {sidebarOpen && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 320, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="hidden md:flex flex-col flex-shrink-0 bg-surface border-r border-surface-border h-[calc(100vh-5rem)] overflow-y-auto"
          >
            {/* Sidebar header */}
            <div className="p-5 border-b border-surface-border flex justify-between items-center bg-surface-hover/30">
              <div>
                <h4 className="text-sm font-black text-heading uppercase tracking-wider">Course Outline</h4>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-24 h-1.5 bg-border rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--primary-gold)]" style={{ width: `${progressPercent}%` }} />
                  </div>
                  <span className="text-[10px] text-text-muted font-bold">{progressPercent}%</span>
                </div>
              </div>
              <button 
                onClick={() => setSidebarOpen(false)} 
                className="p-1 hover:bg-surface-hover rounded-lg text-text-secondary"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sidebar Modules Outline */}
            <div className="p-4 space-y-3">
              {lmsCourse.modules.map(mod => {
                const isExpanded = expandedModules[mod.id];
                return (
                  <div key={mod.id} className="space-y-1">
                    {/* Module Title Button */}
                    <button
                      onClick={() => toggleModule(mod.id)}
                      className="w-full text-left px-3 py-2.5 hover:bg-surface-hover/50 rounded-xl transition-all flex items-center justify-between text-xs font-black text-heading uppercase tracking-wide group"
                    >
                      <span className="line-clamp-1 group-hover:text-[var(--primary-gold)] transition-colors">{mod.title}</span>
                      {isExpanded ? <ChevronDown className="w-4 h-4 flex-shrink-0 text-text-muted" /> : <ChevronRight className="w-4 h-4 flex-shrink-0 text-text-muted" />}
                    </button>

                    {/* Lesson Items */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-2 space-y-1 overflow-hidden"
                        >
                          {mod.lessons.map(les => {
                            const isActive = les.id === activeLessonId;
                            const isCompleted = progress[courseMeta.slug]?.includes(les.id);
                            
                            let Icon = PlayCircle;
                            if (les.type === 'reading') Icon = FileText;
                            if (les.type === 'quiz') Icon = HelpCircle;

                            return (
                              <button
                                key={les.id}
                                onClick={() => setActiveLessonId(les.id)}
                                className={`w-full text-left px-3 py-2 rounded-xl transition-all flex items-center justify-between gap-3 text-xs font-semibold ${
                                  isActive 
                                    ? 'bg-[var(--primary-maroon)] text-white shadow-md' 
                                    : 'hover:bg-surface-hover/80 text-text-secondary'
                                }`}
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-white' : 'text-text-muted'}`} />
                                  <span className="truncate">{les.title}</span>
                                </div>
                                <div className="flex items-center gap-1.5 flex-shrink-0">
                                  <span className="text-[10px] text-text-muted/80">{les.duration}</span>
                                  {isCompleted && <CheckCircle className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-green-500'}`} />}
                                </div>
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Workspace Frame */}
      <div className="flex-1 flex flex-col h-[calc(100vh-5rem)] overflow-y-auto bg-page-bg">
        {/* Toggle Sidebar Button for Desktop */}
        <div className="px-6 py-4 border-b border-surface-border flex items-center justify-between bg-surface/30 sticky top-0 backdrop-blur-md z-30">
          <div className="flex items-center gap-3">
            {!sidebarOpen && (
              <button 
                onClick={() => setSidebarOpen(true)} 
                className="hidden md:block p-2 hover:bg-surface-hover rounded-xl border border-surface-border text-heading"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}
            <button 
              onClick={() => navigate('/lms')} 
              className="p-2 hover:bg-surface-hover rounded-xl border border-surface-border text-heading flex items-center gap-1 text-xs font-bold"
            >
              <ArrowLeft className="w-4 h-4" /> Dashboard
            </button>
          </div>
          <span className="text-xs font-bold text-text-muted truncate max-w-xs md:max-w-md uppercase tracking-wider">
            {courseMeta.title}
          </span>
        </div>

        {/* Workspace Panels */}
        <div className="flex-grow p-6 max-w-4xl mx-auto w-full space-y-6 pb-20">
          {activeLesson ? (
            <div className="space-y-6">
              {/* Lesson Headers */}
              <div>
                <span className="text-xs font-bold text-[var(--primary-gold)] uppercase tracking-wider block">
                  {activeModule?.title}
                </span>
                <h1 className="text-2xl md:text-3xl font-black text-heading tracking-tight mt-1 leading-tight">
                  {activeLesson.title}
                </h1>
                <div className="flex items-center gap-4 text-xs text-text-muted mt-2 font-semibold">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {activeLesson.duration}
                  </span>
                  <span>·</span>
                  <span className="capitalize">{activeLesson.type} Lesson</span>
                </div>
              </div>

              {/* 1. VIDEO VIEW */}
              {activeLesson.type === 'video' && activeLesson.videoUrl && (
                <div className="space-y-4">
                  {/* YouTube Embed Frame */}
                  <div className={`relative bg-black rounded-3xl overflow-hidden shadow-2xl border border-surface-border aspect-video ${isTheatreMode ? 'max-w-none' : ''}`}>
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${activeLesson.videoUrl}?rel=0&autoplay=0&enablejsapi=1`}
                      title={activeLesson.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {/* Video Controls & Information */}
                  <div className="flex justify-between items-center bg-surface border border-surface-border rounded-2xl p-4">
                    <div className="flex gap-2">
                      {[1, 1.25, 1.5, 2].map(speed => (
                        <button
                          key={speed}
                          onClick={() => setVideoSpeed(speed)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                            videoSpeed === speed 
                              ? 'bg-[var(--primary-maroon)] text-white border-[var(--primary-maroon)]' 
                              : 'bg-page-bg text-text-secondary border-surface-border hover:bg-surface-hover'
                          }`}
                        >
                          {speed}x
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setIsTheatreMode(!isTheatreMode)}
                      className="text-xs font-bold px-4 py-2 hover:bg-surface-hover rounded-xl text-heading border border-surface-border"
                    >
                      {isTheatreMode ? 'Standard Mode' : 'Theatre Mode'}
                    </button>
                  </div>
                </div>
              )}

              {/* 2. READING OR DOCUMENTATION VIEW */}
              {(activeLesson.type === 'reading' || activeLesson.type === 'video') && activeLesson.readingContent && (
                <div className="bg-surface border border-surface-border rounded-3xl p-6 md:p-8 shadow-xl prose prose-slate dark:prose-invert max-w-none">
                  <div className="space-y-4 text-text-secondary font-medium leading-relaxed">
                    {/* Simple Markdown Renderer parser */}
                    {activeLesson.readingContent.split('\n\n').map((paragraph, index) => {
                      const text = paragraph.trim();
                      if (text.startsWith('# ')) {
                        return <h2 key={index} className="text-xl md:text-2xl font-black text-heading pt-4 pb-2 border-b border-surface-border">{text.substring(2)}</h2>;
                      }
                      if (text.startsWith('### ')) {
                        return <h3 key={index} className="text-lg font-black text-heading pt-3 pb-1">{text.substring(4)}</h3>;
                      }
                      if (text.startsWith('* ') || text.startsWith('- ')) {
                        return (
                          <ul key={index} className="list-disc pl-5 space-y-1">
                            {text.split('\n').map((li, liIdx) => (
                              <li key={liIdx}>{li.replace(/^[\*\-\s]+/, '')}</li>
                            ))}
                          </ul>
                        );
                      }
                      if (text.startsWith('1. ') || text.startsWith('2. ') || text.startsWith('3. ')) {
                        return (
                          <ol key={index} className="list-decimal pl-5 space-y-1">
                            {text.split('\n').map((li, liIdx) => (
                              <li key={liIdx}>{li.replace(/^\d+\.\s+/, '')}</li>
                            ))}
                          </ol>
                        );
                      }
                      if (text.startsWith('```python') || text.startsWith('```bash') || text.startsWith('```')) {
                        const code = text.replace(/```[a-z]*\n/, '').replace(/```$/, '');
                        return (
                          <div key={index} className="my-4 bg-slate-900 border border-slate-800 rounded-2xl p-4 overflow-x-auto relative group font-mono text-xs text-slate-200">
                            <button 
                              onClick={() => navigator.clipboard.writeText(code)}
                              className="absolute top-3 right-3 text-[10px] font-bold px-2 py-1 bg-slate-800 rounded hover:bg-slate-700 text-slate-400 group-hover:block transition-all"
                            >
                              Copy Code
                            </button>
                            <pre className="m-0 whitespace-pre">{code}</pre>
                          </div>
                        );
                      }
                      if (text.startsWith('> ')) {
                        return (
                          <blockquote key={index} className="border-l-4 border-[var(--primary-gold)] pl-4 py-1 italic bg-[var(--primary-gold)]/5 rounded-r-xl my-4 text-text-secondary">
                            {text.replace(/^>[\s]+/, '')}
                          </blockquote>
                        );
                      }
                      return <p key={index}>{text}</p>;
                    })}
                  </div>
                </div>
              )}

              {/* 3. QUIZ WORKSPACE VIEW */}
              {activeLesson.type === 'quiz' && activeLesson.quiz && (
                <div className="space-y-6">
                  {activeLesson.quiz.questions.map((q, qIdx) => {
                    const selectedIdx = quizAnswers[q.id];
                    const isCorrectAnswer = selectedIdx === q.correctOption;

                    return (
                      <div key={q.id} className="bg-surface border border-surface-border rounded-3xl p-6 shadow-xl space-y-4">
                        <span className="text-xs font-bold text-text-muted">Question {qIdx + 1} of {activeLesson.quiz?.questions.length}</span>
                        <h3 className="text-base font-black text-heading mt-1">{q.question}</h3>

                        <div className="grid gap-3 pt-2">
                          {q.options.map((option, optIdx) => {
                            const isSelected = selectedIdx === optIdx;
                            const showCorrect = quizSubmitted && optIdx === q.correctOption;
                            const showIncorrect = quizSubmitted && isSelected && !isCorrectAnswer;

                            let btnStyle = 'bg-page-bg border-surface-border text-text-secondary hover:bg-surface-hover';
                            if (isSelected && !quizSubmitted) {
                              btnStyle = 'border-[var(--primary-maroon)] bg-[var(--primary-maroon)]/5 text-[var(--primary-maroon)] dark:text-white dark:border-[var(--primary-gold)]';
                            }
                            if (showCorrect) {
                              btnStyle = 'border-green-500 bg-green-500/10 text-green-600 dark:text-green-400';
                            }
                            if (showIncorrect) {
                              btnStyle = 'border-red-500 bg-red-500/10 text-red-600 dark:text-red-400';
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleQuizSelect(q.id, optIdx)}
                                disabled={quizSubmitted}
                                className={`w-full text-left p-4 rounded-2xl border text-xs font-semibold transition-all ${btnStyle}`}
                              >
                                {option}
                              </button>
                            );
                          })}
                        </div>

                        {/* Quiz Explanations Section */}
                        {quizSubmitted && isSelected && (
                          <div className={`p-4 rounded-2xl border text-xs font-medium ${
                            isCorrectAnswer 
                              ? 'bg-green-500/5 border-green-500/20 text-green-600 dark:text-green-400' 
                              : 'bg-red-500/5 border-red-500/20 text-red-600 dark:text-red-400'
                          }`}>
                            <h4 className="font-black uppercase tracking-wide text-[10px] mb-1">
                              {isCorrectAnswer ? 'Correct Explanation' : 'Review Explanation'}
                            </h4>
                            <p>{q.explanation}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Submission and results footer */}
                  <div className="flex justify-between items-center bg-surface border border-surface-border rounded-2xl p-5 shadow-lg">
                    {quizScore !== null ? (
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-black text-sm">
                          {quizScore}%
                        </div>
                        <div>
                          <h4 className="text-sm font-black text-heading">Quiz Graded Successfully</h4>
                          <p className="text-[11px] text-text-muted mt-0.5">Your score is saved to your academic credentials</p>
                        </div>
                      </div>
                    ) : (
                      <span className="text-xs text-text-muted font-bold">Answer all questions to submit code test</span>
                    )}

                    {!quizSubmitted ? (
                      <button
                        onClick={handleQuizSubmit}
                        disabled={Object.keys(quizAnswers).length < activeLesson.quiz.questions.length}
                        className="px-6 py-3 bg-[var(--primary-maroon)] text-white font-bold rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        Submit Test
                      </button>
                    ) : (
                      <button
                        onClick={handleMarkCompleted}
                        className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                      >
                        Proceed to Next Module
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Action workspace navigation footers */}
              <div className="pt-6 border-t border-surface-border flex justify-between items-center gap-4">
                <button
                  onClick={handlePrev}
                  disabled={activeLessonIndex === 0}
                  className="px-4 py-2.5 border border-surface-border rounded-xl text-xs font-bold text-heading hover:bg-surface-hover disabled:opacity-40 transition-all"
                >
                  Previous Lesson
                </button>

                {activeLesson.type !== 'quiz' && (
                  <button
                    onClick={handleMarkCompleted}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    <CheckCircle className="w-4 h-4 fill-white text-emerald-600" />
                    Mark Completed
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                )}

                {activeLesson.type === 'quiz' && quizSubmitted && (
                  <button
                    onClick={handleNext}
                    disabled={activeLessonIndex === allLessons.length - 1}
                    className="px-4 py-2.5 border border-surface-border rounded-xl text-xs font-bold text-heading hover:bg-surface-hover disabled:opacity-40 transition-all"
                  >
                    Next Lesson
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center text-text-muted py-20 font-bold">Select a lesson to begin.</div>
          )}
        </div>
      </div>
    </div>
  );
}
