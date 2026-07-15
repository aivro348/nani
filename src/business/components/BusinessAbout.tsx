import { motion } from 'motion/react';
import { Target, Rocket, Calendar, Users, Shield, Cpu, Code, Brain, Smartphone, Server } from 'lucide-react';

export function BusinessAbout() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary-maroon)]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--primary-gold)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[var(--primary-gold)] uppercase tracking-[0.2em] mb-4 block"
          >
            About Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            The Web & AI Studio <span className="text-[var(--primary-maroon)]">Trusted Since 2026</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            Scaro Technologies is a Bengaluru & Chennai based AI-powered website design, e-commerce, mobile app and automation company helping businesses grow online since 2026.
          </motion.p>
        </div>

        {/* Our Story Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary-gold)]/20 to-[var(--primary-maroon)]/10 rounded-[2.5rem] blur-xl" />
            <img loading="lazy" decoding="async" src="/unsplash/img_0b5d0c4c35.webp" 
              alt="Team collaborating" 
              className="relative w-full h-[500px] object-cover rounded-[2.5rem] border border-slate-100 shadow-2xl"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-black text-slate-900 mb-6">From Web Design Studio to AI-First Agency</h3>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Established in 2026, Scaro Technologies has evolved into a modern AI-powered digital solutions agency specializing in websites, e-commerce, mobile apps, AI chatbots, AI agents and business automation.
              </p>
              <p>
                What began as a small team in Bangalore building HTML websites for local businesses is today a full-service partner of choice for startups, SMEs and corporates across India — combining design craft, engineering rigor and the latest AI tools.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Target className="w-8 h-8 text-[var(--primary-maroon)] mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h4>
                <p className="text-slate-600 text-sm">Help businesses leverage websites, AI technologies and automation to generate more leads, improve engagement and accelerate growth.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Rocket className="w-8 h-8 text-[var(--primary-gold)] mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h4>
                <p className="text-slate-600 text-sm">To become India's most trusted AI-first website, mobile app and digital transformation company — empowering 10,000+ businesses.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-slate-900 mb-4">Our Journey</h3>
            <p className="text-slate-600">From foundation to Autonomous Agents</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--primary-gold)] to-[var(--primary-maroon)] rounded-full opacity-20" />
            
            {[
              { year: '2026', text: 'Founded as a full-service Web & AI agency with a mission to bring Agentic AI solutions to businesses.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex items-center justify-between mb-8 ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-5/12" />
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-[var(--primary-maroon)] rounded-full shadow-lg z-10" />
                <div className={`w-5/12 p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <span className="text-2xl font-black text-[var(--primary-gold)] block mb-2">{item.year}</span>
                  <p className="text-slate-600 text-sm font-medium">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team & Expertise Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-slate-900 mb-4">Specialists Across Web, Mobile & AI</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
            {[
              { icon: Users, title: 'Founders & Strategists', desc: 'Experienced leadership driving digital transformation.' },
              { icon: Code, title: 'Website Developers', desc: 'HTML, PHP, Next.js, React full-stack engineers.' },
              { icon: Server, title: 'WordPress Experts', desc: 'Custom themes, plugins, headless WP and security.' },
              { icon: Rocket, title: 'Shopify Specialists', desc: 'Theme dev, app integration & conversion optimization.' },
              { icon: Smartphone, title: 'Mobile App Developers', desc: 'Android, Flutter and FlutterFlow specialists.' },
              { icon: Brain, title: 'AI Automation Experts', desc: 'Chatbots, AI agents, RAG, workflow automation.' }
            ].map((team, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center"
              >
                <div className="w-12 h-12 mx-auto bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] rounded-xl flex items-center justify-center mb-4">
                  <team.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{team.title}</h4>
                <p className="text-sm text-slate-500">{team.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-slate-900 mb-4">What We Stand For</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Innovation', desc: 'Early on emerging web & AI tech.' },
              { title: 'Quality', desc: 'Premium craft on every pixel.' },
              { title: 'Trust', desc: 'Honest pricing, real timelines.' },
              { title: 'Success', desc: 'Outcomes guide every decision.' },
              { title: 'Transparency', desc: 'Clear contracts & reports.' },
              { title: 'Affordability', desc: 'Premium quality at fair price.' },
              { title: 'Partnerships', desc: 'Clients stay with us for 5+ years.' },
              { title: 'Security', desc: 'Secure hosting, GDPR compliant.' }
            ].map((val, idx) => (
              <div key={idx} className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <Shield className="w-5 h-5 text-[var(--primary-gold)] mb-3" />
                <h4 className="font-bold text-slate-900 mb-1">{val.title}</h4>
                <p className="text-sm text-slate-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
