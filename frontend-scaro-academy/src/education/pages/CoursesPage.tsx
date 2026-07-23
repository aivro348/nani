import { useSEO } from '../../main/utils/useSEO';
import { CoursesSection } from '../components/CoursesSection';
import { StudentProjectsCarousel } from '../components/StudentProjectsCarousel';
import { ProjectsStoreSection } from '../components/ProjectsStoreSection';
import { ProgramsOverview } from '../components/ProgramsOverview';

import { EducationFAQ } from '../components/EducationFAQ';
import { EducationBlogsSection } from '../components/EducationBlogsSection';
import { CoursesDemoSessions } from '../components/CoursesDemoSessions';
import { WorkshopsSection } from '../components/WorkshopsSection';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function CoursesPage() {
  const location = useLocation();
  
  useSEO(
    'Scaro Academy | Bridging Education & Industry',
    'Scaro Technologie empowers students with industry-relevant skills through MOOCs, certified programs, internships, and expert-led professional training.'
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
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img fetchPriority="high" decoding="async" src="/hero-1.webp" alt="Students collaborating" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-white relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D4AF37] text-sm font-bold tracking-wider uppercase mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              Welcome to Scaro Academy
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6 drop-shadow-2xl"
            >
              Bridging Education <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-200">
                & Industry
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-200 font-medium mb-10 leading-relaxed max-w-xl drop-shadow-md"
            >
              Scaro Technologie empowers students with industry-relevant skills through MOOCs, certified programs, internships, and expert-led professional training.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button 
                onClick={() => {
                  const el = document.getElementById('programs-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#D4AF37] to-[#B89628] hover:from-yellow-400 hover:to-[#D4AF37] text-[#1E060A] px-8 py-4 rounded-full font-black text-lg transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] flex items-center gap-3 group"
              >
                Explore Programs
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg className="w-5 h-5 text-[#1E060A]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </span>
              </motion.button>

              <motion.button 
                onClick={() => {
                  const el = document.getElementById('projects-store');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black/30 backdrop-blur-md border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg flex items-center gap-3 group"
              >
                View Recent Projects
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Slanted Curved Divider (Matches Image 1) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg className="relative block w-full h-[100px] md:h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120H0V71.5C0 71.5 350.5 140 1200 0V120Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Watch Free Demo Sessions */}
      <CoursesDemoSessions />

      {/* Offered Programs & Courses */}
      <ProgramsOverview />


      {/* Projects Store */}
      <section id="projects-store-section">
        <ProjectsStoreSection previewOnly={true} />
      </section>



      {/* Workshops & LMS Banner */}
      <section id="workshops-section">
        <WorkshopsSection />
      </section>

      {/* Student Projects Carousel */}
      <StudentProjectsCarousel />
      
      {/* FAQs */}
      <EducationFAQ />
    </div>
  );
}