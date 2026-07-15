import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How do Virtual Labs differ from traditional college labs?",
    answer: "Our Virtual Labs provide an immersive, hands-on environment using the latest simulation and VR technology. Unlike traditional labs that may have outdated hardware, our virtual environments allow you to experiment with enterprise-grade cloud architecture, advanced robotics, and AI models in real-time without physical constraints."
  },
  {
    question: "Are the certifications industry-recognized?",
    answer: "Yes, all Scaro Technologies certifications are highly regarded by industry leaders. Our curriculum is co-developed with corporate tech partners, ensuring that the skills you learn are exactly what hiring managers are looking for today."
  },
  {
    question: "How do the customizable 1 to 5 Days Workshops work?",
    answer: "We offer highly flexible bootcamps tailored to your branch and interest. Whether you need a 1-day rapid introduction to AI tools or a 5-day deep dive into Full Stack Development, we customize the curriculum to fit your schedule and learning goals perfectly."
  },
  {
    question: "Do you offer programs for non-IT branches like Civil or Mechanical?",
    answer: "Definitely! Technology is transforming every industry. We have specialized programs like Drone Technology and Product Design for Mechanical engineers, and Smart Infrastructure and Sustainable Construction tech for Civil engineers."
  }
];

export function EducationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq-section" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-[var(--primary-maroon)]/10 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-[var(--primary-maroon)]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Frequently Asked <span className="text-[var(--primary-maroon)]">Questions</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Everything you need to know about how Scaro Academy can transform your engineering career.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'bg-slate-50 shadow-lg border-[var(--primary-maroon)]/30' : 'bg-white hover:border-slate-300'
              }`}
            >
              <button aria-label="Action button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-bold pr-8 transition-colors ${openIndex === index ? 'text-[var(--primary-maroon)]' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'bg-[var(--primary-maroon)] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-2 text-slate-600 font-medium leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
