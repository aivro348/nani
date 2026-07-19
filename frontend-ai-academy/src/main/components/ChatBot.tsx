import { useState, useRef, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Bot, Sparkles, ArrowRight, GraduationCap, Cpu, Building2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  links?: { label: string; page: string }[];
}

// Context-focused website knowledge bases
const KNOWLEDGE_BASES = {
  general: {
    tagline: 'Your Unified Ecosystem Guide',
    phone: '+91 9949167458',
    email: 'support@scaro.com',
    location: 'Ground Floor, Renigunta Rd, Tirupati',
    text: `🏢 **Scaro Technologie** connects enterprise IT solutions, elite skill-based education, and cutting-edge AI tools into one unified platform.\n\nAsk me details about:\n• **Scaro Academy** (Courses & Capstones)\n• **AI Academy** (Tools & Masterclasses)\n• **Scaro Business** (Enterprise Services & Pricing)`
  },
  academy: {
    tagline: 'Scaro Academy Academic Counselor',
    phone: '+91 9949167458',
    email: 'support@scaro.com',
    location: 'Chadalawada Nagar, Tirupati',
    text: `🎓 **Scaro Academy** offers industry-led engineering cohorts featuring:\n• Live developer mentorship\n• 100% Placement Support (Avg CTC: ₹7.2 LPA)\n• Real capstone projects (PHP, React, Firebase)\n\nAvailable tracks include Python Programming, IoT & Embedded Systems, and VLSI Design.`
  },
  ai: {
    tagline: 'AI Hub Specialist',
    phone: '+91 9949167458',
    email: 'support@scaro.com',
    location: 'AI Division, Tirupati',
    text: `🤖 **AI Hub & Academy** connects you with modern AI utilities:\n• Curated AI Tools Directory (Lovable, Bolt.new, ChatGPT, Claude)\n• Free AI Masterclasses & Prompt engineering guides\n• Autonomous Agent development tutorials`
  },
  business: {
    tagline: 'Enterprise Solutions Consultant',
    phone: '+91 81067 95810',
    email: 'hr@scaro.in',
    location: 'Chadalawada Nagar, Tirupati',
    text: `🏢 **Scaro Business** designs scalable software for modern organizations:\n• Custom React/Next.js Web Portals\n• High-performance E-Commerce engines\n• Cloud architectures, microservices, and databases\n• Custom Enterprise AI Prompt pipelines`
  }
};

