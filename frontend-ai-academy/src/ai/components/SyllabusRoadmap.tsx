import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, Award, Briefcase, Play, CheckCircle2, ChevronRight, 
  ChevronDown, BookOpen, Compass, Sparkles, HelpCircle, Code, ShieldCheck
} from 'lucide-react';

interface ModuleData {
  id: number;
  title: string;
  description: string;
  outcome: string;
  tools: string[];
  projects: string[];
  deliverable: string;
  // Grid positions for desktop snake layout
  col: number;
  row: number;
  dir: 'lr' | 'rl' | 'down'; // visual connection direction
}

const modules: ModuleData[] = [
  {
    id: 1,
    title: 'AI Fundamentals',
    description: 'Build a strong operational model of generative models, tokens, neural networks, and how modern LLMs process natural language.',
    outcome: 'Differentiate between model styles and choose the right AI tool for any specific corporate task.',
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity'],
    projects: ['AI Models Capabilities Comparison Bench'],
    deliverable: 'Model-use handbook for professional tasks.',
    col: 1,
    row: 1,
    dir: 'lr'
  },
  {
    id: 2,
    title: 'ChatGPT Mastery',
    description: 'Learn to configure ChatGPT as a custom expert assistant using memory settings, system prompts, and custom database references.',
    outcome: 'Create personalized GPT modules to execute complex data calculations.',
    tools: ['ChatGPT Pro', 'Custom GPTs Builder', 'Advanced Data Analysis'],
    projects: ['Building a Personal Finance Analysis GPT'],
    deliverable: 'A live, functional Custom GPT URL.',
    col: 2,
    row: 1,
    dir: 'lr'
  },
  {
    id: 3,
    title: 'Claude',
    description: "Harness Anthropic's Claude 3.5 Sonnet to construct coding assets, detailed text reviews, and side-by-side interactive previews.",
    outcome: "Design and build clean UI prototypes and complex copy scripts with Claude's precise reasoning.",
    tools: ['Claude Project workspace', 'Claude Artifacts UI'],
    projects: ['Interactive Dashboard Prototyping inside Artifacts'],
    deliverable: 'Deployable HTML/CSS landing page code inside Claude.',
    col: 3,
    row: 1,
    dir: 'down'
  },
  {
    id: 6, // Winding order: 1 -> 2 -> 3 -> 6 (below 3) -> 5 (left of 6) -> 4 (left of 5) -> 7 (below 4)
    title: 'AI Video Basics',
    description: 'Learn to generate realistic video clips, cinematic b-roll, and digital talking avatars using next-gen generative video suites and audio synchronizers.',
    outcome: 'Generate, render, and script high-retention social videos or marketing explainers entirely using AI.',
    tools: ['Runway Gen-2', 'Pika Labs', 'HeyGen', 'CapCut AI'],
    projects: ['Creating a 60-Second AI Video Ad Campaign'],
    deliverable: 'High-definition MP4 AI video ready for publishing.',
    col: 3,
    row: 2,
    dir: 'rl'
  },
  {
    id: 5,
    title: 'Prompt Engineering',
    description: 'Write structured prompts using advanced techniques: Chain-of-Thought, few-shot prompts, and delimited markdown instructions.',
    outcome: 'Eliminate hallucinations and secure predictable, structured, high-quality answers.',
    tools: ['Claude', 'ChatGPT Prompt Evaluator'],
    projects: ['Creating a Modular Prompt Library for Marketing Copy'],
    deliverable: 'Personal Prompt Playbook containing 15+ proven prompts.',
    col: 2,
    row: 2,
    dir: 'rl'
  },
  {
    id: 4,
    title: 'Gemini',
    description: 'Use Gemini Advanced to connect directly with your workspace emails, slides, maps, and spreadsheets.',
    outcome: 'Automate raw text updates, document searching, and spreadsheet summaries in your Google Drive.',
    tools: ['Gemini Advanced', 'Google Docs/Sheets AI plugins'],
    projects: ['Automated Business Travel & Presentation Builder'],
    deliverable: 'Connected Google Drive automated workflow set.',
    col: 1,
    row: 2,
    dir: 'down'
  },
  {
    id: 7,
    title: 'Resume Building',
    description: 'Build ATS-optimized resumes using generative AI, tailored keywords, and professional templates that clear corporate recruiter filters.',
    outcome: 'Optimize professional profiles and structure impact-driven bullet points for specific job roles.',
    tools: ['ChatGPT', 'Claude', 'Resume Worded'],
    projects: ['Rebuilding a Student Resume for AI-Engineering Internships'],
    deliverable: 'ATS-score verified PDF Resume.',
    col: 1,
    row: 3,
    dir: 'lr'
  },
  {
    id: 8,
    title: 'PPT Creation',
    description: 'Instantly generate high-impact, professional presentations and interactive slide decks using AI slide compilers and layout engines.',
    outcome: 'Structure presentation outlines and apply cohesive visual themes automatically.',
    tools: ['Gamma App', 'Canva AI', 'SlideGPT'],
    projects: ['Pitch Deck for a Technology Startup'],
    deliverable: 'Fully editable web-share link and PDF export of the deck.',
    col: 2,
    row: 3,
    dir: 'lr'
  },
  {
    id: 9,
    title: 'Personal Branding',
    description: 'Grow your professional network on LinkedIn and Twitter using AI content assistants and scheduled posting hooks.',
    outcome: 'Establish an authoritative online presence, schedule posts, and craft viral industry threads.',
    tools: ['Grok', 'Taplio', 'ChatGPT'],
    projects: ['Creating a 30-Day LinkedIn Content Calendar'],
    deliverable: 'A scheduled buffer of 10 high-engagement posts.',
    col: 3,
    row: 3,
    dir: 'down'
  },
  {
    id: 10,
    title: 'AI Productivity System',
    description: 'Set up an integrated system that connects your notes, calendar, and workflows using agentic automation.',
    outcome: 'Automate lead intakes, calendar bookings, and follow-ups.',
    tools: ['Zapier', 'n8n', 'Make.com', 'Notion AI'],
    projects: ['Creating an automated lead capture and follow-up sequence'],
    deliverable: 'An active, functional cloud automation workflow.',
    col: 3,
    row: 4,
    dir: 'lr'
  }
];

