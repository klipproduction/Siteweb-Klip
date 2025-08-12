import { Button } from "@/components/ui/button";
import { useCallback } from "react";

const FloatingCTA = () => {
  const scrollToContact = useCallback(() => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div
      className="fixed z-50 right-4 md:right-8"
      style={{ bottom: "calc(16px + env(safe-area-inset-bottom))" }}
      aria-label="Contact rapide"
    >
      <Button
        size="lg"
        onClick={scrollToContact}
        className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg px-6 py-6 md:px-7 md:py-7"
      >
        Nous contacter
      </Button>
    </div>
  );
};

export default FloatingCTA;
