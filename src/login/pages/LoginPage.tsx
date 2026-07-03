import { motion } from 'motion/react';
import { useSEO } from '@/app/utils/useSEO';
import { ArrowRight, Mail, Lock, ShieldCheck } from 'lucide-react';
import googleIcon from '@/assets/google-DgeLnmyH.png'; // Example if available, else standard svg

export function LoginPage() {
  useSEO(
    'Login | Scaro Technologies',
    'Sign in to your Scaro Technologies account to access courses, certificates, and premium tools.'
  );

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
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black text-page-fg tracking-tight mb-3">Welcome Back</h1>
            <p className="text-text-muted font-medium">Log in to access your dashboard</p>
          </div>

          <button className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-black border border-gray-200 font-bold py-3.5 px-4 rounded-xl transition-all shadow-sm mb-6 group">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Sign in with Google
          </button>

          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/60"></div>
            </div>
            <div className="relative bg-surface px-4 text-sm font-semibold text-text-muted">
              OR CONTINUE WITH EMAIL
            </div>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-bold text-page-fg">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-page-bg border border-border rounded-xl font-medium text-page-fg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-page-fg">Password</label>
                <a href="#" className="text-xs font-bold text-indigo-500 hover:text-indigo-400">Forgot Password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3.5 bg-page-bg border border-border rounded-xl font-medium text-page-fg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group mt-2"
            >
              Sign In
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="text-center text-sm font-semibold text-text-muted mt-8">
            Don't have an account? <a href="#" className="text-indigo-500 hover:text-indigo-400 underline decoration-indigo-500/30 underline-offset-4">Create one now</a>
          </p>
        </div>

        <div className="bg-page-bg/50 border-t border-border p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-text-muted">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            Secure & Encrypted Authentication
          </div>
        </div>
      </motion.div>
    </div>
  );
}
