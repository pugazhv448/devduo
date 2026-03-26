'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "24x7 Fitness Studio",
    category: "Gym",
    client: "24x7 Fitness Studio",
    location: "OMR, Chennai",
    description: "A high-energy gym website built for 24x7 Fitness Studio — featuring class schedules, trainer profiles, 4-branch location pages, membership inquiry forms, and a mobile-first dark design.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    image_gradient: "from-red-900/60 via-orange-900/40 to-gray-900",
    image: "/images/portfolio/24x7 gym.png",
    icon: "💪",
    url: "https://24x7-fitness-studio.vercel.app",
  },
  {
    id: 2,
    title: "Advocate Anuj Ranjan",
    category: "Business",
    client: "Advocate Anuj Ranjan",
    location: "Delhi",
    description: "A professional legal portfolio for a Delhi High Court advocate. Features practice areas, client testimonials, FAQ accordion, free consultation form, and a clean trustworthy layout.",
    tech: ["Astro", "Tailwind CSS", "AOS Animations"],
    image_gradient: "from-slate-800/80 via-blue-900/40 to-gray-900",
    image: "/images/portfolio/anuj.png",
    icon: "⚖️",
    url: "https://anujranjanwebsite.vercel.app",
  },
  {
    id: 3,
    title: "Eternix Symposium",
    category: "Agency",
    client: "Sri Sairam Engineering College",
    location: "Chennai",
    description: "A dark-themed event symposium website for Eternix'25 — EIE Department. Countdown timer, events grid, schedule page, team section, and animated particle background.",
    tech: ["WordPress", "Custom CSS", "JavaScript"],
    image_gradient: "from-purple-900/60 via-blue-900/40 to-gray-900",
    image: "/images/portfolio/eternix.png",
    icon: "⚡",
    url: "https://eternix.in",
  },
  {
    id: 4,
    title: "Wayanad Wild Ways",
    category: "Landing Page",
    client: "Wayanad Wild Ways",
    location: "Wayanad, Kerala",
    description: "Explore Wayanad with Wild Ways. A cinematic escape into the heart of nature. Handpicked stays, sacred trails, and authentic Kerala soul.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image_gradient: "from-green-900/60 via-emerald-900/40 to-gray-900",
    image: "/images/portfolio/wayanad-wildways.png",
    icon: "🏔️",
    url: "#",
  },
  {
    id: 5,
    title: "Bloom Boutique",
    category: "Landing Page",
    client: "Bloom Fashion",
    location: "Anna Nagar, Chennai",
    description: "A sleek e-commerce landing page for a Chennai fashion boutique. Features product showcases, WhatsApp order CTA, Instagram feed embed, and a vibrant pastel aesthetic.",
    tech: ["Next.js", "Tailwind CSS", "GSAP"],
    image_gradient: "from-pink-900/60 via-rose-900/40 to-gray-900",
    image: "/images/portfolio/bloom.png",
    icon: "🌸",
    url: "#",
  },
  {
    id: 7,
    title: "Priya Photography",
    category: "Portfolio",
    client: "Priya S. Photography",
    location: "Chennai",
    description: "A minimal, stunning portfolio for a Chennai wedding photographer. Masonry gallery, full-screen lightbox, pricing packages, client testimonials, and a clean inquiry form.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image_gradient: "from-amber-900/60 via-yellow-900/40 to-gray-900",
    image: "/images/portfolio/priya.png",
    icon: "📸",
    url: "#",
  },
];

interface ProjectType {
  id: number;
  title: string;
  category: string;
  client: string;
  location: string;
  description: string;
  tech: string[];
  image_gradient: string;
  image: string;
  icon: string;
  url: string;
}

const categories = ['All', 'Business', 'Gym', 'Portfolio', 'Agency', 'Landing Page'];

