'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Business Website',
    desc: 'Professional, high-converting websites designed to represent your brand and attract customers in Chennai.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Contact Forms'],
    price: '₹4,999',
    icon: '🌐',
  },
  {
    title: 'Gym & Fitness',
    desc: 'Dynamic fitness sites with class schedules, membership info, and trainer profiles that drive sign-ups.',
    features: ['Class Schedules', 'Booking Integration', 'Trainer Profiles', 'Gallery'],
    price: '₹5,999',
    icon: '💪',
  },
  {
    title: 'Landing Page',
    desc: 'Laser-focused single pages built to convert ad traffic into real leads and paying customers fast.',
    features: ['A/B Ready', 'Lead Capture', 'Ultra Fast', 'Analytics Ready'],
    price: '₹2,999',
    icon: '🚀',
  },
  {
    title: 'Portfolio Website',
    desc: 'Stunning portfolio sites for photographers, designers, and freelancers to showcase their best work.',
    features: ['Gallery Grid', 'Smooth Animations', 'Case Studies', 'Contact Form'],
    price: '₹3,999',
    icon: '🎨',
  },
  {
    title: 'Agency Website',
    desc: 'Bold agency sites that communicate credibility, showcase services, and generate qualified business leads.',
    features: ['Team Section', 'Services Page', 'Case Studies', 'Blog Ready'],
    price: '₹6,999',
    icon: '✦',
  },
  {
    title: 'Professional/Lawyer',
    desc: 'Clean, trustworthy websites for advocates, consultants, and professionals that build credibility.',
    features: ['Services Listed', 'FAQ Section', 'Testimonials', 'Booking Form'],
    price: '₹3,999',
    icon: '⚖️',
  },
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="relative section-pad overflow-hidden" ref={containerRef}>
      {/* Background glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="tag-pill">What We Offer</div>
          <h2 className="heading-lg">
            Everything Your Business <br /> <span className="text-gradient">Needs Online</span>
          </h2>
          <p className="text-light/70 text-lg max-w-lg mx-auto">
            From concept to launch in days — not months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card glass rounded-2xl p-8 glow-border group flex flex-col h-full cursor-pointer overflow-hidden relative"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              <h3 className="font-display font-bold text-2xl mb-3">{service.title}</h3>
              <p className="text-light/60 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {service.features.map((feature, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 bg-light/5 border border-light/10 rounded-full text-xs font-semibold text-accent/80"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover Price Tag */}
              <div className="border-t border-accent/10 pt-4 mt-auto flex items-center justify-between">
                <span className="text-light/50 text-sm uppercase tracking-wider font-semibold group-hover:text-accent transition-colors">
                  Starting from
                </span>
                <span className="font-display font-bold text-xl text-gradient-accent flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                  {service.price} <span className="text-sm">↗</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
