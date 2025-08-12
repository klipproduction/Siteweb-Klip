import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([1, 1, 1]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      percentage: "93%",
      description: "Des marketeurs affirment que la vidéo génère un excellent ROI.",
      source: "Source : Wyzowl, Rapport 2025"
    },
    {
      percentage: "84%",
      description: "Des consommateurs ont été convaincus d'acheter après avoir vu une vidéo.",
      source: "Source : Animoto, Étude 2025"
    },
    {
      percentage: "90%",
      description: "De l'information transmise au cerveau est visuelle.",
      source: "Source : Brain Rules, Étude 2023"
    }
  ];

  const actualPercentages = [93, 84, 90];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Animate each counter
          actualPercentages.forEach((target, index) => {
            let current = 1;
            const increment = Math.ceil(target / 30); // Animate over ~30 frames for fast animation
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              
              setAnimatedStats(prev => {
                const newStats = [...prev];
                newStats[index] = current;
                return newStats;
              });
            }, 50); // 50ms intervals for fast animation
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="pourquoi-investir" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Pourquoi investir dans le contenu ?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center hover:bg-white/15 hover:shadow-2xl transition-all duration-300 rounded-3xl">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                {animatedStats[index]}%
              </div>
              <p className="text-card-foreground mb-4 text-lg">
                {stat.description}
              </p>
              <p className="text-muted-foreground text-sm italic">
                {stat.source}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;