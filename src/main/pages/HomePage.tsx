import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router';
import {
  GraduationCap, Briefcase, Cpu, ArrowRight, CheckCircle2, Sparkles,
  Building2, Terminal, Code2, ShieldCheck, Zap, Database, Smartphone,
  Users, Mail, Phone, MapPin, Trophy, BookOpen, Layers, Check,
  Laptop, Globe, ArrowUpRight, Play, Server, MessageSquare
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
    'Scaro Technologies | The Ultimate Ecosystem',
    'Scaro Technologies connects enterprise IT solutions, elite skill-based education, and cutting-edge AI tools into one unified platform.',
    educationSitelinks
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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
    <div ref={containerRef} className="bg-[#030203] min-h-screen text-slate-100 selection:bg-[var(--primary-gold)] selection:text-black overflow-hidden font-sans relative">
      
      {/* ─── STUNNING BACKGROUND EFFECTS ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glow meshes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-radial from-[var(--primary-maroon)]/15 via-transparent to-transparent blur-[120px]" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 left-10 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[160px]" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" style={{ mixBlendMode: 'overlay' }} />
      </div>

      {/* ─── SECTION 1: HERO (WORLD CLASS ARCHITECTURE) ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12"
        >
          {/* Animated Tech Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-lg relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-gold)]/10 to-[var(--primary-maroon)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Sparkles className="w-4.5 h-4.5 text-[var(--primary-gold)] animate-spin-slow" />
            <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">One Unified Ecosystem</span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          </motion.div>

          {/* Dynamic Headline */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tight leading-[0.95] text-white"
            >
              We Build. We Teach.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-gold)] via-[#E5C158] to-[var(--primary-maroon)] animate-gradient inline-block">
                We Automate.
              </span>
            </motion.h1>
          </div>

          {/* Value Prop Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-slate-400 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Scaro Technologies bridges the gap between active industry development and next-gen elite education. We build enterprise products, teach our blueprints, and scale using custom AI automation.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4"
          >
            <button aria-label="Action button" 
              onClick={() => {
                document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4.5 rounded-xl bg-gradient-to-r from-[var(--primary-gold)] to-[var(--accent-gold)] text-black font-black text-base transition-all hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
            >
              Explore The Ecosystem
              <ArrowRight className="w-5 h-5" />
            </button>
            <button aria-label="Action button" 
              onClick={() => {
                document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4.5 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 text-white font-bold text-base transition-all flex items-center justify-center gap-2 backdrop-blur-md cursor-pointer"
            >
              View Pillars
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Scroll Down</span>
          <div className="w-1.5 h-6 rounded-full bg-slate-500" />
        </div>
      </section>

      {/* ─── SECTION 2: INTERACTIVE ECOSYSTEM LOOP (THE VISUAL FEEDBACK) ─── */}
      <section id="ecosystem" className="py-28 relative z-10 border-y border-white/5 bg-[#050405]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-[var(--primary-gold)]" />
              <span className="text-xs font-black tracking-widest text-[var(--primary-gold)] uppercase">Dynamic Feedback Loop</span>
              <span className="h-[1px] w-8 bg-[var(--primary-gold)]" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              One Unified <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-gold)] to-[var(--primary-maroon)]">Ecosystem</span>
            </h2>
            <p className="text-lg text-slate-400 font-light mt-4">
              We aren't just teaching, and we aren't just building. We operate in a continuous innovation cycle that links our enterprise systems, student cohorts, and automation engines.
            </p>
          </div>

          {/* Interactive SVG Diagram */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* SVG Visual Area */}
            <div className="lg:col-span-7 flex justify-center relative bg-white/[0.01] border border-white/5 rounded-3xl p-6 sm:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-purple-900/10 via-transparent to-transparent pointer-events-none" />
              
              <svg className="w-full max-w-[500px] h-auto aspect-square z-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connecting Loop Lines (Path animations) */}
                <path d="M200 60 C300 60, 340 180, 280 260 C240 320, 160 320, 120 260 C60 180, 100 60, 200 60 Z" stroke="url(#loopGradient)" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" className="animate-[dash_20s_linear_infinite]" />
                
                {/* Visual gradients */}
                <defs>
                  <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="50%" stopColor="#5C141D" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>

                {/* Build node */}
                <g className="cursor-pointer" onClick={() => setActiveTab('business')}>
                  <circle cx="200" cy="60" r="36" className="fill-[#080506] stroke-[var(--primary-gold)] stroke-2" />
                  <path d="M192 50 H208 V66 H192 Z" fill="#D4AF37" opacity="0.3" />
                  <circle cx="200" cy="60" r="8" className="fill-[var(--primary-gold)]" />
                  <text x="200" y="112" textAnchor="middle" className="fill-white text-xs font-black tracking-wider uppercase">1. WE BUILD</text>
                  <text x="200" y="125" textAnchor="middle" className="fill-slate-500 text-[10px]">Scaro Business</text>
                </g>

                {/* Teach node */}
                <g className="cursor-pointer" onClick={() => setActiveTab('academy')}>
                  <circle cx="310" cy="240" r="36" className="fill-[#080506] stroke-blue-500 stroke-2" />
                  <circle cx="310" cy="240" r="8" className="fill-blue-500" />
                  <text x="310" y="292" textAnchor="middle" className="fill-white text-xs font-black tracking-wider uppercase">2. WE TEACH</text>
                  <text x="310" y="305" textAnchor="middle" className="fill-slate-500 text-[10px]">Scaro Academy</text>
                </g>

                {/* Automate node */}
                <g className="cursor-pointer" onClick={() => setActiveTab('ai')}>
                  <circle cx="90" cy="240" r="36" className="fill-[#080506] stroke-purple-500 stroke-2" />
                  <circle cx="90" cy="240" r="8" className="fill-purple-500" />
                  <text x="90" y="292" textAnchor="middle" className="fill-white text-xs font-black tracking-wider uppercase">3. WE AUTOMATE</text>
                  <text x="90" y="305" textAnchor="middle" className="fill-slate-500 text-[10px]">Scaro AI</text>
                </g>
              </svg>
            </div>

            {/* Explanatory Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div 
                onClick={() => setActiveTab('business')}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${activeTab === 'business' ? 'bg-white/[0.04] border-[var(--primary-gold)]/40 shadow-[0_0_20px_rgba(212,175,55,0.05)]' : 'bg-white/[0.01] border-white/5 hover:border-white/10'}`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary-gold)]/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[var(--primary-gold)]" />
                  </div>
                  <h3 className="font-black text-lg text-white">1. We Build (Enterprise Software)</h3>
                </div>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  We engineer premium, scalable solutions, clean software architecture, and custom AI tooling for businesses. This is our live sandbox where actual engineering happens.
                </p>
              </div>

              <div 
                onClick={() => setActiveTab('academy')}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${activeTab === 'academy' ? 'bg-white/[0.04] border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.05)]' : 'bg-white/[0.01] border-white/5 hover:border-white/10'}`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="font-black text-lg text-white">2. We Teach (Elite Skills Academy)</h3>
                </div>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  We take the code, systems, and product templates created inside Scaro Business and teach them to our student cohorts. No obsolete syntax, only true developer DNA.
                </p>
              </div>

              <div 
                onClick={() => setActiveTab('ai')}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${activeTab === 'ai' ? 'bg-white/[0.04] border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.05)]' : 'bg-white/[0.01] border-white/5 hover:border-white/10'}`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="font-black text-lg text-white">3. We Automate (AI Engine)</h3>
                </div>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  We implement AI pipelines to automate development workflows and supercharge education metrics, feeding improved tools and methods back into both systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THE DEEP-DIVE PILLARS (BENTO HUB) ─── */}
      <section id="pillars" className="py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <span className="text-xs font-black tracking-widest text-[var(--primary-gold)] uppercase mb-2 block">Pillars of Innovation</span>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Our Core Verticals</h2>
            </div>
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2.5 p-1.5 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-xl">
              {(['all', 'business', 'academy', 'ai'] as const).map((tab) => (
                <button aria-label="Action button" 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    activeTab === tab 
                      ? 'bg-gradient-to-r from-[var(--primary-gold)] to-[var(--accent-gold)] text-black shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            <AnimatePresence mode="popLayout">
              {/* Vertical: BUSINESS */}
              {(activeTab === 'all' || activeTab === 'business') && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-8 sm:p-12 overflow-hidden relative group hover:border-[var(--primary-gold)]/20 transition-all"
                >
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--primary-gold)]/5 rounded-full blur-[100px] pointer-events-none" />
                  
                  <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6">
                      <div className="w-12 h-12 bg-[var(--primary-gold)]/10 rounded-2xl border border-[var(--primary-gold)]/20 flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-[var(--primary-gold)]" />
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-black text-white">Scaro Business</h3>
                      <p className="text-slate-300 font-light leading-relaxed text-base">
                        Enterprise software engineering, production design, API pipelines, and high-performance server configurations built to scale modern operations.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                          <h4 className="text-white font-bold text-sm mb-1">Scale</h4>
                          <p className="text-xs text-slate-500">Optimized infrastructure & custom microservices.</p>
                        </div>
                        <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                          <h4 className="text-white font-bold text-sm mb-1">Architecture</h4>
                          <p className="text-xs text-slate-500">Robust codebase designs, databases, and setups.</p>
                        </div>
                      </div>

                      <button aria-label="Action button" 
                        onClick={() => navigate('/business')}
                        className="px-6 py-3.5 bg-white text-black font-bold rounded-xl text-sm transition-all hover:bg-slate-200 flex items-center gap-2 cursor-pointer"
                      >
                        Explore Corporate Services <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Services detailed listing */}
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
                      {[
                        { title: 'Custom Web Engineering', desc: 'React, Next.js, and static setups optimized for premium UX.', icon: Laptop },
                        { title: 'Mobile Applications', desc: 'Cross-platform app development using highly scalable code.', icon: Smartphone },
                        { title: 'API Integration', desc: 'Secure custom endpoints and third-party SaaS pipelines.', icon: Code2 },
                        { title: 'Database & Cloud', desc: 'PostgreSQL, AWS architectures, and structured secure nodes.', icon: Database }
                      ].map((service, index) => (
                        <div key={index} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-all">
                          <service.icon className="w-8 h-8 text-[var(--primary-gold)] mb-4" />
                          <h4 className="text-white font-bold text-base mb-2">{service.title}</h4>
                          <p className="text-xs text-slate-400 font-light leading-relaxed">{service.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Vertical: ACADEMY */}
              {(activeTab === 'all' || activeTab === 'academy') && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-8 sm:p-12 overflow-hidden relative group hover:border-blue-500/20 transition-all"
                >
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

                  <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-2xl border border-blue-500/20 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-black text-white">Scaro Academy</h3>
                      <p className="text-slate-300 font-light leading-relaxed text-base">
                        Elite engineering cohorts bridging the gap between university syllabus and modern industry environments. We don't teach syntax; we build systems.
                      </p>

                      <div className="space-y-3.5">
                        {[
                          'Guaranteed internships with real product teams',
                          'Direct practical implementation and capstone projects',
                          'Advanced placement support & CV audits'
                        ].map((bullet, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm text-slate-400 font-light">
                            <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                              <Check className="w-3.5 h-3.5 text-blue-400" />
                            </div>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      <button aria-label="Action button" 
                        onClick={() => navigate('/courses')}
                        className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                      >
                        Explore Learning Paths <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Courses slider/grid */}
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
                      {[
                        { title: 'Full Stack Web Cohort', stats: '100+ Hands-on Tasks', theme: 'React, Vite, Node.js, and DB' },
                        { title: 'IoT & Embedded Systems', stats: 'ESP32 & Live Sensors', theme: 'C/C++, firmware layout, and logic' },
                        { title: 'Machine Learning Basics', stats: 'Python & Model Training', theme: 'Data visualization, AI, and math' },
                        { title: 'UI/UX Design Masterclass', stats: 'Figma & Visual Assets', theme: 'Premium grid layouts, color systems' }
                      ].map((cohort, index) => (
                        <div key={index} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-all flex flex-col justify-between h-48">
                          <div>
                            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-2.5 py-1 rounded-full">{cohort.stats}</span>
                            <h4 className="text-white font-black text-lg mt-4">{cohort.title}</h4>
                          </div>
                          <p className="text-xs text-slate-500">{cohort.theme}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Vertical: AI DIVISION */}
              {(activeTab === 'all' || activeTab === 'ai') && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-8 sm:p-12 overflow-hidden relative group hover:border-purple-500/20 transition-all"
                >
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

                  <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6">
                      <div className="w-12 h-12 bg-purple-500/10 rounded-2xl border border-purple-500/20 flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-purple-400" />
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-black text-white">Scaro AI</h3>
                      <p className="text-slate-300 font-light leading-relaxed text-base">
                        The intelligence engine designed to automate, streamline, and optimize web applications, resources, and masterclass schedules.
                      </p>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                          <h4 className="text-white font-bold text-sm mb-1">60+ Tools</h4>
                          <p className="text-xs text-slate-500 font-light">Curated AI directories & pipelines.</p>
                        </div>
                        <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                          <h4 className="text-white font-bold text-sm mb-1">Masterclass</h4>
                          <p className="text-xs text-slate-500 font-light">Practical tools, prompt setups, templates.</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button aria-label="Action button" 
                          onClick={() => navigate('/ai')}
                          className="px-6 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-sm transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                        >
                          Enter AI Hub <ArrowRight className="w-4 h-4" />
                        </button>
                        <button aria-label="Action button" 
                          onClick={() => navigate('/all-ai-tools')}
                          className="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl text-sm transition-all cursor-pointer"
                        >
                          Directory
                        </button>
                      </div>
                    </div>

                    {/* AI Division Details */}
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
                      {[
                        { title: 'Syllabus Prompt Engine', desc: 'Custom prompts optimized for learning engineering branches.', badge: 'GPT-4 / Claude' },
                        { title: 'Digital Income Models', desc: 'Leveraging no-code AI builders and automated asset generators.', badge: 'Freelancing' },
                        { title: 'Automation Pipelines', desc: 'Connecting webhooks, API pipelines, and automation tools.', badge: 'Webhooks' },
                        { title: 'Virtual Class Calendars', desc: 'Book interactive live sessions directly inside the hub.', badge: 'Live Scheduler' }
                      ].map((item, index) => (
                        <div key={index} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-all">
                          <div className="flex justify-between items-center mb-4">
                            <Terminal className="w-5 h-5 text-purple-400" />
                            <span className="text-[10px] text-purple-300 font-semibold tracking-wider bg-purple-500/10 px-2 py-0.5 rounded">{item.badge}</span>
                          </div>
                          <h4 className="text-white font-bold text-base mb-2">{item.title}</h4>
                          <p className="text-xs text-slate-400 font-light leading-relaxed">{item.desc}</p>
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

      {/* ─── SECTION 4: ECOSYSTEM STATS ─── */}
      <section className="py-24 relative z-10 border-y border-white/5 bg-[#050405]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '5K+', label: 'Learners Trained', desc: 'Across digital cohorts' },
              { num: '25+', label: 'Industry Experts', desc: 'Directly mentoring' },
              { num: '20+', label: 'Domains Covered', desc: 'IT, Core Engineering & Design' },
              { num: '100+', label: 'Capstone Projects', desc: 'Hands-on live production' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white/[0.01] border border-white/5 rounded-2xl relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <h3 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-gold)] to-[var(--accent-gold)] tracking-tight mb-2">
                  {stat.num}
                </h3>
                <h4 className="text-white font-bold text-base sm:text-lg mb-1">{stat.label}</h4>
                <p className="text-xs text-slate-500 font-light">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: DNA QUOTE ─── */}
      <section className="py-32 relative z-10 bg-gradient-to-b from-transparent to-[#030203]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <div className="w-12 h-12 rounded-full bg-[var(--primary-maroon)]/10 border border-[var(--primary-maroon)]/20 flex items-center justify-center mx-auto">
            <Code2 className="w-6 h-6 text-[var(--primary-maroon)] animate-pulse" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-relaxed italic px-4">
            "We aren't just teaching theory. We are an active IT company building real products, and we bring that exact industry DNA into our Academy and AI tools."
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[var(--primary-gold)]" />
            <span className="text-xs font-black tracking-widest text-[var(--primary-gold)] uppercase">Scaro DNA</span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[var(--primary-gold)]" />
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: PREMIUM FOOTER & ENGAGEMENT HUB ─── */}
      <footer className="relative z-10 border-t border-white/5 bg-[#030203] pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
            
            {/* Column 1: Info & Visitor counter */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-maroon)] to-[var(--primary-gold)] rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-xl">S</span>
                </div>
                <div>
                  <h4 className="text-white font-black text-xl tracking-tight">Scaro Technologies</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Unified Ecosystem</p>
                </div>
              </div>
              
              <p className="text-sm text-slate-400 font-light leading-relaxed max-w-sm">
                Empowering the next generation of software developers and hardware engineers with actual industry production setups and modern AI tools.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-400 font-light">
                  <Mail className="w-4 h-4 text-[var(--primary-gold)] shrink-0" />
                  <span>support@scaro.com</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-light">
                  <Phone className="w-4 h-4 text-[var(--primary-gold)] shrink-0" />
                  <span>+91 9949167458</span>
                </div>
              </div>

              {/* Total Visitors premium widget */}
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl max-w-xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Live Platform Counter</span>
                  <span className="text-white text-xs font-medium">Total Visitors</span>
                </div>
                <div className="flex items-center gap-1">
                  {[5, 9, 2].map((num, i) => (
                    <div key={i} className="w-7 h-9 bg-[#0b0809] border border-white/10 rounded-lg flex items-center justify-center shadow-inner">
                      <span className="text-[var(--primary-gold)] font-mono font-black text-lg">{num}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xs font-black tracking-widest text-[var(--primary-gold)] uppercase">Learning Paths</h4>
                <ul className="space-y-2.5">
                  <li><a href="/courses" className="text-xs text-slate-400 hover:text-white transition-colors">Explore Courses</a></li>
                  <li><a href="/projects" className="text-xs text-slate-400 hover:text-white transition-colors">Virtual Labs</a></li>
                  <li><a href="/ai" className="text-xs text-slate-400 hover:text-white transition-colors">AI Masterclasses</a></li>
                  <li><a href="/blogs" className="text-xs text-slate-400 hover:text-white transition-colors">Student Resources</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-black tracking-widest text-[var(--primary-gold)] uppercase">Corporates</h4>
                <ul className="space-y-2.5">
                  <li><a href="/business" className="text-xs text-slate-400 hover:text-white transition-colors">Services</a></li>
                  <li><a href="/business-pricing" className="text-xs text-slate-400 hover:text-white transition-colors">Packages</a></li>
                  <li><a href="/all-business-projects" className="text-xs text-slate-400 hover:text-white transition-colors">Portfolio</a></li>
                </ul>
              </div>
            </div>

            {/* Column 3: Newsletter Sign Up */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs font-black tracking-widest text-[var(--primary-gold)] uppercase">Join the Academy</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Receive fresh technology updates, code bases, and exclusive cohort opportunities directly to your inbox.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-[#0b0809] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[var(--primary-gold)]/40 transition-colors"
                  />
                  <button aria-label="Action button" 
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-gradient-to-r from-[var(--primary-gold)] to-[var(--accent-gold)] text-black font-bold text-[10px] uppercase tracking-wider rounded-lg hover:opacity-90 active:scale-95 transition-all cursor-pointer"
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
                    className="text-xs text-emerald-400 font-semibold"
                  >
                    Successfully joined Scaro Newsletter! ✓
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[11px] text-slate-600 font-medium">
            <p>© 2026 Scaro Technologies. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}