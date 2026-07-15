import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Shield, GraduationCap } from 'lucide-react';
import { useState, memo } from 'react';

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'support@scaro.com',
    sub: 'Online support 24/7',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 9949167458',
    sub: 'Mon - Sat, 9am - 6pm',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Tirupati, AP, India',
    sub: 'Tech Hub, Tirupati',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
];

export const EducationContact = memo(function EducationContact() {
  const [formState, setFormState] = useState({ name: '', email: '', course: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', course: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact-section" className="py-24 bg-page-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B4F8A03_1px,transparent_1px),linear-gradient(to_bottom,#0B4F8A03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6"
          >
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-bold text-blue-400 uppercase tracking-wider">Student Support</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-heading mb-6 tracking-tight"
          >
            Have Questions About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Courses?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-muted leading-relaxed"
          >
            Whether you need help choosing the right program, want to ask about internships, or need placement assistance — we're here to help.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-6">
            {CONTACT_INFO.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card-bg border border-card-border p-5 rounded-2xl group hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all flex items-center gap-5"
              >
                <div className={`p-4 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-heading">{item.value}</p>
                  <p className="text-xs text-text-secondary mt-0.5">{item.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Extra Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-blue-900/10 to-cyan-900/10 border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden mt-8"
            >
              <h3 className="text-lg font-bold text-heading mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                Quick Response
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Our academic counselors typically respond within 2-4 hours during business days.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-card-bg border border-card-border p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />
              
              <h3 className="text-2xl font-bold text-heading mb-6">Drop a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-text-secondary mb-1.5 ml-1">Your Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-surface border border-surface-border rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-heading text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-text-secondary mb-1.5 ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="rahul@example.com"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-surface border border-surface-border rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-heading text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-secondary mb-1.5 ml-1">Interested Course / Program</label>
                  <select
                    required
                    value={formState.course}
                    onChange={e => setFormState({ ...formState, course: e.target.value })}
                    className="w-full px-4 py-3.5 bg-surface border border-surface-border rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-heading text-sm transition-all appearance-none"
                  >
                    <option value="" disabled>Select a course...</option>
                    <option value="python">Python Programming Mastery</option>
                    <option value="java">Java Full Stack</option>
                    <option value="data-science">Data Science & ML</option>
                    <option value="frontend">Frontend Web Dev</option>
                    <option value="iot">IoT & Embedded Systems</option>
                    <option value="vlsi">VLSI Design</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-secondary mb-1.5 ml-1">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help you achieve your career goals?"
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3.5 bg-surface border border-surface-border rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-heading text-sm transition-all resize-none"
                  />
                </div>

                <button aria-label="Action button"
                  disabled={isSubmitting || submitted}
                  type="submit"
                  className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all ${
                    submitted 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)] active:scale-[0.98]'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : submitted ? (
                    <>Message Sent Successfully!</>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});
