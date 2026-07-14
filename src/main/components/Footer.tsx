import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Youtube, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { VisitorCounter } from './VisitorCounter';
import { memo } from 'react';
import { useLocation, useNavigate } from 'react-router';

export const Footer = memo(function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  interface FooterConfig {
    description: string;
    email1: string;
    email2: string;
    phone: string;
    address: string;
    links: Record<string, { name: string; page: string }[]>;
    showNewsletter?: boolean;
    copyrightYear: string;
  }

  let footerConfig: FooterConfig = {
    description: "Your AI-Powered Learning Assistant. Empowering engineering students across all branches with personalized learning and guidance.",
    email1: "support@scaro.com",
    email2: "info@scaro.com",
    phone: "+91 9949167458",
    address: "Tirupati, AP, India",
    links: {
      Platform: [
        { name: 'All Branches', page: '/branches' },
        { name: 'Courses', page: '/courses' },
        { name: 'Virtual Labs', page: '/projects' },
        { name: 'AI Website', page: '/ai' },
      ],
      Resources: [
        { name: 'Success Stories', page: '/courses#reviews-section' },
        { name: 'FAQs', page: '/#faq' },
        { name: 'Blog', page: '/blogs' },
        { name: 'Documentation', page: '/courses' },
      ],
      Company: [
        { name: 'About Us', page: '/' },
        { name: 'Contact', page: '/contact' },
        { name: 'Trainers', page: '/trainer' },
      ],
      Legal: [
        { name: 'Privacy Policy', page: '/privacy' },
        { name: 'Terms of Service', page: '/terms' },
      ],
    },
    showNewsletter: true,
    copyrightYear: "2025"
  };

  if (currentPath.startsWith('/business')) {
    footerConfig = {
      description: "Enterprise AI & automation agency building the platforms that power next-generation businesses.",
      email1: "hr@scaro.in",
      email2: "support@scaro.com",
      phone: "+91 81067 95810 / +91 73530 77676",
      address: "Tirupati, AP, India",
      links: {
        Company: [
          { name: 'Home', page: '/' },
          { name: 'Projects', page: '/business#projects' },
          { name: 'Team', page: '/business#team' },
          { name: 'Contact', page: '/business#contact' },
        ],
        Services: [
          { name: 'Web App Development', page: '/business#services' },
          { name: 'Mobile Apps', page: '/business#services' },
          { name: 'SaaS Engineering', page: '/business#services' },
          { name: 'AI & ML Integration', page: '/business#services' },
        ],
        Contact: [
          { name: 'Get in Touch', page: '/business#contact' }
        ],
        Legal: [
          { name: 'Privacy Policy', page: '/privacy' },
          { name: 'Terms of Service', page: '/terms' },
        ]
      },
      showNewsletter: false,
      copyrightYear: "2026"
    };
  } else if (currentPath.startsWith('/ai')) {
    footerConfig = {
      ...footerConfig,
      description: "Your definitive directory for discovering, comparing, and utilizing the best AI tools on the web.",
      links: {
        Directory: [
          { name: 'Coding & Dev', page: 'ai' },
          { name: 'Design & Image', page: 'ai' },
          { name: 'Chatbots', page: 'ai' },
        ],
        Resources: [
          { name: 'Submit a Tool', page: 'contact' },
          { name: 'AI Guides', page: 'blogs' },
          { name: 'Education Courses', page: '/courses' },
        ],
        Company: [
          { name: 'About Us', page: 'home' },
          { name: 'Contact', page: 'contact' },
        ],
        Legal: [
          { name: 'Privacy Policy', page: '/privacy' },
          { name: 'Terms of Service', page: '/terms' },
        ]
      }
    };
  } else if (currentPath.startsWith('/blogs')) {
    footerConfig = {
      ...footerConfig,
      description: "Insights, tutorials, and engineering deep-dives from the team at Scaro Technologies.",
      links: {
        Categories: [
          { name: 'Software Engineering', page: 'blogs' },
          { name: 'Artificial Intelligence', page: 'blogs' },
        ],
        Resources: [
          { name: 'Write for Us', page: 'contact' },
          { name: 'RSS Feed', page: 'blogs' },
        ],
        Company: [
          { name: 'About Us', page: 'home' },
          { name: 'Contact', page: 'contact' },
        ],
        Legal: [
          { name: 'Privacy Policy', page: '/privacy' },
          { name: 'Terms of Service', page: '/terms' },
        ]
      }
    };
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Scaro Technologies', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/scaro', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/scaro', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/@scaro', label: 'YouTube' },
  ];

  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    // If it's a hash link for the current page, scroll to it smoothly
    if (path.includes('#') && path.split('#')[0] === currentPath) {
      const hash = path.split('#')[1];
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', path);
        return;
      }
    }
    
    // Otherwise, let React Router handle the transition and scroll to top
    navigate(path);
    if (!path.includes('#')) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    
    // Maintain legacy custom event support if anything is relying on it
    const event = new CustomEvent('navigate', { detail: path.replace('/', '') || 'home' });
    window.dispatchEvent(event);
  };

  return (
    <footer className="relative bg-[#0A0506] text-gray-300 overflow-hidden">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-gold)]/50 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--primary-maroon)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand section */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2">
            <Logo onClick={() => handleNavigation('home')} iconSize={144} className="mb-5" />
            <p className="text-base mb-8 text-gray-400 leading-relaxed max-w-sm">
              {footerConfig.description}
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 text-sm">
              <a href={`mailto:${footerConfig.email1}`} className="flex items-center gap-3 text-gray-400 hover:text-[var(--primary-gold)] transition-colors group">
                <Mail className="w-4 h-4 text-[var(--primary-gold)]/60 group-hover:text-[var(--primary-gold)] transition-colors" />
                {footerConfig.email1}
              </a>
              <a href={`mailto:${footerConfig.email2}`} className="flex items-center gap-3 text-gray-400 hover:text-[var(--primary-gold)] transition-colors group">
                <Mail className="w-4 h-4 text-[var(--primary-gold)]/60 group-hover:text-[var(--primary-gold)] transition-colors" />
                {footerConfig.email2}
              </a>
              <a href={`tel:${footerConfig.phone.split(' / ')[0]}`} className="flex items-center gap-3 text-gray-400 hover:text-[var(--primary-gold)] transition-colors group">
                <Phone className="w-4 h-4 text-[var(--primary-gold)]/60 group-hover:text-[var(--primary-gold)] transition-colors" />
                {footerConfig.phone}
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-[var(--primary-gold)]/60" />
                {footerConfig.address}
              </div>
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerConfig.links).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-[0.15em]">{category}</h3>
              <ul className="space-y-3 text-sm">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); handleNavigation(link.page); }} 
                      className="text-gray-400 hover:text-[var(--primary-gold)] hover:translate-x-1 transition-all inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        {footerConfig.showNewsletter && (
          <div className="border-t border-white/10 pt-10 mb-10">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h3 className="text-white font-bold mb-2 text-lg">Stay Updated</h3>
              <p className="text-sm text-gray-500 mb-5">
                Get the latest courses, tips, and opportunities delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[var(--primary-gold)]/50 focus:ring-1 focus:ring-[var(--primary-gold)]/30 text-white placeholder:text-gray-500 transition-all font-medium"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-[var(--primary-maroon)] to-[var(--primary-gold)] text-white rounded-xl hover:shadow-[0_0_30px_-8px_var(--primary-gold)] transition-all font-bold flex items-center justify-center gap-2 group uppercase tracking-wider text-sm">
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500 text-center md:text-left flex-1">
            © {footerConfig.copyrightYear} <span className="text-[var(--primary-gold)]/70">Scaro Technologies</span>. All rights reserved.
          </p>

          <VisitorCounter />

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-[var(--primary-gold)] hover:border-[var(--primary-gold)]/30 hover:bg-[var(--primary-maroon)]/20 hover:scale-110 flex items-center justify-center transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});