function getContextualResponse(query: string, vertical: 'general' | 'academy' | 'ai' | 'business'): Message {
  const q = query.toLowerCase().trim();
  const id = Date.now();

  const info = KNOWLEDGE_BASES[vertical];

  if (q.includes('contact') || q.includes('phone') || q.includes('call') || q.includes('email') || q.includes('address') || q.includes('location')) {
    return {
      id,
      sender: 'bot',
      text: `📞 **Contact Information:**\n\n📱 Phone: ${info.phone}\n📧 Email: ${info.email}\n📍 Address: ${info.location}\n🕐 Active Hours: 09:00 AM - 09:00 PM (IST)\n\nFeel free to write to us directly!`,
    };
  }

  // Branch-specific logic
  if (vertical === 'academy') {
    if (q.includes('course') || q.includes('learn') || q.includes('study') || q.includes('python') || q.includes('iot') || q.includes('vlsi')) {
      return {
        id,
        sender: 'bot',
        text: `📚 **Featured Cohorts:**\n\n1. **Python Programming Mastery** (Django, APIs, database architectures)\n2. **IoT & Embedded Systems** (ESP32, MQTT protocols, sensor arrays)\n3. **VLSI Design & Verification** (Digital logic, Verilog HDL, Verification systems)\n\nAll courses feature live mentor sessions and internship guarantees.`,
        links: [{ label: 'View All Courses', page: 'courses' }]
      };
    }
    if (q.includes('project') || q.includes('capstone') || q.includes('student')) {
      return {
        id,
        sender: 'bot',
        text: `💻 **Student Capstone Projects:**\n\nStudents build production-ready projects like:\n• *Student Result Management System* (PHP/MySQL)\n• *Online Quiz App* (React/Firebase/Tailwind)\n\nClick below to explore full details!`,
        links: [{ label: 'Explore Capstones', page: 'projects' }]
      };
    }
    if (q.includes('placement') || q.includes('job') || q.includes('career') || q.includes('ctc') || q.includes('salary')) {
      return {
        id,
        sender: 'bot',
        text: `💼 **Placement Record:**\n\n• 100% Placement Guidance\n• Avg CTC: ₹7.2 LPA\n• Top Hire Partners: Google, Microsoft, TCS, Infosys, Intel, Siemens\n• Features Mock Interview prep & ATS Resume optimization.`,
        links: [{ label: 'View Placements', page: 'courses' }]
      };
    }
  }

  if (vertical === 'ai') {
    if (q.includes('tool') || q.includes('lovable') || q.includes('bolt') || q.includes('chatgpt') || q.includes('directory')) {
      return {
        id,
        sender: 'bot',
        text: `🚀 **AI Tools Directory:**\n\nExplore our curated list of 60+ AI tools, including:\n• **Lovable.ai** (AI Web Builder)\n• **Bolt.new** (Full-Stack Deployment)\n• **ChatGPT & Claude** (Advanced LLM Chat)\n\nSubmit your own AI tool to reach our directory of developers!`,
        links: [{ label: 'Open AI Tools Directory', page: 'all-ai-tools' }]
      };
    }
    if (q.includes('masterclass') || q.includes('prompt') || q.includes('agent')) {
      return {
        id,
        sender: 'bot',
        text: `🎓 **AI Masterclasses:**\n\nWe provide free prompt engineering libraries and agent tutorials to help you connect prompt databases and build custom AI pipelines.`,
        links: [{ label: 'AI Resources & Prompts', page: 'ai-resources' }]
      };
    }
  }

  if (vertical === 'business') {
    if (q.includes('service') || q.includes('web') || q.includes('app') || q.includes('design') || q.includes('price')) {
      return {
        id,
        sender: 'bot',
        text: `🏢 **Scaro Enterprise Services:**\n\nWe design high-speed architectures:\n• **Custom Web Design** (React, Next.js, Node.js)\n• **E-Commerce Solutions** (Scalable engines, payment setups)\n• **Mobile Apps** (iOS & Android platforms)\n• **Enterprise AI Integration** (custom data pipelines)\n\nCheck out our transparent service pricing packages below!`,
        links: [{ label: 'View Packages & Pricing', page: 'business-pricing' }]
      };
    }
    if (q.includes('project') || q.includes('client') || q.includes('shipped') || q.includes('portfolio')) {
      return {
        id,
        sender: 'bot',
        text: `💻 **Shipped Client Solutions:**\n\n• **Geo-Silicon** (Enterprise technology portal)\n• **Balu Associates** (Professional corporate presence)\n\nClick below to check out our complete client portfolio!`,
        links: [{ label: 'View Case Studies', page: 'all-business-projects' }]
      };
    }
  }

  // Fallback inside active vertical
  return {
    id,
    sender: 'bot',
    text: `👋 I'm the **${info.tagline}**.\n\n${info.text}\n\nHow can I help you today? Feel free to ask about contact information, services, or pricing!`,
  };
}

