import { motion } from 'motion/react';
import { useSEO } from '../../../main/utils/useSEO';
import { Building2, Users, Target, Shield, GraduationCap, Code } from 'lucide-react';

export function AboutUsPage() {
  useSEO(
    'About Us | Scaro Academy',
    'Learn more about Scaro Technologies, our mission, vision, and the core values that drive our commitment to bridging the gap between education and industry.'
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-gold)]/20 text-[var(--primary-gold)] text-sm font-bold tracking-wide uppercase mb-6">
              <Building2 className="w-4 h-4" /> About Scaro Technologies
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-gold)] to-yellow-200">Education</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-gold)] to-yellow-200">Industry</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium leading-relaxed">
              We empower the next generation of engineers and developers with hands-on, industry-aligned training, transforming academic knowledge into real-world professional skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-[var(--primary-maroon)]/10 flex items-center justify-center">
              <Target className="w-8 h-8 text-[var(--primary-maroon)]" />
            </div>
            <h2 className="text-3xl font-black text-slate-900">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              To democratize access to premium technical education by providing affordable, high-quality, and project-based learning experiences. We strive to equip every learner with the practical skills required to thrive in the modern technology landscape.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-[var(--primary-gold)]/20 flex items-center justify-center">
              <Shield className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-3xl font-black text-slate-900">Our Vision</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              To become the global standard for industry-integrated education, fostering an ecosystem where academic institutions and enterprise giants collaborate seamlessly to produce world-class talent ready to tackle tomorrow's challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Core Values</h2>
            <p className="text-lg text-slate-600">The principles that guide everything we do.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: GraduationCap, title: 'Excellence in Education', desc: 'We never compromise on the quality of our curriculum or instructors.' },
              { icon: Code, title: 'Practical Application', desc: 'Theory is important, but hands-on execution is where true learning happens.' },
              { icon: Users, title: 'Community Driven', desc: 'We build networks of learners, mentors, and professionals who support each other.' }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                  <value.icon className="w-8 h-8 text-[var(--primary-maroon)]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
