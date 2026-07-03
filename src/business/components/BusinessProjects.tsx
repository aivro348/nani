import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';

export function BusinessProjects() {
  const projects = [
    {
      title: 'FinTech Analytics Dashboard',
      category: 'Data & Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000',
      description: 'A high-performance real-time trading and analytics dashboard built for a tier-1 financial institution.'
    },
    {
      title: 'Healthcare AI Assistant',
      category: 'AI & ML Integration',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000',
      description: 'LLM-powered diagnostic support tool integrating seamlessly with existing hospital EMR systems.'
    },
    {
      title: 'Global Supply Chain SaaS',
      category: 'SaaS Product Engineering',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?auto=format&fit=crop&q=80&w=2000',
      description: 'Multi-tenant logistics platform tracking millions of shipments globally with 99.99% uptime.'
    }
  ];

  return (
    <section id="projects" className="py-32 px-4 bg-page-bg relative overflow-hidden">
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
              className="text-4xl md:text-6xl font-black text-heading mb-6 tracking-tight"
            >
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-maroon)] to-[var(--primary-gold)]">Projects</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-secondary leading-relaxed"
            >
              A selection of scalable platforms we've shipped — from AI-powered SaaS to real-time analytics.
            </motion.p>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] font-bold hover:gap-4 transition-all whitespace-nowrap text-lg uppercase tracking-wider group"
          >
            View All 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative w-full h-[380px] rounded-3xl overflow-hidden mb-6 bg-surface border border-border">
                {/* Gold glow on hover */}
                <div className="absolute inset-0 bg-[var(--primary-maroon)]/30 group-hover:bg-transparent transition-all duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Floating link */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[var(--primary-gold)] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 z-20 shadow-[0_0_30px_var(--primary-gold)]">
                  <ExternalLink className="w-6 h-6 text-[#0A0506]" />
                </div>
              </div>
              
              <div>
                <div className="text-sm font-bold text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] uppercase tracking-widest mb-3">
                  {project.category}
                </div>
                <h4 className="text-2xl font-bold text-heading mb-3 group-hover:text-[var(--primary-maroon)] dark:group-hover:text-[var(--primary-gold)] transition-colors tracking-tight">
                  {project.title}
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
