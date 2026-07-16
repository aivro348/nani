import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router';
import {
  GraduationCap, Briefcase, Cpu, ArrowRight, CheckCircle2, Sparkles,
  Building2, Terminal, Code2, ShieldCheck, Zap, Database, Smartphone,
  Users, Mail, Phone, MapPin, Trophy, BookOpen, Layers, Check,
  Laptop, Globe, ArrowUpRight, Play, Server, MessageSquare, ArrowRightLeft
} from 'lucide-react';
import { useSEO } from '../../main/utils/useSEO';

export function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'all' | 'business' | 'academy' | 'ai'>('all');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.98]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

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
    <div ref={containerRef} className="bg-[#FAF8F5] min-h-screen text-[#1E060A] overflow-hidden font-sans relative">
      
      {/* ─── STUNNING LIGHT MESH BACKGROUNDS ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft, professional gradient overlays (White / Cream / Subtle Gold / Maroon glow) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-radial from-[var(--primary-maroon)]/[0.04] via-transparent to-transparent blur-[120px]" />
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[var(--primary-gold)]/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-10 w-[600px] h-[600px] bg-[var(--primary-maroon)]/[0.02] rounded-full blur-[160px]" />
        
        {/* Subtle grid pattern overlay for engineering precision */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#5c141d06_1px,transparent_1px),linear-gradient(to_bottom,#5c141d06_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* ─── SECTION 1: PROFESSIONAL HERO & BANNER GRID ─── */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="grid lg:grid-cols-12 gap-12 items-center"
          >
            {/* Copy Column */}
            <div className="lg:col-span-7 text-left space-y-8">
              {/* Ecosystem Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white border border-[rgba(92,20,29,0.1)] shadow-sm relative group overflow-hidden"
              >
                <Sparkles className="w-4 h-4 text-[var(--primary-gold)]" />
                <span className="text-[11px] font-extrabold tracking-widest text-[#5C141D] uppercase">Unified Technology Ecosystem</span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              </motion.div>

              {/* Professional Title */}
              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-[#1E060A]"
                >
                  Integrating Enterprise Solutions & <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-maroon)] via-[var(--primary-gold)] to-[var(--primary-maroon)]">
                    Elite Engineering Education
                  </span>
                </motion.h1>
              </div>

              {/* Professional Value Statement */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-base sm:text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl"
              >
                Scaro Technologies connects enterprise-grade software development, hands-on learning cohorts, and automated AI directories into a unified continuous loop.
              </motion.p>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center gap-4 pt-2"
              >
                <button aria-label="Action button" 
                  onClick={() => {
                    document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#5C141D] text-white font-black text-sm transition-all hover:bg-[#470f15] hover:shadow-lg hover:shadow-[#5c141d]/10 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Explore Ecosystem
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button aria-label="Action button" 
                  onClick={() => {
                    document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white border border-[rgba(92,20,29,0.15)] hover:bg-[#FAF8F5] text-[#5C141D] font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  Our Core Pillars
                </button>
              </motion.div>
            </div>

            {/* Graphics/Mockup Column */}
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative w-full max-w-[450px] aspect-[4/3] rounded-2xl overflow-hidden border border-[rgba(92,20,29,0.1)] shadow-xl bg-white p-3"
              >
                {/* Decorative gold border frame */}
                <div className="absolute inset-0 border-[3px] border-[var(--primary-gold)]/10 rounded-2xl pointer-events-none" />
                
                <img
                  loading="eager"
                  src="/scaro_sectors_wide_banner.webp"
                  alt="Scaro Technologies Sector Showcase"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 2: THE COHESIVE SYSTEM LOOP (FLOW DIAGRAM) ─── */}
      <section id="ecosystem" className="py-24 border-y border-[rgba(92,20,29,0.08)] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-[1px] w-6 bg-[var(--primary-gold)]" />
              <span className="text-[10px] font-black tracking-widest text-[#5C141D] uppercase">How It Connects</span>
              <span className="h-[1px] w-6 bg-[var(--primary-gold)]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E060A] tracking-tight">
              Our Continuous Lifecycle
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-light mt-3">
              Rather than keeping software development and training isolated, Scaro links enterprise outputs directly into academic blueprints and automation strategies.
            </p>
          </div>

          {/* Workflow Diagram */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="p-8 bg-[#FAF8F5] border border-[rgba(92,20,29,0.08)] rounded-2xl relative space-y-4">
              <div className="absolute -top-4 left-8 bg-[#5C141D] text-[var(--primary-gold)] font-mono font-black text-xs px-3.5 py-1.5 rounded-lg shadow-sm border border-[var(--primary-gold)]/20">
                STAGE 01
              </div>
              <div className="pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[rgba(92,20,29,0.06)] flex items-center justify-center shadow-sm">
                  <Building2 className="w-5 h-5 text-[#5C141D]" />
                </div>
                <h3 className="font-extrabold text-lg text-[#1E060A]">Enterprise Development</h3>
              </div>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                Our core agency engineers enterprise websites, custom portals, databases, and digital infrastructure for corporate clients.
              </p>
              <div className="text-xs font-bold text-[#5C141D] flex items-center gap-1.5">
                Feeds into Academy <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-8 bg-[#FAF8F5] border border-[rgba(92,20,29,0.08)] rounded-2xl relative space-y-4">
              <div className="absolute -top-4 left-8 bg-[#5C141D] text-[var(--primary-gold)] font-mono font-black text-xs px-3.5 py-1.5 rounded-lg shadow-sm border border-[var(--primary-gold)]/20">
                STAGE 02
              </div>
              <div className="pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[rgba(92,20,29,0.06)] flex items-center justify-center shadow-sm">
                  <GraduationCap className="w-5 h-5 text-[#5C141D]" />
                </div>
                <h3 className="font-extrabold text-lg text-[#1E060A]">Elite Cohort Mentorship</h3>
              </div>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                The actual systems and structures engineered in Stage 1 are used to construct the curriculum. Students get direct access to real, production-level code.
              </p>
              <div className="text-xs font-bold text-[#5C141D] flex items-center gap-1.5">
                Feeds into Automation <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-8 bg-[#FAF8F5] border border-[rgba(92,20,29,0.08)] rounded-2xl relative space-y-4">
              <div className="absolute -top-4 left-8 bg-[#5C141D] text-[var(--primary-gold)] font-mono font-black text-xs px-3.5 py-1.5 rounded-lg shadow-sm border border-[var(--primary-gold)]/20">
                STAGE 03
              </div>
              <div className="pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[rgba(92,20,29,0.06)] flex items-center justify-center shadow-sm">
                  <Cpu className="w-5 h-5 text-[#5C141D]" />
                </div>
                <h3 className="font-extrabold text-lg text-[#1E060A]">AI Workflows</h3>
              </div>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                We design specific AI automation structures, prompt templates, and no-code tool integration guides to speed up workflows for developers and students alike.
              </p>
              <div className="text-xs font-bold text-[#5C141D] flex items-center gap-1.5">
                Completes the cycle <ArrowRightLeft className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: DEEP-DIVE CORE PILLARS (TABS & BENTO GRID) ─── */}
      <section id="pillars" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <span className="text-[10px] font-black tracking-widest text-[#5C141D] uppercase mb-1 block">Unified Verticals</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1E060A] tracking-tight">Our Core Offerings</h2>
            </div>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 p-1 bg-white border border-[rgba(92,20,29,0.08)] rounded-xl shadow-sm">
              {(['all', 'business', 'academy', 'ai'] as const).map((tab) => (
                <button aria-label="Action button" 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === tab 
                      ? 'bg-[#5C141D] text-white shadow-sm' 
                      : 'text-slate-500 hover:text-[#5C141D]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            <AnimatePresence mode="popLayout">
              
              {/* PILLAR 1: BUSINESS */}
              {(activeTab === 'all' || activeTab === 'business') && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white border border-[rgba(92,20,29,0.08)] rounded-[2rem] p-8 sm:p-12 shadow-sm relative overflow-hidden group hover:border-[var(--primary-gold)]/40 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6">
                      <div className="w-12 h-12 bg-[#5C141D]/5 rounded-xl border border-[rgba(92,20,29,0.08)] flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-[#5C141D]" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#1E060A]">Scaro Business</h3>
                      <p className="text-slate-600 font-light leading-relaxed text-sm">
                        High-quality professional IT solutions, custom software development, Web architectures, and enterprise database integrations optimized for client operations.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-[#FAF8F5] border border-[rgba(92,20,29,0.06)] rounded-xl">
                          <h4 className="text-[#1E060A] font-bold text-xs mb-1">Tailored Tech</h4>
                          <p className="text-[10px] text-slate-500 leading-normal">Optimized microservices, APIs, and dashboard infrastructures.</p>
                        </div>
                        <div className="p-4 bg-[#FAF8F5] border border-[rgba(92,20,29,0.06)] rounded-xl">
                          <h4 className="text-[#1E060A] font-bold text-xs mb-1">Architecture</h4>
                          <p className="text-[10px] text-slate-500 leading-normal">Clean code patterns, PostgreSQL, Cloud solutions.</p>
                        </div>
                      </div>

                      <button aria-label="Action button" 
                        onClick={() => navigate('/business')}
                        className="px-6 py-3 bg-[#5C141D] text-white font-bold rounded-xl text-xs transition-all hover:bg-[#470f15] flex items-center gap-2 cursor-pointer shadow-sm shadow-[#5c141d]/15"
                      >
                        Explore Corporate Services <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Services Sub-Grid */}
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
                      {[
                        { title: 'Custom Web Design', desc: 'Premium, interactive interfaces powered by modern React pipelines.', icon: Laptop },
                        { title: 'Mobile Applications', desc: 'Scalable and fast cross-platform app releases.', icon: Smartphone },
                        { title: 'Third Party Integration', desc: 'Secure custom endpoints and API pipelines connecting databases.', icon: Code2 },
                        { title: 'Cloud & Database Setups', desc: 'PostgreSQL setups and robust cloud architecture.', icon: Database }
                      ].map((service, index) => (
                        <div key={index} className="p-6 bg-[#FAF8F5] border border-[rgba(92,20,29,0.06)] rounded-xl hover:bg-white hover:border-[var(--primary-gold)]/40 hover:shadow-md transition-all duration-300">
                          <service.icon className="w-8 h-8 text-[#5C141D] mb-4" />
                          <h4 className="text-[#1E060A] font-bold text-sm mb-2">{service.title}</h4>
                          <p className="text-xs text-slate-500 font-light leading-relaxed">{service.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* PILLAR 2: ACADEMY */}
              {(activeTab === 'all' || activeTab === 'academy') && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white border border-[rgba(92,20,29,0.08)] rounded-[2rem] p-8 sm:p-12 shadow-sm relative overflow-hidden group hover:border-[var(--primary-gold)]/40 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6">
                      <div className="w-12 h-12 bg-[#5C141D]/5 rounded-xl border border-[rgba(92,20,29,0.08)] flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-[#5C141D]" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#1E060A]">Scaro Academy</h3>
                      <p className="text-slate-600 font-light leading-relaxed text-sm">
                        Professional technology cohorts providing guaranteed internships, direct real-world task experiences, and custom syllabus roadmaps.
                      </p>

                      <div className="space-y-3">
                        {[
                          'Guaranteed internships with real product teams',
                          'Direct practical implementation and capstone tasks',
                          'Placement audits & resume reviews'
                        ].map((bullet, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-xs text-slate-500 font-light">
                            <div className="w-4.5 h-4.5 rounded-full bg-[#5C141D]/5 flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 text-[#5C141D]" />
                            </div>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      <button aria-label="Action button" 
                        onClick={() => navigate('/courses')}
                        className="px-6 py-3 bg-[#5C141D] text-white font-bold rounded-xl text-xs transition-all hover:bg-[#470f15] flex items-center gap-2 cursor-pointer shadow-sm shadow-[#5c141d]/15"
                      >
                        Explore Academy Paths <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Cohorts grid */}
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
                      {[
                        { title: 'Full Stack Web Cohort', stats: 'React & Database stacks', theme: '100+ Hands-on tasks' },
                        { title: 'Embedded & IoT Design', stats: 'ESP32 & Sensors control', theme: 'Firmware layout' },
                        { title: 'ML & Data Science Basics', stats: 'Python & Data visualization', theme: 'Algorithm models training' },
                        { title: 'UI/UX Masterclass', stats: 'Figma and visual assets', theme: 'Grid frameworks & styling' }
                      ].map((cohort, index) => (
                        <div key={index} className="p-6 bg-[#FAF8F5] border border-[rgba(92,20,29,0.06)] rounded-xl hover:bg-white hover:border-[var(--primary-gold)]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-44">
                          <div>
                            <span className="text-[9px] font-bold text-[#5C141D] uppercase tracking-wider bg-[#5C141D]/5 px-2.5 py-1 rounded-full">{cohort.theme}</span>
                            <h4 className="text-[#1E060A] font-extrabold text-base mt-4">{cohort.title}</h4>
                          </div>
                          <p className="text-xs text-slate-500">{cohort.stats}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* PILLAR 3: AI DIVISION */}
              {(activeTab === 'all' || activeTab === 'ai') && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white border border-[rgba(92,20,29,0.08)] rounded-[2rem] p-8 sm:p-12 shadow-sm relative overflow-hidden group hover:border-[var(--primary-gold)]/40 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6">
                      <div className="w-12 h-12 bg-[#5C141D]/5 rounded-xl border border-[rgba(92,20,29,0.08)] flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-[#5C141D]" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#1E060A]">Scaro AI Hub</h3>
                      <p className="text-slate-600 font-light leading-relaxed text-sm">
                        Curated directories of AI systems, prompt structures, and masterclasses designed to automate processes and accelerate engineering workflows.
                      </p>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-[#FAF8F5] border border-[rgba(92,20,29,0.06)] rounded-xl">
                          <h4 className="text-[#1E060A] font-bold text-xs mb-1">60+ Tools</h4>
                          <p className="text-[10px] text-slate-500 leading-normal">Categorized directory of prompt templates & builders.</p>
                        </div>
                        <div className="p-4 bg-[#FAF8F5] border border-[rgba(92,20,29,0.06)] rounded-xl">
                          <h4 className="text-[#1E060A] font-bold text-xs mb-1">Masterclass</h4>
                          <p className="text-[10px] text-slate-500 leading-normal">Live classes, freelancing pathways, asset creation.</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button aria-label="Action button" 
                          onClick={() => navigate('/ai')}
                          className="px-6 py-3 bg-[#5C141D] text-white font-bold rounded-xl text-xs transition-all hover:bg-[#470f15] flex items-center gap-2 cursor-pointer shadow-sm shadow-[#5c141d]/15"
                        >
                          Enter AI Hub <ArrowRight className="w-4 h-4" />
                        </button>
                        <button aria-label="Action button" 
                          onClick={() => navigate('/all-ai-tools')}
                          className="px-6 py-3 bg-white border border-[rgba(92,20,29,0.15)] text-[#5C141D] font-bold rounded-xl text-xs transition-all hover:bg-[#FAF8F5] cursor-pointer"
                        >
                          AI Directory
                        </button>
                      </div>
                    </div>

                    {/* AI Sub-details */}
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
                      {[
                        { title: 'Syllabus Prompt Engine', desc: 'Guides for learning core subjects with customized AI prompts.', badge: 'LLMs' },
                        { title: 'No-Code Tools stack', desc: 'Integrating website builders, content builders, and databases.', badge: 'No-Code' },
                        { title: 'Automation Pipelines', desc: 'Deploying custom APIs, webhook routes, and triggers.', badge: 'Integration' },
                        { title: 'Virtual Labs Scheduler', desc: 'Book direct interactive support sessions in a single click.', badge: 'Live sessions' }
                      ].map((item, index) => (
                        <div key={index} className="p-6 bg-[#FAF8F5] border border-[rgba(92,20,29,0.06)] rounded-xl hover:bg-white hover:border-[var(--primary-gold)]/40 hover:shadow-md transition-all duration-300">
                          <div className="flex justify-between items-center mb-4">
                            <Terminal className="w-5 h-5 text-[#5C141D]" />
                            <span className="text-[9px] text-[#5C141D] font-bold tracking-wider bg-[#5C141D]/5 px-2 py-0.5 rounded">{item.badge}</span>
                          </div>
                          <h4 className="text-[#1E060A] font-bold text-sm mb-2">{item.title}</h4>
                          <p className="text-xs text-slate-500 font-light leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: PLATFORM STATISTICS ─── */}
      <section className="py-20 relative z-10 border-y border-[rgba(92,20,29,0.08)] bg-white">
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

      {/* ─── SECTION 5: CORE MENTORSHIP QUOTE ─── */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="w-10 h-10 rounded-full bg-[#5C141D]/5 flex items-center justify-center mx-auto">
            <Code2 className="w-5 h-5 text-[#5C141D]" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1E060A] leading-relaxed italic px-4">
            "We aren't just teaching theory. We are an active IT company building real products, and we bring that exact industry DNA into our Academy and AI tools."
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-[var(--primary-gold)]" />
            <span className="text-[10px] font-black tracking-widest text-[#5C141D] uppercase">Scaro Philosophy</span>
            <span className="h-[1px] w-8 bg-[var(--primary-gold)]" />
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: PREMIUM FOOTER & VISITOR BADGE ─── */}
      <footer className="relative z-10 border-t border-[rgba(92,20,29,0.08)] bg-white pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-[rgba(92,20,29,0.08)]">
            
            {/* Logo & details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#5C141D] rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-xl">S</span>
                </div>
                <div>
                  <h4 className="text-[#1E060A] font-black text-lg tracking-tight">Scaro Technologies</h4>
                  <p className="text-[9px] text-[#5C141D] font-bold uppercase tracking-wider">Education & IT Ecosystem</p>
                </div>
              </div>
              
              <p className="text-xs text-slate-500 font-light leading-relaxed max-w-sm">
                Bridging the gap between software development and elite technical learning paths. Built by real developers.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-3 text-xs text-slate-500 font-light">
                  <Mail className="w-4 h-4 text-[#5C141D]" />
                  <span>support@scaro.com</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-light">
                  <Phone className="w-4 h-4 text-[#5C141D]" />
                  <span>+91 9949167458</span>
                </div>
              </div>

              {/* Visitor Counter Widget */}
              <div className="p-4 bg-[#FAF8F5] border border-[rgba(92,20,29,0.06)] rounded-xl max-w-xs flex items-center justify-between">
                <div>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Real-time Platform Audit</span>
                  <span className="text-[#1E060A] text-xs font-semibold">Total Visitors</span>
                </div>
                <div className="flex items-center gap-1">
                  {[5, 9, 2].map((num, i) => (
                    <div key={i} className="w-7 h-9 bg-white border border-[rgba(92,20,29,0.1)] rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-[#5C141D] font-mono font-black text-lg">{num}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Nav Columns */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xs font-black tracking-wider text-[#5C141D] uppercase">Learning paths</h4>
                <ul className="space-y-2.5">
                  <li><a href="/courses" className="text-xs text-slate-500 hover:text-[#5C141D] transition-colors">Explore Courses</a></li>
                  <li><a href="/projects" className="text-xs text-slate-500 hover:text-[#5C141D] transition-colors">Virtual Labs</a></li>
                  <li><a href="/ai" className="text-xs text-slate-500 hover:text-[#5C141D] transition-colors">AI Masterclass</a></li>
                  <li><a href="/blogs" className="text-xs text-slate-500 hover:text-[#5C141D] transition-colors">Resources & Blogs</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-black tracking-wider text-[#5C141D] uppercase">Services</h4>
                <ul className="space-y-2.5">
                  <li><a href="/business" className="text-xs text-slate-500 hover:text-[#5C141D] transition-colors">IT Solutions</a></li>
                  <li><a href="/business-pricing" className="text-xs text-slate-500 hover:text-[#5C141D] transition-colors">Pricing Options</a></li>
                  <li><a href="/all-business-projects" className="text-xs text-slate-500 hover:text-[#5C141D] transition-colors">Project Portfolio</a></li>
                </ul>
              </div>
            </div>

            {/* Newsletter Column */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs font-black tracking-wider text-[#5C141D] uppercase">Join the Academy</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Subscribe to get direct links to learning resources, code templates, and workshop invites.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative flex">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[rgba(92,20,29,0.1)] rounded-xl text-xs text-[#1E060A] placeholder-slate-400 focus:outline-none focus:border-[#5C141D] transition-colors"
                  />
                  <button aria-label="Action button" 
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-[#5C141D] text-white font-bold text-[10px] uppercase tracking-wider rounded-lg hover:bg-[#470f15] transition-all cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              <AnimatePresence>
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-green-600 font-semibold"
                  >
                    Successfully joined Scaro Newsletter! ✓
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[11px] text-slate-400 font-medium">
            <p>© 2026 Scaro Technologies. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}