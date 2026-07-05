import { memo } from 'react';
import { motion } from 'motion/react';
import { Star, Youtube, Instagram, MessageCircle } from 'lucide-react';

// Example Video IDs (You can replace these with actual YouTube video IDs)
const reviews = [
  {
    id: 1,
    type: 'youtube', // 'youtube' or 'insta'
    platform: 'YouTube',
    videoId: 'dQw4w9WgXcQ', // Placeholder ID - replace with your actual video ID
    studentName: 'Rahul K.',
    project: 'E-Commerce Full Stack Application',
    text: "The project-based learning approach helped me secure an internship. The mentors were extremely helpful throughout the development phase.",
    rating: 5
  },
  {
    id: 2,
    type: 'youtube',
    platform: 'YouTube Shorts',
    videoId: 'LXb3EKWsInQ', // Placeholder Shorts ID
    studentName: 'Sneha Reddy',
    project: 'AI Chatbot Integration',
    text: "Completed my mini-project in 2 weeks! The step-by-step guidance and real-world application made everything so easy to understand.",
    rating: 5,
    isShort: true
  },
  {
    id: 3,
    type: 'insta',
    platform: 'Instagram',
    videoId: 'tgbNymZ7vqY', 
    studentName: 'Vikram S.',
    project: 'IoT Smart Home System',
    text: "Just submitted my main project and it got approved instantly! Thank you Scaro for the amazing hardware support.",
    rating: 5
  }
];

export const ReviewsSection = memo(function ReviewsSection() {
  return (
    <div className="py-24 px-4 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary-maroon)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff3b00]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

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
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Video Embed */}
              <div className={`relative w-full rounded-2xl overflow-hidden mb-6 bg-black ${review.isShort ? 'aspect-[9/16] max-h-[400px] mx-auto w-auto sm:w-[225px]' : 'aspect-video'} shadow-lg group-hover:shadow-2xl transition-shadow`}>
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
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
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
      </div>
    </div>
  );
});
