import { motion } from 'motion/react';
import { useSEO } from '../../../main/utils/useSEO';
import { Calendar, Bell } from 'lucide-react';

export function NewsEventsPage() {
  useSEO('News & Events | Scaro Academy', 'Stay updated with the latest happenings at Scaro Technologies.');

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-gold)]/20 text-[var(--primary-gold)] text-sm font-bold tracking-wide uppercase mb-6">
            <Bell className="w-4 h-4" /> Latest Updates
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">News & Events</h1>
          <p className="text-lg text-slate-600">Discover recent milestones, upcoming workshops, and major announcements.</p>
        </motion.div>

        <div className="space-y-6">
          {[
            { date: 'Oct 15, 2026', title: 'Scaro Technologies partners with leading AI Firm', desc: 'A new joint certification program in Advanced Machine Learning.' },
            { date: 'Sep 28, 2026', title: 'Annual Tech Symposium 2026', desc: 'Join us for a 3-day virtual event featuring top industry experts.' },
            { date: 'Aug 10, 2026', title: 'Launch of the new Virtual Lab Environment', desc: 'Experience hardware simulation directly in your browser.' }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-48 text-center md:text-left">
                <div className="flex items-center gap-2 text-[var(--primary-maroon)] font-bold justify-center md:justify-start">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
