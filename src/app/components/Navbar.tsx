import { Menu, X, Sun, Moon, PhoneCall, Clock, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { useState, useEffect, lazy, Suspense } from 'react';
import { useTheme } from 'next-themes';
import { useNavigate, useLocation } from 'react-router';

// Lazy load the modal as it contains heavy logic and UI
const GetStartedModal = lazy(() => import('./GetStartedModal').then(m => ({ default: m.GetStartedModal })));

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to determine active page
  const currentPath = location.pathname;

  let navItems: Array<{ id: string; label: string; path: string }> = [];

  if (currentPath.startsWith('/ai')) {
    navItems = [
      { id: 'ai', label: 'AI Directory', path: '/ai' },
      { id: 'home', label: 'Main Website', path: '/' },
    ];
  } else if (
    currentPath.startsWith('/courses') || 
    currentPath.startsWith('/branches') || 
    currentPath.startsWith('/projects') || 
    currentPath.startsWith('/roadmap') || 
    currentPath.startsWith('/trainer') || 
    currentPath.startsWith('/papers')
  ) {
    navItems = [
      { id: 'courses', label: 'Courses', path: '/courses' },
      { id: 'branches', label: 'Branches', path: '/branches' },
      { id: 'projects', label: 'Internships & Projects', path: '/projects' },
      { id: 'roadmap', label: 'Roadmaps', path: '/roadmap' },
      { id: 'trainer', label: 'Trainers', path: '/trainer' },
      { id: 'papers', label: 'Papers', path: '/papers' },
      { id: 'home', label: 'Main Website', path: '/' },
    ];
  } else if (currentPath.startsWith('/business')) {
    navItems = [
      { id: 'home', label: 'Home', path: '/' },
      { id: 'services', label: 'Services', path: '/business#services' },
      { id: 'projects', label: 'Projects', path: '/business#projects' },
      { id: 'team', label: 'Team', path: '/business#team' },
      { id: 'contact', label: 'Contact', path: '/business#contact' },
    ];
  } else if (currentPath.startsWith('/blogs')) {
    navItems = [
      { id: 'blogs', label: 'Latest Blogs', path: '/blogs' },
      { id: 'home', label: 'Main Website', path: '/' },
    ];
  } else if (currentPath.startsWith('/login')) {
    navItems = [
      { id: 'home', label: 'Back to Home', path: '/' },
    ];
  } else {
    // Default / Home
    navItems = [
      { id: 'home', label: 'Home', path: '/' },
      { id: 'business', label: 'Business', path: '/business' },
      { id: 'courses', label: 'Scaro Academy', path: '/courses' },
      { id: 'ai', label: 'AI Tools', path: '/ai' },
      { id: 'blogs', label: 'Blogs', path: '/blogs' },
      { id: 'contact', label: 'Contact Us', path: '/contact' },
    ];
  }

  const navigateToPage = (path: string) => {
    if (path.includes('#') && path.split('#')[0] === currentPath) {
      const hash = path.split('#')[1];
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', path);
      } else {
        navigate(path);
      }
    } else {
      navigate(path);
    }
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleOpenModal = () => {
      setIsGetStartedModalOpen(true);
    };

    window.addEventListener('open-get-started', handleOpenModal);
    return () => window.removeEventListener('open-get-started', handleOpenModal);
  }, []);

  return (
    <div className="sticky top-0 z-50 theme-transition shadow-lg shadow-black/5">
      {/* Top Header Bar */}
      <div className="hidden md:flex justify-between items-center px-4 sm:px-6 lg:px-8 py-2 bg-page-bg dark:bg-page-bg border-b border-border transition-colors">
        {/* Left Side: Logo */}
        <Logo onClick={() => navigateToPage('/')} textSize="text-3xl" iconSize={64} />

        {/* Right Side: Contact Info */}
        <div className="flex items-center gap-8 text-base">
          <div className="flex items-center gap-3 text-text-secondary">
            <PhoneCall className="w-10 h-10 text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] border border-[var(--primary-maroon)] dark:border-[var(--primary-gold)] rounded-full p-2" />
            <div>
              <p className="font-bold text-heading">Call Us</p>
              <p className="text-sm text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] font-bold">+91 99899 99099</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-text-secondary border-l border-border pl-8">
            <Clock className="w-10 h-10 text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] border border-[var(--primary-maroon)] dark:border-[var(--primary-gold)] rounded-full p-2" />
            <div>
              <p className="font-bold text-heading">Working Hours</p>
              <p className="text-sm text-text-muted">09.00am - 9.00pm (IST)</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[var(--primary-maroon)] dark:bg-[var(--dark-maroon)] backdrop-blur-xl border-b border-white/10 transition-colors py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Mobile Logo */}
            <div className="md:hidden">
              <Logo onClick={() => navigateToPage('/')} iconSize={56} showName={false} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-start gap-2 lg:gap-4 flex-wrap overflow-hidden">
              {navItems.map((item) => {
                const isActive = currentPath === item.path || (currentPath === '/' && item.id === 'home');
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateToPage(item.path)}
                    className={`px-2 lg:px-4 py-2 rounded-md text-xs lg:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 ${isActive
                        ? 'text-[var(--primary-gold)] border-b-2 border-[var(--primary-gold)]'
                        : 'text-gray-200 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Right side: login + theme toggle + mobile menu */}
            <div className="flex items-center gap-3 ml-auto">
              {/* Login Button */}
              <button
                onClick={() => navigateToPage('/login')}
                className="hidden md:flex items-center px-4 py-2 bg-white text-[var(--primary-maroon)] dark:bg-[var(--primary-gold)] dark:text-slate-900 text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-gray-100 dark:hover:bg-yellow-400 transition-colors shadow-sm active:scale-95"
              >
                Login
              </button>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all theme-transition"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-300" />
                ) : (
                  <Moon className="w-4 h-4 text-blue-200" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-white rounded-lg hover:bg-white/20 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-1 border-t border-white/20">
              {navItems.map((item) => {
                const isActive = currentPath === item.path || (currentPath === '/' && item.id === 'home');
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateToPage(item.path)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all text-base uppercase font-medium tracking-wide ${isActive
                        ? 'bg-red-500 text-white shadow-lg'
                        : 'text-gray-200 hover:bg-white/10 hover:text-white'
                      }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="px-4 pt-4 border-t border-white/20 mt-2 space-y-2">
                <button
                  onClick={() => navigateToPage('/login')}
                  className="w-full flex justify-center items-center gap-2 bg-white text-[var(--primary-maroon)] hover:bg-gray-100 px-5 py-3 rounded-md font-bold text-base transition-all shadow-md uppercase tracking-wider"
                >
                  Login / Verify
                </button>
                <button
                  onClick={() => navigateToPage('/contact')}
                  className="w-full flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-4 rounded-md font-bold text-lg transition-all shadow-md"
                >
                  <Mail className="w-5 h-5" /> Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <Suspense fallback={null}>
        <GetStartedModal
          isOpen={isGetStartedModalOpen}
          onClose={() => setIsGetStartedModalOpen(false)}
        />
      </Suspense>
    </div>
  );
}