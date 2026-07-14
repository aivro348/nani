import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Search, CheckCircle2, XCircle } from 'lucide-react';
import { useSEO } from '@/main/utils/useSEO';

export function CertificateVerificationPage() {
  useSEO(
    'Verify Certificate | Scaro Technologies',
    'Verify the authenticity of Scaro Technologies certifications, internships, and program completion certificates.'
  );

  const [certificateId, setCertificateId] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<'success' | 'error' | null>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certificateId.trim()) return;

    setIsVerifying(true);
    setVerificationResult(null);

    // Simulate API call for verification
    setTimeout(() => {
      setIsVerifying(false);
      // Dummy logic: if it starts with 'SCA', it's valid, otherwise invalid
      if (certificateId.toUpperCase().startsWith('SCA')) {
        setVerificationResult('success');
      } else {
        setVerificationResult('error');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-page-bg flex flex-col items-center pt-32 pb-16 px-4">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-surface border border-border rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2" />
          
          <ShieldCheck className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Certificate Verification
          </h1>
          <p className="text-blue-100 text-lg max-w-md mx-auto">
            Enter your unique certificate ID to verify the authenticity of your Scaro Technologies credential.
          </p>
        </div>

        <div className="p-8 md:p-12">
          <form onSubmit={handleVerify} className="relative max-w-lg mx-auto">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-6 h-6 text-text-muted" />
              <input
                type="text"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                placeholder="e.g. SCA-2026-987654"
                className="w-full pl-14 pr-32 py-4 bg-page-bg border-2 border-border rounded-xl text-lg font-medium text-page-fg focus:outline-none focus:border-indigo-500 transition-colors uppercase tracking-wider"
              />
              <button
                type="submit"
                disabled={isVerifying || !certificateId.trim()}
                className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold px-6 rounded-lg transition-colors flex items-center justify-center min-w-[100px]"
              >
                {isVerifying ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  'Verify'
                )}
              </button>
            </div>
            <p className="text-sm text-text-muted mt-3 text-center">
              The Certificate ID can be found at the bottom right corner of your certificate.
            </p>
          </form>

          {/* Results Area */}
          {verificationResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`mt-10 p-6 rounded-2xl border-2 flex items-start gap-4 ${
                verificationResult === 'success' 
                  ? 'bg-green-500/10 border-green-500/30' 
                  : 'bg-red-500/10 border-red-500/30'
              }`}
            >
              {verificationResult === 'success' ? (
                <>
                  <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-1">
                      Certificate Verified Successfully
                    </h3>
                    <p className="text-page-fg mb-4">
                      This is a valid certificate issued by Scaro Technologies.
                    </p>
                    <div className="bg-surface rounded-xl p-4 border border-border/50 text-sm space-y-2">
                      <div className="flex justify-between border-b border-border/50 pb-2">
                        <span className="text-text-muted">Issued To</span>
                        <span className="font-semibold text-page-fg">Rahul Sharma</span>
                      </div>
                      <div className="flex justify-between border-b border-border/50 pb-2">
                        <span className="text-text-muted">Program</span>
                        <span className="font-semibold text-page-fg">Full Stack Development</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-muted">Issue Date</span>
                        <span className="font-semibold text-page-fg">Oct 15, 2025</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <XCircle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-1">
                      Invalid Certificate ID
                    </h3>
                    <p className="text-page-fg">
                      We could not find any records matching the ID <span className="font-mono font-bold text-red-500">{certificateId}</span>. Please check the number and try again.
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          )}

        </div>
      </motion.div>

    </div>
  );
}
