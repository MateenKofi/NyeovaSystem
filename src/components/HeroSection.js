import React from 'react';
import bars from '../assets/images/bar-1.svg';
import TextGradient from './animations/TextGradient';

const HeroSection = ({ children }) => {
  return (
    <div className='mt-40'>
      <span className='grid place-items-center text-6xl'>
        <div className='py-4'>
      {children}
        </div>
        <h1
          className=""
          style={{ color: 'transparent' }}>
            <TextGradient>
            Nyeova Systems
            </TextGradient>
          
        </ h1>
        <TextGradient>
        <img
          alt="bar"
          loading="lazy"
          width="500"
          height="50"
          decoding="async"
          data-nimg="1"
          className="mt-6"
          src={bars}
        />
        </TextGradient>
      </span>
    </div>
  );
};

export default HeroSection;
