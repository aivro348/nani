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
                <button 
                  onClick={() => navigate('/workshops')}
                  className="mt-auto flex items-center gap-2 text-[var(--primary-maroon)] font-bold group-hover:text-red-700 transition-colors"
                >
                  Explore Now! <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="w-full sm:w-1/2 h-64 sm:h-full bg-slate-100 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" alt="Students" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
                <button 
                  onClick={() => navigate('/workshops')}
                  className="mt-auto flex items-center gap-2 text-[var(--primary-gold)] font-bold group-hover:text-yellow-600 transition-colors"
                >
                  Explore Now! <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="w-full sm:w-1/2 h-64 sm:h-full bg-slate-100 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop" alt="Professionals" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[var(--primary-gold)] mix-blend-multiply opacity-30" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Half: LMS Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue-50/50 border border-blue-100 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="w-full md:w-1/2 relative z-10">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Learn anytime, <br />
              <span className="text-blue-600">anywhere</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Access your courses, track your progress, and continue learning seamlessly across all your devices with the App.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-[var(--primary-maroon)] transition-colors shadow-lg flex items-center gap-2">
                Download App
              </button>
              <button 
                onClick={() => navigate('/lms')}
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:border-slate-400 transition-colors shadow-sm flex items-center gap-2"
              >
                Go to Web Portal
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center relative z-10">
            <div className="relative w-[280px] h-[580px] bg-white rounded-[3rem] shadow-2xl border-8 border-slate-900 overflow-hidden flex flex-col">
              <div className="bg-slate-900 text-white p-6 pt-10 rounded-b-3xl text-center">
                <Smartphone className="w-8 h-8 mx-auto mb-2 opacity-80" />
                <h3 className="font-bold text-xl">Mobile App</h3>
              </div>
              <div className="flex-1 p-6 flex flex-col gap-4 bg-slate-50">
                <div className="w-full h-24 bg-white rounded-xl shadow-sm border border-slate-100"></div>
                <div className="w-full h-24 bg-white rounded-xl shadow-sm border border-slate-100"></div>
                <div className="w-full h-24 bg-white rounded-xl shadow-sm border border-slate-100"></div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
