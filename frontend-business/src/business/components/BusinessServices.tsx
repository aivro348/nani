import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Smartphone, Server, Brain, Activity, ArrowRight, ShoppingCart, Zap, MapPin } from 'lucide-react';

export function BusinessServices() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: 'Website Design & Development',
      description: 'Static, WordPress, PHP, React, Next.js — full website design and development services.',
      tags: ['9 Services →'],
      icon: Globe,
      image: '/generated/web_design.webp',
      number: '01'
    },
    {
      title: 'E-Commerce Development',
      description: 'Shopify, WooCommerce and custom online stores built to convert browsers into buyers.',
      tags: ['3 Services →'],
      icon: ShoppingCart,
      image: '/generated/ecommerce_dev.webp',
      number: '02'
    },
    {
      title: 'Mobile App Development',
      description: 'Native Android, Flutter and FlutterFlow apps that ship to Play Store & App Store.',
      tags: ['4 Services →'],
      icon: Smartphone,
      image: '/generated/mobile_app.webp',
      number: '03'
    },
    {
      title: 'AI Solutions & Agentic Automation',
      description: 'Chatbots, voice bots, WhatsApp automation, custom AI agents and workflow automation.',
      tags: ['9 Services →'],
      icon: Brain,
      image: '/generated/ai_automation.webp',
      number: '04'
    },
    {
      title: 'AI Builder Services',
      description: 'Production-grade builds on Lovable, Cursor, Bolt.new, Replit and Emergent.',
      tags: ['5 Services →'],
      icon: Zap,
      image: '/generated/ai_builder.webp',
      number: '05'
    },
    {
      title: 'Local Web Design Services',
      description: 'On-site & remote support across Bangalore (Whitefield, Mahadevapura, KR Puram) and Chennai.',
      tags: ['Bangalore', 'Chennai'],
      icon: MapPin,
      image: '/generated/local_web.webp',
      number: '06'
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#0A0506] overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[var(--primary-maroon)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-gradient-to-r from-[var(--primary-gold)] to-transparent" />
            <span className="text-sm font-bold text-[var(--primary-gold)] uppercase tracking-[0.2em]">Our Services</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
          >
            Six Service Hubs,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-gold)] to-[var(--accent-gold)]">One Trusted Partner</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed"
          >
            End-to-end platforms engineered for scale, powered by cutting-edge AI and battle-tested architecture.
          </motion.p>
        </div>

        {/* Interactive Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Service List */}
          <div className="flex flex-col gap-1">
            {services.map((svc, idx) => {
              const isActive = activeService === idx;
              return (
                <motion.button
                  key={idx}
                  onClick={() => setActiveService(idx)}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`group relative text-left p-6 md:p-8 rounded-2xl transition-all duration-500 border ${
                    isActive 
                      ? 'bg-gradient-to-r from-[var(--primary-maroon)]/20 to-transparent border-[var(--primary-gold)]/30' 
                      : 'bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/5'
                  }`}
                >
                  {/* Gold accent line */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-[var(--primary-gold)] to-[var(--primary-maroon)] rounded-full"
                      transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    />
                  )}

                  <div className="relative z-10 flex items-start gap-6">
                    <span className={`text-sm font-black tracking-wider transition-colors duration-500 pt-1 ${
                      isActive ? 'text-[var(--primary-gold)]' : 'text-gray-700'
                    }`}>
                      {svc.number}
                    </span>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-500 ${
                          isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                        }`}>
                          {svc.title}
                        </h3>
                        <ArrowRight className={`w-5 h-5 transition-all duration-500 ${
                          isActive ? 'text-[var(--primary-gold)] opacity-100 translate-x-0' : 'text-gray-700 opacity-0 -translate-x-4'
                        }`} />
                      </div>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="text-gray-400 leading-relaxed mt-4 mb-5">
                              {svc.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {svc.tags.map(tag => (
                                <span key={tag} className="px-4 py-2 bg-[var(--primary-maroon)]/20 text-xs font-bold text-[var(--primary-gold)]/80 rounded-xl border border-[var(--primary-maroon)]/30 uppercase tracking-widest">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Dynamic Visual */}
          <div className="relative hidden lg:block sticky top-32">
            {/* Glowing border */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-[var(--primary-gold)]/30 via-[var(--primary-maroon)]/20 to-transparent rounded-[3rem] blur-sm" />
            
            <div className="relative h-[650px] rounded-[3rem] overflow-hidden bg-[#12080a] border border-[var(--primary-gold)]/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService}
                  initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
              </AnimatePresence>
              
              {/* Overlay Gradient - Brand themed */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0506] via-[#0A0506]/30 to-transparent" />
              <div className="absolute inset-0 bg-[var(--primary-maroon)]/10 mix-blend-overlay" />
              
              {/* Dynamic Floating Content */}
              <div className="absolute bottom-0 left-0 w-full p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${activeService}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <div className="w-16 h-1 bg-gradient-to-r from-[var(--primary-gold)] to-[var(--primary-maroon)] mb-6 rounded-full shadow-[0_0_15px_var(--primary-gold)]" />
                    <span className="text-[var(--primary-gold)] font-black text-sm uppercase tracking-[0.2em] mb-3 block">{services[activeService].number}</span>
                    <h4 className="text-4xl font-black text-white mb-4 drop-shadow-lg tracking-tight">
                      {services[activeService].title}
                    </h4>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
