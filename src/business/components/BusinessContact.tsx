import { motion } from 'motion/react';
import { Mail, Phone, Send, MapPin } from 'lucide-react';

export function BusinessContact() {
  return (
    <section id="contact" className="py-32 px-4 bg-page-bg relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary-gold)]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--primary-maroon)]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-gradient-to-r from-[var(--primary-gold)] to-transparent" />
              <span className="text-sm font-bold text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] uppercase tracking-[0.2em]">Get In Touch</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-heading mb-6 tracking-tight">
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-maroon)] to-[var(--primary-gold)]">Extraordinary</span>
            </h3>
            <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-lg font-light">
              Get in touch with our enterprise team to see how we can accelerate your digital transformation.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: Mail, title: 'Email Us', lines: ['hr@scaro.in', 'support@scaro.com'] },
                { icon: Phone, title: 'Call Us', lines: ['+91 81067 95810', '+91 73530 77676'] },
                { icon: MapPin, title: 'Visit Us', lines: ['Hyderabad, India'] },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] group-hover:bg-[var(--primary-maroon)] group-hover:text-white dark:group-hover:bg-[var(--primary-gold)] dark:group-hover:text-[#0A0506] group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-heading mb-1">{item.title}</h4>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-text-muted font-medium">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              {/* Glowing border */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-[var(--primary-gold)]/20 via-[var(--primary-maroon)]/10 to-transparent rounded-[2rem] blur-sm" />
              
              <div className="relative bg-surface border border-border p-8 md:p-12 rounded-[2rem] shadow-xl overflow-hidden">
                {/* Top accent gradient */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary-maroon)] via-[var(--primary-gold)] to-[var(--primary-maroon)]" />
                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--primary-gold)]/5 rounded-full blur-[60px]" />
                
                <h3 className="text-3xl font-black text-heading mb-2 relative z-10">Send an Inquiry</h3>
                <p className="text-text-muted mb-8 relative z-10">Fill out the form and our team will get back within 24 hours.</p>
                
                <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-heading mb-2">Full Name <span className="text-[var(--primary-gold)]">*</span></label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-4 bg-page-bg border border-border rounded-xl focus:ring-2 focus:ring-[var(--primary-gold)]/50 focus:border-[var(--primary-gold)] outline-none transition-all font-medium text-page-fg" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-heading mb-2">Company</label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-4 bg-page-bg border border-border rounded-xl focus:ring-2 focus:ring-[var(--primary-gold)]/50 focus:border-[var(--primary-gold)] outline-none transition-all font-medium text-page-fg" 
                        placeholder="Acme Corp" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-heading mb-2">Work Email <span className="text-[var(--primary-gold)]">*</span></label>
                    <input 
                      type="email" 
                      className="w-full px-5 py-4 bg-page-bg border border-border rounded-xl focus:ring-2 focus:ring-[var(--primary-gold)]/50 focus:border-[var(--primary-gold)] outline-none transition-all font-medium text-page-fg" 
                      placeholder="john@acmecorp.com" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-heading mb-2">Project Details <span className="text-[var(--primary-gold)]">*</span></label>
                    <textarea 
                      rows={4} 
                      className="w-full px-5 py-4 bg-page-bg border border-border rounded-xl focus:ring-2 focus:ring-[var(--primary-gold)]/50 focus:border-[var(--primary-gold)] outline-none transition-all font-medium resize-none text-page-fg" 
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-4 bg-gradient-to-r from-[var(--primary-maroon)] to-[var(--dark-maroon)] text-white font-bold rounded-xl hover:shadow-[0_0_40px_-10px_var(--primary-maroon)] transition-all text-lg flex items-center justify-center gap-2 group"
                  >
                    Submit Inquiry 
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
