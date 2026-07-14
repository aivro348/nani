import { useSEO } from '../../main/utils/useSEO';
import { motion } from 'motion/react';
import { Sparkles, Calendar, User, ArrowRight } from 'lucide-react';

const blogArticles = [
  {
    title: 'The Art of Chain-of-Thought Prompting: Unlocking LLM Logic',
    desc: 'Discover how structuring your triggers with step-by-step reasoning eliminates hallucinations and returns predictable outputs.',
    date: 'July 12, 2026',
    author: 'Charan',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Building Production-Grade AI Agents with Zapier & Make.com',
    desc: 'How to design integrated workflows that capture incoming leads, run qualified logic, and automatically book calls in your CRM.',
    date: 'July 05, 2026',
    author: 'Charan',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'How to Launch a Successful AI Freelancing Business in 2026',
    desc: 'A complete blueprint to selling prompt engineering, automated video explainers, and custom website builds to global clients.',
    date: 'June 28, 2026',
    author: 'Charan',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  }
];

export function AIBlogPage() {
  useSEO(
    'AI Academy Insights | Scaro AI Academy',
    'Stay updated with the latest AI trends, prompt playbook releases, and automation strategies published by Charan.'
  );

  return (
    <div className="min-h-screen bg-[#0A0506] text-[#E2E8F0] selection:bg-[var(--primary-gold)] selection:text-black relative overflow-hidden py-24">
      {/* Background glow lines */}
      <div className="absolute top-0 left-1/4 w-[1000px] h-[500px] bg-[var(--primary-maroon)]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[600px] bg-[var(--primary-gold)]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-[var(--primary-maroon)]/10 text-[var(--primary-gold)] border border-[var(--primary-gold)]/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4 text-[var(--primary-gold)] animate-pulse" />
            <span>AI Blog</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6"
          >
            Latest AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-maroon)] to-[var(--primary-gold)]">Insights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-light text-lg leading-relaxed"
          >
            Stay ahead of the curve with prompt tutorials, workflow blueprints, and digital income guides.
          </motion.p>
        </div>

        {/* Articles List */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogArticles.map((article, idx) => (
            <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden group hover:border-[var(--primary-gold)]/20 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover filter grayscale group-hover:filter-none transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {article.author}
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-lg leading-snug group-hover:text-[var(--primary-gold)] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {article.desc}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button className="text-xs font-bold text-[var(--primary-gold)] flex items-center gap-1.5 hover:underline">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
