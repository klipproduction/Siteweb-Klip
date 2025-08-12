import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add staggered animation to child elements
          const staggerItems = entry.target.querySelectorAll('.stagger-item');
          staggerItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('visible');
            }, index * 100);
          });
        }
      },
      {
        threshold,
        rootMargin: '-50px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return ref;
};