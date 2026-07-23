import { motion } from 'motion/react';
import { useState } from 'react';
import { BookOpen, Calendar, User, Clock, ChevronRight, Sparkles, TrendingUp, Cpu, Brain, Rocket } from 'lucide-react';
import { useSEO } from '../../main/utils/useSEO';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Future of AI in Engineering Education',
    excerpt: 'How artificial intelligence is reshaping how engineering students learn, practice, and innovate in the 21st century.',
    author: 'Dr. Aruna Reddy',
    date: 'April 25, 2025',
    readTime: '8 min read',
    category: 'AI & Education',
    icon: Brain,
    color: 'from-[#5C141D] to-[#8B1E2B]',
    image: '/unsplash/img_1ae33772be.webp'
  },
  {
    id: 2,
    title: 'Mastering Full-Stack Development in 2025',
    excerpt: 'A comprehensive guide for CSE students to navigate the evolving landscape of web technologies and frameworks.',
    author: 'Rahul Sharma',
    date: 'April 20, 2025',
    readTime: '12 min read',
    category: 'Development',
    icon: Cpu,
    color: 'from-[#D4AF37] to-[#B89628]',
    image: '/unsplash/img_727e4663c6.webp'
  },
  {
    id: 3,
    title: 'Sustainable Engineering: Building for Tomorrow',
    excerpt: 'Exploring the role of Civil and Mechanical engineers in creating eco-friendly infrastructure and energy systems.',
    author: 'Prof. S. Murali',
    date: 'April 15, 2025',
    readTime: '10 min read',
    category: 'Sustainability',
    icon: Rocket,
    color: 'from-[#5C141D] to-[#3a0a10]',
    image: '/unsplash/img_6f576b3a4e.webp'
  },
  {
    id: 4,
    title: 'The Rise of Smart Grids and EV Technology',
    excerpt: 'Why EEE students should focus on electric vehicle infrastructure and intelligent power distribution systems.',
    author: 'Priya Verma',
    date: 'April 10, 2025',
    readTime: '7 min read',
    category: 'Electrical',
    icon: TrendingUp,
    color: 'from-[#B89628] to-[#997B1E]',
    image: '/unsplash/img_147375acf5.webp'
  },
  {
    id: 5,
    title: 'Breaking into VLSI Design: A Career Roadmap',
    excerpt: 'Detailed insights for ECE students wanting to excel in the semiconductor industry and chip design.',
    author: 'Anil Kumar',
    date: 'April 5, 2025',
    readTime: '15 min read',
    category: 'Electronics',
    icon: Sparkles,
    color: 'from-[#5C141D] to-[#B89628]',
    image: '/unsplash/img_49ff13ca9c.webp'
  },
  {
    id: 6,
    title: 'Robotics and Industry 4.0: The New Frontier',
    excerpt: 'How automation and smart manufacturing are transforming traditional mechanical engineering roles.',
    author: 'Vikram Singh',
    date: 'March 28, 2025',
    readTime: '9 min read',
    category: 'Robotics',
    icon: Rocket,
    color: 'from-[#8B1E2B] to-[#5C141D]',
    image: '/unsplash/img_01106f5d8e.webp'
  },
  {
    id: 7,
    title: 'Data Science for Non-IT Engineers',
    excerpt: 'How students from all branches can leverage data analytics to improve their core engineering projects.',
    author: 'Sneha Reddy',
    date: 'March 20, 2025',
    readTime: '11 min read',
    category: 'Data Science',
    icon: Brain,
    color: 'from-[#5C141D] to-[#D4AF37]',
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f9a2?w=800'
  },
  {
    id: 8,
    title: 'Navigating Your First Internship',
    excerpt: 'Practical tips for engineering students to land and succeed in their first professional industry role.',
    author: 'Kiran Deep',
    date: 'March 15, 2025',
    readTime: '6 min read',
    category: 'Career Advice',
    icon: BookOpen,
    color: 'from-[#B89628] to-[#5C141D]',
    image: 'https://images.unsplash.com/photo-1521737706076-34a9ff3f3f5f?w=800'
  }
];

