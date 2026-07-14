import { useParams, Navigate, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import {
  ArrowLeft, Clock, Users, Star, TrendingUp, Briefcase, Target,
  Award, CheckCircle2, Wrench, BookOpen
} from 'lucide-react';
import { aiRoadmaps } from '../data/aiData';
import { useSEO } from '../../main/utils/useSEO';
import { EducationContact } from '../../education/components/EducationContact';

export function AIRoadmapDetailsPage() {
  const { roadmapId } = useParams<{ roadmapId: string }>();
  const navigate = useNavigate();
  const course = aiRoadmaps.find(c => c.id === roadmapId);

  useSEO(
    course ? `${course.title} Roadmap | Scaro AI` : 'Roadmap Not Found',
    course ? course.tagline : ''
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [roadmapId]);

  if (!course) {
    return <Navigate to="/ai#roadmaps" replace />;
  }

  return (
    <div className="min-h-screen bg-[#fafcfc] pt-20">
      
      {/* Hero */}
      <section className="relative w-full bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={() => navigate('/ai#roadmaps')}
            className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm font-semibold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to AI Roadmaps
          </button>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            {course.hotBadge && (
              <span className="inline-flex items-center bg-purple-500/20 text-purple-300 text-xs font-black px-4 py-1.5 rounded-full mb-6 border border-purple-500/30">
                {course.hotBadge}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6 leading-tight">
              {course.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium mb-10">
              {course.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white font-semibold text-sm">
                <Clock className="w-4 h-4 text-purple-400" /> {course.duration}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white font-semibold text-sm">
                <Users className="w-4 h-4 text-purple-400" /> {course.students} Enrolled
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white font-semibold text-sm">
                <Star className="w-4 h-4 text-yellow-400" /> {course.rating} Rating
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-300 font-bold text-sm">
                <TrendingUp className="w-4 h-4" /> {course.jobSalary}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid + Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-16">
            {/* Learning Outcomes */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">What You'll Master</h2>
              <div className="grid gap-4">
                {course.learningOutcomes.map((outcome, idx) => (
                  <motion.div key={idx}
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

            {/* Tools */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {course.tools.map((tool, i) => (
                  <span key={i} className="px-4 py-2 bg-purple-50 text-purple-700 text-sm font-bold rounded-xl border border-purple-100">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Paths */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">Career Paths</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.careerPaths.map((path, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <Target className="w-5 h-5 text-purple-500 shrink-0" />
                    <span className="text-slate-800 font-bold">{path}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32 bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Start this Roadmap</h3>
              <p className="text-slate-500 mb-6">Join {course.students} other students mastering {course.title}.</p>
              <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-lg py-4 rounded-xl hover:opacity-90 hover:shadow-lg transition-all active:scale-95">
                Begin Learning
              </button>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">Certification</p>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-bold text-slate-700">{course.certification}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Snake Timeline Curriculum */}
      <section className="bg-slate-50 py-24 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Detailed Roadmap Curriculum</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Follow this path week by week to master the skills and complete your transformation.</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-[44px] md:left-1/2 top-8 bottom-8 w-1.5 bg-gradient-to-b from-purple-200 via-purple-300 to-cyan-200 md:-translate-x-1/2 rounded-full z-0 block"></div>

            <div className="space-y-12 md:space-y-0">
              {course.weeks.map((mod, idx) => {
                const isEven = idx % 2 === 0;
                
                return (
                  <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} w-full`}>
                    
                    <div className="absolute left-[24px] md:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-purple-500 shadow-xl shadow-purple-500/20 -translate-x-1/2 z-20 flex items-center justify-center text-purple-600 font-black text-sm transition-transform hover:scale-110">
                      {mod.week}
                    </div>

                    <div className="hidden md:block w-1/2"></div>
                    
                    <div className={`w-full md:w-1/2 pl-[80px] pr-4 md:px-0 py-4 relative z-10 group ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
                        className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-purple-500/30 hover:shadow-2xl hover:-translate-y-1 transition-all relative overflow-hidden"
                      >
                        <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-32 h-32 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none`} />

                        <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} mb-6 relative z-10`}>
                          <span className="inline-flex items-center justify-center bg-purple-500/10 text-purple-600 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 md:hidden self-start">
                            Week {mod.week}
                          </span>
                          <span className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-2 hidden md:block">Week {mod.week}</span>
                          <h4 className="text-2xl font-black text-slate-900 leading-tight mb-2">{mod.title}</h4>
                          <p className="text-slate-500 font-medium">{mod.subtitle}</p>
                        </div>
                        
                        <div className="grid gap-3 relative z-10">
                          {mod.topics.map((topic, tidx) => (
                            <div key={tidx} className={`flex items-start gap-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                              <div className="w-2 h-2 rounded-full bg-slate-300 mt-2 shrink-0 group-hover:bg-purple-500 transition-colors" />
                              <span className="text-slate-700 leading-relaxed text-sm md:text-base">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {course.projectExamples.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">Projects You Will Build</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {course.projectExamples.map((proj, idx) => (
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">{proj.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{proj.desc}</p>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-500/10 px-3 py-1 rounded-full">
                  {proj.level} Level
                </span>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <EducationContact />
    </div>
  );
}
