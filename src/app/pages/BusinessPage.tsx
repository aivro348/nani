import { useSEO } from '../utils/useSEO';
import { PageTitle } from '../components/PageTitle';
import { motion } from 'motion/react';
import { 
  Globe, 
  Smartphone, 
  LineChart, 
  Database, 
  Search, 
  Server,
  Code2,
  ExternalLink,
  Award,
  CheckCircle2,
  Users
} from 'lucide-react';

export function BusinessPage() {
  useSEO(
    'Scaro Technologies Business | Enterprise AI & Software Solutions',
    'Official corporate services by Scaro Technologies: Enterprise AI Solutions, Web & Mobile App Development, and Data Analytics.'
  );

  const services = [
    {
      title: 'Web App Development',
      description: 'Full-stack web applications built with modern frameworks — from responsive frontends to robust backends — engineered for performance and scale.',
      tags: ['React / Next.js', 'Node.js', 'REST & GraphQL', 'Custom Websites', 'Landing Pages'],
      icon: Globe
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform and native mobile apps for iOS & Android — smooth UX, offline-first architecture, and seamless backend integration.',
      tags: ['React Native', 'Flutter', 'iOS', 'Android', 'Custom Apps'],
      icon: Smartphone
    },
    {
      title: 'Data Engineering & Analytics',
      description: 'Transform your raw business data into actionable insights with robust data pipelines and analytics platforms.',
      tags: ['BI Dashboards', 'ETL Pipelines', 'Real-time Streaming', 'Data Analysis'],
      icon: Database
    },
    {
      title: 'Digital Presence & SEO',
      description: 'Dominate local search rankings and build a powerful brand presence that converts visitors into customers.',
      tags: ['Google Business', 'Business Profile Optimization', 'Local SEO'],
      icon: Search
    }
  ];

  const projects = [
    {
      title: 'GST Billing & Accounting System',
      category: 'FinTech Enterprise',
      description: 'A web-based application built with React and Node.js that automates GST calculations, invoice generation, purchase management, ITC tracking, GSTR-3B reporting, and customer/vendor accounting. It provides real-time financial insights through an interactive dashboard, ensuring accurate, efficient, and GST-compliant business operations.',
      tech: ['React.js', 'Node.js', 'React Router', 'Redux Toolkit'],
      featured: true
    },
    {
      title: 'BaluAssociates.net',
      category: 'Corporate Website',
      description: 'A professional web presence designed for high conversion and corporate authority.',
      tech: ['Next.js', 'TailwindCSS'],
      featured: false
    },
    {
      title: 'NaveenTextiles.net',
      category: 'E-Commerce & Retail',
      description: 'Modern digital storefront engineered for fast load times and seamless checkout experiences.',
      tech: ['React', 'Node.js'],
      featured: false
    },
    {
      title: 'Kadagwrs.vercel.app',
      category: 'Web Application',
      description: 'Custom software solution built for specific industry operational needs.',
      tech: ['React', 'Firebase'],
      featured: false
    }
  ];

  const clients = ['Google', 'Wipro', 'Capgemini', 'TechArdutree', 'Digi'];

  const processSteps = [
    { 
      step: '01', 
      title: 'Discovery', 
      desc: 'Deep-dive into your business goals, technical landscape, and data ecosystem to craft a precise solution blueprint.' 
    },
    { 
      step: '02', 
      title: 'Build & Iterate', 
      desc: 'Agile sprints with continuous delivery, automated testing, and live demos so you see progress every week.' 
    },
    { 
      step: '03', 
      title: 'Launch & Scale', 
      desc: 'Production deployment with full monitoring, performance tuning, and ongoing support as you scale to millions of users.' 
    }
  ];

  return (
    <div className="min-h-screen bg-page-bg text-page-fg pb-16">
      
      {/* Enterprise Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border bg-surface">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03] bg-[bottom_1px_center]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] border border-[var(--primary-maroon)]/20 mb-8 font-semibold"
          >
            <Server className="w-5 h-5" />
            <span>Enterprise AI Solutions</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-heading tracking-tight mb-8"
          >
            End-to-end platforms <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-maroon)] to-[var(--primary-gold)]">
              engineered for scale.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Powered by cutting-edge AI and battle-tested architecture. We build the software that runs modern enterprises.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-heading mb-4">What We Build</h2>
          <p className="text-xl text-text-secondary">Software support and services engineered for performance.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((svc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-8 rounded-3xl shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--primary-maroon)] text-white flex items-center justify-center mb-6 shadow-md">
                <svc.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-heading mb-4">{svc.title}</h3>
              <p className="text-text-secondary text-lg mb-6 leading-relaxed">{svc.description}</p>
              <div className="flex flex-wrap gap-2">
                {svc.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-surface text-text-primary text-sm font-medium rounded-lg border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Work / Portfolio */}
      <section className="py-24 px-4 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-heading mb-4">Featured Work</h2>
              <p className="text-xl text-text-secondary">A selection of enterprise platforms we've shipped.</p>
            </div>
            <button className="flex items-center gap-2 text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] font-bold hover:underline">
              View All Projects <ExternalLink className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div 
                key={i} 
                className={`bg-card border border-border rounded-3xl p-8 shadow-md flex flex-col ${project.featured ? 'lg:col-span-3' : 'lg:col-span-1'}`}
              >
                <div className="mb-6">
                  <span className="text-sm font-bold text-[var(--primary-gold)] uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-3xl font-bold text-heading mt-2">{project.title}</h3>
                </div>
                <p className="text-text-secondary text-lg mb-8 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="flex items-center gap-1.5 text-sm font-semibold text-text-primary bg-page-bg px-3 py-1.5 rounded-lg">
                        <Code2 className="w-4 h-4 text-[var(--primary-maroon)]" /> {t}
                      </span>
                    ))}
                  </div>
                  <button className="px-6 py-2.5 bg-[var(--primary-maroon)] text-white font-bold rounded-xl hover:bg-[var(--dark-maroon)] transition-colors">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By & Accreditation */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-heading mb-12">Trusted By Our Clients</h2>
        <p className="text-text-secondary mb-10">Powering enterprise teams across India and Southeast Asia.</p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map(client => (
            <span key={client} className="text-3xl md:text-4xl font-black text-slate-400 hover:text-[var(--primary-maroon)] transition-colors cursor-default">
              {client}
            </span>
          ))}
        </div>

        <div className="mt-24 pt-16 border-t border-border">
          <h2 className="text-3xl font-bold text-heading mb-8">Accreditation Partners</h2>
          <p className="text-text-secondary mb-10">Certified and recognised by leading government and industry bodies.</p>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            <div className="flex items-center gap-3 bg-surface px-6 py-4 rounded-2xl border border-border shadow-sm">
              <Award className="w-8 h-8 text-[var(--primary-gold)]" />
              <span className="text-xl font-bold text-heading">AICTE Approved</span>
            </div>
            <div className="flex items-center gap-3 bg-surface px-6 py-4 rounded-2xl border border-border shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              <span className="text-xl font-bold text-heading">DPIIT Recognized</span>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 px-4 bg-[var(--primary-maroon)] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">A battle-tested delivery framework that takes your idea from concept to production.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <div className="text-5xl font-black text-[var(--primary-gold)]/20 mb-6">{step.step}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-red-100/80 text-lg leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 px-4 max-w-7xl mx-auto text-center">
        <div className="w-20 h-20 bg-[var(--primary-gold)]/10 text-[var(--primary-gold)] rounded-3xl flex items-center justify-center mx-auto mb-8">
          <Users className="w-10 h-10" />
        </div>
        <h2 className="text-4xl font-bold text-heading mb-6">The Minds Behind It</h2>
        <p className="text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
          Engineers, AI researchers, and product thinkers obsessed with building systems that scale.
        </p>
      </section>

    </div>
  );
}
