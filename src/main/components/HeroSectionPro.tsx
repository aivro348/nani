import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProProps {
  setActiveSection: (section: string) => void;
}

export function HeroSectionPro({ setActiveSection }: HeroSectionProProps) {
  const navigate = useNavigate();

  const scrollToDivisions = () => {
    const el = document.getElementById('our-divisions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-main" className="relative w-full min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img fetchPriority="high" decoding="async" src="/scaro_sectors_wide_banner.webp" 
          alt="Scaro Technologies Global Network" 
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center h-full pt-20">
        <div
          className="max-w-3xl animate-fade-in-up"
        >
          <div
            className="inline-flex items-center gap-3 px-4 py-2 bg-[var(--primary-maroon)]/20 text-[var(--primary-maroon)] border border-[var(--primary-maroon)]/30 rounded-full text-xs sm:text-sm font-black tracking-widest uppercase mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(139,0,0,0.3)] animate-fade-in"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--primary-gold)] animate-pulse" />
            Global Innovation Ecosystem
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.1] mb-8 drop-shadow-2xl">
            Empowering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--light-gold)] via-[var(--primary-gold)] to-[var(--primary-maroon)]">The Future.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-medium mb-12 max-w-2xl leading-relaxed">
            Scaro Technologies delivers enterprise-grade IT solutions, pioneering AI innovation, and transforms careers through elite skill-based education. 
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button aria-label="Explore Divisions"
              onClick={scrollToDivisions}
              className="group relative overflow-hidden bg-[var(--primary-maroon)] text-white px-8 py-4 rounded-xl font-bold tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(139,0,0,0.4)] hover:shadow-[0_0_50px_rgba(139,0,0,0.6)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 flex items-center gap-2">
                Explore Divisions <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}