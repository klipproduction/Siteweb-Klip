import { useEffect } from "react";

/**
 * Lightweight parallax-on-scroll for elements inside a container.
 * - selector: CSS selector for children to animate (default: '.parallax-card')
 * - strength: small factor for translateY (recommend 0.03 - 0.08)
 * - disableBelow: disables on small screens to preserve performance and readability
 */
export function useParallaxInContainer(
  containerRef: React.RefObject<HTMLElement>,
  selector: string = ".parallax-card",
  strength: number = 0.05,
  disableBelow: number = 640
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;
    const isDisabled = () => window.innerWidth < disableBelow;

    const update = () => {
      ticking = false;
      if (!container || isDisabled()) return;
      const cards = container.querySelectorAll<HTMLElement>(selector);
      const viewportCenter = window.innerHeight / 2;

      cards.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Distance of element center to viewport center
        const distance = rect.top + rect.height / 2 - viewportCenter;
        const translate = Math.max(Math.min(-distance * strength, 18), -18); // clamp for subtlety
        el.style.transform = `translateY(${translate.toFixed(2)}px)`;
      });
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    const onResize = () => {
      // Reset transforms when disabled
      if (isDisabled()) {
        const cards = container.querySelectorAll<HTMLElement>(selector);
        cards.forEach((el) => (el.style.transform = ""));
      }
      onScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    // Initial pass
    onResize();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      // Cleanup transforms
      const cards = container.querySelectorAll<HTMLElement>(selector);
      cards.forEach((el) => (el.style.transform = ""));
    };
  }, [containerRef, selector, strength, disableBelow]);
}
