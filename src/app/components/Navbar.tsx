import { Menu, X, PhoneCall, Clock, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { useState, useEffect, lazy, Suspense } from 'react';
import { useNavigate, useLocation } from 'react-router';

// Lazy load the modal as it contains heavy logic and UI
const GetStartedModal = lazy(() => import('./GetStartedModal').then(m => ({ default: m.GetStartedModal })));

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to determine active page
  const currentPath = location.pathname;

  let navItems: Array<{ id: string; label: string; path: string }> = [];

  if (currentPath.startsWith('/ai')) {
    navItems = [
      { id: 'home', label: 'AI Home', path: '/ai' },
      { id: 'courses', label: 'AI Courses', path: '/ai#courses' },
      { id: 'roadmaps', label: 'Roadmaps', path: '/ai#roadmaps' },
      { id: 'tools', label: 'AI Tools', path: '/ai#tools' },
      { id: 'contact', label: 'Contact Us', path: '/ai#contact' },
    ];
  } else if (
    currentPath.startsWith('/courses') || 
    currentPath.startsWith('/all-courses') || 
    currentPath.startsWith('/all-projects') || 
    currentPath.startsWith('/branches') || 
    currentPath.startsWith('/projects') || 
    currentPath.startsWith('/roadmap') || 
    currentPath.startsWith('/trainer') || 
    currentPath.startsWith('/papers')
  ) {
    navItems = [
      { id: 'home', label: 'Home', path: '/courses' },
      { id: 'programs', label: 'Programs / Courses', path: '/all-courses' },
      { id: 'roadmap', label: 'Roadmap', path: '/roadmap' },
      { id: 'projects', label: 'Projects', path: '/all-projects' },
      { id: 'college', label: 'College Connect', path: '/branches' },
    ];
  } else if (currentPath.startsWith('/business')) {
    navItems = [
      { id: 'home', label: 'Home', path: '/business' },
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
  } else if (
    currentPath.startsWith('/ai') ||
    currentPath.startsWith('/all-ai-courses') ||
    currentPath.startsWith('/all-ai-roadmaps') ||
    currentPath.startsWith('/all-ai-tools')
  ) {
    navItems = [
      { id: 'home', label: 'Home', path: '/ai' },
      { id: 'programs', label: 'Programs / Courses', path: '/all-ai-courses' },
      { id: 'roadmap', label: 'Roadmap', path: '/all-ai-roadmaps' },
      { id: 'tools', label: 'AI Tools', path: '/all-ai-tools' },
    ];
  } else if (currentPath === '/') {
    // Default / Home - Hide nav items to force portal navigation
    navItems = [];
  } else {
    navItems = [
      { id: 'home', label: 'Home', path: '/' },
      { id: 'business', label: 'Business', path: '/business' },
      { id: 'courses', label: 'Scaro Academy', path: '/courses' },
      { id: 'ai', label: 'AI Tools', path: '/ai' },
      { id: 'community', label: 'Community Hub', path: '/community' },
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



  useEffect(() => {
    const handleOpenModal = () => {
      setIsGetStartedModalOpen(true);
    };

    window.addEventListener('open-get-started', handleOpenModal);
    return () => window.removeEventListener('open-get-started', handleOpenModal);
  }, []);

  return (
    <div className="sticky top-0 z-50 theme-transition shadow-lg shadow-black/5">
      {/* Main Navigation Bar */}
      <nav className="bg-[var(--primary-maroon)] dark:bg-[var(--dark-maroon)] backdrop-blur-xl border-b border-white/10 transition-colors py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 mr-4 lg:mr-8">
              <Logo onClick={() => {
                const isBusinessSection = currentPath.startsWith('/business');
                const isEducationSection = currentPath.startsWith('/courses') || currentPath.startsWith('/all-courses') || currentPath.startsWith('/all-projects') || currentPath.startsWith('/branches') || currentPath.startsWith('/roadmap') || currentPath.startsWith('/projects') || currentPath.startsWith('/trainer') || currentPath.startsWith('/papers');
                const isAISection = currentPath.startsWith('/ai') || currentPath.startsWith('/all-ai-courses') || currentPath.startsWith('/all-ai-roadmaps') || currentPath.startsWith('/all-ai-tools');
                navigateToPage(isBusinessSection ? '/business' : isEducationSection ? '/courses' : isAISection ? '/ai' : '/');
              }} iconSize={44} textSize="text-xl hidden lg:block" />
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

            {/* Right side: mobile menu */}
            <div className="flex items-center gap-3 ml-auto">

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