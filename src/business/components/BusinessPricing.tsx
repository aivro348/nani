import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const pricingTiers = [
  {
    title: 'Starter Landing Website',
    price: '₹14,995',
    subtext: 'onwards',
    features: [
      '5-Page Business Website',
      'Mobile Responsive Design',
      'Basic SEO Optimization',
      'AI Content Assistance',
      'Contact Forms',
      'WhatsApp Integration',
      'Domain + Hosting Setup',
      'Fast Delivery (5-7 days)'
    ],
    buttonText: 'Get Started'
  },
  {
    title: 'Business Website Package',
    price: '₹19,999',
    subtext: 'onwards',
    features: [
      'Dynamic Business Website',
      'WordPress Development',
      'SEO Optimization',
      'Lead Generation Features',
      'Contact Forms + WhatsApp',
      'Blog / News Section',
      '1 Month Free Support',
      'Google Analytics Setup'
    ],
    buttonText: 'Get Started'
  },
  {
    title: 'E-Commerce Store',
    price: '₹19,999',
    subtext: 'onwards',
    features: [
      'Shopify OR WooCommerce',
      'Product Management Setup',
      'Payment Gateway Integration',
      'Order Management',
      'Admin Dashboard Training',
      'Basic SEO + Speed Optimization',
      '3 Months Free Support'
    ],
    buttonText: 'Get Started'
  },
  {
    title: 'Custom Web Application',
    price: '₹29,999',
    subtext: 'onwards',
    features: [
      'Next.js / PHP Development',
      'Custom Features',
      'Authentication & Roles',
      'Admin Panel',
      'API Integrations',
      'Scalable Architecture',
      'Quote Based on Scope'
    ],
    buttonText: 'Request Quote'
  },
  {
    title: 'Mobile App Development',
    price: '₹19,999',
    subtext: 'onwards',
    features: [
      'Simple App — ₹19,999',
      'Business App — ₹39,999',
      'Advanced App — ₹74,999+',
      'Flutter / Android Native',
      'Cross-Platform Builds',
      'Play Store Publishing'
    ],
    buttonText: 'Request Quote'
  },
  {
    title: 'AI Solutions',
    price: '₹15,000',
    subtext: 'onwards',
    features: [
      'AI Chatbot — from ₹15,000',
      'AI WhatsApp Bot — from ₹20,000',
      'AI Workflow Automation — from ₹25,000',
      'AI Agents Development — Custom',
      'Agentic AI Solutions — Custom',
      'Discuss Your Project'
    ],
    buttonText: 'Request Quote'
  }
];

export function BusinessPricing() {
  return (
    <section className="py-24 bg-[#0A0506] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary-gold)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[var(--primary-gold)]" />
            <span className="text-sm font-bold text-[var(--primary-gold)] uppercase tracking-[0.2em]">Investment</span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[var(--primary-gold)]" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-gold)] to-[var(--accent-gold)]">Pricing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            No Hidden Costs. Choose a package below or request a custom quote. All prices in INR, exclusive of GST. Bulk discounts and EMI options available.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, idx) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md flex flex-col hover:border-[var(--primary-gold)]/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary-gold)]/5 rounded-full blur-[50px] group-hover:bg-[var(--primary-gold)]/20 transition-all duration-500" />
              
              <h3 className="text-xl font-bold text-white mb-2">{tier.title}</h3>
              <div className="flex items-end gap-2 mb-8">
                <span className="text-4xl font-black text-[var(--primary-gold)]">{tier.price}</span>
                <span className="text-sm text-gray-400 font-medium pb-1">{tier.subtext}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--primary-gold)] shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl group-hover:bg-[var(--primary-gold)] group-hover:text-[#0A0506] group-hover:border-[var(--primary-gold)] transition-all flex items-center justify-center gap-2"
                >
                  {tier.buttonText}
                  <ArrowRight className="w-5 h-5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
