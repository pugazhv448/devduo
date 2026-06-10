'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Working with Devduo was the best decision I made for my gym. They built our 4-branch website in under 10 days and it looks absolutely premium. Members keep complimenting it!",
    name: "Karthik R.",
    business: "IronEdge Gym, OMR",
    avatar: "KR",
    avatarColor: "from-orange-500 to-red-600",
    stars: 5,
  },
  {
    id: 2,
    quote: "My lawyer website got me 3 new inquiry calls in the first week itself. The design is clean, trustworthy, and exactly what I needed to convert visitors to clients.",
    name: "Advocate Priya S.",
    business: "Legal Consultant, Chennai",
    avatar: "PS",
    avatarColor: "from-blue-500 to-indigo-600",
    stars: 5,
  },
  {
    id: 3,
    quote: "The landing page they built for our boutique increased our WhatsApp inquiries by 3x in just 2 months. Clean design, super fast, and mobile-perfect.",
    name: "Anitha K.",
    business: "Bloom Boutique, Anna Nagar",
    avatar: "AK",
    avatarColor: "from-pink-500 to-rose-600",
    stars: 5,
  },
  {
    id: 4,
    quote: "Very professional team. Fast delivery, transparent pricing, and the animations on our agency site genuinely impress every client who visits. Highly recommend!",
    name: "Vijay T.",
    business: "NovaBuild Agency, Bengaluru",
    avatar: "VT",
    avatarColor: "from-teal-500 to-emerald-600",
    stars: 5,
  },
];

interface TestimonialType {
  id: number;
  quote: string;
  name: string;
  business: string;
  avatar: string;
  avatarColor: string;
  stars: number;
}

function TestimonialCard({ t }: { t: TestimonialType }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(cx * -16); // ±8deg
    y.set(cy * -16);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ transformPerspective: 800, rotateX: y, rotateY: x }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-[340px] flex-shrink-0 glass rounded-2xl p-8 glow-border group relative transition-colors duration-300"
    >
      <div className="absolute top-6 left-6 text-6xl text-accent/20 font-serif leading-none italic font-bold">
        &quot;
      </div>
      
      <div className="relative z-10 flex flex-col h-full">
        <p className="text-light/80 italic leading-relaxed mb-6 font-medium mt-4 line-clamp-3">
          &quot;{t.quote}&quot;
        </p>
        
        <div className="mt-auto pt-6 border-t border-accent/10 flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-br ${t.avatarColor} shadow-md`}>
            {t.avatar}
          </div>
          <div>
            <h4 className="font-display font-semibold text-light text-sm tracking-wide">
              {t.name}
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-light/50 font-medium">{t.business}</span>
              <span className="text-accent text-[10px] tracking-[2px]">
                {'★'.repeat(t.stars)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isHovering || !scrollRef.current) return;

    const timer = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;
      
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const cardWidth = 340 + 20; // width + gap
      
      let nextScroll = container.scrollLeft + cardWidth;
      
      if (nextScroll > scrollWidth) {
        nextScroll = 0; // reset to beginning
      }
      
      container.scrollTo({ left: nextScroll, behavior: 'smooth' });
      setActiveIndex(Math.floor(nextScroll / cardWidth));
    }, 3000);

    return () => clearInterval(timer);
  }, [isHovering]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const cardWidth = 340 + 20;
    const scrollPos = scrollRef.current.scrollLeft;
    setActiveIndex(Math.floor(scrollPos / cardWidth));
  };

  const scrollToDot = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = 340 + 20;
    scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    setActiveIndex(index);
  };

  // Duplicate items for visual continuity effect
  const displayTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative section-pad overflow-hidden">
      {/* Background blobs */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <div className="tag-pill">Client Reviews</div>
          <h2 className="heading-lg">
            Clients Love <br /> <span className="text-gradient">What We Build</span>
          </h2>
        </div>
        <div className="flex items-center gap-2 pb-4">
          <div className="text-sm font-semibold text-light/40 uppercase tracking-widest hidden md:block mr-2">
            Swipe left/right
          </div>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="text-accent hidden md:block"
          >
            &rarr;
          </motion.div>
        </div>
      </div>

      <div
        className="w-full relative z-10"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 overflow-x-auto custom-scrollbar-hide px-6 md:px-[calc((100vw-1280px)/2+24px)] pb-12 w-full snap-x snap-mandatory"
          style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
        >
          {displayTestimonials.map((t, i) => (
            <div key={`${t.id}-${i}`} className="snap-center">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToDot(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex % testimonials.length === i
                  ? 'bg-accent w-6 shadow-[0_0_10px_rgba(123,164,208,0.6)]'
                  : 'bg-light/20 hover:bg-light/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
