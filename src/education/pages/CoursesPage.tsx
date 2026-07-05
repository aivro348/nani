import { useSEO } from '../../app/utils/useSEO';
import { CoursesSection } from '../components/CoursesSection';
import { EducationContact } from '../components/EducationContact';
import { ProjectsStoreSection } from '../components/ProjectsStoreSection';
import { ProgramsOverview } from '../components/ProgramsOverview';
import { ReviewsSection } from '../components/ReviewsSection';
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
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col lg:flex-row items-center gap-12 bg-white overflow-visible">
        
        {/* Animated Background Blobs */}
        <motion.div 
          animate={{ y: [-20, 20, -20], x: [-20, 20, -20], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -left-10 w-96 h-96 bg-[var(--primary-maroon)]/10 rounded-full blur-[80px] -z-10 pointer-events-none"
        />
        <motion.div 
          animate={{ y: [20, -20, 20], x: [20, -20, 20], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-0 w-96 h-96 bg-[#ff3b00]/10 rounded-full blur-[80px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/2"
        />

        {/* Left Content Side */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center z-20">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] mb-6">
              <span className="text-[#ff3b00]">Bridging</span> <span className="text-[var(--primary-maroon)]">Education</span> <span className="text-[#ff3b00]">&</span><br />
              <span className="text-[#ff3b00]">Industry</span>
            </h1>
            
            <p className="text-lg text-gray-600 font-medium mb-10 max-w-lg leading-relaxed">
              Scaro Technologies empowers students with industry-relevant skills through MOOCs, certified programs, internships, and expert-led professional training.
            </p>
            
            <motion.button 
              onClick={() => {
                const el = document.getElementById('programs-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--primary-maroon)] hover:bg-[#ff3b00] text-white px-8 py-4 text-sm font-bold rounded-xl transition-all shadow-[0_10px_20px_rgba(92,20,29,0.15)] hover:shadow-[0_15px_30px_rgba(255,59,0,0.25)] w-fit flex items-center gap-2 group"
            >
              Explore Programs
              <motion.span 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block"
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>

        {/* Right Image Side */}
        <div className="w-full lg:w-[55%] relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl group"
          >
            {/* Subtle continuous floating for the image container */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-maroon)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
              <img
                src="/hero-1.png"
                alt="Students collaborating"
                className="w-full h-auto object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-gradient-to-r from-[var(--primary-maroon)] via-[#7a1824] to-[#ff3b00] py-20 px-4 sm:px-6 lg:px-8">
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
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-10 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 group"
            >
              <div className="text-4xl sm:text-5xl font-black text-white mb-4 drop-shadow-md group-hover:scale-110 transition-transform duration-300">200K+</div>
              <div className="text-white/80 font-black text-sm uppercase tracking-wide">Learners Trained</div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-10 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 group"
            >
              <div className="text-4xl sm:text-5xl font-black text-white mb-4 drop-shadow-md group-hover:scale-110 transition-transform duration-300">100+</div>
              <div className="text-white/80 font-black text-sm uppercase tracking-wide leading-tight">Industry Experts<br/>Onboarded</div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-10 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 group"
            >
              <div className="text-4xl sm:text-5xl font-black text-white mb-4 drop-shadow-md group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-white/80 font-black text-sm uppercase tracking-wide">Domains</div>
            </motion.div>

            {/* Stat 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-10 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 group"
            >
              <div className="text-4xl sm:text-5xl font-black text-white mb-4 drop-shadow-md group-hover:scale-110 transition-transform duration-300">150+</div>
              <div className="text-white/80 font-black text-sm uppercase tracking-wide">Hands-on Real Tasks</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Course Directory */}
      <section id="programs-section" className="bg-page-bg">
        <CoursesSection previewOnly={true} />
      </section>

      {/* Projects Store */}
      <section id="projects-store-section">
        <ProjectsStoreSection previewOnly={true} />
      </section>

      {/* Past Reviews / Testimonials */}
      <section id="reviews-section">
        <ReviewsSection />
      </section>
      
      {/* Dedicated Education Contact Section */}
      <EducationContact />
    </div>
  );
}