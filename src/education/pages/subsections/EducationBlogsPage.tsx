import { motion } from 'motion/react';
import { useSEO } from '../../../main/utils/useSEO';
import { BookOpen } from 'lucide-react';

export function EducationBlogsPage() {
  useSEO('Education Blogs | Scaro Academy', 'Read our latest articles on education, career growth, and technical skills.');

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] text-sm font-bold tracking-wide uppercase mb-6">
            <BookOpen className="w-4 h-4" /> Academy Insights
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">Education Blogs</h1>
          <p className="text-lg text-slate-600">Expert advice, study guides, and industry analysis to help you navigate your academic and professional journey.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { tag: 'Career', title: 'How to land your first job in VLSI', read: '5 min read', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop' },
            { tag: 'Learning', title: 'Why project-based learning beats traditional exams', read: '4 min read', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop' },
            { tag: 'Industry', title: 'The growing demand for full-stack developers in 2026', read: '7 min read', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop' }
          ].map((blog, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all cursor-pointer group">
              <div className="h-48 overflow-hidden relative">
                <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[var(--primary-maroon)] text-xs font-bold px-3 py-1 rounded-full">
                  {blog.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary-maroon)] transition-colors">{blog.title}</h3>
                <div className="text-sm text-slate-500">{blog.read}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
