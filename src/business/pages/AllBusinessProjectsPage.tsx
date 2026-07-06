import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useSEO } from '../../app/utils/useSEO';
import { projects, ProjectCard } from '../components/BusinessProjects';

export function AllBusinessProjectsPage() {
  useSEO(
    'All Projects | Scaro Technologies Business',
    'Explore our full portfolio of enterprise-grade solutions, web applications, and corporate platforms.'
  );

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0506] text-white pt-20 md:pt-24 pb-16 md:pb-32 selection:bg-[var(--primary-gold)] selection:text-black">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[400px] bg-[var(--primary-gold)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[var(--primary-maroon)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.button
              onClick={() => navigate('/business')}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-gray-400 hover:text-[var(--primary-gold)] transition-colors mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Business Home
            </motion.button>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4"
            >
              Our Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-gold)] to-[var(--light-gold)]">Portfolio</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl"
            >
              Explore all the digital platforms, enterprise tools, and e-commerce solutions we have successfully delivered.
            </motion.p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
        
      </div>
    </div>
  );
}
