import { useSEO } from '../../app/utils/useSEO';
import { CoursesSection } from '../components/CoursesSection';
import { EducationContact } from '../components/EducationContact';
import { ProgramsOverview } from '../components/ProgramsOverview';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function CoursesPage() {
  const location = useLocation();
  
  useSEO(
    'Scaro Academy | Bridging Education & Industry',
    'Scaro Technologies empowers students with industry-relevant skills through MOOCs, certified programs, internships, and expert-led professional training.'
  );

  // Handle hash scrolling on page load
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Split-Screen Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col lg:flex-row items-center gap-12 bg-white">
        
        {/* Left Content Side */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
              <span className="text-[#ff3b00]">Bridging</span> <span className="text-black dark:text-black">Education</span> <span className="text-[#ff3b00]">&</span><br />
              <span className="text-[#ff3b00]">Industry</span>
            </h1>
            
            <p className="text-lg text-gray-600 font-medium mb-10 max-w-lg leading-relaxed">
              Scaro Technologies empowers students with industry-relevant skills through MOOCs, certified programs, internships, and expert-led professional training.
            </p>
            
            <button 
              onClick={() => {
                const el = document.getElementById('programs-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-sm font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-fit"
            >
              Explore Programs
            </button>
          </motion.div>
        </div>

        {/* Right Image Side */}
        <div className="w-full lg:w-[55%] relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img
              src="/hero-1.png"
              alt="Students collaborating"
              className="w-full h-auto object-cover object-center"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-gradient-to-r from-black via-[#5e0c04] to-[#f63700] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-4xl sm:text-5xl font-black text-white mb-16"
          >
            Our Impact So Far
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Stat 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center text-center shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl sm:text-5xl font-black text-[#ff3b00] mb-4">200K+</div>
              <div className="text-black font-black text-sm uppercase tracking-wide">Learners Trained</div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center text-center shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl sm:text-5xl font-black text-[#ff3b00] mb-4">100+</div>
              <div className="text-black font-black text-sm uppercase tracking-wide leading-tight">Industry Experts<br/>Onboarded</div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center text-center shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl sm:text-5xl font-black text-[#ff3b00] mb-4">50+</div>
              <div className="text-black font-black text-sm uppercase tracking-wide">Domains</div>
            </motion.div>

            {/* Stat 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center text-center shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl sm:text-5xl font-black text-[#ff3b00] mb-4">150+</div>
              <div className="text-black font-black text-sm uppercase tracking-wide">Hands-on Real Tasks</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Course Directory */}
      <section id="programs-section" className="bg-page-bg">
        <CoursesSection />
      </section>
      
      {/* Dedicated Education Contact Section */}
      <EducationContact />
    </div>
  );
}