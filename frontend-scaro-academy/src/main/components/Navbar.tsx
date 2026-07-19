import { Menu, X, Mail, Phone, Moon, ArrowRight, User, BookOpen, GraduationCap } from 'lucide-react';
import { Logo } from './Logo';
import { useState, useEffect, lazy, Suspense } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useLms } from '../../student-portal/lms/context/LmsContext';

const GetStartedModal = lazy(() => import('./GetStartedModal').then(m => ({ default: m.GetStartedModal })));

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useLms();

  const currentPath = location.pathname;

  let navItems: Array<{ id: string; label: string; path?: string; subItems?: Array<{ label: string; path: string }>; isHighlight?: boolean }> = [];

  if (currentPath.startsWith('/lms')) {
    navItems = [
      { id: 'lms-dashboard', label: 'LMS Dashboard', path: '/lms' },
      { id: 'lms-profile', label: 'My Certificates', path: '/lms/profile' },
      { id: 'academy-courses', label: 'Academy Courses', path: '/courses' },
      { id: 'main-home', label: 'Main Website', path: '/' },
    ];
  } else {
    navItems = [
      {
        id: 'about', label: 'About Us', subItems: [
          { label: 'About us', path: '/about' },
          { label: 'Our Team', path: '/team' },
          { label: 'Our Partners', path: '/partners' },
          { label: 'News & Events', path: '/news-events' },
          { label: 'Success Stories', path: '/success-stories' }
        ]
      },
      {
        id: 'courses', label: 'Courses', subItems: [
          { label: 'All Courses', path: '/all-courses' },
          { label: 'Roadmap', path: '/roadmap' }
        ]
      },
      {
        id: 'resources', label: 'Free Resources', subItems: [
          { label: 'Courses', path: '/all-courses' },
          { label: 'Projects', path: '/all-projects' },
          { label: 'Podcast', path: '/podcast' },
          { label: 'Workshop', path: '/workshops' }
        ]
      },
      {
        id: 'centers', label: 'Centers', subItems: [
          { label: 'College Connect', path: '/branches' }
        ]
      },
      {
        id: 'blog', label: 'Blog', path: '/blogs', isHighlight: true
      },
      {
        id: 'more', label: 'More', subItems: [
          { label: 'Papers', path: '/papers' },
          { label: 'Contact', path: '/contact' }
        ]
      }
    ];
  }

  const navigateToPage = (path: string) => {
    if (path.startsWith('http://') || path.startsWith('https://')) {
      window.open(path, '_blank', 'noopener,noreferrer');
      setMobileMenuOpen(false);
      return;
    }
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
    const handleOpenModal = () => setIsGetStartedModalOpen(true);
    window.addEventListener('open-get-started', handleOpenModal);
    return () => window.removeEventListener('open-get-started', handleOpenModal);
  }, []);

  const isEducationSection = true;
  const isBusinessSection = false;
  const isAISection = false;

  return (
    <div className="sticky top-0 z-50 theme-transition shadow-lg shadow-black/5">
      {/* Main Navigation Bar */}
      <nav className="bg-[var(--primary-maroon)] dark:bg-[var(--dark-maroon)] backdrop-blur-xl border-b border-white/10 transition-colors py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 mr-4 lg:mr-8">
              <Logo onClick={() => {
                navigateToPage('/');
              }} iconSize={44} textSize="text-base sm:text-xl" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-start gap-1 lg:gap-2 whitespace-nowrap flex-nowrap overflow-visible">
              {navItems.map((item) => {
                const isActive = item.path ? (currentPath === item.path || (currentPath === '/' && item.id === 'home')) : false;
                const hasSubItems = item.subItems && item.subItems.length > 0;

                return (
                  <div key={item.id} className="relative group">
                    <a aria-label="Action button" href={item.path || (hasSubItems ? item.subItems![0].path : '#')}
                      onClick={(e) => { e.preventDefault(); if (item.path) navigateToPage(item.path); else if (hasSubItems) navigateToPage(item.subItems![0].path); }}
                      className={`relative px-1.5 lg:px-2.5 py-2 flex items-center gap-0.5 text-[10px] lg:text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-[var(--primary-gold)]' : 'text-gray-200 hover:text-white'
                        }`}
                    >
                      {item.label}
                      {hasSubItems && <svg className="w-3.5 h-3.5 ml-0.5 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>}

                      <span className={`absolute left-0 bottom-0 w-full h-[2px] transition-transform duration-300 origin-left ${isActive ? 'bg-[var(--primary-gold)] scale-x-100' : 'bg-white scale-x-0 group-hover:scale-x-100'
                        }`} />
                    </a>

                    {/* Dropdown Menu */}
                    {hasSubItems && (
                      <div className="absolute top-full left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-300 z-50">
                        <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col py-2">
                          {item.subItems!.map((sub, i) => (
                            <a aria-label="Action button" key={i}
                              href={sub.path} onClick={(e) => { e.preventDefault(); navigateToPage(sub.path); }}
                              className="text-left px-5 py-3 text-sm font-semibold text-gray-700 hover:text-[var(--primary-maroon)] hover:bg-gray-50 transition-colors"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right side: mobile menu and CTA */}
            <div className="flex items-center gap-3 ml-auto">
              {isEducationSection && (
                <button aria-label="Action button"
                  onClick={() => navigateToPage('/contact')}
                  className="hidden lg:flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-4 py-1.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group whitespace-nowrap text-xs"
                >
                  Free Courses
                  <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </button>
              )}
               {(isEducationSection || isAISection) && (
                 <div className="hidden lg:flex items-center gap-3">
                   
                   
                 </div>
               )}

              {/* Mobile Menu Button */}
              <button aria-label="Action button"
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
                const isActive = item.path ? (currentPath === item.path || (currentPath === '/' && item.id === 'home')) : false;
                const hasSubItems = item.subItems && item.subItems.length > 0;
                const isExpanded = expandedMobileItem === item.id;

                return (
                  <div key={item.id} className="flex flex-col">
                    <a aria-label="Action button" href={item.path || '#'}
                      onClick={(e) => { e.preventDefault(); if (hasSubItems) { setExpandedMobileItem(isExpanded ? null : item.id); } else if (item.path) { navigateToPage(item.path); } }}
                      className={`w-full flex justify-between items-center text-left px-4 py-3 rounded-lg transition-all text-base uppercase font-medium tracking-wide ${isActive
                        ? 'bg-white/10 text-[#D4AF37] border border-[#D4AF37]/20 shadow-sm'
                        : 'text-gray-200 hover:bg-white/5 hover:text-[#D4AF37]'
                        }`}
                    >
                      {item.label}
                      {hasSubItems && (
                        <svg className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      )}
                    </a>
                    {hasSubItems && isExpanded && (
                      <div className="pl-6 flex flex-col space-y-1 mt-1 border-l-2 border-white/10 ml-4">
                        {item.subItems!.map((sub, i) => (
                          <a aria-label="Action button" key={i}
                            href={sub.path} onClick={(e) => { e.preventDefault(); navigateToPage(sub.path); }}
                            className="block w-full text-left px-4 py-2 rounded-lg transition-all text-sm font-semibold text-gray-300 hover:text-[#D4AF37] hover:bg-white/5"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="px-4 pt-4 border-t border-white/20 mt-2 space-y-2">
                <button aria-label="Action button"
                  onClick={() => navigateToPage('/contact')}
                  className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B89628] hover:shadow-lg hover:shadow-[#D4AF37]/20 text-[#1E060A] px-5 py-4 rounded-xl font-bold text-lg transition-all"
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