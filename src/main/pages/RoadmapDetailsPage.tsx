import { useParams, Navigate, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Clock, Briefcase, CheckCircle2, ArrowLeft, Users, Calendar } from 'lucide-react';
import { courses, COURSE_VISUALS } from '../components/RoadmapSection';
import { useSEO } from '../../main/utils/useSEO';
import { EducationContact } from '../../education/components/EducationContact';

export function RoadmapDetailsPage() {
  const { roadmapId } = useParams<{ roadmapId: string }>();
  const navigate = useNavigate();

  const course = courses.find(c => c.id === roadmapId);
  const visual = course ? COURSE_VISUALS[course.id] : null;

  useSEO(
    course ? `${course.title} Roadmap | Scaro Academy` : 'Roadmap Not Found',
    course ? course.tagline : ''
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [roadmapId]);

  if (!course || !visual) {
    return <Navigate to="/roadmap" replace />;
  }

  return (
    <div className="min-h-screen bg-[#fafcfc] pt-20">
      
      {/* 1. Hero Section (Dark gradient with image) */}
      <section className="relative w-full bg-slate-900 py-24 overflow-hidden">
        {/* Subtle background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800/80 to-transparent z-10" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${visual.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <button 
            onClick={() => navigate('/roadmap')}
            className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm font-semibold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Roadmaps
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--primary-maroon)] mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
                {course.tagline}
              </p>
            </motion.div>

            {/* Right: Hero Image Card matching screenshot */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative mx-auto w-full max-w-lg lg:ml-auto">
              <div className="bg-white rounded-2xl p-2 shadow-2xl">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                  <img src={visual.imageUrl} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40" />
                  
                  {/* Pill Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[var(--primary-maroon)] text-white px-6 py-2.5 rounded-full text-lg font-bold shadow-xl tracking-wide uppercase">
                      {course.shortTitle} ROADMAP
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
          <StatCard icon={Calendar} title="Duration" desc={course.duration} delay={0.1} />
          <StatCard icon={Clock} title="Commitment" desc={course.hoursPerWeek} delay={0.2} />
          <StatCard icon={Users} title="Enrolled Students" desc={course.students} delay={0.3} />
          <StatCard icon={Briefcase} title="Avg. Salary" desc={course.jobSalary} delay={0.4} />
        </div>
      </section>

      {/* 3. About the Course */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-[var(--primary-maroon)] rounded-full"></span>
                Learning Outcomes
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                By the end of this intensive roadmap, you will have mastered the critical skills needed by top industry recruiters and built a portfolio of professional projects.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {course.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>

            <div className="pt-8">
               <h3 className="text-xl font-bold text-slate-900 mb-4">Top Recruiters</h3>
               <div className="flex flex-wrap gap-2">
                 {course.topRecruiters.map((recruiter, idx) => (
                   <span key={idx} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-semibold text-sm border border-slate-200">
                     {recruiter}
                   </span>
                 ))}
               </div>
            </div>
          </div>

          {/* Side Panel for Sticky CTA */}
          <div className="lg:col-span-5 hidden lg:block">
             <div className="sticky top-32 bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Start this Roadmap</h3>
                <p className="text-slate-500 mb-6">Join {course.students} other students mastering {course.title}.</p>
                <button className="w-full bg-[var(--primary-maroon)] text-white font-bold text-lg py-4 rounded-xl hover:opacity-90 hover:shadow-lg transition-all active:scale-95">
                  Begin Learning
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Snake Timeline Curriculum */}
      <section className="bg-slate-50 py-24 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Detailed Roadmap Curriculum</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Follow this path week by week to master the skills and complete your transformation.</p>
          </div>
          
          <div className="relative">
            {/* The Central 'Snake' Line (Desktop) / Left Line (Mobile) */}
            <div className="absolute left-[44px] md:left-1/2 top-8 bottom-8 w-1.5 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 md:-translate-x-1/2 rounded-full z-0 block"></div>

            <div className="space-y-12 md:space-y-0">
              {course.weeks.map((mod, idx) => {
                const isEven = idx % 2 === 0; // 0=left, 1=right
                
                return (
                  <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} w-full`}>
                    
                    {/* Center Node (The "Snake" Joints) */}
                    <div className="absolute left-[24px] md:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-[var(--primary-maroon)] shadow-xl shadow-[var(--primary-maroon)]/20 -translate-x-1/2 z-20 flex items-center justify-center text-[var(--primary-maroon)] font-black text-sm transition-transform hover:scale-110">
                      {mod.week}
                    </div>

                    {/* Empty Space for the alternating side on Desktop */}
                    <div className="hidden md:block w-1/2"></div>
                    
                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 pl-[80px] pr-4 md:px-0 py-4 relative z-10 group ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
                        className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-[var(--primary-maroon)]/30 hover:shadow-2xl hover:-translate-y-1 transition-all relative overflow-hidden"
                      >
                        {/* Subtle background decoration */}
                        <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-32 h-32 bg-[var(--primary-maroon)]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none`} />

                        <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} mb-6 relative z-10`}>
                          <span className="inline-flex items-center justify-center bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 md:hidden self-start">
                            Week {mod.week}
                          </span>
                          <span className="text-sm font-bold text-[var(--primary-maroon)] uppercase tracking-wider mb-2 hidden md:block">Week {mod.week}</span>
                          <h4 className="text-2xl font-black text-slate-900 leading-tight mb-2">{mod.title}</h4>
                          <p className="text-slate-500 font-medium">{mod.subtitle}</p>
                        </div>
                        
                        <div className={`grid gap-3 relative z-10`}>
                          {mod.topics.map((topic, tidx) => (
                            <div key={tidx} className={`flex items-start gap-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                              <div className={`w-2 h-2 rounded-full bg-slate-300 mt-2 shrink-0 group-hover:bg-[var(--primary-maroon)] transition-colors`} />
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

      {/* 5. Projects Section */}
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
                <div className="w-12 h-12 bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] rounded-xl flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{proj.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{proj.desc}</p>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary-maroon)] bg-[var(--primary-maroon)]/10 px-3 py-1 rounded-full">
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

function StatCard({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
    >
      <div className="w-14 h-14 rounded-full bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 font-medium">{desc}</p>
    </motion.div>
  );
}
