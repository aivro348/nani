import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router';
import { motion } from 'motion/react';
import { ShieldCheck, Search, CheckCircle2, XCircle, Printer, Download, QrCode, Calendar, Award, User, Loader2 } from 'lucide-react';
import { useSEO } from '@/main/utils/useSEO';
import { getCertificateById, seedCertificatesIfNeeded, Certificate } from '../../../certificate-admin/data/certStore';
import { sanitizeInput } from '../../../certificate-admin/utils/certAuthUtils';

export function CertificateVerificationPage() {
  useSEO(
    'Verify Certificate | Scaro Technologies',
    'Verify the authenticity of Scaro Technologies certifications, internships, and program completion certificates.'
  );

  const [searchParams] = useSearchParams();
  const [certificateId, setCertificateId] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<'success' | 'error' | null>(null);
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const printRef = useRef<HTMLDivElement>(null);

  // Seed data and auto-verify from URL params
  useEffect(() => {
    seedCertificatesIfNeeded();

    const idFromUrl = searchParams.get('id');
    if (idFromUrl) {
      setCertificateId(idFromUrl);
      verifyById(idFromUrl);
    }
  }, [searchParams]);

  const verifyById = (id: string) => {
    setIsVerifying(true);
    setVerificationResult(null);
    setCertificate(null);

    const sanitizedId = sanitizeInput(id);

    setTimeout(() => {
      const cert = getCertificateById(sanitizedId);
      if (cert) {
        setCertificate(cert);
        setVerificationResult('success');
      } else {
        setVerificationResult('error');
      }
      setIsVerifying(false);
    }, 1200);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certificateId.trim()) return;
    verifyById(certificateId);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    if (!certificate?.pdfDataUrl) return;
    const link = document.createElement('a');
    link.href = certificate.pdfDataUrl;
    link.download = `${certificate.id}-certificate.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          #printable-verification, #printable-verification * { visibility: visible !important; }
          #printable-verification {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            padding: 40px !important;
            background: white !important;
            color: black !important;
          }
          #printable-verification h2, #printable-verification h3,
          #printable-verification span, #printable-verification p,
          #printable-verification div {
            color: black !important;
          }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="min-h-screen bg-page-bg flex flex-col items-center pt-32 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl bg-surface border border-border rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2" />
            <ShieldCheck className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Certificate Verification
            </h1>
            <p className="text-blue-100 text-lg max-w-md mx-auto">
              Enter your unique certificate ID or scan the QR code to verify your Scaro Technologies credential.
            </p>
          </div>

          {/* Search Form */}
          <div className="p-8 md:p-12 no-print">
            <form onSubmit={handleVerify} className="relative max-w-lg mx-auto">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-6 h-6 text-text-muted" />
                <input
                  type="text"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  placeholder="e.g. SCA-2026-A1B2C3"
                  className="w-full pl-14 pr-32 py-4 bg-page-bg border-2 border-border rounded-xl text-lg font-medium text-page-fg focus:outline-none focus:border-indigo-500 transition-colors uppercase tracking-wider"
                />
                <button
                  aria-label="Verify certificate"
                  type="submit"
                  disabled={isVerifying || !certificateId.trim()}
                  className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold px-6 rounded-lg transition-colors flex items-center justify-center min-w-[100px]"
                >
                  {isVerifying ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    'Verify'
                  )}
                </button>
              </div>
              <p className="text-sm text-text-muted mt-3 text-center">
                The Certificate ID can be found at the bottom right corner of your certificate.
              </p>
            </form>
          </div>

          {/* Results Area */}
          {verificationResult && (
            <div className="px-8 md:px-12 pb-8 md:pb-12">
              {verificationResult === 'success' && certificate ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                >
                  {/* Printable verification block */}
                  <div
                    id="printable-verification"
                    ref={printRef}
                    className="p-6 rounded-2xl border-2 bg-green-500/10 border-green-500/30"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-1">
                          Certificate Verified Successfully
                        </h3>
                        <p className="text-page-fg">
                          This is a valid certificate issued by Scaro Technologies.
                        </p>
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* QR Code */}
                      <div className="w-28 h-28 bg-white rounded-xl p-2 shrink-0 shadow-md mx-auto sm:mx-0">
                        <img src={certificate.qrDataUrl} alt="QR Verification Code" className="w-full h-full object-contain" />
                      </div>

                      {/* Details Grid */}
                      <div className="flex-1 bg-surface rounded-xl p-4 border border-border/50 text-sm space-y-3">
                        <div className="flex justify-between items-center border-b border-border/50 pb-3">
                          <span className="text-text-muted flex items-center gap-2">
                            <QrCode className="w-4 h-4" /> Certificate ID
                          </span>
                          <span className="font-mono font-bold text-page-fg">{certificate.id}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border/50 pb-3">
                          <span className="text-text-muted flex items-center gap-2">
                            <User className="w-4 h-4" /> Issued To
                          </span>
                          <span className="font-semibold text-page-fg">{certificate.studentName}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border/50 pb-3">
                          <span className="text-text-muted flex items-center gap-2">
                            <Award className="w-4 h-4" /> Program
                          </span>
                          <span className="font-semibold text-page-fg">{certificate.program}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-text-muted flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> Issue Date
                          </span>
                          <span className="font-semibold text-page-fg">
                            {new Date(certificate.issueDate).toLocaleDateString('en-IN', {
                              day: 'numeric', month: 'long', year: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mt-6 no-print">
                    <button
                      onClick={handlePrint}
                      className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all text-sm"
                    >
                      <Printer className="w-4 h-4" /> Print Verification
                    </button>
                    {certificate.pdfDataUrl && (
                      <button
                        onClick={handleDownloadPdf}
                        className="flex items-center gap-2 px-5 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all text-sm"
                      >
                        <Download className="w-4 h-4" /> Download Certificate
                      </button>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="p-6 rounded-2xl border-2 flex items-start gap-4 bg-red-500/10 border-red-500/30"
                >
                  <XCircle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-1">
                      Invalid Certificate ID
                    </h3>
                    <p className="text-page-fg">
                      We could not find any records matching the ID{' '}
                      <span className="font-mono font-bold text-red-500">{certificateId}</span>.
                      Please check the number and try again.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
}
