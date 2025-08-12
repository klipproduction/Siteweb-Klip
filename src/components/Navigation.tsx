import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down - hide navbar
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/10 backdrop-blur-md border border-white/20 rounded-3xl m-4 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-foreground">
            KLIP
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#pourquoi-investir" 
              className="text-foreground hover:text-primary transition-smooth"
            >
              Pourquoi investir ?
            </a>
            <a 
              href="#realisations" 
              className="text-foreground hover:text-primary transition-smooth"
            >
              Réalisations
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-smooth"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <a 
                href="#pourquoi-investir" 
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pourquoi investir ?
              </a>
              <a 
                href="#realisations" 
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Réalisations
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;