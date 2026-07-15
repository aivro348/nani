import { useEffect, useState } from 'react';
import { useSEO } from '../../main/utils/useSEO';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What types of development services do you provide?',
    answer: 'We provide end-to-end Website Design & Development (PHP, WordPress, React, Next.js), E-Commerce Development (Shopify & WooCommerce), Mobile App Development (Native Android & Flutter/FlutterFlow), and custom Web Applications. We tailor the stack entirely to your business goals.'
  },
  {
    question: 'How do your AI solutions and workflows integrate with my business?',
    answer: 'Our AI Chatbots, Voice Assistants, and WhatsApp Bots connect directly with your database using custom Retrieval-Augmented Generation (RAG) so they speak on behalf of your brand. We build custom agentic automations on n8n, Make, or Zapier to auto-run sales pipelines, qualify incoming leads, and manage schedules 24/7.'
  },
  {
    question: 'Are AI Builder solutions (Lovable, Cursor, Bolt) reliable for production?',
    answer: 'Yes. While platforms like Lovable, Cursor, and Bolt.new accelerate initial development, our experienced engineers specialize in "production hardening." This means we implement custom backends, optimize database architectures, audit API integrations, and ensure clean CI/CD setups for robust, scalable systems.'
  },
  {
    question: 'What is the average turnaround time for a project?',
    answer: 'Starter landing websites take about 5 to 7 business days to deliver. Standard business websites and Shopify/WooCommerce e-commerce storefronts generally take between 2 to 4 weeks. Custom web apps and complex mobile apps are subject to scope and timelines defined during discovery.'
  },
  {
    question: 'Are domain names, secure hosting, and email accounts included in your prices?',
    answer: 'Yes! All of our website design and e-commerce store packages include domain registration, secure SSL hosting configuration, and professional email setup by default to ensure you are ready to go live seamlessly.'
  },
  {
    question: 'What are your payment terms and support structures?',
    answer: 'We offer transparent milestone-based pricing with flexible payment structures (EMI options available for eligible projects). Depending on the chosen package, we provide between 1 to 3 months of free post-launch support to guarantee performance, SEO stability, and updates.'
  }
];

export function BusinessFaqPage() {
  useSEO(
    'Frequently Asked Questions | Scaro Technologies',
    'Get answers to common questions about our website design, e-commerce development, mobile apps, AI integrations, pricing, and project timelines.'
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0A0506] text-white pt-28 pb-16 selection:bg-[var(--primary-gold)] selection:text-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[400px] bg-[var(--primary-gold)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[var(--primary-maroon)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[var(--primary-gold)]" />
            <span className="text-sm font-bold text-[var(--primary-gold)] uppercase tracking-[0.2em]">Faq</span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[var(--primary-gold)]" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-gold)] to-[var(--accent-gold)]">Questions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto font-light text-lg"
          >
            Clear and honest answers to help you understand our design, development, AI integrations, and support workflows.
          </motion.p>
        </div>

        {/* FAQs Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                <button aria-label="Action button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <HelpCircle className="w-5 h-5 text-[var(--primary-gold)] shrink-0" />
                    <span className="font-bold text-white text-base sm:text-lg leading-snug">{faq.question}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[var(--primary-gold)]' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8 border-t border-white/5">
                        <p className="text-gray-300 font-light leading-relaxed text-sm sm:text-base pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
