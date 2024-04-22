import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

const FadeIn = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    const observerOptions = {
      rootMargin: '0px',
      threshold: [0, 0.5],
    };

    // Throttle the IntersectionObserver callback
    let throttleTimeout;
    const handleIntersection = (entries) => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          throttleTimeout = null;
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              anime({
                targets: node,
                opacity: 1,
                duration: 1000,
                easing: 'easeInOutQuad',
              });
            } else {
              setIsVisible(false);
              anime({
                targets: node,
                opacity: 0,
                duration: 1000,
                easing: 'easeInOutQuad',
              });
            }
          });
        }, 200); // Adjust the throttle time as needed
      }
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        willChange: 'opacity', // Promote opacity to its own layer for hardware acceleration
      }}
    >
      {isVisible && children}
    </div>
  );
};

export default FadeIn;
