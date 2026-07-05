import { useSEO } from '../../app/utils/useSEO';
import { AIToolsListSection } from '../components/AIToolsListSection';
import { AICoursesSection } from '../components/AICoursesSection';
import { AIRoadmapsSection } from '../components/AIRoadmapsSection';
import { EducationContact } from '../../education/components/EducationContact';
import { motion } from 'motion/react';
import { Sparkles, Zap, Globe, GraduationCap, Map, Wrench, MessageSquare } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function AIToolsPage() {
  const location = useLocation();

  useSEO(
    'Scaro AI Division | Pioneering Artificial Intelligence',
    'Explore Scaro Technologies\' AI division — AI courses, career roadmaps, enterprise AI tools, and expert mentorship to launch your AI career.'
  );

  // Handle hash scrolling
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

  const QUICK_LINKS = [
    { icon: GraduationCap, label: 'AI Courses', href: '#courses', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { icon: Map, label: 'Roadmaps', href: '#roadmaps', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { icon: Wrench, label: 'AI Tools', href: '#tools', color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { icon: MessageSquare, label: 'Contact', href: '#contact', color: 'text-amber-500', bg: 'bg-amber-500/10' },
  ];

  return (
    <div className="min-h-screen bg-page-bg text-page-fg pb-0">
      
      {/* AI Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border bg-surface">
        <div className="absolute inset-0 bg-[var(--primary-maroon)]/[0.03] bg-[bottom_1px_center]" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary-maroon)]/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff3b00]/10 rounded-full blur-3xl opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] border border-[var(--primary-maroon)]/20 mb-8 font-bold tracking-widest uppercase text-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Scaro AI Division</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-heading tracking-tight mb-8 leading-[1.1]"
          >
            Pioneering the next era of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-maroon)] to-[#ff3b00]">
              Artificial Intelligence.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            At Scaro Technologies, we build and integrate state-of-the-art AI solutions. From intelligent automation to machine learning pipelines, we help enterprises harness AI to solve complex challenges. Explore our comprehensive AI ecosystem below.
          </motion.p>
          
          {/* Quick Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {QUICK_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(link.href.replace('#', ''));
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <div className={`w-8 h-8 rounded-full ${link.bg} flex items-center justify-center`}>
                  <link.icon className={`w-4 h-4 ${link.color}`} />
                </div>
                <span className="font-bold text-sm text-heading">{link.label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Courses Section */}
      <section>
        <AICoursesSection previewOnly={true} />
      </section>

      {/* AI Roadmaps Section */}
      <section>
        <AIRoadmapsSection previewOnly={true} />
      </section>

      {/* AI Tools Directory */}
      <section id="tools" className="scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-8">
          <div className="text-center max-w-3xl mx-auto mb-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] rounded-full text-sm font-bold tracking-wide uppercase mb-6 border border-[var(--primary-maroon)]/20"
            >
              <Wrench className="w-4 h-4" />
              Tool Directory
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-heading tracking-tight mb-6"
            >
              Our AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-maroon)] to-[#ff3b00]">Tools Arsenal</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-secondary leading-relaxed"
            >
              Discover the most powerful AI models, developer tools, and productivity suites trusted by modern engineering teams.
            </motion.p>
          </div>
        </div>
        <AIToolsListSection previewOnly={true} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24">
        <EducationContact />
      </section>
      
    </div>
  );
}