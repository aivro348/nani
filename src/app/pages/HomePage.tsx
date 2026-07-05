import { lazy, Suspense } from 'react';
import { HeroSectionPro } from '../components/HeroSectionPro';
import { SectionSkeleton } from '../../app/components/ui/skeleton';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { GraduationCap, Briefcase, Cpu, Users, ArrowRight } from 'lucide-react';
import { useSEO } from '../../app/utils/useSEO';
import { ReviewsSection } from '../../education/components/ReviewsSection';

// Lazy load the companies section
const CompaniesSection = lazy(() => import('../components/CompaniesSection').then(m => ({ default: m.CompaniesSection })));

interface HomePageProps {
  setActiveSection: (section: string) => void;
}

export function HomePage({ setActiveSection }: HomePageProps) {
  const navigate = useNavigate();

  useSEO('Scaro Technologies | Empowering the Future', 'Scaro Technologies delivers enterprise-grade IT solutions, pioneering AI innovation, and transforms careers through elite skill-based education.');

  const DIVISIONS = [
    {
      id: 'academy',
      title: 'Scaro Academy',
      tagline: 'Interactive Online Courses',
      description: 'Unleash your potential with our meticulously crafted, skill-based education platform. Master the latest technologies and become industry-ready.',
      icon: GraduationCap,
      path: '/courses',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      border: 'hover:border-blue-500/50',
      gradient: 'from-blue-500/20 to-transparent'
    },
    {
      id: 'business',
      title: 'Business Solutions',
      tagline: 'Enterprise IT & Consulting',
      description: 'Transform your business with our cutting-edge IT consulting, software development, and cloud architecture services.',
      icon: Briefcase,
      path: '/business',
      color: 'text-[var(--primary-maroon)]',
      bg: 'bg-[var(--primary-maroon)]/10',
      border: 'hover:border-[var(--primary-maroon)]/50',
      gradient: 'from-[var(--primary-maroon)]/20 to-transparent'
    },
    {
      id: 'ai',
      title: 'AI Tools',
      tagline: 'Artificial Intelligence Ecosystem',
      description: 'Harness the power of Artificial Intelligence to accelerate your workflows. Explore our directory of powerful AI tools and innovations.',
      icon: Cpu,
      path: '/ai',
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
      border: 'hover:border-purple-500/50',
      gradient: 'from-purple-500/20 to-transparent'
    },
    {
      id: 'community',
      title: 'Community Hub',
      tagline: 'Connect & Grow',
      description: 'Join a thriving ecosystem of mentors, industry experts, and lifelong learners. Read our insights and get unparalleled support.',
      icon: Users,
      path: '/community',
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      border: 'hover:border-emerald-500/50',
      gradient: 'from-emerald-500/20 to-transparent'
    }
  ];

  return (
    <div className="space-y-0 bg-[#0a0a0a]">
      {/* Hero Section */}
      <section id="hero">
        <HeroSectionPro setActiveSection={setActiveSection} />
      </section>

      {/* Our Divisions Section */}
      <section id="our-divisions" className="py-32 relative z-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-bold tracking-wide uppercase mb-6"
            >
              Explore Our Ecosystem
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight"
            >
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-maroon)] to-red-500">Divisions</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 font-medium leading-relaxed"
            >
              From shaping the next generation of engineers to building enterprise software that scales globally, Scaro Technologies operates at the frontier of innovation.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {DIVISIONS.map((division, idx) => (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: 'easeOut' }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(division.path);
                }}
                className={`group relative bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200 shadow-2xl shadow-slate-200/50 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl ${division.border}`}
              >
                {/* Background Gradient Hover Effect */}
                <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${division.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -translate-y-1/2 translate-x-1/3`} />

                <div className={`w-20 h-20 rounded-2xl ${division.bg} ${division.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ease-out`}>
                  <division.icon className="w-10 h-10" />
                </div>
                
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">
                  {division.tagline}
                </h3>
                <h4 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
                  {division.title}
                </h4>
                
                <p className="text-slate-600 text-lg leading-relaxed mb-12">
                  {division.description}
                </p>

                <div className={`flex items-center text-sm font-bold ${division.color} mt-auto`}>
                  Explore {division.title}
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-3 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Global Impact / Companies */}
      <section id="global-impact" className="bg-white">
        <Suspense fallback={<SectionSkeleton />}>
          <CompaniesSection />
        </Suspense>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="bg-white">
        <ReviewsSection />
      </section>

    </div>
  );
}