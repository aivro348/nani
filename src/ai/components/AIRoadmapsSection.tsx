import { memo, useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { aiRoadmaps } from '../data/aiData';
import {
  Sparkles, Building2, Clock, Users, Star, ArrowRight, ChevronDown, ChevronUp,
  BookOpen, Code, Rocket, Briefcase, Target, Award, TrendingUp
} from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Sparkles, Building2
};

const PHASE_ICONS: Record<string, any> = {
  Foundation: BookOpen, Core: Code, Advanced: Rocket, Capstone: Briefcase,
};

export const AIRoadmapsSection = memo(function AIRoadmapsSection({ previewOnly }: { previewOnly?: boolean }) {
  const navigate = useNavigate();
  const [expandedRoadmap, setExpandedRoadmap] = useState<string | null>(null);

  return (
    <div id="roadmaps" className="py-24 px-4 bg-slate-50 dark:bg-surface scroll-mt-24">
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] rounded-full text-sm font-bold tracking-wide uppercase mb-6 border border-[var(--primary-maroon)]/20"
          >
            <Target className="w-4 h-4" />
            Structured Learning Paths
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-heading tracking-tight mb-6"
          >
            AI Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-maroon)] to-[#ff3b00]">Roadmaps</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary leading-relaxed"
          >
            Follow our expertly crafted week-by-week learning paths to transform from beginner to industry-ready AI professional.
          </motion.p>
        </div>

        {/* 4-Phase Learning Journey */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="bg-white dark:bg-card border border-slate-200 dark:border-border rounded-3xl p-8 md:p-12 mb-16 shadow-xl shadow-slate-200/40 dark:shadow-none relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary-maroon)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          
          <div className="text-center mb-12 relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] rounded-full text-sm font-bold tracking-wide uppercase mb-4 border border-[var(--primary-maroon)]/20">
              <Award className="w-4 h-4" />
              Proven Framework
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-heading">
              The 4-Phase AI Learning Journey
            </h3>
            <p className="text-text-secondary mt-3 font-medium text-lg">Every AI roadmap follows this structured path from fundamentals to production.</p>
          </div>

          <div className="relative z-10">
            <div className="hidden md:block absolute top-[28px] left-[12%] right-[12%] h-1.5 bg-slate-100 rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-maroon)]/20 via-[var(--primary-maroon)]/50 to-[#ff3b00]/20 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { label: 'Foundation', weeks: 'Weeks 1 – 2', desc: 'AI fundamentals & concepts', icon: BookOpen },
                { label: 'Core', weeks: 'Weeks 3 – 5', desc: 'Deep dive into AI skills', icon: Code },
                { label: 'Advanced', weeks: 'Weeks 6 – 8', desc: 'Production-level tools', icon: Rocket },
                { label: 'Capstone', weeks: 'Weeks 9 – 12', desc: 'Real projects & certification', icon: Briefcase },
              ].map((ph, i) => (
                <div key={i} className="relative flex flex-row md:flex-col items-center md:text-center gap-6 md:gap-5 group">
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 bg-white dark:bg-surface rounded-full border-4 border-slate-100 dark:border-border flex items-center justify-center shadow-lg group-hover:border-[var(--primary-maroon)]/50 group-hover:scale-110 transition-all duration-300 z-10 relative">
                      <div className="w-12 h-12 bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] rounded-full flex items-center justify-center">
                        <ph.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-slate-800 dark:bg-[var(--primary-maroon)] text-white text-xs font-bold flex items-center justify-center rounded-full border-2 border-white shadow-md group-hover:bg-[var(--primary-maroon)] transition-colors z-20">
                      {i + 1}
                    </div>
                    {i < 3 && (
                      <div className="absolute top-[32px] left-1/2 bottom-[-2rem] w-1.5 bg-slate-100 -translate-x-1/2 -z-10 md:hidden" />
                    )}
                  </div>
                  <div className="flex-1 md:mt-2">
                    <div className="inline-block text-[10px] font-black uppercase tracking-widest text-[var(--primary-maroon)] mb-2 bg-[var(--primary-maroon)]/10 px-2.5 py-1 rounded-md">
                      {ph.weeks}
                    </div>
                    <h4 className="text-xl font-black text-heading mb-1.5 group-hover:text-[var(--primary-maroon)] transition-colors">
                      {ph.label}
                    </h4>
                    <p className="text-sm text-text-secondary font-medium leading-relaxed max-w-[200px] mx-auto">
                      {ph.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Roadmap Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {(previewOnly ? aiRoadmaps.slice(0, 2) : aiRoadmaps).map((roadmap, idx) => {
            const IconComp = ICON_MAP[roadmap.icon] || Sparkles;
            const isExpanded = expandedRoadmap === roadmap.id;
            
            return (
              <motion.div
                key={roadmap.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white dark:bg-card rounded-3xl border border-slate-200 dark:border-border shadow-xl shadow-slate-200/40 dark:shadow-none overflow-hidden group"
              >
                {/* Header */}
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] rounded-2xl flex items-center justify-center shadow-lg border border-[var(--primary-maroon)]/20">
                      <IconComp className="w-8 h-8" />
                    </div>
                    {roadmap.hotBadge && (
                      <span className="bg-[#ff3b00] text-white text-xs font-black px-3 py-1.5 rounded-full shadow-md">
                        {roadmap.hotBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-black text-heading mb-2 group-hover:text-[var(--primary-maroon)] transition-colors">
                    {roadmap.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">{roadmap.tagline}</p>

                  <div className="flex flex-wrap gap-3 mb-6 text-sm">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 dark:bg-surface rounded-lg font-semibold text-text-secondary">
                      <Clock className="w-3.5 h-3.5" /> {roadmap.duration}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 dark:bg-surface rounded-lg font-semibold text-text-secondary">
                      <Users className="w-3.5 h-3.5" /> {roadmap.students}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 dark:bg-surface rounded-lg font-semibold text-text-secondary">
                      <Star className="w-3.5 h-3.5 text-yellow-500" /> {roadmap.rating}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg font-bold text-emerald-600">
                      <TrendingUp className="w-3.5 h-3.5" /> {roadmap.jobSalary}
                    </span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {roadmap.skillsGained.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-[var(--primary-maroon)]/5 text-[var(--primary-maroon)] text-xs font-bold rounded-lg border border-[var(--primary-maroon)]/10">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Expand Week Preview */}
                  <button
                    onClick={() => setExpandedRoadmap(isExpanded ? null : roadmap.id)}
                    className="flex items-center gap-2 text-[var(--primary-maroon)] font-bold text-sm hover:text-[var(--dark-maroon)] transition-colors mb-6"
                  >
                    {isExpanded ? 'Hide' : 'Preview'} Weekly Breakdown
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-3 mb-8"
                    >
                      {roadmap.weeks.map((week) => {
                        const PhaseIcon = PHASE_ICONS[week.phase] || BookOpen;
                        return (
                          <div key={week.week} className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-surface rounded-xl border border-slate-100 dark:border-border">
                            <div className="w-10 h-10 bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] rounded-lg flex items-center justify-center shrink-0 text-sm font-black">
                              W{week.week}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h5 className="font-bold text-heading text-sm">{week.title}</h5>
                                <span className="text-[10px] font-bold uppercase text-[var(--primary-maroon)] bg-[var(--primary-maroon)]/10 px-2 py-0.5 rounded hidden sm:inline">{week.phase}</span>
                              </div>
                              <p className="text-xs text-text-muted">{week.subtitle}</p>
                            </div>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}

                  {/* CTA */}
                  <button
                    onClick={() => navigate(`/ai/roadmap/${roadmap.id}`)}
                    className="w-full bg-black hover:bg-gray-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                  >
                    View Full Roadmap
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {previewOnly && (
          <div className="flex justify-center pt-16">
            <button 
              onClick={() => navigate('/all-ai-roadmaps')}
              className="bg-black hover:bg-gray-800 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              See All AI Roadmaps
            </button>
          </div>
        )}

      </div>
    </div>
  );
});