export function BlogsPage() {
  useSEO(
    'Scaro Technologie | Engineering Blog & Insights',
    'Stay updated with the latest trends in software engineering, artificial intelligence, sustainable tech, and professional growth.'
  );
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);

  if (selectedPost) {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="min-h-screen bg-page-bg pt-28 sm:pt-32 pb-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <button aria-label="Action button" 
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-[var(--primary-gold)] font-bold mb-8 hover:gap-3 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 rotate-180" /> Back to Blogs
          </button>
          
          <img loading="lazy" decoding="async" src={selectedPost.image} 
            alt={selectedPost.title} 
            className="w-full h-[400px] object-cover rounded-3xl mb-10 shadow-2xl border border-white/10"
          />
          
          <div className="flex flex-wrap items-center gap-4 text-text-muted mb-6">
            <span className="px-3 py-1 bg-[var(--primary-gold)]/10 text-[var(--primary-gold)] border border-[var(--primary-gold)]/20 rounded-full text-xs font-extrabold uppercase tracking-wider">{selectedPost.category}</span>
            <span className="flex items-center gap-1.5 text-xs"><Calendar className="w-4 h-4 text-[var(--primary-gold)]" /> {selectedPost.date}</span>
            <span className="flex items-center gap-1.5 text-xs"><Clock className="w-4 h-4 text-[var(--primary-gold)]" /> {selectedPost.readTime}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-black text-heading mb-8 leading-tight">
            {selectedPost.title}
          </h1>
          
          <div className="flex items-center gap-3 mb-10 pb-10 border-b border-surface-border">
            <div className="w-12 h-12 rounded-full bg-[var(--primary-maroon)] text-white flex items-center justify-center font-bold text-lg shadow-md">
              {selectedPost.author[0]}
            </div>
            <div>
              <div className="text-heading font-bold">{selectedPost.author}</div>
              <div className="text-sm text-text-muted">Expert Contributor at Scaro Technologie</div>
            </div>
          </div>
          
          <div className="prose prose-invert max-w-none text-lg text-text-secondary leading-relaxed space-y-6">
            <p className="font-bold text-heading text-xl">
              {selectedPost.excerpt}
            </p>
            <p>
              In the rapidly evolving landscape of modern engineering, the integration of advanced technologies like Artificial Intelligence and smart systems is no longer a luxury but a necessity. Students today face a unique challenge: mastering their core engineering principles while simultaneously becoming proficient in the digital tools that define industry 4.0.
            </p>
            <p>
              This is where Scaro Technologie comes in. By providing personalized learning roadmaps and AI-powered guidance, we bridge the gap between academic theory and industrial practice. Our mission is to empower the next generation of engineers to not just keep up, but to lead the way in innovation.
            </p>
            <div className="bg-surface border-l-4 border-[var(--primary-gold)] p-8 rounded-r-2xl my-10 shadow-lg">
              <p className="italic text-heading text-xl">
                "The best way to predict the future of engineering is to build it ourselves, one project at a time."
              </p>
            </div>
            <p>
              Whether you are a Computer Science student exploring the depths of Neural Networks or a Civil Engineer designing earthquake-resistant smart structures, the principles of creative problem solving remain the same. It starts with a spark of curiosity and ends with a solution that changes lives.
            </p>
            <p>
              We invite you to explore our resources, join our community, and start building your future today. The road to becoming a world-class engineer is long, but with the right tools and guidance, every step is an opportunity for greatness.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-page-bg pt-28 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section with Proper Spacing */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-gold)]/10 border border-[var(--primary-gold)]/30 text-[var(--primary-gold)] rounded-full text-xs font-black uppercase tracking-widest">
            <BookOpen className="w-4 h-4" />
            Scaro Technologie Blog
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-heading tracking-tight leading-tight">
            Creative Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-gold)] to-[#B89628]">&</span> Innovation
          </h1>
          <p className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto font-light leading-relaxed">
            Explore the latest trends in engineering, AI, and enterprise technology. 
            Curated articles to keep you ahead in your academic and professional journey.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          onClick={() => setSelectedPost(BLOG_POSTS[0])}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden mb-16 h-[480px] group cursor-pointer border border-white/10 shadow-2xl"
        >
          <img loading="lazy" decoding="async" src={BLOG_POSTS[0].image} 
            alt="Featured" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 sm:p-12 w-full max-w-4xl">
            <span className="px-4 py-1.5 bg-gradient-to-r from-[var(--primary-gold)] to-[#B89628] text-black rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block shadow-md">
              Featured Article
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-[var(--primary-gold)] transition-colors">
              {BLOG_POSTS[0].title}
            </h2>
            <div className="flex items-center gap-6 text-white/80 text-xs sm:text-sm font-medium">
              <span className="flex items-center gap-2"><User className="w-4 h-4 text-[var(--primary-gold)]" /> {BLOG_POSTS[0].author}</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[var(--primary-gold)]" /> {BLOG_POSTS[0].date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[var(--primary-gold)]" /> {BLOG_POSTS[0].readTime}</span>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(1).map((post, idx) => (
            <motion.article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-card-bg border border-card-border rounded-3xl overflow-hidden flex flex-col hover:border-[var(--primary-gold)]/40 transition-all shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] cursor-pointer group"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img loading="lazy" decoding="async" src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute top-4 left-4 p-2 rounded-xl bg-gradient-to-br ${post.color} shadow-lg`}>
                  <post.icon className="w-5 h-5 text-white" />
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold text-white border border-white/20 uppercase tracking-wider">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[var(--primary-gold)]" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[var(--primary-gold)]" /> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-heading mb-4 leading-snug group-hover:text-[var(--primary-gold)] transition-colors cursor-pointer line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-text-muted mb-6 line-clamp-3 text-sm leading-relaxed font-light">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-surface-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[var(--primary-maroon)] text-white flex items-center justify-center text-xs font-bold shadow">
                      {post.author[0]}
                    </div>
                    <span className="text-xs text-text-secondary font-medium">{post.author}</span>
                  </div>
                  <span className="flex items-center gap-1 text-[var(--primary-gold)] text-xs font-bold group-hover:gap-2 transition-all">
                    Read More <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-20">
          <button aria-label="Action button" className="px-8 py-4 bg-gradient-to-r from-[var(--primary-gold)] to-[#B89628] text-black font-extrabold rounded-2xl transition-all shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto cursor-pointer uppercase tracking-wider text-sm">
            Discover More Articles
            <Rocket className="w-5 h-5 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

