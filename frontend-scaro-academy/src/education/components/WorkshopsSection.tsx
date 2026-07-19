import { motion } from 'motion/react';
import { Presentation, Smartphone, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';

export function WorkshopsSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Half: Two Workshop Cards */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Presentation className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-black text-slate-900">Workshops</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 flex flex-col sm:flex-row items-center group"
            >
              <div className="p-8 sm:w-1/2 flex flex-col h-full justify-center">
                <h3 className="text-2xl font-black text-slate-900 mb-4">Workshop for Freshers</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Kickstart your engineering career with essential tools, coding practices, and core domain knowledge.
                </p>
                <button aria-label="Action button" 
                  onClick={() => navigate('/workshops')}
                  className="mt-auto flex items-center gap-2 text-[var(--primary-maroon)] font-bold group-hover:text-red-700 transition-colors"
                >
                  Explore Now! <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="w-full sm:w-1/2 h-64 sm:h-full bg-slate-100 relative overflow-hidden">
                <img loading="lazy" decoding="async" src="/unsplash/img_829df60c8b.webp" alt="Students" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[var(--primary-maroon)] mix-blend-multiply opacity-20" />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 flex flex-col sm:flex-row items-center group"
            >
              <div className="p-8 sm:w-1/2 flex flex-col h-full justify-center">
                <h3 className="text-2xl font-black text-slate-900 mb-4">Workshop for Professionals</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Upskill and cross-skill with advanced architectural patterns, system design, and emerging tech stacks.
                </p>
                <button aria-label="Action button" 
                  onClick={() => navigate('/workshops')}
                  className="mt-auto flex items-center gap-2 text-[var(--primary-gold)] font-bold group-hover:text-yellow-600 transition-colors"
                >
                  Explore Now! <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="w-full sm:w-1/2 h-64 sm:h-full bg-slate-100 relative overflow-hidden">
                <img loading="lazy" decoding="async" src="/unsplash/img_23b9c0412e.webp" alt="Professionals" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[var(--primary-gold)] mix-blend-multiply opacity-30" />
              </div>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
}
