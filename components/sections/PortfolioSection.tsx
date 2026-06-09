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
    title: "Neilgen Housing",
    category: "Business",
    client: "Neilgen Housing",
    location: "Chennai",
    description: "A premium real estate website featuring strategic plot locations, lifestyle-driven amenities, and clear legal transparency for buyers.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image_gradient: "from-blue-900/60 via-cyan-900/40 to-gray-900",
    image: "/images/portfolio/neilgen.png",
    icon: "🏢",
    url: "https://neilgenhousing.com/",
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
                    href="https://wa.me/917339097430"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-4 rounded-xl bg-[#25D366] text-white text-center font-bold shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:scale-[1.02] hover:shadow-[0_4px_30px_rgba(37,211,102,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.0003 2.01636C6.47198 2.01636 1.98438 6.50396 1.98438 12.0323C1.98438 13.7997 2.44391 15.4593 3.24867 16.8951L2.03154 21.3436L6.58694 20.1481C7.98687 20.8872 9.58572 21.2894 11.2828 21.2894C17.5255 21.2665 22.0146 16.7789 22.0146 11.249C22.0146 5.72068 17.527 1.23308 11.9987 1.23308V2.01636H12.0003ZM16.8152 14.8878C16.6111 15.4608 15.8078 15.9388 15.176 16.0827C14.7171 16.1843 14.0622 16.2625 11.4116 15.1633C8.42159 13.9213 6.49132 10.8711 6.33703 10.6669C6.18274 10.4627 5.06834 8.98394 5.06834 7.45326C5.06834 5.92257 5.84961 5.17725 6.16738 4.8504M6.48673 4.5427C6.6908 4.33842 7.04283 4.23467 7.35122 4.23467C7.45326 4.23467 7.54512 4.23943 7.625 4.24436C7.81893 4.25458 7.91557 4.2699 8.0435 4.57628C8.19662 4.95423 8.57467 5.86221 8.61494 5.94396C8.6552 6.0257 8.71536 6.14815 8.6552 6.27076C8.59505 6.39336 8.5447 6.46467 8.44265 6.58694C8.34061 6.70938 8.24874 6.79153 8.1467 6.924C8.04466 7.05648 7.93297 7.1895 8.05477 7.39414C8.17658 7.59877 8.57467 8.25203 9.1666 8.78208C9.93233 9.46654 10.5546 9.68114 10.7797 9.77256C11.0048 9.86399 11.1378 9.85437 11.2705 9.71158C11.403 9.5688 11.832 9.06869 11.9753 8.8644C12.1185 8.66012 12.2619 8.68007 12.4552 8.76182C12.6485 8.84357 13.6749 9.35417 13.8887 9.45621C14.1026 9.55826 14.246 9.60942 14.2964 9.69116C14.3467 9.77291 14.3467 10.1504 14.1432 10.7233V10.7233" /></svg>
                    Chat on WhatsApp &rarr;
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
