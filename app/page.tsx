'use client';

import { useState, useEffect } from 'react';
import Preloader from '@/components/ui/Preloader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Empty section placeholders for now
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loaded ? null : <Preloader isLoaded={loaded} />}

      <main className="min-h-screen bg-primary overflow-x-hidden w-full">
        <Navbar />
        
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />

        <Footer />
      </main>
    </>
  );
}
