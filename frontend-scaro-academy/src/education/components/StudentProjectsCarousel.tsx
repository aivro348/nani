import { motion } from 'motion/react';
import { Play, X } from 'lucide-react';
import { memo, useState } from 'react';

const SHORTS_IDS = [
  'YZ-B3yek8TQ',
  'dp0sHkwF1hU',
  'FMKA8avx5LA',
  '7lBtvw1Aaj0',
  'qwsjWKQ61Cs',
  'O2Og_Jrp5G8',
  'UKA1kQehUgE'
];

interface VideoCardProps {
  id: string;
  index: number;
  isPlaying: boolean;
  onPlay: () => void;
  onStop: () => void;
}

const VideoCard = memo(({ id, index, isPlaying, onPlay, onStop }: VideoCardProps) => {
  return (
    <div className="w-[280px] sm:w-[315px] shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black group transition-transform hover:scale-[1.02] relative">
      <div className="relative w-full pb-[177.77%] bg-gray-900 cursor-pointer">
        {!isPlaying ? (
          <div onClick={onPlay} className="absolute inset-0">
            <img 
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} 
              alt={`Student Project ${index}`}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div className="w-16 h-16 rounded-full bg-[#5C141D]/90 backdrop-blur-md flex items-center justify-center group-hover:bg-[var(--primary-gold)] transition-colors border border-white/30 shadow-lg group-hover:scale-110 duration-300">
                <Play className="w-8 h-8 text-white group-hover:text-black ml-1 fill-current" />
              </div>
            </div>
          </div>
        ) : (
          <>
            <iframe 
              className="absolute top-0 left-0 w-full h-full z-10"
              src={`https://www.youtube.com/embed/${id}?rel=0&autoplay=1&enablejsapi=1`}
              title={`Student Project ${index}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            {/* Stop / Close Button */}
            <button aria-label="Action button" 
              onClick={(e) => {
                e.stopPropagation();
                onStop();
              }}
              className="absolute top-3 right-3 z-30 bg-black/80 hover:bg-[#5C141D] text-white p-2 rounded-full border border-white/20 transition-all shadow-xl backdrop-blur-md cursor-pointer"
              title="Stop video"
            >
              <X className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
});

export const StudentProjectsCarousel = memo(function StudentProjectsCarousel() {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  // Duplicate array to create a seamless infinite scroll loop
  const duplicatedShorts = [...SHORTS_IDS, ...SHORTS_IDS];

  return (
    <section className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#5C141D]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--primary-gold)]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#5C141D]/10 rounded-full border border-[#5C141D]/20 mb-4"
          >
            <Play className="w-4 h-4 text-[#5C141D]" />
            <span className="text-xs font-black text-[#5C141D] uppercase tracking-widest">Showcase</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-[#1E060A] mb-4 tracking-tight"
          >
            Our Students <span className="text-[#5C141D]">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-slate-600 font-light leading-relaxed"
          >
            Watch real engineering & software projects built by Scaro Academy students.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden flex pb-8">
          <style>{`
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              width: max-content;
              animation: scroll-left 55s linear infinite;
            }
            .animate-marquee:hover,
            .animate-marquee-paused {
              animation-play-state: paused !important;
            }
          `}</style>
          
          <div className={`animate-marquee gap-6 px-3 ${activeVideoIndex !== null ? 'animate-marquee-paused' : ''}`}>
            {duplicatedShorts.map((id, index) => (
              <VideoCard 
                key={`${id}-${index}`} 
                id={id} 
                index={index}
                isPlaying={activeVideoIndex === index}
                onPlay={() => setActiveVideoIndex(index)}
                onStop={() => setActiveVideoIndex(null)}
              />
            ))}
          </div>
          
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-12 sm:w-32 h-full bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-12 sm:w-32 h-full bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
});
