import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Globe, ShoppingCart, Smartphone, Brain, Zap, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const services = [
  {
    title: 'Website Design & Development',
    description: 'Static, WordPress, PHP, React, Next.js — full website design and development services.',
    tags: ['9 Services →'],
    icon: Globe,
    image: '/generated/web_design.png',
    number: '01'
  },
  {
    title: 'E-Commerce Development',
    description: 'Shopify, WooCommerce and custom online stores built to convert browsers into buyers.',
    tags: ['3 Services →'],
    icon: ShoppingCart,
    image: '/generated/ecommerce_dev.png',
    number: '02'
  },
  {
    title: 'Mobile App Development',
    description: 'Native Android, Flutter and FlutterFlow apps that ship to Play Store & App Store.',
    tags: ['4 Services →'],
    icon: Smartphone,
    image: '/generated/mobile_app.png',
    number: '03'
  },
  {
    title: 'AI Solutions & Agentic Automation',
    description: 'Chatbots, voice bots, WhatsApp automation, custom AI agents and workflow automation.',
    tags: ['9 Services →'],
    icon: Brain,
    image: '/generated/ai_automation.png',
    number: '04'
  },
  {
    title: 'AI Builder Services',
    description: 'Production-grade builds on Lovable, Cursor, Bolt.new, Replit and Emergent.',
    tags: ['5 Services →'],
    icon: Zap,
    image: '/generated/ai_builder.png',
    number: '05'
  },
  {
    title: 'Local Web Design Services',
    description: 'On-site & remote support across Bangalore (Whitefield, Mahadevapura, KR Puram) and Chennai.',
    tags: ['Bangalore', 'Chennai'],
    icon: MapPin,
    image: '/generated/local_web.png',
    number: '06'
  }
];

export function BusinessServicesSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="relative w-full h-[100vh] bg-[#0A0506] overflow-hidden flex items-center justify-center pt-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${services[currentSlide].image})` }}
          />
          {/* Gradients for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0506]/90 via-[#0A0506]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0506]/80 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[2px] bg-gradient-to-r from-[var(--primary-gold)] to-transparent" />
                <span className="text-xs font-bold text-[var(--primary-gold)] uppercase tracking-[0.2em]">Service {services[currentSlide].number} of 06</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight leading-[1.1]">
                {services[currentSlide].title}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8 max-w-2xl">
                {services[currentSlide].description}
              </p>

              <div className="flex flex-wrap items-center gap-5 mb-10">
                <Link to="/business-services">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-[var(--primary-gold)] to-[var(--accent-gold)] text-[#0A0506] font-black rounded-xl hover:shadow-[0_0_30px_-5px_var(--primary-gold)] transition-all text-sm uppercase tracking-wider flex items-center gap-3 group"
                  >
                    View Services
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <div className="flex gap-3">
                  {services[currentSlide].tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-bold text-gray-300 backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Manual Controls */}
      <div className="absolute bottom-12 right-12 z-20 flex gap-4 hidden md:flex">
        <button 
          onClick={prevSlide}
          className="w-14 h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:border-[var(--primary-gold)] hover:text-[var(--primary-gold)] transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-14 h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:border-[var(--primary-gold)] hover:text-[var(--primary-gold)] transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-48 z-20 flex gap-3">
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-500 ${
              currentSlide === idx 
                ? 'w-12 bg-gradient-to-r from-[var(--primary-gold)] to-[var(--accent-gold)]' 
                : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
