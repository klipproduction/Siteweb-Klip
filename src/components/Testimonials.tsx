import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      quote: "Travailler avec Klip a complètement transformé la présentation de mes propriétés. Les photos et vidéos sont d’une qualité exceptionnelle et mettent vraiment en valeur chaque maison. Les clients remarquent la différence, et ça se reflète dans mes ventes.",
      name: "Koraly Vachon",
      company: "Agente immobilière Sutton",
      rating: 5
    },
    {
      quote: "Grâce à Klip, notre service d'imperméabilisation des fondations unique dans la région est enfin mis en lumière. Les vidéos ont eu un impact immédiat",
      name: "Marc Gagné",
      company: "Jocelyn Gagné Excavation",
      rating: 5
    },
    {
      quote: "Dès nos débuts, nous avons investi dans le contenu visuel avec Klip. Les photos et vidéos ont non seulement renforcé notre image, mais ont aussi contribué directement à notre croissance impressionnante.",
      name: "Mathias & Xavier",
      company: "Entretien LS",
      rating: 5
    }
  ];

  const changeTestimonial = (newIndex: number) => {
    if (isAnimating || newIndex === currentTestimonial) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial(newIndex);
      setTimeout(() => setIsAnimating(false), 50);
    }, 200);
  };

  const nextTestimonial = () => {
    const newIndex = (currentTestimonial + 1) % testimonials.length;
    changeTestimonial(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    changeTestimonial(newIndex);
  };

  const goToTestimonial = (index: number) => {
    changeTestimonial(index);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          // Use the new assets directory instead of the Lovable-specific uploads
          backgroundImage: `url(/assets/164bacd9-84c3-4c70-a374-8d983eb753b2.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Témoignages <span className="text-primary">clients</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          Découvrez ce que nos clients disent de notre travail et des résultats obtenus
        </p>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-background/20 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-background/30 transition-all duration-300"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-background/20 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-background/30 transition-all duration-300"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Testimonial Content */}
          <div className={`bg-background/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 text-center transition-all duration-300 ${
            isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}>
            {/* Quote Icon */}
            <div className="text-primary text-6xl font-serif mb-6 leading-none">"</div>
            
            <blockquote className="text-xl md:text-2xl text-foreground mb-8 italic leading-relaxed min-h-[80px] flex items-center justify-center">
              {testimonials[currentTestimonial].quote}
            </blockquote>
            
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 transition-colors duration-200 ${
                    i < testimonials[currentTestimonial].rating
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <div className="text-foreground text-lg font-semibold mb-1">
              {testimonials[currentTestimonial].name}
            </div>
            <div className="text-muted-foreground">
              {testimonials[currentTestimonial].company}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;