function ProjectCard({ project, onClick }: { project: ProjectType; onClick: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(cx * 15);
    y.set(cy * 15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      style={{ transformPerspective: 800, rotateX: y, rotateY: x }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer group glass border border-accent/20"
    >
      {/* Background image instead of gradient */}
      <Image 
        src={project.image} 
        alt={project.title} 
        fill 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-top transition-transform duration-700 group-hover:scale-110 opacity-70"
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${project.image_gradient} mix-blend-overlay opacity-60 z-0 transition-opacity duration-500 group-hover:opacity-40`} />

      {/* Category Tag Top Left */}
      <div className="absolute top-4 left-4 z-20">
        <span className="px-3 py-1 bg-primary/80 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider text-light/90 border border-light/10 flex items-center gap-2">
          {project.icon} {project.category}
        </span>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-x-0 bottom-0 pt-24 pb-6 px-6 bg-gradient-to-t from-primary/95 via-primary/80 to-transparent z-10 flex flex-col justify-end">
        <h3 className="heading-md font-display font-bold text-light mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-light/70 line-clamp-2 mb-4 leading-relaxed font-body opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 2).map((t: string) => (
            <span key={t} className="px-2 py-[2px] rounded-md bg-light/10 text-[10px] font-semibold text-light/90 uppercase tracking-wider">
              {t}
            </span>
          ))}
          {project.tech.length > 2 && (
            <span className="px-2 py-[2px] rounded-md bg-light/10 text-[10px] font-semibold text-light/90 uppercase tracking-wider">
              +{project.tech.length - 2}
            </span>
          )}
        </div>
      </div>
      
      {/* Glow Border Effect */}
      <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 rounded-3xl transition-colors duration-500 z-20 pointer-events-none mix-blend-overlay" />
    </motion.div>
  );
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="relative section-pad overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="tag-pill">Our Work</div>
          <h2 className="heading-lg">
            Projects That <br /> <span className="text-gradient">Speak for Themselves</span>
          </h2>
          <p className="text-light/70 text-lg max-w-lg mx-auto">
            Real websites, real clients, real results.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-accent text-primary shadow-[0_0_15px_rgba(123,164,208,0.4)]'
                  : 'glass border border-accent/20 text-light/70 hover:text-accent hover:border-accent/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-primary/90"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-5xl max-h-[90vh] glass-strong border border-accent/30 rounded-3xl overflow-hidden flex flex-col md:flex-row relative flex-shrink-0"
              style={{ maxHeight: '90vh' }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-[110] w-10 h-10 rounded-full bg-primary/50 backdrop-blur-md flex items-center justify-center text-light/70 hover:text-accent hover:bg-black/50 transition-colors"
              >
                <span className="text-xl leading-none">&times;</span>
              </button>

              {/* Modal Image */}
              <div className={`w-full md:w-[55%] aspect-video md:aspect-auto relative flex-shrink-0 bg-primary`}>
                <Image 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover object-top opacity-80" 
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.image_gradient} mix-blend-overlay opacity-40 z-10 pointer-events-none`} />
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-[45%] p-8 overflow-y-auto flex flex-col custom-scrollbar">
                <div className="flex items-center gap-2 text-accent/80 text-sm font-semibold tracking-wider font-display mb-4">
                  <span>{selectedProject.icon}</span>
                  <span className="uppercase">{selectedProject.category}</span>
                </div>
                
                <h2 className="heading-md font-display font-bold text-gradient mb-2">
                  {selectedProject.title}
                </h2>
                
                <div className="flex items-center gap-2 text-light/50 text-sm mb-6 pb-6 border-b border-light/10">
                  <span>{selectedProject.client}</span>
                  <span>•</span>
                  <span>📍 {selectedProject.location}</span>
                </div>
                
                <p className="text-light/80 leading-relaxed mb-8 flex-grow">
                  {selectedProject.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-widest text-light/40 font-semibold mb-3">Tech Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t: string) => (
                      <span key={t} className="px-3 py-1 bg-light/5 border border-light/10 rounded-lg text-xs font-semibold text-accent/90">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 mt-auto">
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-4 rounded-xl bg-accent text-primary text-center font-bold shadow-[0_4px_20px_rgba(123,164,208,0.3)] hover:scale-[1.02] hover:shadow-[0_4px_30px_rgba(123,164,208,0.5)] transition-all duration-300"
                  >
                    🌐 Visit Live Site &rarr;
                  </a>
                  <a
                    href="https://wa.me/917894561230"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-4 rounded-xl bg-[#25D366] text-white text-center font-bold shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:scale-[1.02] hover:shadow-[0_4px_30px_rgba(37,211,102,0.5)] transition-all duration-300"
                  >
                    💬 Chat on WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
