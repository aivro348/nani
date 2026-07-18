import { useEffect } from 'react';
import { useSEO } from '../../main/utils/useSEO';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const blogPosts = [
  {
    title: 'Scaling to Millions: Why We Choose Next.js for Enterprise Portals',
    category: 'Software Engineering',
    date: 'July 14, 2026',
    readTime: '5 min read',
    summary: 'Explore why Next.js is the leading framework for corporate portals and custom applications, combining blazing-fast loading speeds with robust SEO architecture.',
    image: '/unsplash/img_60355e7c29.webp'
  },
  {
    title: 'AI Agents vs Chatbots: How to Automate 24/7 Operations in 2026',
    category: 'Artificial Intelligence',
    date: 'June 28, 2026',
    readTime: '8 min read',
    summary: 'A deep dive into how autonomous AI agents plan, decide and execute complex workflows — and how they differ from simple, rule-based web chatbots.',
    image: '/unsplash/img_dc40c9410f.webp'
  },
  {
    title: 'The E-Commerce Formula: Building Storefronts That Convert Browsers into Buyers',
    category: 'E-Commerce',
    date: 'June 15, 2026',
    readTime: '6 min read',
    summary: 'Learn the exact design patterns, checkout optimizations, and mobile-first UX strategies we use to boost client Shopify and WooCommerce sales.',
    image: '/unsplash/img_5787d7c6ab.webp'
  }
];

export function BusinessBlogsPage() {
  useSEO(
    'Latest Insights & Blogs | Scaro Technologie',
    'Stay updated with technical insights on web development, mobile apps, enterprise AI, and workflow automation from the engineering team at Scaro Technologie.'
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0506] text-white pt-28 pb-16 selection:bg-[var(--primary-gold)] selection:text-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[400px] bg-[var(--primary-gold)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[var(--primary-maroon)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-gradient-to-r from-[var(--primary-gold)] to-transparent" />
            <span className="text-sm font-bold text-[var(--primary-gold)] uppercase tracking-[0.2em]">Our Insights</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Scaro <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-gold)] to-[var(--accent-gold)]">Tech Blog</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl font-light text-lg"
          >
            Read about custom software engineering, cloud architecture, local web design trends, and generative AI innovations.
          </motion.p>
        </div>

        {/* Featured Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[var(--primary-gold)]/40 transition-colors flex flex-col group"
            >
              {/* Blog Image */}
              <div className="relative w-full h-[220px] overflow-hidden bg-white/5">
                <img loading="lazy" decoding="async" src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[var(--primary-gold)] text-[#0A0506] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg">
                  {post.category}
                </div>
              </div>

              {/* Content wrapper */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                <div className="space-y-4">
                  {/* Meta (Date / Read time) */}
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white leading-snug group-hover:text-[var(--primary-gold)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary-gold)] group-hover:underline">
                    Read Article 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
