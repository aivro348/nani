import { useSEO } from '../../main/utils/useSEO';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Users, Code, Award, Check, ArrowRight, 
  HelpCircle, ChevronDown, BookOpen, MessageSquare, Terminal, Map, Wrench
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import { AIToolsListSection, AI_TOOLS_DATA } from '../components/AIToolsListSection';

// Create a double ticker list from the exported AI_TOOLS_DATA that have logos
const aiToolsTicker = AI_TOOLS_DATA.filter(t => t.logo);
const doubleTicker = [...aiToolsTicker, ...aiToolsTicker, ...aiToolsTicker, ...aiToolsTicker];

// FAQS
const faqs = [
  {
    question: 'What is Scaro AI Academy?',
    answer: 'Scaro AI Academy is Scaro Technologie\' premium AI learning ecosystem designed to teach students, creators, and freelancers practical AI skills to boost their studies, careers, and digital income.'
  },
  {
    question: 'Who can join Scaro AI Academy?',
    answer: 'Anyone! Students, job seekers, working professionals, content creators, and freelancers who want to future-proof their careers and leverage AI for daily productivity.'
  },
  {
    question: 'Do I need coding knowledge to learn AI?',
    answer: 'Absolutely not. 90% of the tools we cover (like ChatGPT, Canva, Gamma, Midjourney) require zero coding. We focus on prompt engineering and no-code tool stacks.'
  },
  {
    question: 'Is the AI Masterclass free?',
    answer: 'Yes! The 2-hour Live AI Masterclass is 100% free of cost. We share prompts, custom roadmaps, and actionable templates during the session.'
  },
  {
    question: 'Can students earn using AI?',
    answer: 'Yes. We teach practical digital income models, including AI freelancing, automated content creation, design projects, and LinkedIn client acquisition.'
  },
  {
    question: 'Do you teach AI in Kannada?',
    answer: 'Yes, we explain complex concepts in simple, conversational Kannada and English (Kanglinglish) to ensure local students understand everything perfectly.'
  },
  {
    question: 'What AI tools will I learn?',
    answer: 'You will master 20+ industry-leading tools, including ChatGPT, Claude, Gemini, Midjourney, Runway, Suno, Canva, Lovable, Gamma, and Pika.'
  },
  {
    question: 'How can AI help my career?',
    answer: 'It helps you build ATS-friendly resumes, create outstanding presentations in seconds, automate repetitive workflows, and design high-quality visual content that makes your CV stand out.'
  }
];

