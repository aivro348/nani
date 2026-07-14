import { motion } from 'motion/react';
import { useSEO } from '../../../main/utils/useSEO';
import { Headphones, PlayCircle, Mic } from 'lucide-react';

export function PodcastPage() {
  useSEO('Podcasts | Scaro Academy', 'Listen to industry leaders discuss the future of technology and education.');

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-gold)]/20 text-[var(--primary-gold)] text-sm font-bold tracking-wide uppercase mb-6">
            <Mic className="w-4 h-4" /> Tech Talks
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">Scaro Tech Podcast</h1>
          <p className="text-lg text-slate-300">Dive deep into engineering trends, career advice, and technological breakthroughs with our expert guests.</p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            { eps: 'Ep 12', title: 'The Future of AI in Automotive Engineering', duration: '45 min' },
            { eps: 'Ep 11', title: 'Building a Career in VLSI Design', duration: '38 min' },
            { eps: 'Ep 10', title: 'How Cloud Computing is Reshaping Industries', duration: '52 min' }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col sm:flex-row gap-6 items-center hover:bg-slate-700 transition-colors cursor-pointer group">
              <div className="w-16 h-16 rounded-xl bg-slate-900 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Headphones className="w-8 h-8 text-[var(--primary-gold)]" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="text-[var(--primary-maroon)] font-bold text-sm mb-1">{item.eps}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.duration}</p>
              </div>
              <div className="flex-shrink-0">
                <PlayCircle className="w-12 h-12 text-[var(--primary-gold)] opacity-80 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
