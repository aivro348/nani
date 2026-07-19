import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    company: 'Saree Boutique · Bangalore',
    role: 'Founder (Priya R.)',
    content: 'Scaro Technologie redesigned our Shopify store and our conversions jumped 40% in the first month. Highly recommended.',
    rating: 5,
  },
  {
    company: 'Dental Clinic · Chennai',
    role: 'Owner (Dr. Rakesh M.)',
    content: 'Their AI WhatsApp chatbot handles 80% of our customer queries automatically. A real game-changer for our clinic.',
    rating: 5,
  },
  {
    company: 'EdTech Startup · Whitefield',
    role: 'Founder (Sanjay K.)',
    content: 'They built our entire WordPress site + Android app + admin panel in just 5 weeks. Excellent team.',
    rating: 5,
  },
  {
    company: 'Manufacturing · Mahadevapura',
    role: 'Operations (Anita M.)',
    content: 'We\'ve been working with Ravi\'s team since 2014. They simply deliver, every single time.',
    rating: 5,
  },
  {
    company: 'SaaS Startup · Bangalore',
    role: 'Founder (Vikram S.)',
    content: 'Their AI agent now qualifies all our incoming leads and books demos directly into our CRM. Brilliant work.',
    rating: 5,
  },
  {
    company: 'Restaurant · KR Puram',
    role: 'Owner (Naveen J.)',
    content: 'Affordable, professional and super responsive. Our restaurant site looks and works fantastic on mobile.',
    rating: 5,
  }
];

export function BusinessReviews() {
  return (
    <section className="py-16 md:py-32 bg-[#0A0506] relative overflow-hidden">
      {/* CSS Marquee Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-reviews {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reviews:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary-gold)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--primary-maroon)]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[var(--primary-gold)]" />
            <span className="text-sm font-bold text-[var(--primary-gold)] uppercase tracking-[0.2em]">Client Success</span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[var(--primary-gold)]" />
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight"
          >
            Trusted by Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-gold)] to-[var(--light-gold)]">Leaders</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400"
          >
            See what our enterprise partners and clients have to say about the digital solutions we've built for them.
          </motion.p>
        </div>
        
        {/* Horizontal scrolling marquee */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient overlays for smooth fading at edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-r from-[#0A0506] via-[#0A0506]/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-l from-[#0A0506] via-[#0A0506]/80 to-transparent pointer-events-none" />

          <div className="animate-marquee-reviews flex gap-8 py-4">
            {/* Double the array for seamless scrolling */}
            {[...reviews, ...reviews].map((review, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[var(--primary-gold)]/50 transition-all duration-300 group relative w-[350px] sm:w-[450px] h-[320px] flex flex-col justify-between shrink-0"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-[var(--primary-gold)]/10 group-hover:text-[var(--primary-gold)]/20 transition-colors" />
                
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[var(--primary-gold)] text-[var(--primary-gold)]" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed relative z-10 font-light italic">
                    "{review.content}"
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="font-bold text-white text-base sm:text-lg">{review.company}</div>
                  <div className="text-[var(--primary-gold)] text-xs sm:text-sm uppercase tracking-wider mt-1 font-semibold">{review.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