export function AIToolsPage() {
  const location = useLocation();
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const aiSitelinks = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://scarotechnologies.vercel.app/ai",
    "name": "Scaro AI Academy",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://scarotechnologies.vercel.app/all-ai-tools?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "AI Tools Directory",
          "description": "Explore our comprehensive database of curated AI tools.",
          "url": "https://scarotechnologies.vercel.app/all-ai-tools"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "Free AI Masterclass",
          "description": "Join the 2-hour Live Free AI masterclass program.",
          "url": "https://scarotechnologies.vercel.app/ai-masterclass"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Premium AI Courses",
          "description": "Explore cohorts, direct mentorship, and AI roadmaps.",
          "url": "https://scarotechnologies.vercel.app/ai-courses"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "AI Resources & Prompts",
          "description": "Download prompt libraries, templates, and guides.",
          "url": "https://scarotechnologies.vercel.app/ai-resources"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "WhatsApp Community",
          "description": "Join our local students sharing AI prompts and freelancing leads.",
          "url": "https://scarotechnologies.vercel.app/ai-community"
        }
      ]
    }
  };

  useSEO(
    'Scaro AI Academy | Premium AI Learning Ecosystem',
    'Learn practical AI skills, master ChatGPT, Claude, Midjourney, and build digital income systems with Charan at Scaro AI Academy.',
    aiSitelinks
  );

  // Handle hash scrolling
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#0A0506] text-[#E2E8F0] selection:bg-[var(--primary-gold)] selection:text-black relative overflow-hidden">
      


      {/* Background glow lines */}
      <div className="absolute top-0 left-1/4 w-[1000px] h-[500px] bg-[var(--primary-maroon)]/5 rounded-full blur-[180px] pointer-events-none z-0" />
      
      {/* Hero Section styled as a single slide */}
      <section className="relative w-full min-h-screen bg-[#0A0506] flex items-center pt-28 pb-20 overflow-hidden z-10">
        
        {/* Background Image confined to Hero Section */}
        <div className="absolute inset-0 z-0">
          <img loading="eager" decoding="sync" src="/scaro_ai_concept.webp" 
            alt="AI Brain Concept"
            className="w-full h-full object-cover"
          />
          {/* Gradients matching the Business Slideshow for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0506]/95 via-[#0A0506]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0506]/90 via-transparent to-transparent" />
        </div>

        {/* Background glow lines */}
        <div className="absolute top-0 left-1/4 w-[1000px] h-[500px] bg-[var(--primary-maroon)]/10 rounded-full blur-[180px] pointer-events-none z-0" />
        
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div
              className="space-y-6 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-[2px] bg-gradient-to-r from-[var(--primary-gold)] to-transparent" />
                <span className="text-xs font-bold text-[var(--primary-gold)] uppercase tracking-[0.2em]">Scaro AI Academy</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] drop-shadow-2xl">
                Scaro's Premium <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-maroon)] via-[var(--primary-gold)] to-[var(--accent-gold)]">
                  AI Learning Ecosystem
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl drop-shadow-md pb-4">
                Learn AI. Build Skills. Earn Digitally. Join our premium ecosystem and master practical AI skills for studies, careers, content creation, and freelancing.
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <a href="/ai-masterclass">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-[var(--primary-gold)] to-[var(--accent-gold)] text-[#0A0506] font-black rounded-xl hover:shadow-[0_0_30px_-5px_var(--primary-gold)] transition-all text-sm uppercase tracking-wider flex items-center gap-3 group"
                  >
                    Join Free Masterclass
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </a>
                <a href="/ai-courses">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[var(--primary-gold)] text-white font-bold rounded-xl backdrop-blur-md transition-all text-sm uppercase tracking-wider shadow-xl"
                  >
                    Explore Courses
                  </motion.button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Ticker (All Tools) */}
      <div className="relative w-full py-10 bg-black/60 backdrop-blur-xl border-y border-white/10 overflow-hidden z-10 shadow-2xl">
        <style>{`
          @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-ticker {
            display: flex;
            width: max-content;
            animation: ticker 60s linear infinite;
          }
        `}</style>
        <div className="animate-ticker gap-16 items-center flex">
          {doubleTicker.map((tool, idx) => (
            <div key={idx} className="flex items-center shrink-0 px-4">
              <img loading="lazy" decoding="async" src={tool.logo} 
                alt={tool.name} 
                className="h-12 md:h-16 w-auto object-contain filter brightness-110 drop-shadow-md hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Hub Dashboard Grid (Direct subpages navigation) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[var(--primary-gold)]" />
            <span className="text-sm font-bold text-[var(--primary-gold)] uppercase tracking-[0.2em]">Explore Academy</span>
            <div className="w-12 h-[2px] bg-[var(--primary-gold)]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Explore Scaro AI Academy
          </h2>
          <p className="text-gray-400 text-lg font-light">
            Click through our dedicated sections to discover programs, resources, and live session calendars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Ultimate AI Tools Directory',
              desc: 'Explore our comprehensive database of 60+ curated AI tools, sorted by category and use case.',
              path: '/all-ai-tools',
              icon: Sparkles
            },
            {
              title: 'About the Founder',
              desc: 'Meet Charan, Lead AI Educator, and review stats, educational objectives and strategy details.',
              path: '/ai-about',
              icon: Users
            },
            {
              title: 'Premium Courses',
              desc: 'Explore the 3 main cohorts, direct mentorship strategies, and the winding syllabus roadmap.',
              path: '/ai-courses',
              icon: Map
            },
            {
              title: 'Free Masterclass',
              desc: 'Learn about the 2-hour Live Free masterclass program and the 6-step Journey flowchart.',
              path: '/ai-masterclass',
              icon: Award
            },
            {
              title: 'Free Resources',
              desc: 'Download high-quality prompt libraries, ATS CV templates, slides deck outlines, and website layouts.',
              path: '/ai-resources',
              icon: Wrench
            },
            {
              title: 'WhatsApp Community',
              desc: 'Join 1,000+ local students sharing daily prompt updates, b-roll footage, and freelancing leads.',
              path: '/ai-community',
              icon: MessageSquare
            },
            {
              title: 'AI Tutorials Blog',
              desc: 'Read articles and playbooks covering prompt structures, automation pipelines, and client acquisition.',
              path: '/ai-blog',
              icon: BookOpen
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/5 hover:border-[var(--primary-gold)]/20 rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-maroon)]/10 border border-[var(--primary-gold)]/20 text-[var(--primary-gold)] flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--primary-gold)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>
              <a href={item.path} className="text-xs font-bold text-[var(--primary-gold)] flex items-center gap-1.5 hover:underline mt-auto">
                Explore Section
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Tools List Section */}
      <AIToolsListSection previewOnly={true} />

      {/* FAQ Section */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[var(--primary-gold)]" />
            <span className="text-sm font-bold text-[var(--primary-gold)] uppercase tracking-[0.2em]">Faq</span>
            <div className="w-12 h-[2px] bg-[var(--primary-gold)]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 font-light text-lg">
            Got questions about Scaro AI Academy? Find answers to the most common queries below.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors">
                <button aria-label="Action button"
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[var(--primary-gold)] shrink-0" />
                    <span className="font-bold text-white text-base sm:text-lg leading-snug">{faq.question}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[var(--primary-gold)]' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-white/5">
                        <p className="text-gray-300 font-light leading-relaxed text-sm sm:text-base pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
      
    </div>
  );
}