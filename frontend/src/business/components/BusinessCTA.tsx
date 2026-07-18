import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function BusinessCTA() {
  return (
    <section className="py-32 px-4 bg-[#0A0506] text-white text-center relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[url('/unsplash/img_c46041f223.webp')] bg-cover bg-center opacity-20 mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0506] via-[#0A0506]/80 to-[#0A0506]" />
      
      {/* Brand-colored orbs */}
      <motion.div 
        animate={{ y: [0, -40, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary-maroon)] rounded-full blur-[150px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[var(--primary-gold)] rounded-full blur-[100px] pointer-events-none" 
      />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary-maroon)]/30 border border-[var(--primary-gold)]/20 mb-8 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-[var(--primary-gold)]" />
          <span className="text-sm font-bold text-[var(--primary-gold)] uppercase tracking-[0.15em]">Available for Enterprise Projects</span>
        </motion.div>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[1.05] tracking-tighter"
        >
          Ready To Grow<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-gold)] via-[var(--accent-gold)] to-[var(--light-gold)]">
            Your Business Online?
          </span>
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300/80 mb-14 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Get a free website & AI consultation today. Call, WhatsApp or request a free quote — we respond within 24 hours.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 bg-gradient-to-r from-[var(--primary-gold)] to-[var(--accent-gold)] text-[#0A0506] font-black rounded-2xl hover:shadow-[0_0_60px_-12px_var(--primary-gold)] transition-all text-lg uppercase tracking-wider flex items-center gap-3 group"
          >
            Request Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#20b958] transition-all text-lg tracking-wider flex items-center gap-2 group shadow-lg shadow-[#25D366]/20"
          >
            💬 WhatsApp Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
