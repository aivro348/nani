import { useSEO } from '../../app/utils/useSEO';
import { AIToolsListSection } from '../components/AIToolsListSection';
import { motion } from 'motion/react';
import { Sparkles, Zap, Globe } from 'lucide-react';

export function AIToolsPage() {
  useSEO(
    'Scaro Technologies | The Ultimate AI Tools Directory',
    'Explore our curated collection of top AI tools for coding, design, research, productivity, and more. Supercharge your workflow today.'
  );

  return (
    <div className="min-h-screen bg-page-bg text-page-fg pb-16">
      
      {/* AI Tools Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border bg-surface">
        <div className="absolute inset-0 bg-grid-purple-900/[0.04] dark:bg-grid-purple-100/[0.03] bg-[bottom_1px_center]" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-8 font-bold tracking-widest uppercase text-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Scaro AI Initiatives</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-heading tracking-tight mb-8 leading-[1.1]"
          >
            Pioneering the next era of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500">
              Artificial Intelligence.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            At Scaro Technologies, we build and integrate state-of-the-art AI solutions. From intelligent automation to machine learning pipelines, we help enterprises harness AI to solve complex challenges. Explore the ecosystem of tools powering our innovations below.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-xl shadow-sm">
              <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Zap className="w-4 h-4 text-purple-500" />
              </div>
              <div className="text-left">
                <div className="font-bold text-sm text-heading">Enterprise Solutions</div>
                <div className="text-xs text-text-muted">Custom AI Integration</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-xl shadow-sm">
              <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <Globe className="w-4 h-4 text-cyan-500" />
              </div>
              <div className="text-left">
                <div className="font-bold text-sm text-heading">100+ Tools</div>
                <div className="text-xs text-text-muted">Extensive Directory</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Directory Section */}
      <section>
        <AIToolsListSection />
      </section>
      
    </div>
  );
}