import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function CoursesDemoSessions() {
  const sessions = [
    { title: 'Full Stack Development Demo', tag: 'Web Dev', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop', targetId: 'programs-section' },
    { title: 'Introduction to PCB Design', tag: 'Electronics', img: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800&auto=format&fit=crop', targetId: 'programs-section' },
    { title: 'Machine Learning Basics', tag: 'AI', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop', targetId: 'programs-section' },
    { title: 'Embedded Systems Workshop', tag: 'Hardware', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop', targetId: 'programs-section' }
  ];

  const handleSessionClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side: Text */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4"
            >
              Watch Free <br />
              <span className="text-[var(--primary-maroon)]">Demo Sessions</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 mb-6"
            >
              Get a sneak peek into our premium learning experience before you enroll.
            </motion.p>
          </div>

          {/* Right Side: Horizontal Carousel */}
          <div className="w-full lg:w-2/3 relative">
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none hidden lg:block" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
            
            <div className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory hide-scrollbar">
              {sessions.map((session, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleSessionClick(session.targetId)}
                  className="snap-start flex-none w-72 sm:w-80 group cursor-pointer"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <img src={session.img} alt={session.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
                    
                    {/* Dark Overlay & Play Button */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[var(--primary-gold)] text-slate-900 flex items-center justify-center transform group-hover:scale-110 shadow-xl transition-transform">
                        <Play className="w-6 h-6 ml-1" fill="currentColor" />
                      </div>
                    </div>
                    
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[var(--primary-maroon)]">
                      {session.tag}
                    </div>

                    {/* Dark Title Bar at bottom */}
                    <div className="absolute bottom-0 left-0 w-full bg-slate-900/90 backdrop-blur-md p-4">
                      <h3 className="text-white font-bold text-sm truncate">{session.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
