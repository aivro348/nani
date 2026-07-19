import { motion } from 'motion/react';
import { Play } from 'lucide-react';
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

const VideoCard = memo(({ id, index }: { id: string, index: number }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-[280px] sm:w-[315px] shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black group transition-transform hover:scale-[1.02]">
      <div className="relative w-full pb-[177.77%] bg-gray-900 cursor-pointer" onClick={() => setIsPlaying(true)}>
        {!isPlaying ? (
          <>
            <img 
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} 
              alt={`Student Project ${index}`}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center group-hover:bg-blue-600/90 transition-colors border border-white/20">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          </>
        ) : (
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${id}?rel=0&autoplay=1`}
            title={`Student Project ${index}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
});

export const StudentProjectsCarousel = memo(function StudentProjectsCarousel() {
  // We duplicate the array to create a seamless infinite scroll loop
  const duplicatedShorts = [...SHORTS_IDS, ...SHORTS_IDS];

  return (
    <section className="py-24 bg-page-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6"
          >
            <Play className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-bold text-blue-400 uppercase tracking-wider">Showcase</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-heading mb-6 tracking-tight"
          >
            Our Students <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-muted leading-relaxed"
          >
            Watch real projects built by Scaro Academy students.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden flex pb-10">
          <style>{`
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              width: max-content;
              animation: scroll-left 50s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="animate-marquee gap-6 px-3">
            {duplicatedShorts.map((id, index) => (
              <VideoCard key={`${id}-${index}`} id={id} index={index} />
            ))}
          </div>
          
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-12 sm:w-32 h-full bg-gradient-to-r from-page-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-12 sm:w-32 h-full bg-gradient-to-l from-page-bg to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
});
