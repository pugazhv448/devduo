'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (window.lenis) {
      window.lenis.scrollTo(target, { offset: -80 });
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300 ${
          scrolled ? 'glass-strong shadow-lg' : 'glass'
        }`}
      >
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, '#home')}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center border border-accent/40 group-hover:bg-accent/30 transition-colors">
            <span className="font-display font-bold text-accent">D</span>
          </div>
          <span className="font-display font-bold text-lg text-light tracking-wide group-hover:text-accent transition-colors">
            Devduo
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-light/80 text-sm font-medium hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/917339097430"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12.0003 2.01636C6.47198 2.01636 1.98438 6.50396 1.98438 12.0323C1.98438 13.7997 2.44391 15.4593 3.24867 16.8951L2.03154 21.3436L6.58694 20.1481C7.98687 20.8872 9.58572 21.2894 11.2828 21.2894C17.5255 21.2665 22.0146 16.7789 22.0146 11.249C22.0146 5.72068 17.527 1.23308 11.9987 1.23308V2.01636H12.0003ZM16.8152 14.8878C16.6111 15.4608 15.8078 15.9388 15.176 16.0827C14.7171 16.1843 14.0622 16.2625 11.4116 15.1633C8.42159 13.9213 6.49132 10.8711 6.33703 10.6669C6.18274 10.4627 5.06834 8.98394 5.06834 7.45326C5.06834 5.92257 5.84961 5.17725 6.16738 4.8504M6.48673 4.5427C6.6908 4.33842 7.04283 4.23467 7.35122 4.23467C7.45326 4.23467 7.54512 4.23943 7.625 4.24436C7.81893 4.25458 7.91557 4.2699 8.0435 4.57628C8.19662 4.95423 8.57467 5.86221 8.61494 5.94396C8.6552 6.0257 8.71536 6.14815 8.6552 6.27076C8.59505 6.39336 8.5447 6.46467 8.44265 6.58694C8.34061 6.70938 8.24874 6.79153 8.1467 6.924C8.04466 7.05648 7.93297 7.1895 8.05477 7.39414C8.17658 7.59877 8.57467 8.25203 9.1666 8.78208C9.93233 9.46654 10.5546 9.68114 10.7797 9.77256C11.0048 9.86399 11.1378 9.85437 11.2705 9.71158C11.403 9.5688 11.832 9.06869 11.9753 8.8644C12.1185 8.66012 12.2619 8.68007 12.4552 8.76182C12.6485 8.84357 13.6749 9.35417 13.8887 9.45621C14.1026 9.55826 14.246 9.60942 14.2964 9.69116C14.3467 9.77291 14.3467 10.1504 14.1432 10.7233V10.7233" />
            </svg>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="px-5 py-2 rounded-full border border-accent/30 text-accent text-sm font-semibold hover:bg-accent hover:text-primary transition-colors"
          >
            Get Started &rarr;
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[6px] w-8 h-8 justify-center items-center relative z-50 focus:outline-none focus:ring-2 focus:ring-accent rounded-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <motion.span
            animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-light block origin-center"
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-[2px] bg-light block"
          />
          <motion.span
            animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-light block origin-center"
          />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-4 right-4 bg-primary/95 backdrop-blur-3xl rounded-2xl p-6 flex flex-col gap-6 lg:hidden shadow-2xl border border-accent/30 z-[100]"
            >
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-light text-xl font-display font-semibold hover:text-accent"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/917339097430"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-6 py-3 rounded-xl bg-[#25D366]/10 text-[#25D366] text-center font-semibold hover:bg-[#25D366] hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12.0003 2.01636C6.47198 2.01636 1.98438 6.50396 1.98438 12.0323C1.98438 13.7997 2.44391 15.4593 3.24867 16.8951L2.03154 21.3436L6.58694 20.1481C7.98687 20.8872 9.58572 21.2894 11.2828 21.2894C17.5255 21.2665 22.0146 16.7789 22.0146 11.249C22.0146 5.72068 17.527 1.23308 11.9987 1.23308V2.01636H12.0003ZM16.8152 14.8878C16.6111 15.4608 15.8078 15.9388 15.176 16.0827C14.7171 16.1843 14.0622 16.2625 11.4116 15.1633C8.42159 13.9213 6.49132 10.8711 6.33703 10.6669C6.18274 10.4627 5.06834 8.98394 5.06834 7.45326C5.06834 5.92257 5.84961 5.17725 6.16738 4.8504M6.48673 4.5427C6.6908 4.33842 7.04283 4.23467 7.35122 4.23467C7.45326 4.23467 7.54512 4.23943 7.625 4.24436C7.81893 4.25458 7.91557 4.2699 8.0435 4.57628C8.19662 4.95423 8.57467 5.86221 8.61494 5.94396C8.6552 6.0257 8.71536 6.14815 8.6552 6.27076C8.59505 6.39336 8.5447 6.46467 8.44265 6.58694C8.34061 6.70938 8.24874 6.79153 8.1467 6.924C8.04466 7.05648 7.93297 7.1895 8.05477 7.39414C8.17658 7.59877 8.57467 8.25203 9.1666 8.78208C9.93233 9.46654 10.5546 9.68114 10.7797 9.77256C11.0048 9.86399 11.1378 9.85437 11.2705 9.71158C11.403 9.5688 11.832 9.06869 11.9753 8.8644C12.1185 8.66012 12.2619 8.68007 12.4552 8.76182C12.6485 8.84357 13.6749 9.35417 13.8887 9.45621C14.1026 9.55826 14.246 9.60942 14.2964 9.69116C14.3467 9.77291 14.3467 10.1504 14.1432 10.7233V10.7233" />
                </svg>
                WhatsApp Us
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
