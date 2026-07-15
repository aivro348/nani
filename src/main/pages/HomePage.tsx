import { lazy, Suspense, useEffect } from 'react';
import { SectionSkeleton } from '../../main/components/ui/skeleton';
import { motion, useScroll, useTransform } from 'motion/react';
import { useNavigate, useLocation } from 'react-router';
import { GraduationCap, Briefcase, Cpu, ArrowRight, CheckCircle2, Sparkles, Building2, Terminal, Code2 } from 'lucide-react';
import { useSEO } from '../../main/utils/useSEO';
import { ReviewsSection } from '../../education/components/ReviewsSection';

// Lazy load the companies section
const CompaniesSection = lazy(() => import('../components/CompaniesSection').then(m => ({ default: m.CompaniesSection })));

export function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  useSEO('Scaro Technologies | The Ultimate Ecosystem', 'Scaro Technologies connects enterprise IT solutions, elite skill-based education, and cutting-edge AI tools into one unified platform.');

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-[#050505] min-h-screen text-slate-200 selection:bg-[var(--primary-gold)] selection:text-black overflow-hidden font-sans">
      
      {/* 1. STUNNING HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[var(--primary-maroon)]/10 rounded-full blur-[150px] mix-blend-screen animate-pulse pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" style={{ mixBlendMode: 'overlay' }} />
        </div>

        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-[var(--primary-gold)]" />
            <span className="text-sm font-semibold tracking-wide text-slate-300">One Unified Ecosystem</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[1.05] text-white"
          >
            We Build. We Teach.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-gold)] via-orange-400 to-[var(--primary-maroon)]">
              We Automate.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Scaro Technologies bridges the gap between industry and education. From enterprise software to elite skill academies and AI directories—everything is connected.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="pt-8"
          >
            <button aria-label="Action button" 
              onClick={() => {
                document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-5 rounded-2xl bg-white text-black font-black text-lg hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              Explore The Ecosystem
              <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      </section>


      {/* 2. THE ECOSYSTEM BENTO GRID */}
      <section id="ecosystem" className="py-32 relative z-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
              Three Pillars of <span className="text-[var(--primary-maroon)]">Innovation</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We are not just a company. We are a continuous loop of learning, building, and scaling using tomorrow's tools.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 auto-rows-fr">
            
            {/* Pillar 1: Academy */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-2 relative group rounded-[2rem] bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 p-10 overflow-hidden hover:border-blue-500/50 transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap className="w-48 h-48 text-blue-400" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-8 border border-blue-500/30">
                    <GraduationCap className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">Scaro Academy</h3>
                  <p className="text-lg text-slate-300 mb-8 max-w-md">
                    Elite, skill-based education designed to make students industry-ready. We teach what we build.
                  </p>
                  <ul className="space-y-3 mb-10">
                    {['Live Interactive Cohorts', 'Guaranteed Internships', 'Real-world Capstone Projects'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-400">
                        <CheckCircle2 className="w-5 h-5 text-blue-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button aria-label="Action button" 
                  onClick={() => navigate('/courses')}
                  className="w-max px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all flex items-center gap-2"
                >
                  Explore Academy <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Pillar 2: Business */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="relative group rounded-[2rem] bg-gradient-to-br from-[var(--primary-maroon)]/20 to-black border border-[var(--primary-maroon)]/20 p-10 overflow-hidden hover:border-[var(--primary-maroon)]/50 transition-colors"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[var(--primary-maroon)]/20 flex items-center justify-center mb-8 border border-[var(--primary-maroon)]/30">
                    <Building2 className="w-7 h-7 text-[var(--primary-maroon)]" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">Scaro Business</h3>
                  <p className="text-lg text-slate-300 mb-8">
                    Enterprise IT solutions, scalable software, and high-performance web architecture.
                  </p>
                </div>
                <button aria-label="Action button" 
                  onClick={() => navigate('/business')}
                  className="w-full py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold transition-all flex items-center justify-center gap-2"
                >
                  View Services <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Pillar 3: AI Division */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 relative group rounded-[2rem] bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 p-10 md:p-16 overflow-hidden hover:border-purple-500/50 transition-colors flex flex-col md:flex-row items-center justify-between gap-12"
            >
              <div className="absolute top-1/2 -translate-y-1/2 right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <Cpu className="w-96 h-96 text-purple-400" />
              </div>

              <div className="relative z-10 max-w-xl">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-8 border border-purple-500/30">
                  <Cpu className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-4xl font-black text-white mb-4">Scaro AI Division</h3>
                <p className="text-xl text-slate-300 mb-8">
                  Supercharging our education and business sectors. Explore the ultimate directory of AI tools, access free masterclasses, and automate your workflow.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button aria-label="Action button" 
                    onClick={() => navigate('/ai')}
                    className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all flex items-center gap-2"
                  >
                    Enter AI Hub <ArrowRight className="w-4 h-4" />
                  </button>
                  <button aria-label="Action button" 
                    onClick={() => navigate('/all-ai-tools')}
                    className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition-all"
                  >
                    AI Tools Directory
                  </button>
                </div>
              </div>
              
              <div className="relative z-10 w-full md:w-1/3 flex flex-col gap-4">
                 {['ChatGPT Pro Masterclass', 'Midjourney Prompt Engineering', '60+ AI Tools Directory'].map((item, i) => (
                    <div key={i} className="bg-black/50 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4">
                      <Terminal className="w-5 h-5 text-purple-400" />
                      <span className="font-semibold text-slate-200">{item}</span>
                    </div>
                 ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. CONNECTION STORY */}
      <section className="py-24 bg-gradient-to-b from-[#050505] to-[#0a0a0a] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Code2 className="w-12 h-12 text-slate-600 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-relaxed">
            "We aren't just teaching theory. We are an active IT company building real products, and we bring that exact industry DNA into our Academy and AI tools."
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary-maroon)] to-[var(--primary-gold)] mx-auto rounded-full" />
        </div>
      </section>

      {/* 4. RETAINED SECTIONS (Themed Dark) */}
      <div className="bg-[#0a0a0a]">
        <Suspense fallback={<SectionSkeleton />}>
          <div className="[&>section]:bg-transparent [&>section]:py-32 [&_h2]:text-white [&_p]:text-slate-400 [&_.bg-slate-50]:bg-white/5 [&_.bg-white]:bg-black/40 [&_.border-slate-200]:border-white/10">
            <CompaniesSection />
          </div>
        </Suspense>
        
        <div className="[&>section]:bg-[#0a0a0a] [&_h2]:text-white [&_p]:text-slate-400 [&_.bg-white]:bg-white/5 [&_.border-slate-200]:border-white/10 [&_.text-slate-900]:text-white [&_.text-slate-600]:text-slate-300 [&_.shadow-sm]:shadow-none">
          <ReviewsSection />
        </div>
      </div>

    </div>
  );
}