export function SyllabusRoadmap() {
  const [selectedModule, setSelectedModule] = useState<number | null>(1);

  // Winding index logic to map items linearly for layout rendering
  const windingOrder = [0, 1, 2, 5, 4, 3, 6, 7, 8, 9]; // indices of the modules array

  return (
    <section className="py-24 bg-[#0A0506] relative overflow-hidden scroll-mt-20" id="syllabus">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[var(--primary-maroon)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[var(--primary-gold)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[var(--primary-gold)]" />
            <span className="text-sm font-bold text-[var(--primary-gold)] uppercase tracking-[0.2em]">Curriculum Map</span>
            <div className="w-12 h-[2px] bg-[var(--primary-gold)]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Interactive Career Roadmap
          </h2>
          <p className="text-gray-400 text-lg font-light">
            Explore the exact module-by-module learning path for each program. Click any module to view details.
          </p>
        </div>

        {/* Snake Map Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-x-16 gap-y-24 relative mb-16">
          
          {/* Custom winding background trace (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 1000 1000" preserveAspectRatio="none" stroke="rgba(212, 175, 55, 0.15)" strokeWidth="4" fill="none">
            <path d="
              M 160 80 
              L 840 80 
              A 40 40 0 0 1 840 320
              L 160 320
              A 40 40 0 0 0 160 560
              L 840 560
              A 40 40 0 0 1 840 800
              L 840 800
            " className="stroke-[var(--primary-gold)]/20 fill-none" strokeDasharray="8 8" />
          </svg>

          {/* Render Modules in original order but styled into grid rows/cols */}
          {modules.map((mod) => {
            const isSelected = selectedModule === mod.id;
            
            return (
              <div 
                key={mod.id}
                style={{ 
                  gridColumn: mod.col, 
                  gridRow: mod.row 
                }}
                className="relative z-10 flex flex-col justify-center"
              >
                {/* Node Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedModule(mod.id)}
                  className={`w-full p-6 bg-white/5 border rounded-2xl text-left transition-all ${
                    isSelected 
                      ? 'border-[var(--primary-gold)] bg-[var(--primary-gold)]/10 shadow-[0_0_30px_-5px_rgba(212,175,55,0.3)]' 
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-black px-2.5 py-1 rounded-md ${
                      isSelected ? 'bg-[var(--primary-gold)] text-black' : 'bg-white/5 text-gray-400'
                    }`}>
                      MODULE {mod.id}
                    </span>
                    {isSelected && <Sparkles className="w-4 h-4 text-[var(--primary-gold)] animate-pulse" />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{mod.title}</h3>
                  <p className="text-xs text-gray-500 font-light line-clamp-2">{mod.description}</p>
                </motion.button>
              </div>
            );
          })}
        </div>

        {/* Mobile Timeline Layout */}
        <div className="lg:hidden relative border-l border-white/10 ml-4 pl-8 space-y-8 mb-16">
          {windingOrder.map((idx) => {
            const mod = modules[idx];
            const isSelected = selectedModule === mod.id;
            return (
              <div key={mod.id} className="relative">
                {/* Bullet node indicator */}
                <div className={`absolute -left-[41px] top-4 w-6 h-6 rounded-full border-4 flex items-center justify-center transition-colors ${
                  isSelected 
                    ? 'border-[var(--primary-gold)] bg-black text-[var(--primary-gold)]' 
                    : 'border-white/10 bg-black'
                }`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-current" />
                </div>

                <motion.button
                  onClick={() => setSelectedModule(mod.id)}
                  className={`w-full p-6 bg-white/5 border rounded-2xl text-left transition-all ${
                    isSelected 
                      ? 'border-[var(--primary-gold)] bg-[var(--primary-gold)]/10' 
                      : 'border-white/10'
                  }`}
                >
                  <span className="text-[10px] font-bold text-[var(--primary-gold)] uppercase tracking-widest">Module {mod.id}</span>
                  <h4 className="text-lg font-bold text-white mt-1">{mod.title}</h4>
                  <p className="text-xs text-gray-500 mt-2 font-light">{mod.description}</p>
                </motion.button>
              </div>
            );
          })}
        </div>

        {/* Syllabus Detail Section */}
        <AnimatePresence mode="wait">
          {selectedModule !== null && (
            <motion.div
              key={selectedModule}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-md relative overflow-hidden"
            >
              {/* Background gradient flare */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--primary-gold)]/5 rounded-full blur-[80px] pointer-events-none" />

              {(() => {
                const activeMod = modules.find(m => m.id === selectedModule)!;
                return (
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-6">
                      <div>
                        <span className="text-xs font-black text-[var(--primary-gold)] uppercase tracking-widest">Curriculum Details</span>
                        <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                          Module {activeMod.id}: {activeMod.title}
                        </h3>
                      </div>
                      <span className="px-4 py-2 bg-[var(--primary-gold)]/10 border border-[var(--primary-gold)]/25 text-[var(--primary-gold)] font-bold text-xs rounded-xl uppercase tracking-widest">
                        Core Module
                      </span>
                    </div>

                    {/* Description Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        {/* Summary */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Module Overview</h4>
                          <p className="text-gray-300 font-light leading-relaxed">{activeMod.description}</p>
                        </div>

                        {/* Learning Outcome */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[var(--primary-gold)]" />
                            Learning Outcome
                          </h4>
                          <p className="text-gray-300 font-light leading-relaxed text-sm">{activeMod.outcome}</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {/* Tools Stack */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">AI Tools & Tech</h4>
                          <div className="flex flex-wrap gap-2 pt-1">
                            {activeMod.tools.map((t, idx) => (
                              <span key={idx} className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-gray-300">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Projects */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Hands-On Projects</h4>
                          <ul className="space-y-2">
                            {activeMod.projects.map((p, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-300 font-light">
                                <span className="text-[var(--primary-gold)] mt-1 shrink-0">•</span>
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tangible Deliverable */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Tangible Deliverable</h4>
                          <div className="flex items-center gap-3 bg-[var(--primary-gold)]/5 border border-[var(--primary-gold)]/10 rounded-xl p-4">
                            <ShieldCheck className="w-5 h-5 text-[var(--primary-gold)] shrink-0" />
                            <span className="text-sm font-bold text-[var(--primary-gold)]">{activeMod.deliverable}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
