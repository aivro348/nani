import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { GraduationCap, Play } from 'lucide-react';

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
    }, 5000);
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
    <section id="hero-main" className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden bg-black">
      
      {/* Full Screen Background Slider */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentImageIndex}
          src={slideImages[currentImageIndex]}
          alt="Scaro Academy Showcase"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
      </AnimatePresence>

      {/* Dark Overlay for better contrast - reduced since there's no text */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/20 z-10 pointer-events-none" />

      {/* Navigation Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slideImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentImageIndex ? 'bg-[var(--primary-gold)] scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}