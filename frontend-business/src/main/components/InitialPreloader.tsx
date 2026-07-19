import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Explosive Continuous Particle Fountain for the Corners (Lasts 10 Seconds!)
const BlastParticles = ({ side }: { side: 'left' | 'right' }) => {
  return (
    <div className={`absolute bottom-0 ${side === 'left' ? 'left-0' : 'right-0'} w-10 h-10`}>
      {Array.from({ length: 80 }).map((_, i) => {
        // Calculate explosion trajectories pointing inwards from the corners
        const angle = side === 'left' 
           ? (Math.random() * 70 + 10) * (Math.PI / 180) // 10 to 80 degrees (up and right)
           : (Math.random() * 70 + 100) * (Math.PI / 180); // 100 to 170 degrees (up and left)
        
        // Very fast, explosive velocities
        const velocity = Math.random() * 1000 + 400; 
        const tx = Math.cos(angle) * velocity;
        const ty = -Math.sin(angle) * velocity;
        
        // Random start delay so they fire continuously for 10 seconds
        const startDelay = Math.random() * 8; 

        return (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full"
            style={{ 
               backgroundColor: Math.random() > 0.5 ? '#E53E3E' : '#FFA500', // Red & Orange Tech Sparks
               boxShadow: '0 0 15px currentColor' 
            }}
            initial={{ x: 0, y: 0, scale: Math.random() * 2 + 1, opacity: 0 }}
            animate={{ 
               x: [0, tx], 
               y: [0, ty],
               scale: [Math.random() * 2 + 1, 0], 
               opacity: [0, 1, 0] 
            }}
            transition={{ 
               duration: 1.5 + Math.random(), 
               ease: "easeOut",
               delay: startDelay,
               repeat: 2, // Repeat to ensure the fountain stays thick for the full 10s
               repeatDelay: Math.random() * 1.5
            }}
          />
        );
      })}
    </div>
  );
};

export function InitialPreloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState(0);
  const [showBlast, setShowBlast] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('scaro_preloader_seen');
    if (hasSeen) {
      setIsVisible(false);
      return;
    }

    const timers = [
      setTimeout(() => setPhase(1), 3500), // Phase 1: Holographic scan finishes, real logo reveals
      setTimeout(() => setPhase(2), 5500), // Phase 2: Typewriter greeting begins at 5.5s
      setTimeout(() => setPhase(3), 7500), // Phase 3: "GET READY FOR THE BLAST"
      setTimeout(() => {
        setIsVisible(false); // Screen slides up
        setShowBlast(true);  // Fireworks blast from corners!
        sessionStorage.setItem('scaro_preloader_seen', 'true');
      }, 10000), // Exactly at 10 seconds
      setTimeout(() => setShowBlast(false), 20000) // Keep fireworks blasting continuously for 10 full seconds! (10s -> 20s)
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ y: '-100vh', opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99998] flex flex-col items-center justify-center bg-[#030303] overflow-hidden"
          >
            {/* Stunning Cinematic Lighting */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#5C141D]/20 blur-[150px] rounded-full opacity-60 mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#E53E3E]/10 blur-[100px] rounded-full opacity-80 mix-blend-screen" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              
              {/* Holographic Laser Scan Container */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 mb-16 flex items-center justify-center">
                
                {/* Phase 0: The Holographic Logo Scan */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: phase >= 1 ? 0 : 1, scale: phase >= 1 ? 1.2 : 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  <motion.img
                    src="/scaro_technologies%20.webp"
                    alt="Scaro Technologie Hologram"
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{ 
                      filter: "brightness(0) invert(1) drop-shadow(0 0 15px rgba(229,62,62,0.9)) drop-shadow(0 0 5px rgba(255,255,255,0.8))" 
                    }}
                    initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    transition={{ duration: 3.5, ease: "linear" }}
                  />

                  <motion.div
                    className="absolute left-0 right-0 h-1 bg-white shadow-[0_0_20px_4px_#E53E3E]"
                    initial={{ bottom: "0%" }}
                    animate={{ bottom: "100%" }}
                    transition={{ duration: 3.5, ease: "linear" }}
                  />
                </motion.div>

                {/* Phase 1: The Real Logo Reveal */}
                <motion.img
                  src="/scaro_technologies%20.webp"
                  alt="Scaro Academy"
                  className="absolute w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]"
                  initial={{ opacity: 0, scale: 0.2, filter: 'blur(30px)' }}
                  animate={{ 
                    opacity: phase >= 1 ? 1 : 0, 
                    scale: phase >= 1 ? 1 : 0.2,
                    filter: phase >= 1 ? 'blur(0px)' : 'blur(30px)'
                  }}
                  transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </div>

              {/* Phase 2 & 3: Cinematic Typewriter Reveal */}
              <div className="text-center flex flex-col items-center min-h-[160px] w-full">
                
                <div className="inline-block">
                  <motion.h1
                    initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                    animate={{ clipPath: phase >= 2 ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)" }}
                    transition={{ duration: 1, ease: "linear" }}
                    className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400 py-1 pr-2 border-r-4 border-transparent"
                    style={{
                      animation: phase >= 2 && phase < 3 ? 'blink 1s step-end infinite' : 'none'
                    }}
                  >
                    Hi everyone!
                  </motion.h1>
                </div>
                
                <div className="inline-block mt-4">
                  <motion.p
                    initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                    animate={{ clipPath: phase >= 2 ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)" }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "linear" }}
                    className="text-xl md:text-3xl text-gray-400 font-medium tracking-wide py-1"
                  >
                    Welcome to the <span className="text-white font-bold inline-block">Scaro Academy</span>
                  </motion.p>
                </div>

                {/* Phase 3: The Grand Release Statement */}
                <div className="inline-block mt-6 overflow-hidden">
                  <motion.p
                    initial={{ opacity: 0, y: 20, letterSpacing: '0em' }}
                    animate={{ 
                      opacity: phase >= 3 ? 1 : 0, 
                      y: phase >= 3 ? 0 : 20,
                      letterSpacing: phase >= 3 ? '0.3em' : '0em'
                    }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="text-sm md:text-lg text-red-500 font-bold uppercase tracking-widest"
                  >
                    Get Ready for the Blast
                  </motion.p>
                </div>
                
                <style>{`
                  @keyframes blink {
                    0%, 100% { border-color: transparent; }
                    50% { border-color: white; }
                  }
                `}</style>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Particle Blasts - Kept outside the sliding div so they shoot across the homepage! */}
      <AnimatePresence>
        {showBlast && (
          <motion.div 
            key="blasts"
            className="fixed inset-0 pointer-events-none z-[99999]"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <BlastParticles side="left" />
            <BlastParticles side="right" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
