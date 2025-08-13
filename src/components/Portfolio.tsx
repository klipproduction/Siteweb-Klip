import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useParallaxInContainer } from "@/hooks/useParallax";
// Définition du type pour les items du portfolio
type PortfolioItem = {
  id: number;
  type: "image" | "video";
  category: string;
  image: string;
  title: string;
  description: string;
  caption: string;
  videoSrc?: string;
};

// Affiche la miniature vidéo et lance la vidéo au clic
function VideoThumbnail({ item }: { item: PortfolioItem }) {
  const [playing, setPlaying] = useState(false);
  return playing ? (
    <video
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-[1.06] bg-black"
      src={item.videoSrc}
      poster={item.image}
      controls
      autoPlay
      playsInline
      onEnded={() => setPlaying(false)}
      onClick={(e) => e.stopPropagation()}
      style={{ background: "black", maxHeight: "100%", maxWidth: "100%" }}
    />
  ) : (
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-[1.06] cursor-pointer flex items-center justify-center"
      style={{ backgroundImage: `url(${item.image})` }}
      role="img"
      aria-label={item.title}
      onClick={(e) => {
        e.stopPropagation();
        setPlaying(true);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mx-auto"
      >
        <circle cx="12" cy="12" r="10" fill="rgba(0,0,0,0.5)" />
        <polygon points="10,8 16,12 10,16" fill="white" />
      </svg>
    </div>
  );
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    type: "image",
    category: "Construction",
    image: "/assets/5914b7ab-9d28-450d-88b4-abe37c38c0c0.webp",
    title: "Photographie industrielle",
    description: "Mise en valeur du savoir-faire artisanal",
    caption: "Shooting photo - Groupe SF",
  },
  {
    id: 2,
    type: "image",
    category: "Construction",
    image: "/assets/59c83e57-8298-411f-aae4-47c16ea1e2b8.webp",
    title: "Photographie de chantier",
    description: "Capturer l'authenticité du travail",
    caption: "Shooting photo - Groupe SF",
  },
  {
    id: 3,
    type: "image",
    category: "Construction",
    image: "/assets/a7d2651b-86aa-4f08-ab3a-fae1bec072ec.webp",
    title: "Travaux spécialisés",
    description: "Valorisation des compétences techniques",
    caption: "Photo en action - Excavation Jocelyn Gagné",
  },
  {
    id: 4,
    type: "image",
    category: "Immobilier",
    image: "/assets/115b13b0-ca3f-46f2-b59c-49b88524222f.webp",
    title: "Photographie immobilière",
    description: "Mise en scène professionnelle",
    caption: "Photos immobilières - Koraly Vachon",
  },
  {
    id: 9,
    type: "image",
    category: "Immobilier",
    image: "/assets/A7404175-HDR-15.webp",
    title: "Photographie intérieure",
    description: "Exemple de photographie immobilière intérieure.",
    caption: "Photos immobilières - Koraly Vachon",
  },
  {
    id: 5,
    type: "image",
    category: "Services",
    image: "/assets/5fc6dc8a-be69-4517-8cc8-202111eb7811.webp",
    title: "Services résidentiels",
    description: "Professionnalisme et proximité",
    caption: "Photo en action - Entretien LS",
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Tous");

  const tabs = ["Tous", "Immobilier", "Construction", "Services"];

  // ...existing code...

  const sectionRef = useRef<HTMLDivElement>(null);
  useParallaxInContainer(sectionRef, ".parallax-card", 0.05);

  return (
    <section id="realisations" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6">
          Nos réalisations
        </h2>

        <p className="text-center text-muted-foreground mb-12 text-lg">
          Découvrez quelques exemples de nos créations. Survolez pour en savoir
          plus.
        </p>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center md:flex-nowrap gap-2 bg-card rounded-lg p-1 border border-border">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md transition-smooth ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {portfolioItems
            .filter(
              (item) => activeTab === "Tous" || item.category === activeTab
            )
            .map((item) => (
              <div
                key={item.id}
                className="group flex flex-col parallax-card will-change-transform transform-gpu"
              >
                <div className="aspect-square bg-card rounded-lg overflow-hidden border border-border cursor-pointer hover:shadow-dark transition-smooth">
                  <div className="relative w-full h-full">
                    {item.type === "video" && item.videoSrc ? (
                      <VideoThumbnail item={item} />
                    ) : (
                      <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-[1.06]"
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                        role="img"
                        aria-label={item.title}
                      />
                    )}
                    {/* Overlay gradient and text reveal */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-lg font-semibold mb-1 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Caption under thumbnail */}
                <div className="mt-2 h-11 flex items-center justify-center text-center">
                  <p className="text-sm text-muted-foreground px-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
        </div>
        {/* Portfolio Grid */}
        {/* Section réseaux sociaux sous la grille */}
        <div className="mt-16 flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-foreground">
            Pour voir tous nos projets visitez nos réseaux sociaux
          </h3>
          <div className="flex gap-6 justify-center">
            <a
              href="https://www.facebook.com/Klip.prod"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded bg-card border border-border shadow hover:bg-primary hover:text-primary-foreground transition-colors px-6 py-3 text-lg font-semibold"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/klip.prod/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded bg-card border border-border shadow hover:bg-primary hover:text-primary-foreground transition-colors px-6 py-3 text-lg font-semibold"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/c%C3%A9dric-loubier-9a5987379/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded bg-card border border-border shadow hover:bg-primary hover:text-primary-foreground transition-colors px-6 py-3 text-lg font-semibold"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
