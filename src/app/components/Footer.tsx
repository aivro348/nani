import { Cpu, Mail, MapPin, Phone, Github, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Logo } from './Logo';
import { memo } from 'react';
import { useLocation, useNavigate } from 'react-router';

export const Footer = memo(function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  let footerConfig = {
    description: "Your AI-Powered Learning Assistant. Empowering engineering students across all branches with personalized learning and guidance.",
    email1: "support@scaro.com",
    email2: "info@scaro.com",
    phone: "+91 9949167458",
    address: "Tirupati, AP, India",
    links: {
      Platform: [
        { name: 'All Branches', page: 'branches' },
        { name: 'Courses', page: 'courses' },
        { name: 'Virtual Labs', page: 'projects' },
        { name: 'AI Tools', page: 'ai' },
      ],
      Resources: [
        { name: 'Success Stories', page: 'home' },
        { name: 'FAQs', page: 'faq-section' },
        { name: 'Blog', page: 'blogs' },
        { name: 'Documentation', page: 'home' },
      ],
      Company: [
        { name: 'About Us', page: 'home' },
        { name: 'Contact', page: 'contact' },
        { name: 'Trainers', page: 'trainer' },
      ],
      Legal: [
        { name: 'Privacy Policy', page: 'home' },
        { name: 'Terms of Service', page: 'home' },
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
          { name: 'Privacy Policy', page: 'home' },
          { name: 'Terms of Service', page: 'home' },
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
        ],
        Company: [
          { name: 'About Us', page: 'home' },
          { name: 'Contact', page: 'contact' },
        ],
        Legal: [
          { name: 'Privacy Policy', page: 'home' },
          { name: 'Terms of Service', page: 'home' },
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
          { name: 'Privacy Policy', page: 'home' },
          { name: 'Terms of Service', page: 'home' },
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
    <footer className="bg-page-bg text-text-secondary border-t border-surface-border theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand section */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2">
            <Logo onClick={() => handleNavigation('home')} iconSize={144} className="mb-4" />
            <p className="text-base mb-6 text-text-muted leading-relaxed">
              {footerConfig.description}
            </p>
            
            {/* Contact info */}
            <div className="space-y-2 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href={`mailto:${footerConfig.email1}`} className="hover:text-heading transition-colors">
                  {footerConfig.email1}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href={`mailto:${footerConfig.email2}`} className="hover:text-heading transition-colors">
                  {footerConfig.email2}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href={`tel:${footerConfig.phone.split(' / ')[0]}`} className="hover:text-heading transition-colors">
                  {footerConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{footerConfig.address}</span>
              </div>
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerConfig.links).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-heading font-semibold mb-4 text-lg">{category}</h3>
              <ul className="space-y-3 text-base text-text-muted">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation(link.page); }} className="hover:text-blue-500 transition-colors">
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
          <div className="border-t border-surface-border pt-8 mb-8">
            <div className="max-w-md mx-auto lg:mx-0">
              <h3 className="text-heading font-semibold mb-2">Stay Updated</h3>
              <p className="text-sm text-text-muted mb-4">
                Get the latest courses, tips, and opportunities delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 sm:py-3 bg-surface border border-surface-border rounded-lg focus:outline-none focus:border-blue-500 text-heading placeholder:text-text-muted transition-colors"
                />
                <button className="px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom section */}
        <div className="border-t border-surface-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted text-center md:text-left">
            © {footerConfig.copyrightYear} Scaro Technologies. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-surface border border-surface-border text-text-secondary hover:text-heading hover:border-blue-500/50 flex items-center justify-center transition-colors"
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