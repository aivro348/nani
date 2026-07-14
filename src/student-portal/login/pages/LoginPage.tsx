import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { useSEO } from '@/main/utils/useSEO';
import { useLms } from '@/student-portal/lms/context/LmsContext';
import { ArrowRight, Mail, Lock, ShieldCheck, User, School, Hash, Loader2 } from 'lucide-react';

export function LoginPage() {
  useSEO(
    'Login | Scaro Technologies',
    'Sign in to your Scaro Technologies account to access courses, certificates, and premium tools.'
  );

  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useLms();

  const [isSignUp, setIsSignUp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Form Fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [crNumber, setCrNumber] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Input validations
    if (!email || !password) {
      setError('Please fill in email and password.');
      setIsSubmitting(false);
      return;
    }

    if (isSignUp && (!name || !collegeName || !crNumber)) {
      setError('Please fill in all registration fields.');
      setIsSubmitting(false);
      return;
    }

    // Simulate login lag for fidelity
    setTimeout(() => {
      setIsSubmitting(false);
      
      const userProfile = {
        name: isSignUp ? name : 'Arjun Kumar', // default mock name on quick sign-in
        email: email,
        collegeName: isSignUp ? collegeName : 'Scaro Academy Institute',
        crNumber: isSignUp ? crNumber : 'SCA-REG-2026',
        phoneNumber: '9999999999'
      };

      // Set user in LMS Context
      login(userProfile);

      // Redirect to dynamic from state or defaults to LMS dashboard
      const fromPath = location.state?.from || '/lms';
      navigate(fromPath);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-page-bg relative overflow-hidden py-24 px-4 sm:px-6">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-surface border border-border rounded-3xl shadow-2xl relative z-10 overflow-hidden"
      >
        <div className="p-8 sm:p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-page-fg tracking-tight mb-2">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-sm text-text-muted font-medium">
              {isSignUp ? 'Register details to build certificates' : 'Log in to access your dashboard'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-semibold">
                {error}
              </div>
            )}

            {/* Registration specific fields */}
            {isSignUp && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <label className="text-xs font-bold text-page-fg">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      required={isSignUp}
                      className="w-full pl-12 pr-4 py-3 bg-page-bg border border-border rounded-xl text-xs font-semibold text-page-fg focus:outline-none focus:border-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-page-fg">College/Institution Name</label>
                  <div className="relative">
                    <School className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                    <input
                      type="text"
                      value={collegeName}
                      onChange={(e) => setCollegeName(e.target.value)}
                      placeholder="e.g. IIT Madras"
                      required={isSignUp}
                      className="w-full pl-12 pr-4 py-3 bg-page-bg border border-border rounded-xl text-xs font-semibold text-page-fg focus:outline-none focus:border-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-page-fg">College Register Number</label>
                  <div className="relative">
                    <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                    <input
                      type="text"
                      value={crNumber}
                      onChange={(e) => setCrNumber(e.target.value)}
                      placeholder="e.g. CR123456"
                      required={isSignUp}
                      className="w-full pl-12 pr-4 py-3 bg-page-bg border border-border rounded-xl text-xs font-semibold text-page-fg focus:outline-none focus:border-indigo-500 transition-all"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Email Address */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-page-fg">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@gmail.com"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-page-bg border border-border rounded-xl text-xs font-semibold text-page-fg focus:outline-none focus:border-indigo-500 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-page-fg">Password</label>
                {!isSignUp && (
                  <span className="text-[10px] font-bold text-indigo-500 cursor-pointer hover:text-indigo-400">
                    Forgot Password?
                  </span>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-page-bg border border-border rounded-xl text-xs font-semibold text-page-fg focus:outline-none focus:border-indigo-500 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group mt-4 text-xs"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  {isSignUp ? 'Create Account' : 'Sign In'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Tab/Toggle register mode */}
          <p className="text-center text-xs font-semibold text-text-muted mt-6">
            {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
            <button 
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError('');
              }}
              className="text-indigo-500 hover:text-indigo-400 underline decoration-indigo-500/30 underline-offset-4 font-bold"
            >
              {isSignUp ? 'Sign in now' : 'Create one now'}
            </button>
          </p>
        </div>

        <div className="bg-page-bg/50 border-t border-border p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-[10px] font-medium text-text-muted">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            Secure & Encrypted Authentication
          </div>
        </div>
      </motion.div>
    </div>
  );
}
