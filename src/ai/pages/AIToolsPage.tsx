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
      <section className="relative w-full min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/ai-hero.png" 
            alt="Futuristic AI Brain Core" 
            className="w-full h-full object-cover object-center opacity-70 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-transparent opacity-80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center h-full pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-[var(--primary-maroon)]/20 text-[var(--primary-maroon)] border border-[var(--primary-maroon)]/30 rounded-full text-xs sm:text-sm font-black tracking-widest uppercase mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(139,0,0,0.3)]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Scaro AI Division</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.1] mb-8 drop-shadow-2xl"
            >
              Pioneering the next era of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-maroon)] via-[#ff3b00] to-orange-400">
                Artificial Intelligence.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 font-medium mb-12 max-w-2xl leading-relaxed"
            >
              At Scaro Technologies, we build and integrate state-of-the-art AI solutions. From intelligent automation to machine learning pipelines, we help enterprises harness AI to solve complex challenges. Explore our comprehensive AI ecosystem below.
            </motion.p>
            
            {/* Quick Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
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
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-lg hover:-translate-y-0.5 cursor-pointer backdrop-blur-md border border-white/10 text-white bg-black/40 hover:bg-black/60`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center`}>
                    <link.icon className={`w-4 h-4 ${link.color}`} />
                  </div>
                  {link.label}
                </a>
              ))}
            </motion.div>
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