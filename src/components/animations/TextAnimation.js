import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Define the animation variants for fade-in and fade-out
const fadeInOutVariants = {
 hidden: { opacity: 0 },
 visible: { opacity: 1 },
};

// Counter to generate unique ids
let idCounter = 0;

const TextAnimation = ({ children }) => {
 const [isVisible, setIsVisible] = useState(true); // Start as visible
 const elementRef = useRef(null);

 // Generate a unique id for this instance
 const uniqueId = useRef(`fade-in-viewport-element-${idCounter++}`);

 useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsVisible(isInViewport); // Update visibility based on viewport
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
 }, []);

 return (
    <motion.div
      ref={elementRef}
      id={uniqueId.current}
      className="transition-opacity duration-500"
      initial="visible" // Start as visible
      animate={isVisible ? 'visible' : 'hidden'} // Animate based on visibility
      variants={fadeInOutVariants}
    >
      {children}
    </motion.div>
 );
};

export default TextAnimation;
