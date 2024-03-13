import React from 'react';
import bars from '../assets/images/bar-1.svg';

const HeroSection = ({ children }) => {
  return (
    <div className='mt-40'>
      <span className='grid place-items-center text-6xl'>
        <div className='py-4'>
      {children}
        </div>
        <h1
          className="leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-700 animate-text"
          style={{ color: 'transparent' }}>
          Nyeova Systems
        </ h1>
        <img
          alt="bar"
          loading="lazy"
          width="350"
          height="50"
          decoding="async"
          data-nimg="1"
          className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-700 animate-text"
          src={bars}
        />
      </span>
    </div>
  );
};

export default HeroSection;
