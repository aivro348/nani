import { SignIn } from '@clerk/clerk-react';
import { Logo } from '../../main/components/Logo';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';

export function SignInPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#FAF7F2] dark:bg-gray-900">
      
      {/* Left Side: Branding */}
      <div className="lg:w-1/2 flex flex-col justify-between p-8 lg:p-16 bg-[var(--primary-maroon)] dark:bg-[var(--dark-maroon)] text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,1)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,1)_0%,transparent_50%)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <Logo onClick={() => navigate('/')} className="cursor-pointer mb-6" showName={false} iconSize={200} />
            <h2 className="text-3xl font-bold text-white mb-3">Welcome back</h2>
            <p className="text-gray-300 text-lg max-w-sm">Log in to continue building your engineering future with Scaro Technologies.</p>
          </motion.div>
        </div>
      </div>

      {/* Right Side: Auth Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16 relative">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
        
        <div className="w-full max-w-md relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
          </motion.div>
        </div>
      </div>

    </div>
  );
}
