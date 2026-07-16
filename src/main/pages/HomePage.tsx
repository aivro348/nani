import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router';
import {
  GraduationCap, Briefcase, Cpu, ArrowRight, CheckCircle2, Sparkles,
  Building2, Terminal, Code2, ShieldCheck, Zap, Database, Smartphone,
  Users, Mail, Phone, MapPin, Trophy, BookOpen, Layers, Check,
  Laptop, Globe, ArrowUpRight, Play, Server, MessageSquare, ArrowRightLeft,
  ChevronRight, Calendar, Star, HelpCircle, Instagram, Quote, ExternalLink
} from 'lucide-react';
import { useSEO } from '../../main/utils/useSEO';
import { CompaniesSection } from '../components/CompaniesSection';

export function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const educationSitelinks = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://scarotechnologies.vercel.app/",
    "name": "Scaro Academy",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://scarotechnologies.vercel.app/courses?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Scaro Academy Courses",
          "description": "Explore premium engineering and AI courses at Scaro Academy.",
          "url": "https://scarotechnologies.vercel.app/courses"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "Explore Projects",
          "description": "Browse hands-on engineering and software projects.",
          "url": "https://scarotechnologies.vercel.app/projects"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Engineering Roadmaps",
          "description": "Step-by-step career roadmaps for engineering students.",
          "url": "https://scarotechnologies.vercel.app/roadmap"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "About the Academy",
          "description": "Learn more about Scaro Academy and our mission.",
          "url": "https://scarotechnologies.vercel.app/about"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "Login to Portal",
          "description": "Sign in to your Scaro Academy account to access your courses.",
          "url": "https://scarotechnologies.vercel.app/login"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 6,
          "name": "Contact Academy",
          "description": "Get in touch with the Scaro Academy team.",
          "url": "https://scarotechnologies.vercel.app/contact"
        }
      ]
    }
  };

  useSEO(
    'Scaro Technologies | Unified Technology & Education Ecosystem',
    'Scaro Technologies connects enterprise IT solutions, elite skill-based education, and cutting-edge AI tools into one unified platform.',
    educationSitelinks
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#1E060A] overflow-hidden font-sans relative">
      
      {/* ─── SECTION 1: HERO (LOGO MAROON BACKGROUND) ─── */}
      <section className="relative min-h-[80vh] flex items-center bg-[#5C141D] text-white overflow-hidden py-16">
        {/* Precise engineering grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-70" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[var(--primary-gold)]/10 via-transparent to-transparent blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-8 text-left">


              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05]"
              >
                We build products.<br/>
                We teach engineers.<br/>
                <span className="text-[var(--primary-gold)]">We automate growth.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg text-slate-200 font-light leading-relaxed max-w-2xl"
              >
                Scaro Technologies operates a continuous innovation loop that links our enterprise solutions agency, hands-on student cohorts, and advanced AI platforms.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 pt-2"
              >
                <button aria-label="Action button" 
                  onClick={() => document.getElementById('academy-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[var(--primary-gold)] text-black font-black text-sm transition-all hover:bg-[#FAF8F5] active:scale-98 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  Explore Academy Paths
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button aria-label="Action button" 
                  onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/20 hover:bg-white/10 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  View Corporate Services
                </button>
              </motion.div>
            </div>

            {/* Right Graphics */}
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full max-w-[460px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl p-2 bg-[#FAF8F5]/5 backdrop-blur-md"
              >
                <div className="absolute inset-0 border border-[var(--primary-gold)]/20 rounded-2xl pointer-events-none" />
                <img
                  loading="eager"
                  src="/scaro_sectors_wide_banner.webp"
                  alt="Scaro Technologies Sectors"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>



      {/* ─── SECTION 3: SCARO ACADEMY DEEP-DIVE (WHITE BACKGROUND) ─── */}
      <section id="academy-section" className="py-24 bg-white border-b border-[rgba(92,20,29,0.06)] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Media Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-3xl overflow-hidden border border-[rgba(92,20,29,0.08)] shadow-2xl p-2 bg-[#FAF8F5]">
                <div className="absolute inset-0 border border-[var(--primary-gold)]/20 rounded-3xl pointer-events-none" />
                <img
                  loading="lazy"
                  src="/corporate_hero.webp"
                  alt="Academy Engineering Class"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-2">
                <span className="text-xs font-black tracking-widest text-[#5C141D] uppercase bg-[#5C141D]/5 px-3.5 py-1.5 rounded-full inline-block">01. Educational Sector</span>
                <h2 className="text-3xl sm:text-5xl font-black text-[#1E060A] tracking-tight">
                  Scaro Academy
                </h2>
                <p className="text-lg text-slate-600 font-light leading-relaxed">
                  Elite engineering cohorts featuring live developer mentorship, guaranteed internships, and real capstone builds. We teach what we engineer daily inside our IT division.
                </p>
              </div>

              {/* Real Course Preview Glimpse */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Featured Learning Paths</h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { id: 1, title: 'Python Programming Mastery', desc: 'Django, APIs, databases and automation.', badge: 'CSE / Coding' },
                    { id: 7, title: 'IoT & Embedded Systems', desc: 'Arduino, ESP32, MQTT protocols and sensor hubs.', badge: 'Embedded' },
                    { id: 9, title: 'VLSI Design & Verification', desc: 'Digital logic design, Verilog HDL and RTL simulation.', badge: 'ECE' }
                  ].map((cohort, index) => (
                    <div 
                      key={index} 
                      onClick={() => navigate(`/courses/${cohort.id}`)}
                      className="p-5 bg-[#FAF8F5] border border-[rgba(92,20,29,0.06)] rounded-xl relative space-y-2 hover:border-[#5C141D]/30 hover:shadow-md transition-all duration-300 cursor-pointer group"
                    >
                      <span className="text-[9px] font-bold text-[#5C141D] bg-[#5C141D]/5 px-2 py-0.5 rounded inline-block">{cohort.badge}</span>
                      <h5 className="text-[#1E060A] font-extrabold text-sm group-hover:text-[#5C141D] transition-colors">{cohort.title}</h5>
                      <p className="text-[11px] text-slate-500 font-light leading-relaxed">{cohort.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real Student Projects Preview Glimpse */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Sample Student Capstone Projects</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id: 1, title: 'Student Result Management System', tech: ['PHP', 'MySQL', 'Bootstrap'], desc: 'Web platform allowing admins to upload grades and students to view them securely.' },
                    { id: 2, title: 'Online Quiz Application', tech: ['React', 'Firebase', 'CSS'], desc: 'Interactive platform with real-time scoring, questions, and leaderboards.' }
                  ].map((project, index) => (
                    <div 
                      key={index} 
                      onClick={() => navigate(`/projects/${project.id}`)}
                      className="p-5 bg-[#FAF8F5] border border-[rgba(92,20,29,0.06)] rounded-xl relative space-y-2 hover:border-[#5C141D]/30 hover:shadow-md transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t, idx) => (
                          <span key={idx} className="text-[9px] font-bold text-slate-500 bg-white border border-slate-200/60 px-1.5 py-0.5 rounded">{t}</span>
                        ))}
                      </div>
                      <h5 className="text-[#1E060A] font-bold text-sm group-hover:text-[#5C141D] transition-colors">{project.title}</h5>
                      <p className="text-[11px] text-slate-500 font-light leading-relaxed">{project.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Glimpse */}
              <div className="p-5 bg-[#FAF8F5] border border-[rgba(92,20,29,0.06)] rounded-xl relative">
                <div className="absolute top-4 right-4 text-[#5C141D]/10">
                  <Quote className="w-10 h-10" />
                </div>
                <p className="text-xs text-slate-500 italic mb-4 leading-relaxed">
                  "Scaro Technologies transformed my career! The structured roadmap and live projects helped me land my dream job at Google. The mentorship was invaluable."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center font-bold text-xs text-blue-600">PS</div>
                  <div>
                    <h5 className="text-[#1E060A] font-bold text-xs">Priya Sharma</h5>
                    <p className="text-[10px] text-slate-400">Software Engineer at Google • CS/IT</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button aria-label="Action button" 
                  onClick={() => navigate('/courses')}
                  className="px-6 py-3.5 bg-[#5C141D] hover:bg-[#470f15] text-white font-bold rounded-xl text-xs transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-[#5c141d]/10"
                >
                  Explore Learning Cohorts <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 5: AI ACADEMY / AI DIVISION (GOLD / IVORY BACKGROUND) ─── */}
      <section className="py-24 relative bg-[#FAF3D1] border-b border-[rgba(92,20,29,0.06)] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#5c141d03_1px,transparent_1px),linear-gradient(to_bottom,#5c141d03_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-2">
                <span className="text-xs font-black tracking-widest text-[#5C141D] uppercase bg-[#5C141D]/10 px-3.5 py-1.5 rounded-full inline-block">02. Automation Sector</span>
                <h2 className="text-3xl sm:text-5xl font-black text-[#1E060A] tracking-tight">
                  Scaro AI Academy
                </h2>
                <p className="text-lg text-slate-700 font-light leading-relaxed">
                  Supercharging our education system and internal dev workflows. Explore our directory of AI assets, master professional prompt structures, and build using modern no-code builders.
                </p>
              </div>

              {/* Real AI Tools Preview Glimpse */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#5C141D]/60">Curated AI Tools Glimpse</h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { title: 'Lovable.ai', desc: 'AI full-stack web builder generating production-ready code.', badge: 'Popular', url: 'https://lovable.ai' },
                    { title: 'Bolt.new', desc: 'Coding assistant that builds and deploys applications instantly.', badge: 'Code Builder', url: 'https://bolt.new' },
                    { title: 'ChatGPT Pro', desc: 'Advanced writing, coding and business workflow automations.', badge: 'Core LLM', url: 'https://chat.openai.com' }
                  ].map((tool, index) => (
                    <a 
                      key={index} 
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 bg-white/40 border border-[#5C141D]/15 rounded-xl relative space-y-2 hover:border-[#5C141D]/40 hover:shadow-md transition-all duration-300 block group"
                    >
                      <span className="text-[9px] font-bold text-[#5C141D] bg-[#5C141D]/10 px-2 py-0.5 rounded inline-block">{tool.badge}</span>
                      <h5 className="text-[#1E060A] font-extrabold text-sm group-hover:text-[#5C141D] transition-colors">{tool.title}</h5>
                      <p className="text-[11px] text-slate-600 font-light leading-relaxed">{tool.desc}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Real AI Syllabus Prompt Glimpse */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#5C141D]/60">AI Integration Features</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Syllabus Prompt Engine', desc: 'Guides for engineering students utilizing optimized prompts for study and code revision.', badge: 'Learning' },
                    { title: 'No-Code Tool Stacks', desc: 'Workshops showing how to connect website builders, prompt databases, and pipelines.', badge: 'Building' }
                  ].map((feature, index) => (
                    <div 
                      key={index} 
                      onClick={() => navigate('/ai')}
                      className="p-5 bg-white/40 border border-[#5C141D]/15 rounded-xl relative space-y-2 hover:border-[#5C141D]/40 hover:shadow-md transition-all duration-300 cursor-pointer group"
                    >
                      <span className="text-[9px] font-bold text-[#5C141D] bg-[#5C141D]/10 px-2 py-0.5 rounded inline-block">{feature.badge}</span>
                      <h5 className="text-[#1E060A] font-bold text-sm group-hover:text-[#5C141D] transition-colors">{feature.title}</h5>
                      <p className="text-[11px] text-slate-600 font-light leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Testimonial Glimpse */}
              <div className="p-5 bg-white/40 border border-[#5C141D]/15 rounded-xl relative">
                <div className="absolute top-4 right-4 text-[#5C141D]/10">
                  <Quote className="w-10 h-10" />
                </div>
                <p className="text-xs text-slate-700 italic mb-4 leading-relaxed">
                  "The AI-powered learning paths are incredible. I went from basics to building ML models in 12 weeks. Now working on cutting-edge AI projects!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#5C141D]/10 flex items-center justify-center font-bold text-xs text-[#5C141D]">RV</div>
                  <div>
                    <h5 className="text-[#1E060A] font-bold text-xs">Rahul Verma</h5>
                    <p className="text-[10px] text-slate-500">Data Scientist at Microsoft • AI/DS</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button aria-label="Action button" 
                  onClick={() => navigate('/ai')}
                  className="px-6 py-3.5 bg-[#5C141D] hover:bg-[#470f15] text-white font-bold rounded-xl text-xs transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-[#5c141d]/10"
                >
                  Enter AI Hub <ArrowRight className="w-4 h-4" />
                </button>
                <button aria-label="Action button" 
                  onClick={() => navigate('/all-ai-tools')}
                  className="px-6 py-3.5 bg-white border border-[#5C141D]/20 text-[#5C141D] font-bold rounded-xl text-xs transition-all hover:bg-[#FAF8F5] cursor-pointer"
                >
                  60+ AI Tools Directory
                </button>
              </div>
            </div>

            {/* Media Image Column */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-3xl overflow-hidden border border-[#5C141D]/15 shadow-2xl p-2 bg-[#FAF8F5]">
                <div className="absolute inset-0 border border-white/20 rounded-3xl pointer-events-none" />
                <img
                  loading="lazy"
                  src="/ai-hero.webp"
                  alt="Scaro AI Engine Visuals"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 6: OUR SERVICES - SCARO BUSINESS (WHITE BACKGROUND) ─── */}
      <section id="services-section" className="py-24 relative bg-white border-b border-[rgba(92,20,29,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-3xl overflow-hidden border border-[rgba(92,20,29,0.08)] shadow-2xl p-2 bg-[#FAF8F5]">
                <div className="absolute inset-0 border border-[var(--primary-gold)]/20 rounded-3xl pointer-events-none" />
                <img
                  loading="lazy"
                  src="/business-hero.webp"
                  alt="Scaro Business Services"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-2">
                <span className="text-xs font-black tracking-widest text-[#5C141D] uppercase bg-[#5C141D]/5 px-3.5 py-1.5 rounded-full inline-block">03. Corporate Sector</span>
                <h2 className="text-3xl sm:text-5xl font-black text-[#1E060A] tracking-tight">
                  Scaro Business
                </h2>
                <p className="text-lg text-slate-600 font-light leading-relaxed">
                  Enterprise-grade software solutions, high-performance web architecture, and microservices engineered for business scalability.
                </p>
              </div>

              {/* Real Corporate Projects Preview Glimpse */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Shipped Corporate Platforms</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Geo-Silicon', category: 'Enterprise Tech', link: 'https://geo-silicon.com', desc: 'Next-generation enterprise technology portal with advanced data visualization and control.' },
                    { title: 'Balu Associates', category: 'Corporate Website', link: 'https://baluassociates.net', desc: 'Professional corporate presence with highly optimized performance and scalable architecture.' }
                  ].map((proj, index) => (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" key={index} className="p-5 bg-[#FAF8F5] border border-[rgba(92,20,29,0.06)] rounded-xl relative space-y-2 hover:border-[#5C141D]/30 hover:shadow-md transition-all duration-300 block">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-bold text-slate-500 bg-white border border-slate-200/60 px-1.5 py-0.5 rounded">{proj.category}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#5C141D]" />
                      </div>
                      <h5 className="text-[#1E060A] font-bold text-sm pt-1">{proj.title}</h5>
                      <p className="text-[11px] text-slate-500 font-light leading-relaxed">{proj.desc}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Corporate Services Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Custom Web Design', desc: 'Responsive web portals using Next.js & React frameworks.', icon: Laptop },
                  { title: 'E-Commerce Engines', desc: 'High-speed online shopping systems integrated with payment nodes.', icon: Globe },
                  { title: 'Mobile Applications', desc: 'Optimized native and cross-platform mobile apps releases.', icon: Smartphone },
                  { title: 'Enterprise AI Setups', desc: 'Custom databases, prompt pipelines, and analytics setups.', icon: Cpu }
                ].map((service, index) => (
                  <div key={index} className="p-5 bg-[#FAF8F5] border border-[rgba(92,20,29,0.06)] rounded-xl flex gap-3.5">
                    <service.icon className="w-5 h-5 text-[#5C141D] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-[#1E060A] font-bold text-sm mb-1">{service.title}</h5>
                      <p className="text-[11px] text-slate-500 font-light leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Client Testimonial */}
              <div className="p-5 bg-[#FAF8F5] border border-[rgba(92,20,29,0.06)] rounded-xl relative">
                <div className="absolute top-4 right-4 text-[#5C141D]/10">
                  <Quote className="w-10 h-10" />
                </div>
                <p className="text-xs text-slate-500 italic mb-4 leading-relaxed">
                  "Scaro Business delivered high-performance web architecture on time, helping our operational efficiency scale by 200%. Highly recommended!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center font-bold text-xs text-emerald-600">CO</div>
                  <div>
                    <h5 className="text-[#1E060A] font-bold text-xs">Corporate Client</h5>
                    <p className="text-[10px] text-slate-400">Enterprise Partner • Operations Lead</p>
                  </div>
                </div>
              </div>

              <button aria-label="Action button" 
                onClick={() => navigate('/business')}
                className="px-6 py-3.5 bg-[#5C141D] hover:bg-[#470f15] text-white font-bold rounded-xl text-xs transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-[#5c141d]/10"
              >
                View Service Packages <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 7: DETAILED ACHIEVEMENTS & AWARDS (WHITE BACKGROUND) ─── */}
      <section id="achievements-section" className="py-24 bg-white border-b border-[rgba(92,20,29,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black tracking-widest text-[#5C141D] uppercase">Recognitions</span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1E060A] tracking-tight mt-2">
              Awards & Credentials
            </h2>
            <p className="text-base text-slate-500 font-light mt-3">
              Recognized by industry leaders and educational institutions for innovation and student choice.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Best EdTech Platform 2025', org: 'Tech Excellence Awards', icon: '🏆' },
              { title: 'Top 10 Learning Platforms', org: 'EdTech India', icon: '⭐' },
              { title: 'Innovation in AI Education', org: 'National Education Summit', icon: '🎓' },
              { title: 'Student Choice Award', org: 'Campus Connect', icon: '💡' }
            ].map((rec, i) => (
              <div key={i} className="bg-[#FAF8F5] border border-[rgba(92,20,29,0.05)] rounded-2xl p-6 text-center hover:shadow-md transition-all duration-300">
                <div className="text-4xl mb-4">{rec.icon}</div>
                <h4 className="text-sm font-extrabold text-[#1E060A] mb-2">{rec.title}</h4>
                <p className="text-xs text-slate-500 font-light">{rec.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: REALITY PHILOSOPHY ─── */}
      <section className="py-28 relative bg-[#FAF3D1] border-b border-[rgba(92,20,29,0.06)] text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="w-10 h-10 rounded-full bg-[#5C141D]/10 border border-[#5C141D]/10 flex items-center justify-center mx-auto">
            <Code2 className="w-5 h-5 text-[#5C141D]" />
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-[#1E060A] leading-relaxed italic px-4">
            "We aren't just teaching theory. We are an active IT company building real products, and we bring that exact industry DNA into our Academy and AI tools."
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-[#5C141D]" />
            <span className="text-[10px] font-black tracking-widest text-[#5C141D] uppercase">Philosophy & DNA</span>
            <span className="h-[1px] w-8 bg-[#5C141D]" />
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: PLATFORM STATISTICS ─── */}
      <section className="py-24 relative bg-white border-b border-[rgba(92,20,29,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '5K+', label: 'Learners Trained', desc: 'Digital & Live Cohorts' },
              { num: '25+', label: 'Industry Experts', desc: 'Corporate Mentors' },
              { num: '20+', label: 'Domains Cover', desc: 'Engineering & Software' },
              { num: '100+', label: 'Hands-on Projects', desc: 'Live System Tasks' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-[#FAF8F5] border border-[rgba(92,20,29,0.05)] rounded-2xl group transition-all duration-300 hover:shadow-md">
                <h3 className="text-3xl sm:text-4xl font-black text-[#5C141D] tracking-tight mb-1">
                  {stat.num}
                </h3>
                <h4 className="text-[#1E060A] font-extrabold text-sm mb-1">{stat.label}</h4>
                <p className="text-[10px] text-slate-400 font-light">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



    </div>
  );
}