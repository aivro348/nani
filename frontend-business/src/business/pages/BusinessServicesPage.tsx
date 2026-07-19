import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useSEO } from '../../main/utils/useSEO';
import { servicesData, ServiceHub } from '../components/servicesData';
import { BusinessCTA } from '../components/BusinessCTA';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function BusinessServicesPage() {
  useSEO(
    'Our Services | Scaro Technologie',
    'Explore our six service hubs: Website Design, E-Commerce, Mobile Apps, AI Solutions, AI Builder Services, and Local Web Design in Bangalore & Chennai.'
  );

  const location = useLocation();
  const [activeTab, setActiveTab] = useState('web-design');

  useEffect(() => {
    // Parse URL hash on mount or route update
    const hash = location.hash.replace('#', '');
    if (hash && servicesData.some(s => s.id === hash)) {
      setActiveTab(hash);
    } else {
      setActiveTab('web-design');
    }
    // Scroll to top of window or component if hash changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.hash]);

  const activeService: ServiceHub = servicesData.find(s => s.id === activeTab) || servicesData[0];

  return (
    <div className="min-h-screen bg-[#0A0506] text-white selection:bg-[var(--primary-gold)] selection:text-black pt-28 pb-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[var(--primary-maroon)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[var(--primary-gold)]" />
            <span className="text-sm font-bold text-[var(--primary-gold)] uppercase tracking-[0.2em]">Our Services</span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[var(--primary-gold)]" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Six Service Hubs, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-gold)] to-[var(--accent-gold)]">One Trusted Partner</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto font-light text-lg"
          >
            Explore our expert solutions tailored for modern brands. Choose a category below to see detailed sub-services, included features, and our process.
          </motion.p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex overflow-x-auto pb-4 mb-16 gap-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent justify-start md:justify-center border-b border-white/10">
          {servicesData.map((service) => {
            const Icon = service.icon;
            const isSelected = service.id === activeTab;
            return (
              <button aria-label="Action button"
                key={service.id}
                onClick={() => {
                  setActiveTab(service.id);
                  window.history.pushState({}, '', `#${service.id}`);
                }}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-wider whitespace-nowrap transition-all border shrink-0 ${
                  isSelected 
                    ? 'bg-gradient-to-r from-[var(--primary-gold)] to-[var(--accent-gold)] text-[#0A0506] border-[var(--primary-gold)] shadow-[0_0_20px_-5px_var(--primary-gold)]' 
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className="w-5 h-5" />
                {service.title.split('&')[0].split('Services')[0].trim()}
              </button>
            );
          })}
        </div>

        {/* Selected Service Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-20"
          >
            {/* Hub Intro / Hero */}
            <div className="grid lg:grid-cols-12 gap-12 items-center bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--primary-gold)]/5 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="lg:col-span-8 space-y-6">
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                  {activeService.subtitle}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  {activeService.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/contact">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-[var(--primary-gold)] to-[var(--accent-gold)] text-[#0A0506] font-black rounded-xl hover:shadow-[0_0_30px_var(--primary-gold)] transition-all flex items-center gap-2 uppercase tracking-wider text-sm"
                    >
                      Get Free Quote
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  <a 
                    href={`tel:${activeService.phone}`}
                    className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all font-bold text-gray-200"
                  >
                    <Phone className="w-5 h-5 text-[var(--primary-gold)]" />
                    📞 +91 {activeService.phone}
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[var(--primary-gold)]/10 border-2 border-[var(--primary-gold)]/30 flex items-center justify-center text-[var(--primary-gold)] shadow-[0_0_50px_-10px_var(--primary-gold)]">
                  {(() => {
                    const Icon = activeService.icon;
                    return <Icon className="w-12 h-12 md:w-16 md:h-16" />;
                  })()}
                </div>
              </div>
            </div>

            {/* Sub Services Cards Grid */}
            <div className="space-y-8">
              <div className="border-l-4 border-[var(--primary-gold)] pl-4">
                <span className="text-xs font-bold text-[var(--primary-gold)] uppercase tracking-[0.2em]">Offerings</span>
                <h3 className="text-2xl md:text-3xl font-black text-white mt-1">{activeService.subServicesTitle}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeService.subServices.map((sub, sIdx) => {
                  const SubIcon = sub.icon;
                  return (
                    <motion.div
                      key={sIdx}
                      whileHover={{ y: -6 }}
                      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[var(--primary-gold)]/30 transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[var(--primary-gold)] flex items-center justify-center group-hover:bg-[var(--primary-gold)]/10 transition-colors">
                          <SubIcon className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-bold text-white group-hover:text-[var(--primary-gold)] transition-colors">
                          {sub.title}
                        </h4>
                        <p className="text-gray-400 text-sm font-light leading-relaxed">
                          {sub.description}
                        </p>
                      </div>
                      <Link to="/contact" className="text-sm font-bold text-[var(--primary-gold)] hover:underline flex items-center gap-2 mt-6 group/link">
                        Learn More 
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Process Sections */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Inclusions Card */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md space-y-8">
                <div className="border-l-4 border-[var(--primary-gold)] pl-4">
                  <span className="text-xs font-bold text-[var(--primary-gold)] uppercase tracking-[0.2em]">Standard checklist</span>
                  <h3 className="text-2xl font-black text-white mt-1">{activeService.inclusionsTitle}</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {activeService.inclusions.map((inc, iIdx) => (
                    <div key={iIdx} className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-4">
                      <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span className="text-sm font-semibold text-gray-200">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4-Step Process Card */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md space-y-8">
                <div className="border-l-4 border-[var(--primary-gold)] pl-4">
                  <span className="text-xs font-bold text-[var(--primary-gold)] uppercase tracking-[0.2em]">Methodology</span>
                  <h3 className="text-2xl font-black text-white mt-1">{activeService.processTitle}</h3>
                </div>
                
                <div className="space-y-6 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
                  {activeService.process.map((step, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-4 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-[#0A0506] border border-white/10 flex items-center justify-center text-xl shrink-0">
                        {step.step}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-white text-base">{step.title}</h4>
                        <p className="text-gray-400 text-sm font-light leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
      <BusinessCTA />
    </div>
  );
}
