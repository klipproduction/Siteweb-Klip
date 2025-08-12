import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const statisticsRef = useScrollAnimation();
  const portfolioRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.pageYOffset;
        // Make background move faster by multiplying scroll position
        backgroundRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-background relative">
      {/* Full page background pattern */}
      <div 
        ref={backgroundRef}
        className="fixed inset-0 opacity-30 animate-float z-0"
        style={{
          // Use the new local assets directory instead of the Lovable‑specific path
          backgroundImage: `url(/assets/58934c74-c342-4b62-88fc-f67802d104c6.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <section ref={statisticsRef} className="section-transition">
          <Statistics />
        </section>
        <section ref={portfolioRef} className="section-transition">
          <Portfolio />
        </section>
        <section ref={testimonialsRef} className="section-transition">
          <Testimonials />
        </section>
        <section ref={contactRef} className="section-transition">
          <Contact />
        </section>
        <Footer />
        <FloatingCTA />
      </div>
    </div>
  );
};

export default Index;