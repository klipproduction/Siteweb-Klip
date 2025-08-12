import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const glowWords = ["attire", "engage", "convertit"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % glowWords.length);
    }, 3500); // Change word every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards] drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Du contenu visuel qui{" "}
          <span className="transition-all duration-[2000ms] ease-in-out">
            attire
          </span>
          ,{" "}
          <span className="transition-all duration-[2000ms] ease-in-out">
            engage
          </span>
          {" "}et{" "}
          <span className="transition-all duration-[2000ms] ease-in-out">
            convertit
          </span>
          .
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Aujourd'hui, c'est votre image qui vous distingue.
          <br />
          Chez KLIP, on crée du contenu original, pensé pour les réseaux, qui vous place une coche au-dessus.
        </p>
        
        <Button 
          size="lg" 
          onClick={scrollToContact}
          className="bg-background/10 backdrop-blur-md border border-white/20 hover:bg-background/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] text-foreground px-8 py-6 text-lg font-semibold rounded-3xl shadow-lg transition-all duration-300 transform animate-fade-in opacity-0 [animation-delay:1s] [animation-fill-mode:forwards]"
        >
          Discutons de votre projet
        </Button>
      </div>
    </section>
  );
};

export default Hero;