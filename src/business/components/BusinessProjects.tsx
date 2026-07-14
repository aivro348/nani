import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export const projects = [
  {
    title: 'Geo-Silicon',
    category: 'Enterprise Tech',
    images: ['/business-projects/geo-silicon.png', '/business-projects/geo-silicon1.png'],
    link: 'https://geo-silicon.com',
    description: 'Next-generation enterprise technology portal with advanced data visualization and control.'
  },
  {
    title: 'Balu Associates',
    category: 'Corporate Website',
    images: ['/business-projects/baluassocities1.png', '/business-projects/baluassocities2.png'],
    link: 'https://baluassociates.net',
    description: 'Professional corporate presence with highly optimized performance and scalable architecture.'
  },
  {
    title: 'Kadagwrs',
    category: 'Government Initiative',
    images: ['/business-projects/kadagwrs.png', '/business-projects/kadagwrs1.png'],
    link: 'https://kadagwrs.vercel.app',
    description: 'Digital platform developed for IIT Kanpur in collaboration with the AP Govt for the KADA (Kuppam Area Development Authority).'
  },
  {
    title: 'HKGN EGG Shop',
    category: 'Web Application',
    images: ['/business-projects/apii1.png', '/business-projects/apii11.png'],
    link: 'https://appi123.vercel.app/',
    description: 'Dynamic web application showcasing modern frontend architecture and seamless user experiences.'
  },
  {
    title: 'Bhagwathi IT Solution',
    category: 'IT Solutions Platform',
    images: ['/business-projects/bhagwathi it solution.png', '/business-projects/bhagwathi it solution2.png'],
    link: 'https://nani-348.github.io/Shiva_anna/',
    description: 'Comprehensive IT solutions platform engineered for reliability, security, and global scale.'
  },
  {
    title: 'Naveen Textiles',
    category: 'Digital Storefront',
    images: ['/business-projects/naveentextiles1.png', '/business-projects/naveentextiles2.png'],
    link: 'https://naveentextiles.online',
    description: 'Premium digital storefront tailored for the textile industry with seamless inventory integration.'
  }
];

export function ProjectCard({ project, idx }: { project: typeof projects[0], idx: number }) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    // Automatically slide show the images every 4 seconds
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % project.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <motion.a
      href={project.link !== '#' ? project.link : undefined}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
      whileHover={{ y: -8 }}
      className={`group cursor-pointer block ${project.link === '#' ? 'pointer-events-none' : ''}`}
    >
      <div className="relative w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[380px] rounded-3xl overflow-hidden mb-6 bg-surface border border-border">
        {/* Gold glow on hover */}
        <div className="absolute inset-0 bg-[var(--primary-maroon)]/30 group-hover:bg-transparent transition-all duration-500 z-20" />
        
        {/* Image Slideshow using AnimatePresence for smooth sliding */}
        <AnimatePresence initial={false}>
          <motion.img 
            key={currentImageIdx}
            src={project.images[currentImageIdx]}
            alt={`${project.title} screenshot ${currentImageIdx + 1}`}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out z-10"
          />
        </AnimatePresence>
        
        {/* Floating link icon */}
        {project.link !== '#' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[var(--primary-gold)] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 z-30 shadow-[0_0_30px_var(--primary-gold)]">
            <ExternalLink className="w-6 h-6 text-[#0A0506]" />
          </div>
        )}
      </div>
      
      <div>
        <div className="text-sm font-bold text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] uppercase tracking-widest mb-3">
          {project.category}
        </div>
        <h4 className="text-2xl font-bold text-heading mb-3 group-hover:text-[var(--primary-maroon)] dark:group-hover:text-[var(--primary-gold)] transition-colors tracking-tight flex items-center gap-2">
          {project.title}
          {project.link !== '#' && <ArrowRight className="w-5 h-5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[var(--primary-gold)]" />}
        </h4>
        <p className="text-text-secondary leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.a>
  );
}

export function BusinessProjects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-16 md:py-32 px-4 bg-page-bg relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary-maroon)]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--primary-gold)]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[2px] bg-gradient-to-r from-[var(--primary-gold)] to-transparent" />
              <span className="text-sm font-bold text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] uppercase tracking-[0.2em]">Portfolio</span>
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl font-black text-heading mb-6 tracking-tight"
            >
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-maroon)] to-[var(--primary-gold)]">Projects</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-text-secondary leading-relaxed"
            >
              A selection of scalable platforms we've shipped — driving digital transformation for our corporate partners.
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 xl:gap-12 mb-12">
          {projects.slice(0, 4).map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <motion.button 
            onClick={() => navigate('/all-business-projects')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[var(--primary-maroon)] dark:border-[var(--primary-gold)] text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] font-bold rounded-xl hover:bg-[var(--primary-maroon)]/10 dark:hover:bg-[var(--primary-gold)]/10 transition-all whitespace-nowrap text-lg uppercase tracking-wider group"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
