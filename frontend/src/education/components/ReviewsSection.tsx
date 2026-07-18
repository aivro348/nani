import { memo } from 'react';
import { motion } from 'motion/react';
import { Star, Youtube, Instagram, Quote } from 'lucide-react';

const stats = [
  { value: '5K+', label: 'Learners Trained' },
  { value: '25+', label: 'Industry Experts Onboarded' },
  { value: '20+', label: 'Domains' },
  { value: '100+', label: 'Hands-on Real Tasks' }
];

const writtenReviews = [
  { id: 1, name: "Rahul S.", role: "Full Stack Developer", text: "The curriculum is perfectly aligned with industry needs. I secured an internship right after completing the React module!" },
  { id: 2, name: "Sneha M.", role: "Data Science Learner", text: "Scaro Academy's hands-on approach made learning Python and ML incredibly intuitive. Highly recommended." },
  { id: 3, name: "Aakash T.", role: "Embedded Systems", text: "Working with ESP32 and IoT sensors directly gave me the confidence to build my own smart home projects." },
  { id: 4, name: "Priya K.", role: "UI/UX Designer", text: "The focus on practical implementation over theory is what makes Scaro stand out. Best learning experience." },
];

export const ReviewsSection = memo(function ReviewsSection() {
  return (
    <div className="relative bg-[#0A0506] pt-20">
      
      {/* Top Half: Dark Stats Section */}
      <div className="bg-slate-900 pt-20 pb-48 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Connecting Line Diagram SVG Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
             <path d="M100 150 Q 300 50 500 150 T 900 150" stroke="var(--primary-gold)" strokeWidth="2" fill="none" strokeDasharray="10, 10" />
             <path d="M100 250 Q 400 350 600 250 T 1100 250" stroke="var(--primary-maroon)" strokeWidth="2" fill="none" strokeDasharray="10, 10" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-4xl sm:text-5xl font-black text-white mb-16"
          >
            Our Impact So Far
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800/80 backdrop-blur border border-slate-700 p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform"
              >
                <div className="text-4xl sm:text-5xl font-black text-[var(--primary-gold)] mb-3">{stat.value}</div>
                <div className="text-slate-300 font-bold text-sm sm:text-base leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Half: Overlapping Testimonial Cards */}
      <div className="relative z-20 -mt-24 pb-24 w-full">
        
        {/* Horizontal Scrolling Reviews */}
        <div className="w-full overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#0A0506] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#0A0506] to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-6 px-3 py-4">
                {writtenReviews.map((review) => (
                  <div 
                    key={`${setIdx}-${review.id}`}
                    className="w-[350px] bg-slate-800/80 backdrop-blur rounded-3xl p-8 shadow-2xl border border-slate-700 flex flex-col hover:-translate-y-2 transition-transform duration-300 relative"
                  >
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-700/50" />
                    <div className="flex gap-1 text-yellow-400 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 italic flex-1 mb-8 text-sm leading-relaxed relative z-10">
                      "{review.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--primary-maroon)] text-white flex items-center justify-center font-bold text-lg">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{review.name}</h4>
                        <p className="text-xs font-medium text-[var(--primary-gold)]">{review.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
    </div>
  );
});
