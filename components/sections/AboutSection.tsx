'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

function CountUp({ target, suffix = '', duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const step = Math.ceil(target / (duration * 60)); // 60 fps
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          clearInterval(timer);
          setCount(target);
        } else {
          setCount(current);
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function AboutSection() {
  const barsRef = useRef(null);
  const isBarsInView = useInView(barsRef, { once: true });

  return (
    <section id="about" className="relative section-pad px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full bg-card/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12 md:gap-20">
        
        {/* Row 1: Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <div className="tag-pill">About Devduo</div>
          <div className="h-[1px] flex-grow bg-accent/20 max-w-sm hidden sm:block" />
        </motion.div>

        {/* Row 2: Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Text & Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="heading-lg">
              Two minds. <br />
              <span className="text-gradient">One vision.</span>
            </h2>
            <div className="text-light/70 space-y-4 text-lg leading-relaxed max-w-lg font-body">
              <p>
                Devduo is a Chennai-based web design duo obsessed with one thing —
                making local businesses thrive online. We combine design thinking
                with technical precision to create websites that don&apos;t just look
                good. They work hard.
              </p>
              <p>
                From gyms to boutiques, from restaurants to agencies — we&apos;ve built
                digital homes for businesses across Chennai and beyond, each one
                crafted with purpose, precision, and care.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { title: 'UI/UX Design', desc: 'Beautiful interfaces' },
                { title: 'Web Development', desc: 'Fast modern code' },
                { title: 'SEO Optimization', desc: 'Rank higher locally' },
                { title: 'Brand Identity', desc: 'Stand out online' },
              ].map((skill, i) => (
                <div key={i} className="glass p-5 rounded-2xl hover:border-accent/50 transition-colors">
                  <h4 className="font-display font-semibold mb-1 text-light/90">{skill.title}</h4>
                  <p className="text-sm text-accent/80 font-medium">{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden sm:block"
          >
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 z-20 glass-strong border border-accent/40 rounded-2xl p-4 shadow-2xl backdrop-blur-md"
            >
              <span className="block text-2xl font-bold font-display text-gradient mb-1">5+</span>
              <span className="text-xs uppercase tracking-wider text-light/60 font-semibold">Projects</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-6 z-20 glass-strong border border-accent/40 rounded-2xl p-4 shadow-2xl backdrop-blur-md"
            >
              <span className="block text-2xl font-bold font-display text-gradient mb-1">7d</span>
              <span className="text-xs uppercase tracking-wider text-light/60 font-semibold">Avg Delivery</span>
            </motion.div>

            {/* Main Card */}
            <div className="glass-strong rounded-3xl h-[420px] relative overflow-hidden border-accent/30 shadow-[0_0_40px_rgba(46,94,153,0.2)]">
              {/* Animated Blobs inside card */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                className="absolute -top-20 -left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                className="absolute -bottom-20 -right-20 w-64 h-64 bg-card/20 rounded-full blur-3xl"
              />

              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/40 border border-accent/40 flex items-center justify-center shadow-inner">
                    <span className="text-3xl font-display font-bold text-gradient">D</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl tracking-wide">Devduo</h3>
                    <p className="text-accent/80 text-sm font-medium">Chennai, India</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 my-6">
                  {['Design', 'Development', 'SEO', 'Animations'].map((t) => (
                    <span key={t} className="px-3 py-1 bg-light/5 border border-light/10 rounded-full text-xs font-medium text-light/70 tracking-wide uppercase">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Animated Bars */}
                <div ref={barsRef} className="space-y-4">
                  {[80, 60, 90, 70].map((width, i) => (
                    <div key={i} className="h-3 w-full bg-primary/40 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isBarsInView ? { width: `${width}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: i * 0.2, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-card to-accent rounded-full relative"
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 blur-sm" />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 3: Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { target: 5, suffix: '+', title: 'Projects Completed', desc: 'Websites delivered across industries', icon: '◈' },
            { target: 40, suffix: '+', title: 'Happy Clients', desc: 'Businesses we\'ve helped grow', icon: '◉' },
            { target: 7, suffix: 'd', title: 'Fast Delivery', desc: 'Average project turnaround', icon: '⬡' },
            { target: 3, suffix: 'x', title: 'Traffic Growth', desc: 'Average client traffic increase', icon: '◇' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 glow-border group"
            >
              <div className="text-2xl text-accent mb-4 opacity-50">{stat.icon}</div>
              <h3 className="heading-md font-bold mb-2 text-gradient-accent">
                <CountUp target={stat.target} suffix={stat.suffix} />
              </h3>
              <p className="font-display font-semibold text-light/90 mb-1">{stat.title}</p>
              <p className="text-xs text-light/50">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
