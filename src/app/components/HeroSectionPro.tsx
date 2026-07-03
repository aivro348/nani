import { GraduationCap, ArrowRight, Play, CheckCircle2, TrendingUp, Briefcase, GraduationCap as CapIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

interface HeroSectionProProps {
  setActiveSection: (section: string) => void;
}

const slideImages = [
  "/hero-1.png",
  "/hero-2.png",
  "/hero-3.png"
];

export function HeroSectionPro({ setActiveSection }: HeroSectionProProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const openStarterModal = () => {
    window.dispatchEvent(new CustomEvent('open-get-started'));
  };

  const scrollToSection = (sectionId: string) => {
    navigate(`/${sectionId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="hero-main" className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden theme-transition pt-16 lg:pt-0">
      
      {/* Split Background Effect requested by user */}
      <div className="absolute inset-0 pointer-events-none flex">
        <div className="w-full lg:w-1/2 bg-surface dark:bg-surface h-full border-r border-border" />
        <div className="hidden lg:block lg:w-1/2 bg-page-bg dark:bg-page-bg h-full" />
      </div>

      {/* Main Grid Wrapper */}
      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 xl:gap-16 max-w-[1400px] mx-auto">
          
          {/* Left Content Half */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 lg:col-span-1 pl-4 pr-4 sm:pl-8 lg:pl-16 xl:pl-24"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border shadow-sm w-fit mt-4 lg:mt-0">
              <span className="flex h-2 w-2 rounded-full bg-[var(--primary-gold)] animate-pulse" />
              <span className="text-sm font-medium text-text-primary">
                Trusted by 1000+ Engineering Students
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-heading leading-[1.1]">
              <span className="block">Learn Smarter.</span>
              <span className="block">Build Faster.</span>
              <span className="block bg-gradient-to-r from-[var(--primary-maroon)] to-[var(--primary-gold)] bg-clip-text text-transparent">
                Get Hired.
              </span>
            </h1>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-heading">
                AI-Driven Education for the Next-Gen Engineer
              </h3>
              <p className="text-xl text-text-secondary leading-relaxed">
                Personalized learning paths, real-time skill tracking, and live industry projects — all in one powerful platform built for modern engineering careers.
              </p>
            </div>

            <div className="flex flex-col gap-3 py-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[var(--primary-maroon)] text-white">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="font-semibold text-text-primary">AI tracks your progress</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[var(--primary-gold)] text-white">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="font-semibold text-text-primary">Projects build your portfolio</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[var(--accent-gold)] text-white">
                  <CapIcon className="w-5 h-5" />
                </div>
                <span className="font-semibold text-text-primary">Mentors guide your placement</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 border-y border-border py-8 my-4">
              <div>
                <p className="text-4xl font-black text-[var(--primary-maroon)]">1000+</p>
                <p className="text-base font-bold text-text-muted mt-1">Active Learners</p>
              </div>
              <div>
                <p className="text-4xl font-black text-[var(--primary-gold)]">85%</p>
                <p className="text-base font-bold text-text-muted mt-1">Hiring Success</p>
              </div>
              <div>
                <p className="text-4xl font-black text-[var(--accent-gold)]">₹6.5 LPA</p>
                <p className="text-base font-bold text-text-muted mt-1">Avg CTC</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button 
                onClick={() => scrollToSection("courses")}
                className="group flex-1 inline-flex items-center justify-center gap-3 bg-[var(--primary-maroon)] hover:bg-[var(--dark-maroon)] text-white px-8 py-5 rounded-xl font-extrabold text-xl shadow-lg transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <GraduationCap className="w-6 h-6" />
                Start Free
              </button>
              <button 
                onClick={openStarterModal}
                className="group flex-1 inline-flex items-center justify-center gap-3 bg-card text-text-primary border-2 border-border hover:border-[var(--primary-gold)] hover:text-[var(--primary-gold)] px-8 py-5 rounded-xl font-extrabold text-xl transition-all active:scale-95"
              >
                <Play className="w-6 h-6 fill-current" />
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Right Image Slider Half */}
          <div className="lg:col-span-1 w-full relative aspect-[16/9] lg:rounded-l-3xl overflow-hidden shadow-2xl z-20 group border-y border-l border-border mt-8 lg:mt-0">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentImageIndex}
                src={slideImages[currentImageIndex]}
                alt="Product Demo"
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            <div className="absolute inset-0 border-4 border-white/20 dark:border-white/5 lg:rounded-l-3xl z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[var(--page-bg)] to-transparent z-[5] pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}