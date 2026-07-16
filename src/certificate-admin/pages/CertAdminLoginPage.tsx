import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Mail, Lock, ShieldCheck, ArrowRight, Loader2, AlertTriangle } from 'lucide-react';
import { useSEO } from '@/main/utils/useSEO';
import {
  authenticateAdmin,
  createSession,
  validateSession,
  seedAdminIfNeeded,
  sanitizeInput,
} from '../utils/certAuthUtils';
import { seedCertificatesIfNeeded } from '../data/certStore';

export default function CertAdminLoginPage() {
  useSEO(
    'Admin Login | Certificate Management | Scaro Technologies',
    'Secure admin login for the Scaro Technologies Certificate Verification and Management System.'
  );

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Auto-redirect if already authenticated
  useEffect(() => {
    seedAdminIfNeeded();
    seedCertificatesIfNeeded();

    const session = validateSession();
    if (session) {
      navigate('/cert-admin/dashboard', { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const cleanEmail = sanitizeInput(email);
    const cleanPassword = password; // Don't sanitize password — it may have special chars

    if (!cleanEmail || !cleanPassword) {
      setError('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const isValid = await authenticateAdmin(cleanEmail, cleanPassword);

      if (isValid) {
        createSession(cleanEmail);
        navigate('/cert-admin/dashboard', { replace: true });
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] relative overflow-hidden py-24 px-4 sm:px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-emerald-900/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15" style={{ mixBlendMode: 'overlay' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full max-w-md relative z-10"
      >
        {/* Card */}
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 p-10 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-xl" />

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20"
            >
              <ShieldCheck className="w-10 h-10 text-white" />
            </motion.div>

            <h1 className="text-2xl font-black text-white tracking-tight mb-2">
              Certificate Admin
            </h1>
            <p className="text-emerald-100/80 text-sm font-medium">
              Sign in to manage certificates & verification
            </p>
          </div>

          {/* Form */}
          <div className="p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
                >
                  <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
                  <span className="text-red-300 text-sm font-semibold">{error}</span>
                </motion.div>
              )}

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@scaro.com"
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.07] transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.07] transition-all"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2 group text-sm mt-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  <>
                    Sign In to Dashboard
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Credentials hint */}
            <div className="mt-6 p-4 bg-white/[0.03] border border-white/5 rounded-xl">
              <p className="text-xs text-slate-500 text-center font-medium">
                <span className="text-slate-400 font-bold">Demo Credentials:</span>{' '}
                admin@scaro.com / Scaro@2026
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-white/[0.02] border-t border-white/5 p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              SHA-256 Encrypted • Secure Sessions • Injection Protected
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
