import { useSEO } from '../../main/utils/useSEO';
import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export function AIAboutPage() {
  useSEO(
    'Founder & Team | Scaro AI Academy',
    'Learn more about Charan, founder and Lead AI Educator at Scaro AI Academy, training students and professionals.'
  );

  return (
    <div className="min-h-screen bg-[#0A0506] text-[#E2E8F0] selection:bg-[var(--primary-gold)] selection:text-black relative overflow-hidden py-24">
      {/* Background glow lines */}
      <div className="absolute top-0 left-1/4 w-[1000px] h-[500px] bg-[var(--primary-maroon)]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[600px] bg-[var(--primary-gold)]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-maroon)]/10 text-[var(--primary-gold)] border border-[var(--primary-gold)]/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4 text-[var(--primary-gold)] animate-pulse" />
            <span>Founder & AI Educator</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6"
          >
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-maroon)] to-[var(--primary-gold)]">Educator</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-light text-lg leading-relaxed"
          >
            Empowering students, professionals, and freelancers to future-proof their careers in the age of generative intelligence.
          </motion.p>
        </div>

        {/* Profile Card & Bio Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0506] via-transparent to-transparent z-10" />
              <img loading="lazy" decoding="async" src="/unsplash/img_427867cc48.webp" 
                alt="Charan - Founder & Lead AI Educator" 
                className="w-full h-full object-cover filter grayscale group-hover:filter-none transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-xs font-bold text-[var(--primary-gold)] uppercase tracking-widest">Lead Instructor</span>
                <h4 className="text-2xl font-black text-white mt-1">Charan</h4>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Bridging the Gap Between Academics and AI Production
            </h2>
            <p className="text-lg text-gray-300 font-light leading-relaxed">
              Charan is an MBA student, AI creator, prompt engineer, and digital educator passionate about helping students leverage Artificial Intelligence to build practical skills, create opportunities, and prepare for future careers.
            </p>
            <p className="text-gray-400 font-light leading-relaxed">
              Through Scaro AI Academy, Charan conducts live sessions and cohorts focused on prompt engineering, automated asset pipelines, and no-code business prototypes in a localized, easily digestible bilingual format (Kannada + English).
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              <div className="bg-white/5 border border-white/5 rounded-2xl p-5">
                <h4 className="text-xs font-bold text-[var(--primary-gold)] uppercase tracking-wider">MBA</h4>
                <p className="text-sm text-gray-300 mt-2">Student & Strategist</p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-2xl p-5">
                <h4 className="text-xs font-bold text-[var(--primary-gold)] uppercase tracking-wider">AI</h4>
                <p className="text-sm text-gray-300 mt-2">Creator & Educator</p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-2xl p-5">
                <h4 className="text-xs font-bold text-[var(--primary-gold)] uppercase tracking-wider">Community</h4>
                <p className="text-sm text-gray-300 mt-2">Leader & Mentor</p>
              </div>
            </div>
          </div>
        </div>

        {/* Educator Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { value: '1,000+', label: 'Students Reached' },
            { value: '20+', label: 'AI Tools Covered' },
            { value: '11-Day', label: 'Intensive Program' },
            { value: '100%', label: 'Practical Curriculum' }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-[var(--primary-gold)]">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 1:1 Mentorship Strategist Call */}
        <div className="bg-gradient-to-r from-[var(--primary-maroon)]/10 to-transparent border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold text-[var(--primary-gold)] uppercase tracking-widest">Personal Mentorship</span>
            <h3 className="text-2xl font-black text-white">1:1 AI Strategy Call</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Get private, direct guidance from Charan. Define your custom learning roadmap, review your resume/LinkedIn, and learn how to launch your freelancing career using AI.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400 pt-2">
              <span className="px-3 py-1 bg-white/5 rounded-lg">⏱ 30 Minutes</span>
              <span className="px-3 py-1 bg-white/5 rounded-lg">🗺 Personalized Roadmap</span>
              <span className="px-3 py-1 bg-white/5 rounded-lg">❓ Q&A Session</span>
            </div>
          </div>
          <div className="shrink-0 text-left md:text-right space-y-4">
            <div>
              <div className="text-3xl font-black text-[var(--primary-gold)]">₹99</div>
              <div className="text-xs text-gray-500 mt-0.5">One-time payment</div>
            </div>
            <a href="https://wa.me/919032517427" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3.5 bg-[var(--primary-maroon)] text-white hover:bg-[var(--primary-maroon)]/80 transition-all text-xs uppercase tracking-wider flex items-center gap-2 font-bold rounded-xl border border-[var(--primary-maroon)] shadow-[0_0_15px_rgba(139,0,0,0.3)]">
                Book Call Now
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
