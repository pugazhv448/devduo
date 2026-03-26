'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
      
      // Reset back to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative section-pad px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30vw] h-[30vw] rounded-full bg-card/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="tag-pill">Get In Touch</div>
          <h2 className="heading-lg">
            Let&apos;s Build <br /> <span className="text-gradient">Something Great</span>
          </h2>
          <p className="text-light/70 text-lg max-w-lg mx-auto">
            Tell us about your project — we&apos;ll get back within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT — Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <p className="text-light/80 text-lg leading-relaxed max-w-md">
              We work with local businesses across Chennai and beyond. Whether you need a new website or want to upgrade an existing one — we&apos;re ready.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              {[
                { icon: '📍', title: 'Chennai, India', desc: 'Based here, working everywhere' },
                { icon: '📧', title: 'hello@devduo.in', desc: 'Drop us an email anytime' },
                { icon: '⚡', title: '7-Day Delivery', desc: 'Fast turnaround, no compromise' },
              ].map((info, i) => (
                <div key={i} className="glass rounded-2xl p-6 flex items-center gap-6 hover:border-accent/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-xl shadow-inner">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-light/90 text-[17px] mb-1">{info.title}</h4>
                    <span className="text-accent/80 text-sm font-medium">{info.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-accent/10 flex items-center gap-8">
              <a href="https://instagram.com/devduo" target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-accent font-semibold transition-colors uppercase tracking-wider text-sm">
                Instagram
              </a>
              <a href="https://linkedin.com/company/devduo" target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-accent font-semibold transition-colors uppercase tracking-wider text-sm">
                LinkedIn
              </a>
              <a href="https://wa.me/917894561230" target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-[#25D366] font-semibold transition-colors uppercase tracking-wider text-sm flex items-center gap-1">
                WhatsApp ↗
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Form Glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />

            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input peer pt-8 pb-3"
                    placeholder=" "
                  />
                  <label className="absolute left-[1.25rem] top-6 text-light/40 text-sm transition-all peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-accent pointer-events-none">
                    Your Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input peer pt-8 pb-3"
                    placeholder=" "
                  />
                  <label className="absolute left-[1.25rem] top-6 text-light/40 text-sm transition-all peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-accent pointer-events-none">
                    Phone Number
                  </label>
                </div>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input peer pt-8 pb-3"
                  placeholder=" "
                />
                <label className="absolute left-[1.25rem] top-6 text-light/40 text-sm transition-all peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-accent pointer-events-none">
                  Email Address
                </label>
              </div>

              <div className="relative group">
                <select
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="form-input peer pt-8 pb-3 appearance-none bg-transparent"
                >
                  <option value="" disabled className="text-gray-900">Select Project Type...</option>
                  <option value="Business Website" className="text-gray-900">Business Website</option>
                  <option value="Gym Website" className="text-gray-900">Gym Website</option>
                  <option value="Landing Page" className="text-gray-900">Landing Page</option>
                  <option value="Portfolio Website" className="text-gray-900">Portfolio Website</option>
                  <option value="Agency Website" className="text-gray-900">Agency Website</option>
                  <option value="Other" className="text-gray-900">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-accent">▼</div>
                <label className="absolute left-[1.25rem] top-2 text-accent text-xs pointer-events-none">
                  Project Type
                </label>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input peer pt-8 pb-3 resize-none"
                  placeholder=" "
                ></textarea>
                <label className="absolute left-[1.25rem] top-6 text-light/40 text-sm transition-all peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-accent pointer-events-none">
                  Tell us about your goals...
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full h-14 bg-accent text-primary rounded-xl font-bold font-display shadow-[0_0_20px_rgba(123,164,208,0.2)] hover:shadow-[0_0_30px_rgba(123,164,208,0.5)] transform hover:scale-[1.02] transition-all disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : status === 'success' ? (
                  <span className="flex items-center gap-2 text-green-900">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Message sent! We&apos;ll WhatsApp you shortly.
                  </span>
                ) : (
                  <span>Send Message &rarr;</span>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-accent/10">
              <a
                href="https://wa.me/917894561230"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-14 bg-[#25D366] text-white rounded-xl font-bold font-display shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transform hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0003 2.01636C6.47198 2.01636 1.98438 6.50396 1.98438 12.0323C1.98438 13.7997 2.44391 15.4593 3.24867 16.8951L2.03154 21.3436L6.58694 20.1481C7.98687 20.8872 9.58572 21.2894 11.2828 21.2894C11.5204 21.2894 11.758 21.2818 11.9955 21.2665C17.5255 21.2665 22.0146 16.7789 22.0146 11.249C22.0146 5.72068 17.527 1.23308 11.9987 1.23308V2.01636H12.0003ZM16.8152 14.8878C16.6111 15.4608 15.8078 15.9388 15.176 16.0827C14.7171 16.1843 14.0622 16.2625 11.4116 15.1633C8.42159 13.9213 6.49132 10.8711 6.33703 10.6669C6.18274 10.4627 5.06834 8.98394 5.06834 7.45326C5.06834 5.92257 5.84961 5.17725 6.16738 4.8504M6.48673 4.5427C6.6908 4.33842 7.04283 4.23467 7.35122 4.23467C7.45326 4.23467 7.54512 4.23943 7.625 4.24436C7.81893 4.25458 7.91557 4.2699 8.0435 4.57628C8.19662 4.95423 8.57467 5.86221 8.61494 5.94396C8.6552 6.0257 8.71536 6.14815 8.6552 6.27076C8.59505 6.39336 8.5447 6.46467 8.44265 6.58694C8.34061 6.70938 8.24874 6.79153 8.1467 6.924C8.04466 7.05648 7.93297 7.1895 8.05477 7.39414C8.17658 7.59877 8.57467 8.25203 9.1666 8.78208C9.93233 9.46654 10.5546 9.68114 10.7797 9.77256C11.0048 9.86399 11.1378 9.85437 11.2705 9.71158C11.403 9.5688 11.832 9.06869 11.9753 8.8644C12.1185 8.66012 12.2619 8.68007 12.4552 8.76182C12.6485 8.84357 13.6749 9.35417 13.8887 9.45621C14.1026 9.55826 14.246 9.60942 14.2964 9.69116C14.3467 9.77291 14.3467 10.1504 14.1432 10.7233V10.7233" />
                </svg>
                💬 Or chat directly on WhatsApp &rarr;
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
