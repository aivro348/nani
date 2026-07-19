import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Youtube, ArrowRight, Sparkles, Building2, BookOpen, Instagram, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';
import { VisitorCounter } from './VisitorCounter';
import { memo } from 'react';
import { useLocation, useNavigate } from 'react-router';

// Helper for smooth navigation
const useFooterNavigation = () => {
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;
  return (path: string) => {
    if (path.includes('#') && path.split('#')[0] === currentPath) {
      const hash = path.split('#')[1];
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', path);
        return;
      }
    }
    navigate(path);
    if (!path.includes('#')) window.scrollTo({ top: 0, behavior: 'instant' });
  };
};

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Socials = ({ lightMode = false }: { lightMode?: boolean }) => (
  <div className="flex items-center gap-3">
    {[
      { icon: Github, href: 'https://github.com/ScaroTechnologies', hoverClass: 'hover:bg-[#24292e] hover:text-white hover:border-[#24292e]', isCustom: false },
      { icon: Linkedin, href: 'https://linkedin.com/company/scaro', hoverClass: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]', isCustom: false },
      { icon: Twitter, href: 'https://twitter.com/scaro', hoverClass: 'hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2]', isCustom: false },
      { icon: Youtube, href: 'https://www.youtube.com/channel/UCvaxC65BV8YzxAPwtJzSd7A', hoverClass: 'hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]', isCustom: false },
      { icon: Instagram, href: 'https://www.instagram.com/scarotechnologie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', hoverClass: 'hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C]', isCustom: false },
      { icon: WhatsAppIcon, href: 'https://wa.me/919949167458', hoverClass: 'hover:bg-[#25D366] hover:text-white hover:border-[#25D366]', isCustom: true },
      { icon: Mail, href: 'mailto:support@scaro.com', hoverClass: 'hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335]', isCustom: false },
    ].map((social, idx) => (
      <a 
        key={idx} 
        href={social.href}
        target="_blank"
        rel="noopener noreferrer" 
        className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/10 transition-all duration-300 ${
          lightMode 
            ? 'bg-slate-100 text-slate-500 hover:border-transparent' 
            : 'bg-white/5 text-gray-400 hover:border-transparent'
        } ${social.hoverClass}`}
      >
        {social.isCustom ? (
          <social.icon />
        ) : (
          <social.icon className="w-4.5 h-4.5" />
        )}
      </a>
    ))}
  </div>
);

// 1. ACADEMY FOOTER (Education / Default)
const AcademyFooter = () => {
  const nav = useFooterNavigation();
  return (
    <footer className="relative bg-[#0A0506] pt-24 pb-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary-maroon)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <Logo onClick={() => nav('/')} iconSize={120} className="mb-8" />
            <p className="text-gray-400 leading-relaxed mb-8 max-w-sm text-sm">
              Empowering the next generation of engineers with real-world projects, expert mentorship, and cutting-edge curriculum.
            </p>
            <div className="flex flex-col gap-4 text-sm text-gray-400 mb-8 font-medium">
              <span className="flex items-center gap-3"><Mail className="w-4 h-4 text-[var(--primary-gold)]"/> support@scaro.com</span>
              <span className="flex items-center gap-3"><Phone className="w-4 h-4 text-[var(--primary-gold)]"/> +91 9949167458</span>
            </div>
            <Socials />
          </div>
          
          <div className="lg:col-span-3 pt-4">
            <h4 className="text-white font-bold mb-6 flex items-center gap-2 tracking-wider uppercase text-sm">
              <BookOpen className="w-4 h-4 text-[var(--primary-gold)]"/> Learning Paths
            </h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><a href="#" onClick={(e) => { e.preventDefault(); nav('/courses'); }} className="hover:text-[var(--primary-gold)] hover:translate-x-1 transition-all inline-block">Explore Courses</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); nav('/projects'); }} className="hover:text-[var(--primary-gold)] hover:translate-x-1 transition-all inline-block">Virtual Labs & Projects</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); nav('/ai'); }} className="hover:text-[var(--primary-gold)] hover:translate-x-1 transition-all inline-block">AI Masterclasses</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); nav('/blogs'); }} className="hover:text-[var(--primary-gold)] hover:translate-x-1 transition-all inline-block">Student Resources & Blogs</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4 bg-white/[0.02] border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
            <h4 className="text-white font-bold mb-2 text-lg">Join the Academy</h4>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">Get free learning resources, tech updates, and exclusive opportunities delivered to your inbox.</p>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="Enter your email" className="bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:border-[var(--primary-gold)] outline-none transition-colors" />
              <button className="bg-gradient-to-r from-[var(--primary-maroon)] to-[var(--primary-gold)] text-white font-bold py-3.5 rounded-xl hover:shadow-[0_0_20px_rgba(255,183,0,0.3)] transition-all uppercase tracking-wider text-sm flex items-center justify-center gap-2 group">
                Subscribe Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-500 gap-6">
          <p>© 2025 Scaro Technologie. All rights reserved.</p>
          <VisitorCounter />
          <div className="flex gap-6">
            <a href="#" onClick={(e) => { e.preventDefault(); nav('/privacy'); }} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => { e.preventDefault(); nav('/terms'); }} className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// 2. BUSINESS FOOTER (Corporate)
const BusinessFooter = () => {
  const nav = useFooterNavigation();
  return (
    <footer className="bg-white text-slate-800 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-[var(--primary-maroon)]" />
              <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">Scaro Enterprise</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
              Building scalable, AI-driven architectures and cutting-edge software solutions for modern businesses worldwide.
            </p>
            <Socials lightMode={true} />
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-bold text-slate-900 mb-6 text-xs uppercase tracking-widest">Solutions</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" onClick={(e) => { e.preventDefault(); nav('/business#services'); }} className="hover:text-[var(--primary-maroon)] transition-colors">Custom Software</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); nav('/business#services'); }} className="hover:text-[var(--primary-maroon)] transition-colors">AI Integrations</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); nav('/business#services'); }} className="hover:text-[var(--primary-maroon)] transition-colors">Cloud Architecture</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); nav('/business#services'); }} className="hover:text-[var(--primary-maroon)] transition-colors">Mobile Apps</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-slate-900 mb-6 text-xs uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" onClick={(e) => { e.preventDefault(); nav('/business#team'); }} className="hover:text-[var(--primary-maroon)] transition-colors">Our Team</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); nav('/business#projects'); }} className="hover:text-[var(--primary-maroon)] transition-colors">Case Studies</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); nav('/privacy'); }} className="hover:text-[var(--primary-maroon)] transition-colors">Legal & Privacy</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-6 text-xs uppercase tracking-widest flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[var(--primary-maroon)]" /> Global Headquarters
            </h4>
            <div className="space-y-4 text-sm text-slate-600 mb-8 font-medium">
              <p className="flex items-center gap-3"><Mail className="w-4 h-4 text-slate-400"/> hr@scaro.in</p>
              <p className="flex items-center gap-3"><Phone className="w-4 h-4 text-slate-400"/> +91 81067 95810</p>
              <p className="flex items-start gap-3"><MapPin className="w-4 h-4 text-slate-400 mt-1 shrink-0"/> <span>Ground Floor, Renigunta Rd, near Indian Bank, Chadalawada Nagar, Tirupati, Daminedu, Andhra Pradesh 517506</span></p>
            </div>
            <button aria-label="Action button" onClick={() => nav('/business#contact')} className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-[var(--primary-maroon)] hover:shadow-lg transition-all text-xs uppercase tracking-wider">
              Start a Project
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 text-xs text-slate-400">
          <p>© 2026 Scaro Technologie. Enterprise Solutions.</p>
          <div className="mt-4 md:mt-0 font-medium">ISO 9001:2015 Certified Architecture</div>
        </div>
      </div>
    </footer>
  );
};

// 3. AI ACADEMY FOOTER (Dark/Grid)
const AIFooter = () => {
  const nav = useFooterNavigation();
  return (
    <footer className="relative bg-[#020202] pt-24 pb-12 overflow-hidden border-t border-[var(--primary-gold)]/20">
      {/* Grid background for AI aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-[var(--primary-gold)]" />
              <span className="text-3xl font-black text-white tracking-tight">Scaro <span className="text-[var(--primary-gold)]">AI</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              The ultimate directory and academy for mastering Artificial Intelligence. Discover trending tools, build autonomous agents, and automate the future.
            </p>
            <Socials />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 flex-1 w-full md:w-auto md:ml-12 pt-4">
            <div>
              <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest text-[var(--primary-gold)]">Directory</h4>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Developer Tools</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Generative Art</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Business Automation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest text-[var(--primary-gold)]">Academy</h4>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li><a href="#" onClick={(e) => { e.preventDefault(); nav('/ai'); }} className="hover:text-white transition-colors">AI Cohorts</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); nav('/blogs'); }} className="hover:text-white transition-colors">Prompt Guides</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); nav('/courses'); }} className="hover:text-white transition-colors">Agent Tutorials</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1 border-l border-white/10 pl-12 hidden md:block">
              <h4 className="text-white font-bold mb-4 text-sm">Have a tool?</h4>
              <p className="text-xs text-gray-500 mb-6">Submit your AI tool to reach our directory of 10,000+ engineers.</p>
              <button aria-label="Action button" className="w-full bg-[var(--primary-gold)]/10 text-[var(--primary-gold)] border border-[var(--primary-gold)]/30 hover:bg-[var(--primary-gold)] hover:text-black font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-sm">
                <Sparkles className="w-4 h-4" />
                Submit Tool
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-600">
          <p>© 2026 Scaro AI. Empowering the intelligent web.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-medium">
            <a href="#" onClick={(e) => { e.preventDefault(); nav('/privacy'); }} className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => { e.preventDefault(); nav('/terms'); }} className="hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Footer = memo(function Footer() {
  return <AcademyFooter />;
});