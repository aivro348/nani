import { motion } from 'motion/react';
import { useSEO } from '../../../main/utils/useSEO';
import { Handshake, Building, Building2, Globe } from 'lucide-react';

export function PartnersPage() {
  useSEO('Our Partners | Scaro Academy', 'Discover our network of industry and academic partners.');

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] text-sm font-bold tracking-wide uppercase mb-6">
            <Handshake className="w-4 h-4" /> Global Network
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">Our Esteemed Partners</h1>
          <p className="text-lg text-slate-600">We collaborate with top universities and leading tech enterprises to bring you industry-relevant education.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Building, title: 'Corporate Giants', desc: 'Working with Fortune 500 tech companies to build curriculum and secure placements.' },
            { icon: Building2, title: 'Top Universities', desc: 'Partnering with premier institutions to offer certified, credit-eligible programs.' },
            { icon: Globe, title: 'Research Labs', desc: 'Collaborating on cutting-edge AI and electronics research initiatives.' }
          ].map((partner, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
              <partner.icon className="w-10 h-10 text-[var(--primary-gold)] mb-4" />
              <h3 className="text-xl font-bold mb-2">{partner.title}</h3>
              <p className="text-slate-600">{partner.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
