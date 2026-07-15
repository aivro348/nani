import { motion } from 'motion/react';
import { useSEO } from '../../../main/utils/useSEO';
import { Presentation, Clock, Users, ArrowRight } from 'lucide-react';

export function WorkshopsPage() {
  useSEO('Workshops | Scaro Academy', 'Interactive live workshops designed to teach specific, high-demand skills rapidly.');

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase mb-6">
            <Presentation className="w-4 h-4" /> Live Learning
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">Interactive Workshops</h1>
          <p className="text-lg text-slate-600">Short, intensive sessions focusing on practical tools and emerging technologies.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'IoT Prototyping with ESP32', date: 'Next Saturday', duration: '4 Hours', audience: 'Beginner to Intermediate' },
            { title: 'Advanced React Native Architecture', date: 'Upcoming Month', duration: '6 Hours', audience: 'Advanced' }
          ].map((workshop, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="border border-slate-200 p-8 rounded-3xl hover:border-[var(--primary-maroon)] transition-colors group">
              <h3 className="text-2xl font-bold mb-4">{workshop.title}</h3>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-600"><Clock className="w-5 h-5 text-slate-400" /> {workshop.date} ({workshop.duration})</div>
                <div className="flex items-center gap-3 text-slate-600"><Users className="w-5 h-5 text-slate-400" /> {workshop.audience}</div>
              </div>
              <button aria-label="Action button" className="flex items-center gap-2 text-white bg-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-[var(--primary-maroon)] transition-colors group-hover:shadow-lg w-full justify-center">
                Reserve a Seat <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
