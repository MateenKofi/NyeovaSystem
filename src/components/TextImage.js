import React from 'react';
import image1 from '../assets/images/landing/1.png';

const TextImage = () => {
  return (
    <div className="w-full border-2 border-orange-400">
      <div className="flex flex-row md:gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={image1}
            className="w-4/5 border-4 border-black md:border-0 md:w-full"
            style={{
                opacity: 0,
                transform: 'translateX(-300px) translateZ(0)',
              }}
            alt="image1"
          />
        </div>
        <div className="md:w-1/2 flex justify-center mb-28 md:mb-0">
          <div
            className="w-9/12"
            >
            <h4>Elevate Your Business</h4>
            <p>
            Elevate your business presence with an online solution
              from e-commerce to offline business assistance. At Nyeova Systems,
              we help you and your business by doing Business Fitness Check,
              Business Strategy that improves your targeted performance. We also
              provide coaching to implement business strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImage;
