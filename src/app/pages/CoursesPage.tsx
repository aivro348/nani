import { useSEO } from '../utils/useSEO';
import { CoursesSection } from '../components/CoursesSection';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Users } from 'lucide-react';

export function CoursesPage() {
  useSEO(
    'Scaro Technologies | Master Modern Software Engineering',
    'Level up your career with our hands-on educational courses in full-stack development, AI integration, and system architecture.'
  );

  return (
    <div className="min-h-screen bg-page-bg text-page-fg pb-16">
      
      {/* Education Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border bg-surface">
        <div className="absolute inset-0 bg-grid-indigo-900/[0.04] dark:bg-grid-indigo-100/[0.03] bg-[bottom_1px_center]" />
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-8 font-semibold"
          >
            <GraduationCap className="w-5 h-5" />
            <span>Scaro Academy</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-heading tracking-tight mb-8"
          >
            Master the skills that <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">
              build the future.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Industry-aligned curriculum taught by active engineering leaders. No fluff, just the modern stack you need to land top roles.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl shadow-sm">
              <BookOpen className="w-5 h-5 text-indigo-500" />
              <span className="font-medium">Project-Based Learning</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl shadow-sm">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="font-medium">1:1 Mentorship</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Courses Section */}
      <section className="pt-12">
        <CoursesSection />
      </section>
      
    </div>
  );
}