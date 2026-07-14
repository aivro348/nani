import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';

export function BusinessHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0506]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/business-hero.png" 
          alt="Modern corporate enterprise tech headquarters" 
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0506] via-[#0A0506]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0506] via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0506] via-transparent to-transparent opacity-50" />
      </div>

      {/* Animated Orbs */}
      <motion.div 
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[var(--primary-maroon)] rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -20, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[var(--primary-gold)] rounded-full blur-[100px] pointer-events-none" 
      />

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(var(--primary-gold) 1px, transparent 1px), linear-gradient(90deg, var(--primary-gold) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[var(--primary-maroon)]/20 border border-[var(--primary-maroon)]/30 mb-10 backdrop-blur-md"
            >
              <Zap className="w-4 h-4 text-[var(--primary-gold)]" />
              <span className="text-sm font-bold text-[var(--primary-gold)] uppercase tracking-[0.15em]">Enterprise Solutions</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[1.05]"
            >
              AI-Powered Websites <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-gold)] via-[var(--accent-gold)] to-[var(--light-gold)]">
                That Grow Your Business.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300/90 mb-12 leading-relaxed max-w-xl font-light"
            >
              Premium website design, e-commerce development & AI automation for ambitious brands in Bangalore, Chennai and across India. Trusted by forward-thinking companies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center gap-5"
            >
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-[var(--primary-gold)] to-[var(--accent-gold)] text-[#0A0506] font-black rounded-2xl hover:shadow-[0_0_50px_-12px_var(--primary-gold)] transition-all flex items-center gap-3 text-lg group uppercase tracking-wider"
              >
                Start a Project 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/15 hover:bg-white/10 hover:border-[var(--primary-gold)]/40 transition-all backdrop-blur-sm text-lg flex items-center gap-2 group"
              >
                Our Capabilities
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[var(--primary-gold)]" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right - Floating Stats Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glowing border card */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-[var(--primary-gold)]/40 via-[var(--primary-maroon)]/20 to-transparent rounded-[2.5rem] blur-sm" />
              
              <div className="relative bg-[#12080a]/90 backdrop-blur-xl rounded-[2.5rem] border border-[var(--primary-gold)]/10 p-10 overflow-hidden">
                {/* Inner glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--primary-gold)]/10 rounded-full blur-[80px]" />
                
                <div className="grid grid-cols-2 gap-8 relative z-10">
                  {[
                    { value: '50+', label: 'Websites Delivered', icon: '🚀' },
                    { value: '40+', label: 'Happy Clients', icon: '⭐' },
                    { value: '3+', label: 'Years Experience', icon: '🛡️' },
                    { value: '10+', label: 'Industries Served', icon: '👨‍💻' }
                  ].map((stat, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                      className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[var(--primary-gold)]/30 hover:bg-[var(--primary-gold)]/5 transition-all duration-500"
                    >
                      <div className="text-2xl mb-3">{stat.icon}</div>
                      <div className="text-4xl font-black text-white mb-2 group-hover:text-[var(--primary-gold)] transition-colors">{stat.value}</div>
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
