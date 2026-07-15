import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Clock, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router';

const blogs = [
  {
    id: 1,
    title: 'Top 5 Tech Skills Every Engineering Student Needs in 2026',
    excerpt: 'The tech landscape is evolving rapidly. From generative AI architecture to cloud-native development, discover the critical skills that will make your resume stand out to top recruiters this year.',
    image: '/blog_tech_skills.webp',
    date: 'July 2, 2026',
    category: 'Career Advice',
    icon: TrendingUp,
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'How Virtual Labs Bridge the University-Industry Gap',
    excerpt: 'Traditional labs often lack the enterprise-grade infrastructure used in the real world. Learn how VR and cloud-simulated environments at Scaro Academy give you the practical hands-on experience companies demand.',
    image: '/blog_virtual_labs.webp',
    date: 'June 28, 2026',
    category: 'Learning Tech',
    icon: BookOpen,
    readTime: '4 min read'
  },
  {
    id: 3,
    title: 'From Campus to Corporate: Inspiring Success Stories',
    excerpt: 'Transitioning from student life to corporate responsibilities can be daunting. Read how our alumni successfully navigated this jump, securing high-paying roles through dedicated mentorship and real-world projects.',
    image: '/blog_success_stories.webp',
    date: 'June 15, 2026',
    category: 'Success Stories',
    icon: Clock,
    readTime: '6 min read'
  }
];

export function EducationBlogsSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-[#fafcfc] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--primary-maroon)]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Latest Insights & <span className="text-[var(--primary-maroon)]">Resources</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Stay ahead of the curve. Read our latest articles, guides, and success stories to fuel your educational journey.
            </p>
          </div>
          <button 
            onClick={() => navigate('/blogs')}
            className="group hidden md:inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 hover:border-[var(--primary-maroon)] text-slate-700 hover:text-[var(--primary-maroon)] font-bold rounded-xl transition-all hover:shadow-lg"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              onClick={() => navigate('/blogs')}
              className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
                <img loading="lazy" decoding="async" src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[var(--primary-maroon)] text-xs font-black uppercase tracking-wider rounded-full shadow-sm">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4 uppercase tracking-wide">
                  <span>{blog.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="flex items-center gap-1">
                    <blog.icon className="w-3 h-3" /> {blog.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[var(--primary-maroon)] transition-colors leading-snug">
                  {blog.title}
                </h3>
                
                <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                  {blog.excerpt}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-[var(--primary-maroon)]">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile button */}
        <button 
          onClick={() => navigate('/blogs')}
          className="mt-10 w-full md:hidden flex justify-center items-center gap-2 px-6 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl transition-all active:bg-slate-50"
        >
          View All Articles
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
