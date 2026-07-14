import { useSEO } from '../../main/utils/useSEO';
import { motion } from 'motion/react';
import { Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

const resourcesData = [
  { title: 'Prompt Library', desc: 'Plug-and-play prompts for writing, study, design, and freelancing.', tag: 'Prompting' },
  { title: 'AI Tools Directory', desc: 'Curated 20+ tools with use cases, pricing tiers, and starter prompts.', tag: 'Directory' },
  { title: 'Resume Templates', desc: 'ATS-friendly resume templates with AI rewrites.', tag: 'Career' },
  { title: 'PPT Templates', desc: 'Premium decks for Gamma & Canva AI.', tag: 'Design' },
  { title: 'Website Templates', desc: 'Portfolio and landing templates for Framer / Lovable.', tag: 'Web' },
  { title: 'Career Roadmaps', desc: 'Roadmaps for content creator, AI freelancer, and digital marketer.', tag: 'Roadmaps' }
];

export function AIResourcesPage() {
  useSEO(
    'Free AI Templates & Guides | Scaro AI Academy',
    'Download prompt libraries, resume templates, website assets, and career roadmaps on our student resources center.'
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
            <span>Templates & Guides</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6"
          >
            Free resources, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-maroon)] to-[var(--primary-gold)]">regularly updated</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-light text-lg leading-relaxed"
          >
            Templates, prompts, and roadmaps for our students and community.
          </motion.p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourcesData.map((res, idx) => (
            <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col justify-between group hover:border-[var(--primary-gold)]/20 transition-all duration-300">
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-[var(--primary-gold)] uppercase tracking-widest">{res.tag}</span>
                <h4 className="text-lg font-bold text-white mt-1 group-hover:text-[var(--primary-gold)] transition-colors">{res.title}</h4>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{res.desc}</p>
              </div>
              <a href="https://wa.me/919032517427" className="text-xs font-bold text-[var(--primary-gold)] flex items-center gap-1.5 mt-6 hover:underline">
                Available inside the community
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Access info block */}
        <div className="bg-[#0A0506]/55 border border-white/10 rounded-2xl p-8 text-center max-w-2xl mx-auto space-y-6">
          <p className="text-gray-300 text-sm">
            All templates, directories, and libraries are stored directly inside our WhatsApp community group.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="https://wa.me/919032517427" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 bg-[var(--primary-maroon)] text-white hover:bg-[var(--primary-maroon)]/85 transition-all text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 border border-[var(--primary-maroon)] shadow-[0_0_15px_rgba(139,0,0,0.3)]">
                <MessageSquare className="w-4 h-4" />
                Join WhatsApp to Access
              </button>
            </a>
            <a href="/ai-courses">
              <button className="px-6 py-3 bg-white/5 border border-white/10 hover:border-[var(--primary-gold)]/30 rounded-lg text-xs font-bold uppercase tracking-wider transition-all text-white">
                Explore Courses
              </button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
