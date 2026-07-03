import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function BusinessContact() {
  return (
    <section id="contact" className="py-32 px-4 max-w-7xl mx-auto bg-page-bg">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <div className="w-16 h-1 bg-[var(--primary-maroon)] dark:bg-[var(--primary-gold)] mb-8 rounded-full" />
          <h2 className="text-sm font-black text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] uppercase tracking-[0.2em] mb-4">Contact Us</h2>
          <h3 className="text-4xl md:text-5xl font-black text-heading mb-6 tracking-tight">Let's Discuss Your Project</h3>
          <p className="text-xl text-text-secondary leading-relaxed mb-12">
            Get in touch with our enterprise team to see how we can accelerate your digital transformation.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] group-hover:scale-110 transition-transform shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-heading mb-1">Email Us</h4>
                <p className="text-text-muted">hr@scaro.in</p>
                <p className="text-text-muted">support@scaro.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] group-hover:scale-110 transition-transform shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-heading mb-1">Call Us</h4>
                <p className="text-text-muted">+91 81067 95810</p>
                <p className="text-text-muted">+91 73530 77676</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold text-heading mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-heading mb-2">Name *</label>
                  <input type="text" className="w-full px-4 py-3 bg-page-bg border border-border rounded-xl focus:ring-2 focus:ring-[var(--primary-maroon)] outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-heading mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-3 bg-page-bg border border-border rounded-xl focus:ring-2 focus:ring-[var(--primary-maroon)] outline-none" placeholder="Your company" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-heading mb-2">Email Address *</label>
                <input type="email" className="w-full px-4 py-3 bg-page-bg border border-border rounded-xl focus:ring-2 focus:ring-[var(--primary-maroon)] outline-none" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-heading mb-2">Project Details *</label>
                <textarea rows={5} className="w-full px-4 py-3 bg-page-bg border border-border rounded-xl focus:ring-2 focus:ring-[var(--primary-maroon)] outline-none" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-[var(--primary-maroon)] text-white font-bold rounded-xl hover:bg-[var(--dark-maroon)] transition-colors text-lg flex items-center justify-center gap-2">
                Send Inquiry <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
