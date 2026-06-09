'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), { ssr: false });
const GridScene = dynamic(() => import('@/components/3d/GridScene'), { ssr: false });

export default function HeroSection() {
  const hero2Ref = useRef<HTMLDivElement>(null);
  const hero3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero 2 Services Cards
      gsap.fromTo(
        '.service-card-hero2',
        { y: 80, opacity: 0, rotateY: -15 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: hero2Ref.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Hero 3 Panels
      gsap.fromTo(
        '.panel-item',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: hero3Ref.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero 1 - Fullscreen 3D Landing */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        {/* Gradient overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/80" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary to-transparent z-10" />

        <div className="relative z-20 text-center max-w-6xl px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="tag-pill mb-6"
          >
            🚀 Premium Web Design Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="heading-xl text-gradient mb-4"
          >
            Devduo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl text-accent font-light mb-6 font-display"
          >
            Crafted for Growth
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="text-light/50 max-w-xl mx-auto mb-10 text-lg"
          >
            We build premium websites that convert visitors into loyal customers —
            for local businesses across Chennai.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-xl bg-accent text-primary font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(123,164,208,0.4)] transition-all duration-300 w-full sm:w-auto"
            >
              View Work &rarr;
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl glass border border-accent/20 hover:bg-accent hover:text-primary transition-all duration-300 w-full sm:w-auto font-semibold"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-light/40 text-sm uppercase tracking-widest font-medium">Scroll</span>
          <div className="w-[1px] h-12 bg-light/20 overflow-hidden relative">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              className="w-full h-1/2 bg-accent absolute top-0"
            />
          </div>
        </motion.div>
      </section>

      {/* Hero 2 - Services Preview */}
      <section ref={hero2Ref} className="relative py-32 px-6 overflow-hidden">
        {/* Glow blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <div className="tag-pill">What We Build</div>
            <h2 className="heading-lg">
              Services Built for <br /> <span className="text-gradient">Real Results</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
            {[
              { icon: '⬡', title: 'Business Websites', desc: 'High-converting sites for local businesses' },
              { icon: '◈', title: 'Gym & Fitness', desc: 'Booking, schedules, membership pages' },
              { icon: '◇', title: 'Landing Pages', desc: 'Turn clicks into paying clients' },
              { icon: '◉', title: 'Agency & Portfolio', desc: 'Premium brand identities online' },
            ].map((s, i) => (
              <div key={i} className="service-card-hero2 glass rounded-2xl p-6 glow-border group cursor-pointer" style={{ willChange: 'transform, opacity' }}>
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-2xl mb-6 group-hover:bg-accent/20 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{s.title}</h3>
                <p className="text-light/60 text-sm mb-6 leading-relaxed">{s.desc}</p>
                <div className="text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  Learn more &rarr;
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero 3 - 3D Grid + Stats */}
      <section ref={hero3Ref} className="relative py-32 min-h-[80vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0 opacity-40">
          <GridScene />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="panel-item">
              <div className="tag-pill">Our Approach</div>
            </div>
            <h2 className="panel-item heading-lg max-w-lg leading-tight">
              Built to Perform.<br />
              <span className="text-gradient-accent">Designed to Impress.</span>
            </h2>
            <p className="panel-item text-light/70 text-lg max-w-md leading-relaxed">
              Every pixel, every animation, every line of code is crafted with purpose. 
              We don&apos;t just build websites — we engineer growth tools for local businesses.
            </p>
            <div className="panel-item pt-4">
              <a href="#about" className="px-6 py-3 rounded-xl glass border border-accent/30 text-accent font-semibold hover:bg-accent/10 transition-colors inline-block">
                About Us &rarr;
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { val: '5+', label: 'Projects' },
              { val: '98%', label: 'Satisfied' },
              { val: '3x', label: 'Traffic' },
              { val: '7d', label: 'Delivery' },
            ].map((stat, i) => (
              <div key={i} className="panel-item glass-strong rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-2 aspect-square glow-border">
                <span className="heading-ld text-4xl md:text-5xl font-display font-bold text-gradient">{stat.val}</span>
                <span className="text-light/60 text-sm uppercase tracking-wider font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
