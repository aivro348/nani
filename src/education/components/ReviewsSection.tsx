import { memo } from 'react';
import { motion } from 'motion/react';
import { Star, Youtube, Instagram, MessageCircle } from 'lucide-react';

// Example Video IDs (You can replace these with actual YouTube video IDs)
const reviews = [
  {
    id: 1,
    type: 'youtube',
    platform: 'YouTube Shorts',
    videoId: 'kuo4itEiiLE',
    studentName: 'Student Review',
    project: 'Scaro Academy Project',
    text: "Building this project with Scaro helped me secure my skills and learn industry-standard practices with hands-on experience.",
    rating: 5,
    isShort: true
  },
  {
    id: 2,
    type: 'youtube',
    platform: 'YouTube Shorts',
    videoId: 'dp0sHkwF1hU',
    studentName: 'Student Testimonial',
    project: 'Mini Project Development',
    text: "The step-by-step guidance and real-world application made everything so easy to understand. Great experience overall!",
    rating: 5,
    isShort: true
  },
  {
    id: 3,
    type: 'youtube',
    platform: 'YouTube Shorts',
    videoId: 'S69O38UevV0',
    studentName: 'Student Feedback',
    project: 'Main Project Execution',
    text: "Just submitted my main project and it got approved instantly! Thank you Scaro for the amazing support.",
    rating: 5,
    isShort: true
  }
];

export const ReviewsSection = memo(function ReviewsSection() {
  return (
    <div className="py-24 px-4 bg-slate-50 relative overflow-hidden">
      {/* Decorative Animated Background */}
      <motion.div 
        animate={{ 
          y: [-30, 30, -30],
          x: [-20, 20, -20],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary-maroon)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          y: [30, -30, 30],
          x: [20, -20, 20],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff3b00]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] rounded-full text-sm font-bold tracking-wide uppercase mb-6 border border-[var(--primary-maroon)]/20"
          >
            <MessageCircle className="w-4 h-4" />
            Student Success
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-heading tracking-tight mb-6"
          >
            Real Reviews from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-maroon)] to-[#ff3b00]">Real Students</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Hear directly from our students about their experience building mini and main projects with Scaro Academy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 300 }}
              className="bg-white rounded-3xl p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100/50 flex flex-col h-full group hover:shadow-[0_20px_50px_-15px_rgba(255,59,0,0.15)] transition-all duration-500 backdrop-blur-xl relative z-10"
            >
              {/* Video Embed */}
              <div className={`relative w-full rounded-2xl overflow-hidden mb-8 bg-slate-900 ${review.isShort ? 'aspect-[9/16] max-w-[280px] mx-auto' : 'aspect-video'} shadow-lg group-hover:shadow-[0_0_30px_rgba(255,59,0,0.3)] transition-all duration-500 transform group-hover:scale-[1.02]`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${review.videoId}?rel=0`}
                  title={`${review.platform} video player`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

                {/* Platform Badge Overlay (Shows briefly on hover or fixed corner) */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                  <div className={`px-3 py-1.5 rounded-lg text-xs font-black text-white flex items-center gap-1.5 shadow-md backdrop-blur-md ${review.type === 'insta' ? 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]' : 'bg-[#FF0000]'}`}>
                    {review.type === 'insta' ? <Instagram className="w-3.5 h-3.5" /> : <Youtube className="w-3.5 h-3.5" />}
                    {review.platform}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <div className="flex-1 flex flex-col relative z-20">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.15 + 0.3 + (i * 0.1), type: "spring" }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-slate-700 italic mb-6 flex-1 text-sm md:text-base leading-relaxed">
                  "{review.text}"
                </p>

                <div className="border-t border-slate-100 pt-4 mt-auto">
                  <h4 className="font-black text-slate-900 text-lg">{review.studentName}</h4>
                  <p className="text-xs font-bold text-[var(--primary-maroon)] uppercase tracking-wide mt-1">
                    Project: {review.project}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Channel Link Footer */}
        <div className="mt-20 text-center relative z-10">
          <motion.a 
            href="https://www.youtube.com/@scarotech" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF0000] to-[#cc0000] text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_10px_30px_-10px_rgba(255,0,0,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(255,0,0,0.7)] border border-red-500/50 group"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Youtube className="w-7 h-7" />
            </motion.div>
            Watch More on YouTube
            <motion.div
              className="absolute inset-0 rounded-2xl bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
});
