import React from 'react';
import image1 from '../assets/images/landing/1.png';
import image2 from '../assets/images/landing/2.png'
import image3 from '../assets/images/landing/3.png'
import image4 from '../assets/images/landing/4.png'

const TextImage = () => {
  return (
    <div className="my-10">
      <div className='flex flex-col md:flex-row items-center'>
        <div className='flex justify-center md:w-1/2 md:hidden'>
      <img
        src={image1}
        alt="elevate your business"
        height={400}
        width={400}
        className='w-4/5 border-4 border-black/90 md:border-0 md:w-full'
      />
      </div>
      <div className='md:w-1/2 flex justify-center mb-28 md:mb-0'>
      <div
            className="w-9/12"
            >
            <h2 className='text-4xl font-serif py-4'>Elevate Your Business</h2>
            <p>
            Elevate your business presence with an online solution from e-commerce to offline business assistance. At Nyeova Systems, we help you and your business by doing Business Fitness Check, Business Strategy that improves your targeted performance. We also provide coaching to implement business strategies.
            </p>
          </div>
      </div>
      <div className='hidden justify-center md:w-1/2  md:flex'>
      <img
        src={image1}
        alt="elevate your business"
        height={400}
        width={400}
        className='w-full lg:w-full border-4 border-black/90 md:border-0'
      />
      </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="flex justify-center md:w-1/2">
          <img
            src={image2}
            alt="conception "
            height="400"
            width="400"
            className="w-4/5 border-4 border-black/90 md:border-0 md:w-full"
            />
        </div>
        <div className="md:w-1/2 flex justify-center mb-28 md:mb-0">
          <div
            className="w-9/12"
            >
            <h4>Conception</h4>
            <p>
              Since conception, we have had a host of applications in
              development various markets. We also provide network architecture
              and network administration using enterprise-level brands of
              hardware and software. At Nyeova Systems, we are able to purchase,
              configure, install, and manage this hardware for you and your
              company at a fraction of the cost of maintaining a full IT
              department.
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center'>
        <div className='flex justify-center md:w-1/2 md:hidden'>
      <img
        src={image3}
        alt="elevate your business"
        height={400}
        width={400}
        className='w-4/5 border-4 border-black/90 md:border-0 md:w-full'
      />
      </div>
      <div className='md:w-1/2 flex justify-center mb-28 md:mb-0'>
      <div
            className="w-9/12"
            >
            <h2 className='text-4xl font-serif py-4'>Elevate Your Business</h2>
            <p>
            Elevate your business presence with an online solution from e-commerce to offline business assistance. At Nyeova Systems, we help you and your business by doing Business Fitness Check, Business Strategy that improves your targeted performance. We also provide coaching to implement business strategies.
            </p>
          </div>
      </div>
      <div className='hidden justify-center md:w-1/2  md:flex'>
      <img
        src={image3}
        alt="elevate your business"
        height={400}
        width={400}
        className='w-full lg:w-full border-4 border-black/90 md:border-0'
      />
      </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="flex justify-center md:w-1/2">
          <img
            src={image4}
            alt="conception "
            height="400"
            width="400"
            className="w-4/5 border-4 border-black/90 md:border-0 md:w-full"
            />
        </div>
        <div className="md:w-1/2 flex justify-center mb-28 md:mb-0">
          <div
            className="w-9/12"
            >
            <h4>Conception</h4>
            <p>
              Since conception, we have had a host of applications in
              development various markets. We also provide network architecture
              and network administration using enterprise-level brands of
              hardware and software. At Nyeova Systems, we are able to purchase,
              configure, install, and manage this hardware for you and your
              company at a fraction of the cost of maintaining a full IT
              department.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TextImage;
