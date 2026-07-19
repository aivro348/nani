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

  const isEducationSection = currentPath.startsWith('/courses') || currentPath.startsWith('/all-courses') || currentPath.startsWith('/all-projects') || currentPath.startsWith('/branches') || currentPath.startsWith('/roadmap') || currentPath.startsWith('/projects') || currentPath.startsWith('/trainer') || currentPath.startsWith('/papers') || currentPath.startsWith('/about') || currentPath.startsWith('/partners') || currentPath.startsWith('/news-events') || currentPath.startsWith('/success-stories') || currentPath.startsWith('/podcast') || currentPath.startsWith('/workshops') || currentPath.startsWith('/education-blogs');

  return (
    <div className="sticky top-0 z-50 theme-transition shadow-lg shadow-black/5">
      {/* 1. TOP UTILITY BAR */}
      <div className="hidden lg:flex bg-[#1E060A] text-white/80 border-b border-white/5 py-1.5 px-6 items-center justify-between text-[10px] uppercase font-bold tracking-widest">
        <div className="flex items-center gap-6">
          <button onClick={() => navigateToPage('/internship')} className="hover:text-white transition-colors">INTERNSHIP</button>
          <button onClick={() => navigateToPage('/all-courses')} className="hover:text-white transition-colors">JOB ORIENTED COURSES</button>
          <button onClick={() => navigateToPage('/placements')} className="hover:text-white transition-colors">PLACEMENTS</button>
          <button onClick={() => navigateToPage('/admission')} className="hover:text-white transition-colors">ADMISSION</button>
        </div>
        <div className="flex items-center gap-6 opacity-80">
          <a href="mailto:ENQUIRE@SCAROTECHNOLOGIES.COM" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5" />
            ENQUIRE@SCAROTECHNOLOGIES.COM
          </a>
          <span className="w-px h-3 bg-white/20"></span>
          <a href="tel:08069096313" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5" />
            080 6909 6313 | +91 98000 00000
          </a>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav className="bg-[#140407] backdrop-blur-xl border-b border-white/10 transition-colors py-2 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between h-[4.5rem]">
            {/* Logo Group */}
            <div className="flex-shrink-0 mr-8 flex items-center cursor-pointer" onClick={() => navigateToPage('/')}>
              {/* Logo Icon with glowing background */}
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFECCC] to-[#F1B15A] rounded-2xl flex items-center justify-center p-0.5 shadow-[0_0_20px_rgba(241,177,90,0.3)] mr-3">
                <div className="w-full h-full bg-[#1E060A] rounded-xl flex items-center justify-center relative overflow-hidden">
                   {/* Simplified S icon */}
                   <span className="text-[#F1B15A] font-serif font-black text-2xl italic z-10 leading-none mt-[-4px]">S</span>
                   <span className="absolute bottom-1 text-[5px] text-[#F1B15A] tracking-[0.2em] uppercase font-bold z-10">SCARO</span>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#F1B15A]/20 to-transparent"></div>
                </div>
              </div>
              {/* Logo Text */}
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-white font-black text-xl tracking-tight">Scaro</span>
                  <span className="text-[#F1B15A] font-black text-xl tracking-tight">Technologies</span>
                </div>
                <span className="text-gray-400 text-[9px] uppercase tracking-[0.3em] font-semibold mt-[-2px]">
                  SILICON & AI ACADEMY
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center justify-center gap-6 whitespace-nowrap flex-1 px-4">
              {navItems.map((item) => {
                const hasSubItems = item.subItems && item.subItems.length > 0;
                return (
                  <div key={item.id} className="relative group">
                    <a href={item.path || (hasSubItems ? item.subItems![0].path : '#')}
                      onClick={(e) => { e.preventDefault(); if (item.path) navigateToPage(item.path); else if (hasSubItems) navigateToPage(item.subItems![0].path); }}
                      className={`flex items-center gap-1.5 text-xs font-bold transition-all duration-300 py-6
                        ${item.isHighlight ? 'text-pink-400 hover:text-pink-300' : 'text-gray-200 hover:text-white'}
                      `}
                    >
                      {item.label}
                      {hasSubItems && (
                        <svg className="w-3.5 h-3.5 text-gray-400 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </a>

                    {/* Dropdown Menu */}
                    {hasSubItems && (
                      <div className="absolute top-full left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-300 z-50">
                        <div className="bg-[#1E060A]/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 overflow-hidden flex flex-col py-2">
                          {item.subItems!.map((sub, i) => (
                            <a key={i}
                              href={sub.path} onClick={(e) => { e.preventDefault(); navigateToPage(sub.path); }}
                              className="text-left px-5 py-3 text-sm font-semibold text-gray-300 hover:text-[#F1B15A] hover:bg-white/5 transition-colors"
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

            {/* Right side: Actions (Dark mode, CTA, Auth) */}
            <div className="flex items-center gap-4 ml-auto">
              {/* Dark mode toggle */}
              <button className="hidden lg:flex w-10 h-10 rounded-full border border-white/20 items-center justify-center text-pink-200 hover:bg-white/10 transition-colors">
                <Moon className="w-4 h-4" />
              </button>

              {/* Free Courses CTA */}
              <button 
                onClick={() => navigateToPage('/courses')}
                className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-white px-5 py-2.5 rounded-full font-black text-[11px] uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 group"
              >
                FREE ONLINE COURSES
                <div className="bg-white rounded-full p-0.5 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600 stroke-[3px]" />
                </div>
              </button>

              {/* Auth */}
              <div className="hidden lg:flex items-center">
                
                
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 text-white rounded-lg hover:bg-white/20 transition-colors ml-2"
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
                const hasSubItems = item.subItems && item.subItems.length > 0;
                const isExpanded = expandedMobileItem === item.id;

                return (
                  <div key={item.id} className="flex flex-col">
                    <a href={item.path || '#'}
                      onClick={(e) => { e.preventDefault(); if (hasSubItems) { setExpandedMobileItem(isExpanded ? null : item.id); } else if (item.path) { navigateToPage(item.path); } }}
                      className={`w-full flex justify-between items-center text-left px-4 py-3 rounded-lg transition-all text-sm uppercase font-bold tracking-wide ${
                        item.isHighlight ? 'text-pink-400' : 'text-gray-200'
                      } hover:bg-white/5`}
                    >
                      {item.label}
                      {hasSubItems && (
                        <svg className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      )}
                    </a>
                    {hasSubItems && isExpanded && (
                      <div className="pl-6 flex flex-col space-y-1 mt-1 border-l-2 border-white/10 ml-4">
                        {item.subItems!.map((sub, i) => (
                          <a key={i}
                            href={sub.path} onClick={(e) => { e.preventDefault(); navigateToPage(sub.path); }}
                            className="block w-full text-left px-4 py-2 rounded-lg transition-all text-xs font-bold text-gray-400 hover:text-white hover:bg-white/5"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="px-4 pt-4 border-t border-white/20 mt-2 space-y-3">
                <button 
                  onClick={() => navigateToPage('/courses')}
                  className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-400 text-white px-5 py-3.5 rounded-xl font-black text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
                >
                  FREE ONLINE COURSES
                </button>
                <div className="flex flex-col gap-2 pt-2 pb-2 text-[10px] text-gray-400 uppercase font-bold text-center border-t border-white/10">
                   <a href="mailto:ENQUIRE@SCAROTECHNOLOGIES.COM" className="py-2">ENQUIRE@SCAROTECHNOLOGIES.COM</a>
                   <a href="tel:08069096313" className="py-2">080 6909 6313 | +91 98000 00000</a>
                </div>
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
