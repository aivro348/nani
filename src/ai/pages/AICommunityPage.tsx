import { useSEO } from '../../main/utils/useSEO';
import { motion } from 'motion/react';
import { Sparkles, MessageSquare, ArrowRight, Instagram, Youtube } from 'lucide-react';

export function AICommunityPage() {
  useSEO(
    'Community | Scaro AI Academy',
    'Join over 1,000+ AI-curious students building together. Connect via WhatsApp, Instagram, and YouTube.'
  );

  return (
    <div className="min-h-screen bg-[#0A0506] text-[#E2E8F0] selection:bg-[var(--primary-gold)] selection:text-black relative overflow-hidden py-24">
      {/* Background glow lines */}
      <div className="absolute top-0 left-1/4 w-[1000px] h-[500px] bg-[var(--primary-maroon)]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[600px] bg-[var(--primary-gold)]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-[var(--primary-maroon)]/10 text-[var(--primary-gold)] border border-[var(--primary-gold)]/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4 text-[var(--primary-gold)] animate-pulse" />
            <span>Community Hub</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6"
          >
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-maroon)] to-[var(--primary-gold)]">1,000+ AI Students</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-light text-lg leading-relaxed"
          >
            Get daily prompts, tool drops, freelancing leads, and connect with a community that builds together.
          </motion.p>
        </div>

        {/* Community Links Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col justify-between items-center text-center space-y-6">
            <div className="w-12 h-12 rounded-xl bg-[var(--primary-gold)]/10 border border-[var(--primary-gold)]/20 text-[var(--primary-gold)] flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-lg">WhatsApp Community</h4>
              <p className="text-xs text-gray-500 mt-2 font-light">Daily AI prompts + drops</p>
            </div>
            <a href="https://wa.me/919032517427" target="_blank" rel="noopener noreferrer" className="w-full">
              <button aria-label="Action button" className="w-full py-3 bg-[var(--primary-maroon)] text-white hover:bg-[var(--primary-maroon)]/85 transition-all text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 border border-[var(--primary-maroon)] shadow-[0_0_15px_rgba(139,0,0,0.3)]">
                Open 
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col justify-between items-center text-center space-y-6">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-lg">Instagram Profile</h4>
              <p className="text-xs text-gray-500 mt-2 font-light">Micro-tips, guides & updates</p>
            </div>
            <a href="#" className="w-full">
              <button aria-label="Action button" className="w-full py-3 bg-white/5 border border-white/10 hover:border-pink-500/30 text-white font-bold rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all">
                Open 
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col justify-between items-center text-center space-y-6">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center">
              <Youtube className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-lg">YouTube Channel</h4>
              <p className="text-xs text-gray-500 mt-2 font-light">Detailed walkthrough tutorials</p>
            </div>
            <a href="#" className="w-full">
              <button aria-label="Action button" className="w-full py-3 bg-white/5 border border-white/10 hover:border-red-500/30 text-white font-bold rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all">
                Open 
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>

        <div className="text-center pt-8 text-xs text-gray-500 uppercase tracking-widest font-bold">
          Scaro AI Academy · Official Company Page
        </div>

      </div>
    </div>
  );
}
