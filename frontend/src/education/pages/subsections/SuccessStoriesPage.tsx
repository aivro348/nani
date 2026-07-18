import { motion } from 'motion/react';
import { useSEO } from '../../../main/utils/useSEO';
import { Award, Briefcase, Star } from 'lucide-react';

export function SuccessStoriesPage() {
  useSEO('Success Stories | Scaro Academy', 'Read inspiring journeys of our alumni.');

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold tracking-wide uppercase mb-6">
            <Award className="w-4 h-4" /> Alumni Spotlight
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">Success Stories</h1>
          <p className="text-lg text-slate-600">See how Scaro Academy has accelerated the careers of thousands of engineering professionals.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Rahul S.', role: 'Embedded Engineer at Qualcomm', story: 'The hands-on IoT projects and mentor guidance were the key differentiators in my interview.' },
            { name: 'Sneha P.', role: 'Data Scientist at Amazon', story: 'Scaro Academy’s Machine Learning bootcamp gave me the practical knowledge I was missing from my college degree.' },
            { name: 'Karthik V.', role: 'Full Stack Dev at TCS', story: 'Transitioning from non-IT to software development felt impossible until I joined the Full Stack program here.' }
          ].map((student, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-slate-50 p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Star className="w-24 h-24 text-[var(--primary-gold)]" />
              </div>
              <Briefcase className="w-8 h-8 text-[var(--primary-maroon)] mb-6" />
              <p className="text-slate-700 italic mb-6 relative z-10">"{student.story}"</p>
              <div className="mt-auto relative z-10">
                <div className="font-bold text-lg text-slate-900">{student.name}</div>
                <div className="text-sm font-medium text-[var(--primary-gold)]">{student.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
