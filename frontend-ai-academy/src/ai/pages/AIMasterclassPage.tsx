import { useSEO } from '../../main/utils/useSEO';
import { motion } from 'motion/react';
import { Sparkles, Award, ArrowRight, ChevronRight } from 'lucide-react';

export function AIMasterclassPage() {
  useSEO(
    'Free AI Masterclass | Scaro AI Academy',
    'Register for the free 2-hour AI Masterclass instructed by Charan. Learn prompt engineering, visual generation, and AI freelancing.'
  );

  return (
    <div className="min-h-screen bg-[#0A0506] text-[#E2E8F0] selection:bg-[var(--primary-gold)] selection:text-black relative overflow-hidden py-24">
      {/* Background glow lines */}
      <div className="absolute top-0 left-1/4 w-[1000px] h-[500px] bg-[var(--primary-maroon)]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[600px] bg-[var(--primary-gold)]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-[var(--primary-maroon)]/10 text-[var(--primary-gold)] border border-[var(--primary-gold)]/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4 text-[var(--primary-gold)] animate-pulse" />
            <span>Free Live Session</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6"
          >
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-maroon)] to-[var(--primary-gold)]">Masterclass</span>
          </motion.h1>
        </div>

        {/* Masterclass card container */}
        <div className="bg-gradient-to-b from-[var(--primary-maroon)]/15 to-transparent border border-[var(--primary-maroon)]/20 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--primary-gold)]/5 rounded-full blur-[80px]" />
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1.5 bg-[var(--primary-gold)] text-black text-xs font-black uppercase tracking-wider rounded-lg">Live Session</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                The 2-hour AI masterclass that unlocks everything.
              </h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                Live, online, completely free. In Kannada + English. Walk away with prompts, tools, and a roadmap you'll actually use.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="bg-[#0A0506]/65 border border-white/5 p-4 rounded-xl">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Duration</h4>
                  <p className="text-lg font-black text-white">2 Hours Live</p>
                </div>
                <div className="bg-[#0A0506]/65 border border-white/5 p-4 rounded-xl">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Language</h4>
                  <p className="text-lg font-black text-white">Kannada + English</p>
                </div>
                <div className="bg-[#0A0506]/65 border border-white/5 p-4 rounded-xl">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Mode</h4>
                  <p className="text-lg font-black text-[var(--primary-gold)]">100% Online</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a href="https://wa.me/919032517427" target="_blank" rel="noopener noreferrer">
                  <button aria-label="Action button" className="px-8 py-4 bg-[var(--primary-maroon)] text-white font-bold rounded-xl hover:bg-[var(--primary-maroon)]/80 transition-colors uppercase tracking-wider text-sm flex items-center gap-2 border border-[var(--primary-maroon)] shadow-[0_0_15px_rgba(139,0,0,0.3)]">
                    Register Free
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-[var(--primary-gold)]" />
                What You'll Learn
              </h3>
              
              <ul className="space-y-4">
                {[
                  'AI Prompt Engineering', 'AI Image Generation', 'AI Video Creation',
                  'Resume Building', 'PPT Presentation Creation', 'No-Code Website Design',
                  'Instagram Growth & Content Creation', 'Personal Branding & Freelancing'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[var(--primary-gold)] font-bold shrink-0 mt-0.5">•</span>
                    <span className="text-gray-300 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Interactive Masterclass Journey Flowchart */}
          <div className="mt-16 pt-16 border-t border-white/10">
            <h3 className="text-2xl font-black text-center text-white mb-12">
              Interactive Masterclass Journey
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative">
              {[
                { title: 'Prompt Hacks', desc: 'Unlock LLM reasoning & system inputs.' },
                { title: 'Creative Art', desc: 'Visual creatives with Midjourney.' },
                { title: 'AI Video clips', desc: 'High-retention video templates.' },
                { title: 'Resume & PPTs', desc: 'ATS templates & instant presentation slides.' },
                { title: 'Digital Income', desc: 'Build freelancing structures using AI.' },
                { title: 'Custom Roadmap', desc: 'Personalized timeline & certificate steps.' }
              ].map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center group">
                  {/* Step Circle */}
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-maroon)]/10 border border-[var(--primary-gold)]/30 text-[var(--primary-gold)] flex items-center justify-center font-black text-lg group-hover:bg-[var(--primary-gold)] group-hover:text-black group-hover:border-[var(--primary-gold)] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] z-10">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-white text-base mt-4 group-hover:text-[var(--primary-gold)] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-2 font-light leading-relaxed">
                    {step.desc}
                  </p>
                  
                  {/* Connective Chevron (Desktop only) */}
                  {index < 5 && (
                    <div className="hidden md:block absolute top-4 -right-4 translate-x-1/2 text-[var(--primary-gold)]/30">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