export const ChatBot = memo(function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine active vertical context
  let vertical: 'general' | 'academy' | 'ai' | 'business' = 'general';
  if (currentPath.startsWith('/business')) {
    vertical = 'business';
  } else if (currentPath.startsWith('/ai') || currentPath.startsWith('/all-ai-')) {
    vertical = 'ai';
  } else if (
    currentPath.startsWith('/courses') || 
    currentPath.startsWith('/all-courses') || 
    currentPath.startsWith('/projects') || 
    currentPath.startsWith('/all-projects') || 
    currentPath.startsWith('/roadmap')
  ) {
    vertical = 'academy';
  }

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update initial message and options when vertical changes
  useEffect(() => {
    const welcomeMessages = {
      general: `Hi! 👋`,
      academy: `Hi! 👋`,
      ai: `Hi! 👋`,
      business: `Hi! 👋`
    };

    const initialLinks = {
      general: [
        { label: 'Scaro Academy', page: 'courses' },
        { label: 'AI Academy', page: 'ai' },
        { label: 'Corporate Services', page: 'business' },
      ],
      academy: [
        { label: 'Explore Courses', page: 'courses' },
        { label: 'Capstone Projects', page: 'projects' },
        { label: 'Study Roadmaps', page: 'roadmap' }
      ],
      ai: [
        { label: 'AI Tools Directory', page: 'all-ai-tools' },
        { label: 'AI Masterclass', page: 'ai-masterclass' },
        { label: 'Prompt Library', page: 'ai-resources' }
      ],
      business: [
        { label: 'Enterprise Pricing', page: 'business-pricing' },
        { label: 'Case Studies', page: 'all-business-projects' },
        { label: 'Start Project', page: 'business#contact' }
      ]
    };

    setMessages([
      {
        id: 0,
        sender: 'bot',
        text: welcomeMessages[vertical],
        links: initialLinks[vertical]
      }
    ]);
  }, [vertical]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Auto-open bot on mount after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input.trim(),
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getContextualResponse(input, vertical);
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  };

  const handleNavigate = (page: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (page.startsWith('http')) {
      window.open(page, '_blank', 'noopener,noreferrer');
    } else {
      navigate('/' + page);
    }
    setIsOpen(false);
  };

  // Theming based on vertical
  const themes = {
    general: {
      headerBg: 'from-[#5C141D] to-[#80202B]',
      icon: Bot,
      title: 'Scaro Technologie Bot'
    },
    academy: {
      headerBg: 'from-[#5C141D] to-[#80202B]',
      icon: GraduationCap,
      title: 'Scaro Academy Guide'
    },
    ai: {
      headerBg: 'from-[#D4AF37] to-[#B89628]',
      icon: Cpu,
      title: 'Scaro AI Hub Guide'
    },
    business: {
      headerBg: 'from-[#1E293B] to-[#334155]',
      icon: Building2,
      title: 'Scaro Business Assistant'
    }
  };

  const currentTheme = themes[vertical];
  const ActiveIcon = currentTheme.icon;

  const quickButtons = {
    general: [
      { label: '🎓 Academy', query: 'Academy courses' },
      { label: '🤖 AI Hub', query: 'AI Tools' },
      { label: '🏢 Services', query: 'business services' }
    ],
    academy: [
      { label: '📚 Courses', query: 'courses' },
      { label: '💻 Capstones', query: 'capstone projects' },
      { label: '💼 Placements', query: 'placements support' }
    ],
    ai: [
      { label: '🚀 AI Tools', query: 'ai tools directory' },
      { label: '💡 Masterclass', query: 'AI masterclass' },
      { label: '📞 Contact', query: 'contact' }
    ],
    business: [
      { label: '🏢 Services', query: 'business services' },
      { label: '💻 Shipped Apps', query: 'client projects' },
      { label: '📞 Contact Sales', query: 'contact' }
    ]
  }[vertical];

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-2xl shadow-blue-500/40 flex items-center justify-center hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring' }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <ActiveIcon className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pulse effect when closed */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-500 animate-ping opacity-20 pointer-events-none" />
      )}

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100%-2rem)] sm:w-[400px] h-[520px] bg-white rounded-2xl shadow-2xl shadow-black/20 border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Contextually Themed Header */}
            <div className={`bg-gradient-to-r ${currentTheme.headerBg} p-4 flex items-center gap-3 flex-shrink-0 transition-all duration-500`}>
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <ActiveIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm tracking-tight">{currentTheme.title}</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/80 text-[10px] uppercase font-bold tracking-wider">Context Assistant</span>
                </div>
              </div>
              <button aria-label="Action button" onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-slate-900 text-white rounded-br-sm'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-sm shadow-sm'
                    }`}
                  >
                    <div className="whitespace-pre-line text-xs font-medium">{msg.text}</div>
                    
                    {/* Navigation links */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="flex flex-col gap-1.5 mt-3 pt-2 border-t border-slate-100">
                        {msg.links.map((link, i) => (
                          <button aria-label="Action button"
                            key={i}
                            onClick={() => handleNavigate(link.page)}
                            className={`flex items-center justify-between px-3 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all text-left ${
                              msg.sender === 'user'
                                ? 'bg-white/20 hover:bg-white/30 text-white'
                                : 'bg-[#5C141D]/5 hover:bg-[#5C141D]/10 text-[#5C141D]'
                            }`}
                          >
                            <span>{link.label}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick action buttons */}
            <div className="px-3 py-2 bg-white border-t border-slate-100 flex gap-2 overflow-x-auto flex-shrink-0 scrollbar-none">
              {quickButtons.map((btn, i) => (
                <button aria-label="Action button"
                  key={i}
                  onClick={() => {
                    setInput(btn.query);
                    setTimeout(() => {
                      const userMsg: Message = { id: Date.now(), text: btn.query, sender: 'user' };
                      setMessages((prev) => [...prev, userMsg]);
                      setIsTyping(true);
                      setTimeout(() => {
                        setMessages((prev) => [...prev, getContextualResponse(btn.query, vertical)]);
                        setIsTyping(false);
                      }, 500);
                      setInput('');
                    }, 100);
                  }}
                  className="flex-shrink-0 px-3.5 py-1.5 bg-[#5C141D]/5 text-[#5C141D] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#5C141D]/10 hover:bg-[#5C141D]/10 transition-all whitespace-nowrap"
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-200 flex-shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={`Ask ${currentTheme.title}...`}
                  className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5C141D]/15 focus:border-[#5C141D] transition-all"
                />
                <button aria-label="Action button"
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="text-center mt-2.5">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1">
                  <Sparkles className="w-3 h-3 text-[var(--primary-gold)]" /> Powered by Scaro Technologie AI
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});
