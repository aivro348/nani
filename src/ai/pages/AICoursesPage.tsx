import { useSEO } from '../../main/utils/useSEO';
import { motion } from 'motion/react';
import { Sparkles, Check } from 'lucide-react';
import { SyllabusRoadmap } from '../components/SyllabusRoadmap';

export function AICoursesPage() {
  useSEO(
    'Premium AI Cohorts | Scaro AI Academy',
    'Master generative AI tools, prompt engineering, agentic automations, and digital income. Join our premium training cohorts at Scaro AI Academy.'
  );

  return (
    <div className="min-h-screen bg-[#0A0506] text-[#E2E8F0] selection:bg-[var(--primary-gold)] selection:text-black relative overflow-hidden py-24">
      {/* Background glow lines */}
      <div className="absolute top-0 left-1/4 w-[1000px] h-[500px] bg-[var(--primary-maroon)]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[600px] bg-[var(--primary-gold)]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-[var(--primary-maroon)]/10 text-[var(--primary-gold)] border border-[var(--primary-gold)]/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4 text-[var(--primary-gold)] animate-pulse" />
            <span>AI Programs</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6"
          >
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-maroon)] to-[var(--primary-gold)]">AI Path</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-light text-lg leading-relaxed"
          >
            From essential prompt engineering and daily AI assistants to building production-ready AI agents, automations, and full-scale freelancing businesses.
          </motion.p>
        </div>

        {/* 3 Main Programs */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 hover:border-[var(--primary-gold)]/20 rounded-2xl p-8 flex flex-col justify-between backdrop-blur-md relative">
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Essentials · 7 Days</span>
              <h3 className="text-2xl font-black text-white mt-2">AI Foundations</h3>
              <div className="text-3xl font-black text-[var(--primary-gold)] mt-4 mb-6">₹799 <span className="text-sm text-gray-500 font-light">One-time payment</span></div>
              
              <ul className="space-y-4 mb-8">
                {['AI Fundamentals', 'ChatGPT Mastery', 'Claude', 'Gemini', 'Prompt Engineering', 'AI Image Generation', 'AI Video Basics', 'Resume Building', '+ 5 more modules listed below'].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[var(--primary-gold)] mt-1 shrink-0" />
                    <span className="text-gray-300 text-sm font-light">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="https://wa.me/919032517427" target="_blank" rel="noopener noreferrer">
              <button className="w-full py-4 bg-white/5 border border-white/10 hover:bg-[var(--primary-gold)] hover:text-black hover:border-[var(--primary-gold)] transition-all font-bold rounded-xl uppercase text-xs tracking-wider">
                Enroll Now
              </button>
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border-2 border-[var(--primary-gold)]/50 rounded-2xl p-8 flex flex-col justify-between backdrop-blur-md relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[var(--primary-gold)] text-black text-xs font-black uppercase tracking-widest rounded-full">
              Most Popular
            </div>
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Accelerator · 15 Days</span>
              <h3 className="text-2xl font-black text-white mt-2">AI Mastery</h3>
              <div className="text-3xl font-black text-[var(--primary-gold)] mt-4 mb-6">₹1,499 <span className="text-sm text-gray-500 font-light">One-time payment</span></div>
              
              <ul className="space-y-4 mb-8">
                {['Everything from AI Foundations', 'AI Agents & Automations', 'Zapier & Make.com Mastery', 'Social Media Automation', 'UGC Content Creation', 'Website & Landing Builder', 'App Prototyping using AI', 'Cursor, Lovable, & Vibe Coding', '+ 5 more modules listed below'].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[var(--primary-gold)] mt-1 shrink-0" />
                    <span className="text-gray-300 text-sm font-light">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="https://wa.me/919032517427" target="_blank" rel="noopener noreferrer">
              <button className="w-full py-4 bg-[var(--primary-gold)] text-black font-black rounded-xl hover:bg-[var(--primary-gold)]/80 transition-all uppercase text-xs tracking-wider">
                Enroll Now
              </button>
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 hover:border-[var(--primary-gold)]/20 rounded-2xl p-8 flex flex-col justify-between backdrop-blur-md relative">
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Premium · 30 Days</span>
              <h3 className="text-2xl font-black text-white mt-2">AI Business Accelerator</h3>
              <div className="text-3xl font-black text-[var(--primary-gold)] mt-4 mb-6">₹2,499 <span className="text-sm text-gray-500 font-light">One-time payment</span></div>
              
              <ul className="space-y-4 mb-8">
                {['Everything from previous programs', 'Complete AI Enterprise Systems', 'Advanced Prompt Engineering', 'AI Agents for Business Systems', 'LinkedIn Growth Systems', 'AI Consulting Frameworks', 'Agency Client Acquisition', 'Freelancing blueprint', '+ 6 more modules listed below'].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[var(--primary-gold)] mt-1 shrink-0" />
                    <span className="text-gray-300 text-sm font-light">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="https://wa.me/919032517427" target="_blank" rel="noopener noreferrer">
              <button className="w-full py-4 bg-white/5 border border-white/10 hover:bg-[var(--primary-gold)] hover:text-black hover:border-[var(--primary-gold)] transition-all font-bold rounded-xl uppercase text-xs tracking-wider">
                Enroll Now
              </button>
            </a>
          </div>
        </div>

        {/* Mentorship Section */}
        <div className="bg-gradient-to-r from-[var(--primary-maroon)]/10 to-transparent border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold text-[var(--primary-gold)] uppercase tracking-widest">Direct Mentorship</span>
            <h3 className="text-2xl font-black text-white">1:1 AI Strategy Call</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Book a direct 30-minute consultation with Charan. Establish your personalized learning plan, review your resume/LinkedIn branding, learn client acquisition, and get answers to your questions.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400 pt-2">
              <span className="px-3 py-1 bg-white/5 rounded-lg">⏱ Duration: 30 Minutes</span>
              <span className="px-3 py-1 bg-white/5 rounded-lg">💼 Career Guidance & AI Roadmap</span>
              <span className="px-3 py-1 bg-white/5 rounded-lg">📝 Resume & LinkedIn Review</span>
            </div>
          </div>
          <div className="shrink-0 text-left md:text-right space-y-4">
            <div>
              <div className="text-xs text-gray-500 mb-0.5">Special Booking Price</div>
              <div className="text-3xl font-black text-[var(--primary-gold)]">₹99</div>
            </div>
            <a href="https://wa.me/919032517427" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3.5 bg-[var(--primary-maroon)] text-white hover:bg-[var(--primary-maroon)]/85 transition-all text-xs uppercase tracking-wider font-bold rounded-xl border border-[var(--primary-maroon)] shadow-[0_0_15px_rgba(139,0,0,0.3)]">
                Book Directly From Website
              </button>
            </a>
          </div>
        </div>

        {/* Snake Curriculum Roadmap */}
        <div className="pt-12">
          <h3 className="text-center text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Detailed Syllabus</h3>
          <SyllabusRoadmap />
        </div>

      </div>
    </div>
  );
}
