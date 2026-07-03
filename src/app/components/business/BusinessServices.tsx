import { Globe, Smartphone, Server, Brain, Activity } from 'lucide-react';

export function BusinessServices() {
  const services = [
    {
      title: 'Web App Development',
      description: 'Full-stack web applications built with modern frameworks — from responsive frontends to robust backends — engineered for performance and scale.',
      tags: ['React / Next.js', 'Node.js', 'REST & GraphQL'],
      icon: Globe
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform and native mobile apps for iOS & Android — smooth UX, offline-first architecture, and seamless backend integration.',
      tags: ['React Native', 'Flutter', 'iOS & Android'],
      icon: Smartphone
    },
    {
      title: 'SaaS Product Engineering',
      description: 'Multi-tenant SaaS platforms with subscription billing, role-based access, white-labelling, and enterprise-grade security built to scale from day one.',
      tags: ['Multi-tenant', 'Microservices', 'API-first'],
      icon: Server
    },
    {
      title: 'AI & ML Integration',
      description: 'Embed intelligence into your products — LLM-powered features, computer vision, recommendation engines, and NLP pipelines with production-grade MLOps.',
      tags: ['LLM / GPT', 'NLP & Vision', 'MLOps'],
      icon: Brain
    },
    {
      title: 'Data & Analytics Platforms',
      description: 'Real-time dashboards, data pipelines, and BI solutions that turn raw data into decisions — powered by modern warehousing and streaming infrastructure.',
      tags: ['BI Dashboards', 'ETL Pipelines', 'Real-time Streaming'],
      icon: Activity
    }
  ];

  return (
    <section id="services" className="py-32 px-4 max-w-7xl mx-auto relative">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3 sticky top-32 self-start">
          <div className="w-16 h-1 bg-[var(--primary-maroon)] dark:bg-[var(--primary-gold)] mb-8 rounded-full" />
          <h2 className="text-sm font-black text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] uppercase tracking-[0.2em] mb-4">What We Build</h2>
          <h3 className="text-5xl font-black text-heading mb-8 leading-[1.1] tracking-tight">Enterprise AI Solutions</h3>
          <p className="text-xl text-text-secondary leading-relaxed mb-12">
            End-to-end platforms engineered for scale, powered by cutting-edge AI and battle-tested architecture.
          </p>
          
          <div className="bg-surface border border-border p-8 rounded-3xl space-y-6 hidden lg:block shadow-sm">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="text-4xl font-black text-heading">35+</span>
              <span className="text-sm font-bold text-text-muted text-right uppercase tracking-wider">Projects<br/>Delivered</span>
            </div>
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="text-4xl font-black text-heading">20+</span>
              <span className="text-sm font-bold text-text-muted text-right uppercase tracking-wider">Enterprise<br/>Clients</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-4xl font-black text-heading">99%</span>
              <span className="text-sm font-bold text-text-muted text-right uppercase tracking-wider">Uptime<br/>SLA</span>
            </div>
          </div>
        </div>
        
        <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <div key={i} className="group bg-page-bg border border-border p-8 rounded-3xl hover:border-[var(--primary-maroon)]/50 hover:shadow-xl hover:shadow-[var(--primary-maroon)]/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-surface border border-border text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <svc.icon className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-bold text-heading mb-4 tracking-tight">{svc.title}</h4>
              <p className="text-text-secondary text-base leading-relaxed mb-8">{svc.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {svc.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-surface text-xs font-bold text-text-muted rounded-lg border border-border uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
