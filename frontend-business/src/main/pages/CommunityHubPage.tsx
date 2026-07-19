import { motion } from 'motion/react';
import { Users, BookOpen, MessageSquare, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useSEO } from '../../main/utils/useSEO';

export function CommunityHubPage() {
  const navigate = useNavigate();

  useSEO('Information & Community | Scaro Academy', 'Connect with mentors, read our latest insights, and get in touch with our team.');

  const CARDS = [
    {
      id: 'trainers',
      title: 'Trainers & Mentors',
      desc: 'Meet our industry expert instructors from top tech giants who will guide you through your learning journey.',
      icon: Users,
      path: '/trainer',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      border: 'hover:border-blue-500/50',
    },
    {
      id: 'blogs',
      title: 'Blogs & Insights',
      desc: 'Read the latest articles on AI, Full-Stack Development, industry trends, and career advice.',
      icon: BookOpen,
      path: '/blogs',
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
      border: 'hover:border-purple-500/50',
    },
    {
      id: 'contact',
      title: 'Contact Us',
      desc: 'Have a question? Need guidance on which course to choose? Get in touch with our support team.',
      icon: MessageSquare,
      path: '/contact',
      color: 'text-[var(--primary-maroon)]',
      bg: 'bg-[var(--primary-maroon)]/10',
      border: 'hover:border-[var(--primary-maroon)]/50',
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] rounded-full text-sm font-bold tracking-wide uppercase mb-6"
          >
            <Users className="w-4 h-4" />
            Discover Scaro Academy
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight"
          >
            Information & Community
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed"
          >
            Everything you need to connect, learn, and grow. Explore our community resources, meet the experts, or reach out to us directly.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              onClick={() => navigate(card.path)}
              className={`bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/40 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group ${card.border}`}
            >
              <div className={`w-16 h-16 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <card.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[var(--primary-maroon)] transition-colors">
                {card.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 h-24">
                {card.desc}
              </p>
              
              <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-[var(--primary-maroon)] transition-colors mt-auto">
                Explore {card.title}
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
