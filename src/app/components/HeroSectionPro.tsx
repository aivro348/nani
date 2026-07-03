import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MessageCircle } from 'lucide-react';

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

  const scrollToSection = (sectionId: string) => {
    navigate(`/${sectionId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="hero-main" className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col lg:flex-row bg-[#111111] overflow-hidden">

      {/* Left Content Side */}
      <div className="w-full lg:w-[40%] flex flex-col justify-center px-8 sm:px-16 lg:px-20 py-20 lg:py-0 z-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] mb-8">
            Interactive<br />
            Online<br />
            Courses
          </h1>

          <p className="text-lg text-gray-300 font-medium mb-8">
            Unleash your potential with Scaro Technologies
          </p>

          {/* Decorative Red Line */}
          <div className="w-16 h-1 bg-red-500 mb-8" />

          <button
            onClick={() => scrollToSection("courses")}
            className="bg-[#f44336] hover:bg-red-600 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-colors"
          >
            Explore Courses
          </button>
        </motion.div>
      </div>

      {/* Right Image Side */}
      <div className="w-full lg:w-[60%] relative min-h-[50vh] lg:min-h-screen z-10">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={slideImages[currentImageIndex]}
            alt="Scaro Academy Students"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Optional subtle gradient to blend edges slightly if needed, but the ref image is a hard split */}
        {/* <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#111111] to-transparent z-20 hidden lg:block" /> */}

        {/* Navigation Indicators inside the image area */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slideImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* WhatsApp Floating Button (as seen in reference) */}
        <a
          href="https://wa.me/919989999099"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-8 right-8 z-40 bg-[#25D366] hover:bg-[#1ebd57] text-white px-5 py-3 rounded-full flex items-center gap-2 font-bold shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          Contact us
        </a>
      </div>

    </section>
  );
}