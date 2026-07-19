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
          <div
            className="max-w-2xl text-white animate-slide-in-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
              Bridging Education <br />
              & Industry
            </h1>
            
            <p className="text-lg text-slate-200 font-medium mb-10 leading-relaxed max-w-xl">
              Scaro Technologie empowers students with industry-relevant skills through MOOCs, certified programs, internships, and expert-led professional training.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button 
                onClick={() => {
                  const el = document.getElementById('programs-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--primary-gold)] hover:bg-yellow-500 text-slate-900 px-6 py-3 rounded-full font-bold transition-all shadow-lg flex items-center gap-2 group"
              >
                Explore Programs
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg className="w-4 h-4 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </span>
              </motion.button>

              <motion.button 
                onClick={() => {
                  const el = document.getElementById('projects-store');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg flex items-center gap-2 group"
              >
                View Recent Projects
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg className="w-4 h-4 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </motion.button>
            </div>
          </div>
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

      {/* FAQs */}
      <EducationFAQ />

      {/* Blogs / Resources */}
      <EducationBlogsSection />
      
      {/* Student Projects Carousel */}
      <StudentProjectsCarousel />
    </div>
  );
}