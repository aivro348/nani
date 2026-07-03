import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function BusinessHero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden border-b border-border bg-page-bg">
      {/* Stunning Background Effects */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03] bg-[bottom_1px_center]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary-maroon)]/20 dark:bg-[var(--primary-gold)]/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 dark:bg-amber-500/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] border border-[var(--primary-maroon)]/20 mb-8 font-bold uppercase tracking-widest text-xs shadow-sm backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--primary-maroon)] dark:bg-[var(--primary-gold)] animate-ping" />
            Enterprise AI Solutions
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-heading tracking-tighter mb-8 leading-[1.05]"
          >
            Build Smarter, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-maroon)] via-red-600 to-[var(--primary-gold)] drop-shadow-sm">
              Scale Faster.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary mb-12 leading-relaxed max-w-2xl font-medium"
          >
            We engineer AI-powered enterprise platforms that transform how your business operates at scale. Ready for the next generation of software?
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 mb-20"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-[var(--primary-maroon)] to-red-700 text-white font-bold rounded-2xl hover:shadow-[0_0_40px_-10px_var(--primary-maroon)] transition-all flex items-center gap-3 text-lg group">
              Start a Project 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-surface text-heading font-bold rounded-2xl border border-border hover:bg-page-bg transition-colors shadow-sm text-lg flex items-center gap-2 group">
              View Our Work
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-border/50"
          >
            {[
              { value: '35+', label: 'Projects Shipped' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '3yr', label: 'Experience' },
              { value: '10+', label: 'Enterprise AI Experts' }
            ].map((stat, idx) => (
              <div key={idx} className="group">
                <div className="text-4xl font-black text-heading mb-2 group-hover:text-[var(--primary-maroon)] transition-colors">{stat.value}</div>
                <div className="text-sm font-bold text-text-muted uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
