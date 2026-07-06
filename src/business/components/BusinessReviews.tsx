import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    company: 'Geo-Silicon',
    role: 'Enterprise Technology Director',
    content: 'Scaro Technologies completely transformed our enterprise data visualization capabilities. Their solution was highly scalable, delivering seamless real-time control that our entire team relies on daily.',
    rating: 5,
  },
  {
    company: 'IIT Kanpur & AP Govt (KADA)',
    role: 'Project Lead',
    content: 'The digital platform built for the Kuppam Area Development Authority exceeded our expectations. The attention to detail and intelligent product discovery features have significantly modernized our regional initiatives.',
    rating: 5,
  },
  {
    company: 'Balu Associates',
    role: 'Managing Partner',
    content: 'A truly professional corporate presence. The architecture they provided is highly optimized and perfectly aligned with our brand. Their team\'s technical expertise is unmatched in the industry.',
    rating: 5,
  },
  {
    company: 'Bhagwathi IT Solution',
    role: 'Operations Head',
    content: 'Reliability and security were our top priorities, and Scaro delivered exactly that. Their comprehensive IT solutions platform has empowered our global scale operations flawlessly.',
    rating: 5,
  },
  {
    company: 'Naveen Textiles',
    role: 'CEO',
    content: 'Our transition to a digital storefront was seamless. The inventory integration provided by Scaro has optimized our supply chain and given our retail business a premium online presence.',
    rating: 5,
  },
  {
    company: 'HKGN EGG Shop',
    role: 'Business Owner',
    content: 'Fast, dynamic, and perfectly tailored to our needs. The web application is incredibly smooth, providing a modern frontend experience that our customers absolutely love using.',
    rating: 5,
  }
];

export function BusinessReviews() {
  return (
    <section className="py-16 md:py-32 px-4 bg-[#0A0506] relative overflow-hidden">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[var(--primary-gold)]/50 transition-all duration-300 group relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[var(--primary-gold)]/10 group-hover:text-[var(--primary-gold)]/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--primary-gold)] text-[var(--primary-gold)]" />
                ))}
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10">
                "{review.content}"
              </p>
              
              <div className="mt-auto">
                <div className="font-bold text-white text-lg">{review.company}</div>
                <div className="text-[var(--primary-gold)] text-sm uppercase tracking-wider mt-1 font-semibold">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
