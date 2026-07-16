import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router';
import {
  GraduationCap, Briefcase, Cpu, ArrowRight, CheckCircle2, Sparkles,
  Building2, Terminal, Code2, ShieldCheck, Zap, Database, Smartphone,
  Users, Mail, Phone, MapPin, Trophy, BookOpen, Layers, Check,
  Laptop, Globe, ArrowUpRight, Play, Server, MessageSquare, ArrowRightLeft,
  ChevronRight, Calendar, Star, HelpCircle, Instagram
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
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[var(--primary-gold)]" />
                <span className="text-[10px] font-black tracking-widest text-[var(--primary-gold)] uppercase">Unified Corporate Ecosystem</span>
              </motion.div>

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
                  onClick={() => document.getElementById('explore-hub')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[var(--primary-gold)] text-black font-black text-sm transition-all hover:bg-[#FAF8F5] active:scale-98 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  Explore Ecosystem Hubs
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a href="#achievements-section" className="w-full sm:w-auto">
                  <button aria-label="Action button" 
                    className="w-full px-8 py-4 rounded-xl bg-white/5 border border-white/20 hover:bg-white/10 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Our Achievements
                  </button>
                </a>
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

      {/* ─── SECTION 2: DYNAMIC CUSTOMER HUB ENTRY POINT (FAST NAVIGATION) ─── */}
      <section id="explore-hub" className="py-20 bg-white border-b border-[rgba(92,20,29,0.06)] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black tracking-widest text-[#5C141D] uppercase">Select Your Pathway</span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1E060A] tracking-tight mt-2">
              Where would you like to start?
            </h2>
            <p className="text-base text-slate-500 font-light mt-3">
              Explore our core pillars. Select the sector that matches your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Scaro Academy Card */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-[#FAF8F5] border border-[rgba(92,20,29,0.08)] shadow-sm hover:border-[#5C141D]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#5C141D]/5 flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-[#5C141D]" />
                </div>
                <h3 className="text-2xl font-black text-[#1E060A] mb-3">Scaro Academy</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">
                  Elite engineering cohorts featuring live developer mentorship, guaranteed internships, and real capstone builds.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {['Full Stack Web Cohort', 'Embedded & IoT Systems', 'ML & AI Programming', 'UI/UX Masterclass'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button aria-label="Action button" 
                onClick={() => navigate('/courses')}
                className="w-full py-4 bg-[#5C141D] hover:bg-[#470f15] text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                Go to Scaro Academy <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* AI Academy Card */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-[#FAF3D1] border border-[#5C141D]/10 shadow-sm hover:border-[var(--primary-gold)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#5C141D]/15 flex items-center justify-center mb-6">
                  <Cpu className="w-8 h-8 text-[#5C141D]" />
                </div>
                <h3 className="text-2xl font-black text-[#1E060A] mb-3">AI Academy</h3>
                <p className="text-sm text-slate-700 font-light leading-relaxed mb-6">
                  Learn to leverage cutting-edge AI utilities, build custom prompt stacks, and automate pipelines.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {['Syllabus Prompt Engine', 'No-code stack building', 'Automation pipelines', '60+ AI tools directory'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button aria-label="Action button" 
                onClick={() => navigate('/ai')}
                className="w-full py-4 bg-[#5C141D] hover:bg-[#470f15] text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                Enter AI Academy <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Corporate Services Card */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-[#FAF8F5] border border-[rgba(92,20,29,0.08)] shadow-sm hover:border-[#5C141D]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#5C141D]/5 flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-[#5C141D]" />
                </div>
                <h3 className="text-2xl font-black text-[#1E060A] mb-3">Corporate Services</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">
                  Enterprise-grade custom IT layouts, e-commerce engines, database configurations, and app development.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {['Custom Web Design', 'Scalable Mobile Apps', 'API & Integration setups', 'Database configurations'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button aria-label="Action button" 
                onClick={() => navigate('/business')}
                className="w-full py-4 bg-[#5C141D] hover:bg-[#470f15] text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                View Services & Pricing <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: PLACEMENTS SCROLLING MARQUEE ─── */}
      <section className="border-b border-[rgba(92,20,29,0.06)]">
        <CompaniesSection />
      </section>

      {/* ─── SECTION 4: SCARO ACADEMY DEEP-DIVE (WHITE BACKGROUND) ─── */}
      <section className="py-28 bg-white border-b border-[rgba(92,20,29,0.06)]">
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
                  Elite engineering cohorts designed to bridge the gap between academic syllabus and modern industry production environments. We teach what we engineer daily inside our IT division.
                </p>
              </div>

              {/* Learning Pathways List */}
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Full Stack Web Cohort', desc: 'React, Node.js, databases and robust pipelines design.', badge: '100+ Tasks' },
                  { title: 'Embedded & IoT Design', desc: 'ESP32 controllers, sensors layouts, and firmware codes.', badge: 'Hardware' },
                  { title: 'ML & Data Sciences', desc: 'Python programming, mathematical models, training pipelines.', badge: 'Algorithms' },
                  { title: 'UI/UX Visual Assets', desc: 'Figma layout systems, typography grid styles, vector structures.', badge: 'Design' }
                ].map((cohort, index) => (
                  <div key={index} className="p-6 bg-[#FAF8F5] border border-[rgba(92,20,29,0.06)] rounded-2xl relative space-y-2 hover:border-[var(--primary-gold)] hover:shadow-md transition-all duration-300">
                    <span className="absolute top-4 right-4 text-[9px] font-bold text-[#5C141D] bg-[#5C141D]/5 px-2 py-0.5 rounded">{cohort.badge}</span>
                    <h4 className="text-[#1E060A] font-extrabold text-base pt-2">{cohort.title}</h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{cohort.desc}</p>
                  </div>
                ))}
              </div>

              {/* Guarantees Box */}
              <div className="p-6 bg-[#FAF8F5] border border-[rgba(92,20,29,0.06)] rounded-2xl space-y-4">
                <h4 className="text-sm font-extrabold text-[#5C141D] flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[var(--primary-gold)]" />
                  Your Academy Career Guarantee
                </h4>
                <div className="grid sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Guaranteed Internships</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Real-world Capstones</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Expert Live Mentors</span>
                  </div>
                </div>
              </div>

              <button aria-label="Action button" 
                onClick={() => navigate('/courses')}
                className="px-6 py-3.5 bg-[#5C141D] hover:bg-[#470f15] text-white font-bold rounded-xl text-xs transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-[#5c141d]/10"
              >
                Explore Learning Cohorts <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 5: AI ACADEMY / AI DIVISION (GOLD / IVORY BACKGROUND) ─── */}
      <section className="py-28 relative bg-[#FAF3D1] border-b border-[rgba(92,20,29,0.06)] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#5c141d03_1px,transparent_1px),linear-gradient(to_bottom,#5c141d03_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-2">
                <span className="text-xs font-black tracking-widest text-[#5C141D] uppercase bg-[#5C141D]/10 px-3.5 py-1.5 rounded-full inline-block">02. Automation Engine</span>
                <h2 className="text-3xl sm:text-5xl font-black text-[#1E060A] tracking-tight">
                  Scaro AI Academy
                </h2>
                <p className="text-lg text-slate-700 font-light leading-relaxed">
                  Supercharging our education system and internal dev workflows. Explore our directory of AI assets, master professional prompt structures, and build using modern no-code builders.
                </p>
              </div>

              {/* AI Details grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Syllabus Prompt Engine', desc: 'Custom optimized AI prompts built specifically for engineering student curriculum.', icon: Terminal },
                  { title: 'No-Code Tool Stacks', desc: 'Integrating website generators, prompt libraries, and automation setups.', icon: Layers },
                  { title: 'Automation Pipelines', desc: 'Custom webhook triggers, scheduled operations, and automated asset builders.', icon: Zap },
                  { title: 'AI Cohorts Schedules', desc: 'Access 2-hour ChatGPT Pro masterclasses and virtual training channels.', icon: Calendar }
                ].map((item, index) => (
                  <div key={index} className="p-5 bg-white/40 border border-[#5C141D]/10 rounded-2xl flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#5C141D]/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#5C141D]" />
                    </div>
                    <div>
                      <h4 className="text-[#1E060A] font-extrabold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-600 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
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
      <section id="services-section" className="py-28 relative bg-white border-b border-[rgba(92,20,29,0.06)]">
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
                <span className="text-xs font-black tracking-widest text-[#5C141D] uppercase bg-[#5C141D]/5 px-3.5 py-1.5 rounded-full inline-block">03. Corporate Services</span>
                <h2 className="text-3xl sm:text-5xl font-black text-[#1E060A] tracking-tight">
                  Scaro Business
                </h2>
                <p className="text-lg text-slate-600 font-light leading-relaxed">
                  Enterprise-grade software solutions, high-performance web architecture, and microservices engineered for business scalability.
                </p>
              </div>

              {/* Services Sub grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Custom Web Design', desc: 'Premium user experience, responsive web portals using Next.js.', icon: Laptop },
                  { title: 'E-Commerce Engines', desc: 'High-speed online shopping systems integrated with secure payment paths.', icon: Globe },
                  { title: 'Mobile Applications', desc: 'Fully optimized native and cross-platform apps.', icon: Smartphone },
                  { title: 'Enterprise AI Setups', desc: 'Internal custom tooling, data analysis nodes, automation setups.', icon: Cpu }
                ].map((service, index) => (
                  <div key={index} className="p-6 bg-[#FAF8F5] border border-[rgba(92,20,29,0.06)] rounded-2xl hover:border-[var(--primary-gold)] hover:shadow-md transition-all duration-300">
                    <service.icon className="w-8 h-8 text-[#5C141D] mb-4" />
                    <h4 className="text-[#1E060A] font-extrabold text-base mb-2">{service.title}</h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{service.desc}</p>
                  </div>
                ))}
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

      {/* ─── SECTION 10: PREMIUM FOOTER (LOGO MAROON BACKGROUND) ─── */}
      <footer className="relative bg-[#5C141D] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            
            {/* Logo column & visitor badge */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-white/10">
                  <span className="text-[#5C141D] font-black text-xl">S</span>
                </div>
                <div>
                  <h4 className="text-white font-black text-lg tracking-tight">Scaro Technologies</h4>
                  <p className="text-[9px] text-[var(--primary-gold)] font-bold uppercase tracking-wider">Education & IT Ecosystem</p>
                </div>
              </div>
              
              <p className="text-xs text-slate-200 font-light leading-relaxed max-w-sm">
                Empowering the next generation of engineers with actual industry production setups and modern AI tools.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-3 text-xs text-slate-200 font-light">
                  <Mail className="w-4 h-4 text-[var(--primary-gold)] shrink-0" />
                  <span>support@scaro.com</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-200 font-light">
                  <Phone className="w-4 h-4 text-[var(--primary-gold)] shrink-0" />
                  <span>+91 9949167458</span>
                </div>
              </div>

              {/* Visitor counter badge with gold digits */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl max-w-xs flex items-center justify-between">
                <div>
                  <span className="text-[9px] text-slate-300 font-bold uppercase tracking-wider block">Live Platform Audit</span>
                  <span className="text-white text-xs font-semibold">Total Visitors</span>
                </div>
                <div className="flex items-center gap-1">
                  {[5, 9, 2].map((num, i) => (
                    <div key={i} className="w-7 h-9 bg-[#5C141D] border border-white/10 rounded-lg flex items-center justify-center shadow-inner">
                      <span className="text-[var(--primary-gold)] font-mono font-black text-lg">{num}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Nav Columns */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h4 className="text-xs font-black tracking-wider text-[var(--primary-gold)] uppercase">Learning paths</h4>
                <ul className="space-y-2.5">
                  <li><a href="/courses" className="text-xs text-slate-200 hover:text-[var(--primary-gold)] transition-colors">Explore Courses</a></li>
                  <li><a href="/projects" className="text-xs text-slate-200 hover:text-[var(--primary-gold)] transition-colors">Virtual Labs</a></li>
                  <li><a href="/ai" className="text-xs text-slate-200 hover:text-[var(--primary-gold)] transition-colors">AI Masterclass</a></li>
                  <li><a href="/blogs" className="text-xs text-slate-200 hover:text-[var(--primary-gold)] transition-colors">Resources & Blogs</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-black tracking-wider text-[var(--primary-gold)] uppercase">Services</h4>
                <ul className="space-y-2.5">
                  <li><a href="/business" className="text-xs text-slate-200 hover:text-[var(--primary-gold)] transition-colors">IT Solutions</a></li>
                  <li><a href="/business-pricing" className="text-xs text-slate-200 hover:text-[var(--primary-gold)] transition-colors">Pricing Options</a></li>
                  <li><a href="/all-business-projects" className="text-xs text-slate-200 hover:text-[var(--primary-gold)] transition-colors">Project Portfolio</a></li>
                </ul>
              </div>
            </div>

            {/* Newsletter Column & Social Widgets */}
            <div className="lg:col-span-4 space-y-6 text-left">
              <div className="space-y-3">
                <h4 className="text-xs font-black tracking-wider text-[var(--primary-gold)] uppercase">Join the Academy</h4>
                <p className="text-xs text-slate-200 font-light leading-relaxed">
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-300 focus:outline-none focus:border-[var(--primary-gold)] transition-colors"
                    />
                    <button aria-label="Action button" 
                      type="submit"
                      className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-[var(--primary-gold)] text-black font-bold text-[10px] uppercase tracking-wider rounded-lg hover:bg-[#FAF8F5] transition-all cursor-pointer"
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
                      className="text-xs text-[var(--primary-gold)] font-semibold"
                    >
                      Successfully joined Scaro Newsletter! ✓
                  </motion.p>
                )}
              </AnimatePresence>
              </div>

              {/* NEW: Dynamic Contact Widgets (WhatsApp, Instagram, Email) */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-black tracking-wider text-[var(--primary-gold)] uppercase">Direct Channels</h4>
                <div className="flex gap-3">
                  {/* WhatsApp Widget */}
                  <a
                    href="https://wa.me/919949167458"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all hover:scale-105 active:scale-95"
                    title="Chat on WhatsApp"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </a>
                  {/* Instagram Widget */}
                  <a
                    href="https://instagram.com/scaro_technologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-400 hover:bg-pink-500 hover:text-white transition-all hover:scale-105 active:scale-95"
                    title="Follow on Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  {/* Email Widget */}
                  <a
                    href="mailto:support@scaro.com"
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-white transition-all hover:scale-105 active:scale-95"
                    title="Send Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[11px] text-slate-300 font-medium">
            <p>© 2026 Scaro Technologies. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}