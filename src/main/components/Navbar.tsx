import { Menu, X, Mail, GraduationCap, User } from 'lucide-react';
import { Logo } from './Logo';
import { useState, useEffect, lazy, Suspense } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useLms } from '../../student-portal/lms/context/LmsContext';


// Lazy load the modal as it contains heavy logic and UI
const GetStartedModal = lazy(() => import('./GetStartedModal').then(m => ({ default: m.GetStartedModal })));

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useLms();

  // Helper to determine active page
  const currentPath = location.pathname;

  let navItems: Array<{ id: string; label: string; path?: string; subItems?: Array<{ label: string; path: string }> }> = [];

  if (currentPath.startsWith('/lms')) {
    navItems = [
      { id: 'lms-dashboard', label: 'LMS Dashboard', path: '/lms' },
      { id: 'lms-profile', label: 'My Certificates', path: '/lms/profile' },
      { id: 'academy-courses', label: 'Academy Courses', path: '/courses' },
      { id: 'main-home', label: 'Main Website', path: '/' },
    ];
  } else if (
    currentPath.startsWith('/ai') ||
    currentPath.startsWith('/all-ai-')
  ) {
    navItems = [
      { id: 'home', label: 'Home', path: '/ai' },
      { id: 'about', label: 'About', path: '/ai-about' },
      { id: 'courses', label: 'Courses', path: '/ai-courses' },
      { id: 'masterclass', label: 'Masterclass', path: '/ai-masterclass' },
      {
        id: 'ai-tools-dropdown',
        label: 'AI Tools',
        subItems: [
          { label: 'Ultimate AI Tools Directory', path: '/all-ai-tools' },
          { label: 'ChatGPT', path: 'https://chat.openai.com' },
          { label: 'Claude AI', path: 'https://claude.ai' },
          { label: 'Google Gemini', path: 'https://gemini.google.com' },
          { label: 'Midjourney', path: 'https://midjourney.com' },
          { label: 'Runway ML', path: 'https://runwayml.com' },
          { label: 'Suno AI', path: 'https://suno.com' },
          { label: 'Canva AI', path: 'https://canva.com' },
          { label: 'Gamma AI', path: 'https://gamma.app' },
          { label: 'Lovable.ai', path: 'https://lovable.ai' }
        ]
      },
      { id: 'resources', label: 'Resources', path: '/ai-resources' },
      { id: 'community', label: 'Community', path: '/ai-community' },
      { id: 'blogs', label: 'Blog', path: '/ai-blog' },
      { id: 'contact', label: 'Contact', path: '/contact' },
    ];
  } else if (
    currentPath.startsWith('/courses') ||
    currentPath.startsWith('/all-courses') ||
    currentPath.startsWith('/all-projects') ||
    currentPath.startsWith('/branches') ||
    currentPath.startsWith('/projects') ||
    currentPath.startsWith('/roadmap') ||
    currentPath.startsWith('/trainer') ||
    currentPath.startsWith('/team') ||
    currentPath.startsWith('/papers') ||
    currentPath.startsWith('/about') ||
    currentPath.startsWith('/partners') ||
    currentPath.startsWith('/news-events') ||
    currentPath.startsWith('/success-stories') ||
    currentPath.startsWith('/podcast') ||
    currentPath.startsWith('/workshops') ||
    currentPath.startsWith('/education-blogs')
  ) {
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
        id: 'blogs', label: 'Blogs', subItems: [
          { label: 'Education Blogs', path: '/education-blogs' },
          { label: 'General Blogs', path: '/blogs' }
        ]
      },
      { id: 'college-connect', label: 'College Connect', path: '/branches' }
    ];
  } else if (currentPath.startsWith('/all-business-projects') || currentPath.startsWith('/business-about') || currentPath.startsWith('/business-pricing') || currentPath.startsWith('/business-blogs') || currentPath.startsWith('/business-faq') || currentPath.startsWith('/business-team')) {
    navItems = [
      { id: 'home', label: 'Home', path: '/business' },
      { id: 'about', label: 'About Us', path: '/business-about' },
      {
        id: 'services', label: 'Services', path: '/business-services', subItems: [
          { label: 'Web Design', path: '/business-services#web-design' },
          { label: 'E-Commerce', path: '/business-services#ecommerce' },
          { label: 'Mobile Apps', path: '/business-services#mobile' },
          { label: 'AI Solutions', path: '/business-services#ai-solutions' },
          { label: 'AI Builders', path: '/business-services#ai-builder' },
          { label: 'Local Services', path: '/business-services#local-services' }
        ]
      },
      { id: 'pricing', label: 'Pricing', path: '/business-pricing' },
      { id: 'projects', label: 'Projects', path: '/all-business-projects' },
      { id: 'blogs', label: 'Blogs', path: '/business-blogs' },
      { id: 'faq', label: 'FAQ', path: '/business-faq' },
      { id: 'team', label: 'Team', path: '/business-team' },
      { id: 'contact', label: 'Contact', path: '/business#contact' },
    ];
  } else if (currentPath.startsWith('/business') || currentPath.startsWith('/business-services') || currentPath.startsWith('/business-pricing') || currentPath.startsWith('/business-blogs') || currentPath.startsWith('/business-faq') || currentPath.startsWith('/business-team')) {
    navItems = [
      { id: 'home', label: 'Home', path: '/business' },
      { id: 'about', label: 'About Us', path: '/business-about' },
      {
        id: 'services', label: 'Services', path: '/business-services', subItems: [
          { label: 'Web Design', path: '/business-services#web-design' },
          { label: 'E-Commerce', path: '/business-services#ecommerce' },
          { label: 'Mobile Apps', path: '/business-services#mobile' },
          { label: 'AI Solutions', path: '/business-services#ai-solutions' },
          { label: 'AI Builders', path: '/business-services#ai-builder' },
          { label: 'Local Services', path: '/business-services#local-services' }
        ]
      },
      { id: 'pricing', label: 'Pricing', path: '/business-pricing' },
      { id: 'projects', label: 'Projects', path: '/all-business-projects' },
      { id: 'blogs', label: 'Blogs', path: '/business-blogs' },
      { id: 'faq', label: 'FAQ', path: '/business-faq' },
      { id: 'team', label: 'Team', path: '/business-team' },
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
  } else if (currentPath === '/') {
    // Default / Home
    navItems = [
      { id: 'home', label: 'Home', path: '/' },
      { id: 'business', label: 'Business', path: '/business' },
      { id: 'courses', label: 'Scaro Academy', path: '/courses' },
      { id: 'ai', label: 'AI Tools', path: '/ai' },
      { id: 'community', label: 'Community Hub', path: '/community' },
    ];
  } else {
    navItems = [
      { id: 'home', label: 'Home', path: '/' },
      { id: 'business', label: 'Business', path: '/business' },
      { id: 'courses', label: 'Scaro Academy', path: '/courses' },
      { id: 'ai', label: 'AI Tools', path: '/ai' },
      { id: 'community', label: 'Community Hub', path: '/community' },
    ];
  }

  if (!currentPath.startsWith('/lms') && !currentPath.startsWith('/login')) {
    if (user) {
      navItems.push({ id: 'lms-portal', label: 'LMS Portal', path: '/lms' });
    }
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
    const handleOpenModal = () => {
      setIsGetStartedModalOpen(true);
    };

    window.addEventListener('open-get-started', handleOpenModal);
    return () => window.removeEventListener('open-get-started', handleOpenModal);
  }, []);

  const isEducationSection = currentPath.startsWith('/courses') || currentPath.startsWith('/all-courses') || currentPath.startsWith('/all-projects') || currentPath.startsWith('/branches') || currentPath.startsWith('/roadmap') || currentPath.startsWith('/projects') || currentPath.startsWith('/trainer') || currentPath.startsWith('/papers') || currentPath.startsWith('/about') || currentPath.startsWith('/partners') || currentPath.startsWith('/news-events') || currentPath.startsWith('/success-stories') || currentPath.startsWith('/podcast') || currentPath.startsWith('/workshops') || currentPath.startsWith('/education-blogs');
  const isBusinessSection = currentPath.startsWith('/business');
  const isAISection = currentPath.startsWith('/ai') || currentPath.startsWith('/all-ai-') || currentPath.startsWith('/ai-about') || currentPath.startsWith('/ai-courses') || currentPath.startsWith('/ai-masterclass') || currentPath.startsWith('/ai-resources') || currentPath.startsWith('/ai-community') || currentPath.startsWith('/ai-blog');

  return (
    <div className="sticky top-0 z-50 theme-transition shadow-lg shadow-black/5">
      {/* Main Navigation Bar */}
      <nav className="bg-[var(--primary-maroon)] dark:bg-[var(--dark-maroon)] backdrop-blur-xl border-b border-white/10 transition-colors py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 mr-4 lg:mr-8">
              <Logo onClick={() => {
                navigateToPage(isBusinessSection ? '/business' : isEducationSection ? '/courses' : isAISection ? '/ai' : '/');
              }} iconSize={44} textSize="text-xl hidden lg:block" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-start gap-1 lg:gap-2 whitespace-nowrap flex-nowrap overflow-visible">
              {navItems.map((item) => {
                const isActive = item.path ? (currentPath === item.path || (currentPath === '/' && item.id === 'home')) : false;
                const hasSubItems = item.subItems && item.subItems.length > 0;

                return (
                  <div key={item.id} className="relative group">
                    <button aria-label="Action button"
                      onClick={() => {
                        if (item.path) navigateToPage(item.path);
                        else if (hasSubItems) navigateToPage(item.subItems![0].path);
                      }}
                      className={`relative px-1.5 lg:px-2.5 py-2 flex items-center gap-0.5 text-[10px] lg:text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-[var(--primary-gold)]' : 'text-gray-200 hover:text-white'
                        }`}
                    >
                      {item.label}
                      {hasSubItems && <svg className="w-3.5 h-3.5 ml-0.5 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>}

                      <span className={`absolute left-0 bottom-0 w-full h-[2px] transition-transform duration-300 origin-left ${isActive ? 'bg-[var(--primary-gold)] scale-x-100' : 'bg-white scale-x-0 group-hover:scale-x-100'
                        }`} />
                    </button>

                    {/* Dropdown Menu */}
                    {hasSubItems && (
                      <div className="absolute top-full left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-300 z-50">
                        <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col py-2">
                          {item.subItems!.map((sub, i) => (
                            <button aria-label="Action button"
                              key={i}
                              onClick={() => navigateToPage(sub.path)}
                              className="text-left px-5 py-3 text-sm font-semibold text-gray-700 hover:text-[var(--primary-maroon)] hover:bg-gray-50 transition-colors"
                            >
                              {sub.label}
                            </button>
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

                return (
                  <div key={item.id} className="flex flex-col">
                    <button aria-label="Action button"
                      onClick={() => {
                        if (item.path) {
                          navigateToPage(item.path);
                        } else if (hasSubItems) {
                          navigateToPage(item.subItems[0].path);
                        }
                      }}
                      className={`block w-full text-left px-4 py-3 rounded-lg transition-all text-base uppercase font-medium tracking-wide ${isActive
                        ? 'bg-red-500 text-white shadow-lg'
                        : 'text-gray-200 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                      {item.label}
                    </button>
                    {hasSubItems && (
                      <div className="pl-6 flex flex-col space-y-1 mt-1 border-l-2 border-white/10 ml-4">
                        {item.subItems!.map((sub, i) => (
                          <button aria-label="Action button"
                            key={i}
                            onClick={() => navigateToPage(sub.path)}
                            className="block w-full text-left px-4 py-2 rounded-lg transition-all text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="px-4 pt-4 border-t border-white/20 mt-2 space-y-2">
                <button aria-label="Action button"
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