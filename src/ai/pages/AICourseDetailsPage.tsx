import { useParams, Navigate, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { MonitorPlay, GitBranch, Users, Briefcase, CheckCircle2, ChevronDown, ArrowLeft } from 'lucide-react';
import { aiCourses } from '../data/aiData';
import { useSEO } from '../../app/utils/useSEO';
import { EducationContact } from '../../education/components/EducationContact';

export function AICourseDetailsPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState<number | null>(0);

  const course = aiCourses.find(c => c.slug === courseId);

  useSEO(
    course ? `${course.title} | Scaro AI` : 'Course Not Found',
    course ? course.tagline : ''
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  if (!course) {
    return <Navigate to="/ai" replace />;
  }

  return (
    <div className="min-h-screen bg-[#fafcfc] pt-20">
      
      {/* Hero Section */}
      <section className="relative w-full bg-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800/80 to-transparent z-10" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${course.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <button 
            onClick={() => navigate('/ai#courses')}
            className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm font-semibold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to AI Courses
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
                {course.tagline}
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="grid grid-cols-2 gap-4">
              {[
                { icon: MonitorPlay, label: course.stats.learningMode, sub: 'Learning Mode' },
                { icon: GitBranch, label: course.stats.projectsDesc, sub: 'Projects' },
                { icon: Users, label: course.stats.mentorshipDesc, sub: 'Mentorship' },
                { icon: Briefcase, label: course.stats.careerDesc, sub: 'Career' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
                  <stat.icon className="w-7 h-7 text-purple-400 mx-auto mb-3" />
                  <p className="text-white font-bold text-sm mb-1">{stat.label}</p>
                  <p className="text-slate-400 text-xs">{stat.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About & Outcomes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-7 gap-16">
          <div className="lg:col-span-4 space-y-16">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">About This Course</h2>
              <p className="text-slate-600 text-lg leading-relaxed">{course.about}</p>
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">What You'll Learn</h2>
              <div className="grid gap-4">
                {course.outcomes.map((outcome, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{outcome}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="sticky top-32 bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Curriculum Modules</h3>
              <div className="space-y-3">
                {course.curriculum.map((mod, idx) => (
                  <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-bold text-slate-800 text-sm">{mod.module}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeModule === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeModule === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-4 pb-4"
                        >
                          <ul className="space-y-2">
                            {mod.topics.map((topic, tidx) => (
                              <li key={tidx} className="flex items-start gap-2 text-slate-600 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      {course.projects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">Projects You Will Build</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {course.projects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{proj.title}</h3>
                <p className="text-slate-600 leading-relaxed">{proj.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <EducationContact />
    </div>
  );
}
