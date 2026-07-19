import { useEffect } from 'react';
import { motion } from 'motion/react';
import { useSEO } from '../utils/useSEO';
import { Scale, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';

export function TermsOfServicePage() {
  useSEO(
    'Terms of Service | Scaro Technologie',
    'Read the Terms of Service for using Scaro Technologie platform, including guidelines for students, enterprise partners, and content usage.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-page-bg text-page-fg">
      {/* Header Section */}
      <section className="relative w-full pt-32 pb-16 px-4 bg-gradient-to-b from-[var(--primary-gold)]/5 to-transparent overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-gold)]/10 text-[var(--primary-gold)] rounded-full text-sm font-bold tracking-wide uppercase mb-6 border border-[var(--primary-gold)]/20"
          >
            <Scale className="w-4 h-4" />
            Legal Agreement
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-heading tracking-tight mb-6"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            These Terms of Service govern your use of the Scaro Technologie platforms, websites, and associated services.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-slate prose-lg max-w-none prose-headings:text-heading prose-a:text-[var(--primary-gold)]"
        >
          <p className="text-sm text-slate-500 mb-8 border-b pb-4">
            Last Updated: <strong>October 15, 2025</strong>
          </p>

          <h2 className="flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-[var(--primary-gold)]" />
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using the <strong>Scaro Technologie</strong> website, educational platform, or enterprise services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
          </p>

          <h2 className="flex items-center gap-2 mt-12">
            <FileText className="w-6 h-6 text-[var(--primary-gold)]" />
            2. User Accounts and Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>You agree to provide accurate and current information during the registration process.</li>
            <li>You must not use our platform for any illegal activities or to distribute malicious software.</li>
            <li>Scaro Technologie reserves the right to suspend or terminate accounts that violate these terms or exhibit suspicious behavior.</li>
          </ul>

          <h2 className="mt-12">3. Educational Content and Intellectual Property</h2>
          <p>
            All content provided on the Scaro Academy platform, including but not limited to roadmaps, course materials, videos, text, graphics, and AI tools, is the intellectual property of Scaro Technologie or its licensors.
          </p>
          <p>
            You are granted a limited, non-exclusive, non-transferable license to access and use the educational content for your personal, non-commercial learning. You may not reproduce, distribute, modify, or create derivative works without explicit written permission.
          </p>

          <h2 className="mt-12">4. Enterprise and Business Services</h2>
          <p>
            For clients engaging with Scaro Technologie for B2B services (such as Web App Development, SaaS Engineering, or AI Integration), specific deliverables, timelines, and payment terms will be governed by a separate Master Service Agreement (MSA) or Statement of Work (SOW). These terms apply generally to the use of our corporate website and introductory services.
          </p>

          <h2 className="flex items-center gap-2 mt-12">
            <AlertCircle className="w-6 h-6 text-[var(--primary-gold)]" />
            5. Limitation of Liability
          </h2>
          <p>
            Scaro Technologie provides its platform and educational resources "as is" and "as available". We make no warranties, expressed or implied, regarding the accuracy, completeness, or reliability of the content. We shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to use our services, including but not limited to loss of data or career placement outcomes.
          </p>

          <h2 className="mt-12">6. Modifications to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. Material changes will be communicated via email or platform notifications prior to taking effect. Your continued use of the platform after any changes constitutes acceptance of the new Terms.
          </p>

          <div className="mt-16 p-8 bg-[var(--primary-gold)]/5 rounded-2xl border border-[var(--primary-gold)]/20">
            <h3 className="text-xl font-bold mb-4">Questions About Our Terms?</h3>
            <p className="mb-0 text-slate-700">
              If you require clarification on any of the terms outlined above, please contact our legal team at:{' '}
              <a href="mailto:legal@scaro.com" className="font-bold text-[var(--primary-maroon)]">legal@scaro.com</a>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
