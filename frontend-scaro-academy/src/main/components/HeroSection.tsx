import { motion } from 'motion/react';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

export function HeroSection({ setActiveSection }: HeroSectionProps) {
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with optimized clearer overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          fetchPriority="high" 
          decoding="async" 
          src="/hero-1.webp" 
          alt="Students collaborating" 
          className="w-full h-full object-cover object-center" 
        />
        {/* Adjusted gradients for a clearer image while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0506]/95 via-[#0A0506]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0506]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="max-w-xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Made text slightly smaller (text-4xl lg:text-5xl) instead of 6xl */}
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] mb-6 drop-shadow-xl">
              Bridging Education <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                & Industry
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-200 font-medium mb-10 leading-relaxed max-w-lg drop-shadow-md">
              Scaro Technologie empowers students with industry-relevant skills through MOOCs, certified programs, internships, and expert-led professional training.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button aria-label="Action button"
                onClick={() => scrollToSection('branches')}
                className="bg-[var(--primary-gold)] hover:bg-yellow-500 text-[#0A0506] px-6 py-3.5 rounded-full font-bold transition-all shadow-xl shadow-black/20 flex items-center gap-2 group text-sm uppercase tracking-wider"
              >
                Explore Programs
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-[#0A0506]" />
                </span>
              </button>

              <button aria-label="Action button"
                onClick={() => scrollToSection('roadmap')}
                className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3.5 rounded-full font-bold transition-all shadow-lg flex items-center gap-2 group text-sm uppercase tracking-wider backdrop-blur-sm"
              >
                View Recent Projects
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowDown className="w-4 h-4 text-[#0A0506]" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slanted Curved Divider for a stunning transition to the next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none drop-shadow-[0_-10px_15px_rgba(0,0,0,0.1)]">
        <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120H0V71.5C0 71.5 350.5 140 1200 0V120Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}