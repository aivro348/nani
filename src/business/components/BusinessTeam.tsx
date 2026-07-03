import { motion } from 'motion/react';
import { Linkedin, Twitter, Github } from 'lucide-react';

export function BusinessTeam() {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      bio: 'Former VP of Engineering at a Fortune 500. Specializes in scalable microservice architectures.'
    },
    {
      name: 'Marcus Reynolds',
      role: 'Head of AI Research',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
      bio: 'Ph.D. in Computer Vision. Leads our enterprise ML implementation and deployment strategy.'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Director of Product',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
      bio: 'Obsessed with translating complex technical capabilities into intuitive user experiences.'
    }
  ];

  return (
    <section id="team" className="py-32 px-4 bg-[#0A0506] relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--primary-maroon)]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[var(--primary-gold)]" />
            <span className="text-sm font-bold text-[var(--primary-gold)] uppercase tracking-[0.2em]">Leadership</span>
            <div className="w-12 h-[2px] bg-gradient-to-r from-[var(--primary-gold)] to-transparent" />
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-gold)] to-[var(--accent-gold)]">Experts</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed font-light"
          >
            Engineers, AI researchers, and product thinkers obsessed with building systems that scale.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group"
            >
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6">
                {/* Glowing border */}
                <div className="absolute -inset-[1px] bg-gradient-to-b from-[var(--primary-gold)]/30 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                  />
                  
                  {/* Social Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0A0506] via-[#0A0506]/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex justify-center gap-4">
                    <a href="#" className="w-11 h-11 rounded-full bg-[var(--primary-maroon)]/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-[var(--primary-gold)] hover:text-[#0A0506] transition-colors border border-white/10">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-11 h-11 rounded-full bg-[var(--primary-maroon)]/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-[var(--primary-gold)] hover:text-[#0A0506] transition-colors border border-white/10">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-11 h-11 rounded-full bg-[var(--primary-maroon)]/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-[var(--primary-gold)] hover:text-[#0A0506] transition-colors border border-white/10">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center px-4">
                <h4 className="text-2xl font-bold text-white mb-1">{member.name}</h4>
                <div className="text-sm font-bold text-[var(--primary-gold)] uppercase tracking-wider mb-4">{member.role}</div>
                <p className="text-gray-400 leading-relaxed font-light">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
