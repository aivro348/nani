import { useEffect } from 'react';
import { motion } from 'motion/react';
import { useSEO } from '../utils/useSEO';
import { Shield, Lock, FileText, UserCheck } from 'lucide-react';

export function PrivacyPolicyPage() {
  useSEO(
    'Privacy Policy | Scaro Technologies',
    'Read our Privacy Policy to understand how Scaro Technologies collects, uses, and protects your personal data and information across our platform.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-page-bg text-page-fg">
      {/* Header Section */}
      <section className="relative w-full pt-32 pb-16 px-4 bg-gradient-to-b from-[var(--primary-maroon)]/5 to-transparent overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] rounded-full text-sm font-bold tracking-wide uppercase mb-6 border border-[var(--primary-maroon)]/20"
          >
            <Shield className="w-4 h-4" />
            Data Protection
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-heading tracking-tight mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Your privacy is important to us. This policy outlines how we handle your data across our educational and business platforms.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-slate prose-lg max-w-none prose-headings:text-heading prose-a:text-[var(--primary-maroon)]"
        >
          <p className="text-sm text-slate-500 mb-8 border-b pb-4">
            Last Updated: <strong>October 15, 2025</strong>
          </p>

          <h2 className="flex items-center gap-2">
            <UserCheck className="w-6 h-6 text-[var(--primary-maroon)]" />
            1. Information We Collect
          </h2>
          <p>
            At <strong>Scaro Technologies</strong>, we collect information to provide better services to our students, educators, and enterprise partners. The types of personal information we collect include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Personal Identification:</strong> Name, email address, phone number, and physical address when you register.</li>
            <li><strong>Academic Data:</strong> University name, branch (CSE, ECE, Mech, etc.), graduation year, and academic transcripts if provided for certification.</li>
            <li><strong>Usage Data:</strong> Information on how you interact with our courses, AI tools, and roadmaps.</li>
            <li><strong>Device Information:</strong> IP addresses, browser types, and operating system details.</li>
          </ul>

          <h2 className="flex items-center gap-2 mt-12">
            <FileText className="w-6 h-6 text-[var(--primary-maroon)]" />
            2. How We Use Your Information
          </h2>
          <p>We use the data we collect for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>To personalize your learning roadmaps and course recommendations.</li>
            <li>To process your certification and project verifications accurately.</li>
            <li>To communicate with you regarding platform updates, new courses, and security alerts.</li>
            <li>For enterprise partners, to deliver specific SaaS engineering or AI integration solutions based on provided specifications.</li>
          </ul>

          <h2 className="flex items-center gap-2 mt-12">
            <Lock className="w-6 h-6 text-[var(--primary-maroon)]" />
            3. Data Security and Protection
          </h2>
          <p>
            We implement industry-standard security measures including SSL encryption, secure database environments (such as Supabase), and strict access controls. However, no method of transmission over the internet or electronic storage is 100% secure. We continuously upgrade our security practices to protect your data.
          </p>

          <h2 className="mt-12">4. Third-Party Sharing</h2>
          <p>
            We do not sell your personal data to third parties. We may share necessary data with trusted third-party service providers (like payment processors, hosting partners, and email delivery services) exclusively to facilitate our platform's operations. These partners are strictly bound by confidentiality agreements.
          </p>

          <h2 className="mt-12">5. Your Data Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Request access to the personal data we hold about you.</li>
            <li>Request corrections to any inaccurate data.</li>
            <li>Request deletion of your account and associated data.</li>
            <li>Opt-out of marketing communications at any time.</li>
          </ul>

          <div className="mt-16 p-8 bg-[var(--primary-maroon)]/5 rounded-2xl border border-[var(--primary-maroon)]/10">
            <h3 className="text-xl font-bold mb-4">Contact Us Regarding Privacy</h3>
            <p className="mb-0 text-slate-700">
              If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to our Data Protection Officer at:{' '}
              <a href="mailto:privacy@scaro.com" className="font-bold">privacy@scaro.com</a>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
