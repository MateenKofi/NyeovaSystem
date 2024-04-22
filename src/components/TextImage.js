import React from 'react';
import image1 from '../assets/images/landing/1.png';
import image2 from '../assets/images/landing/2.png';
import image3 from '../assets/images/landing/3.png';
import image4 from '../assets/images/landing/4.png';
import SlideInFromRight from './animations/SlideInFromRight';
import SlideInFromLeft from './animations/SlideInFromLeft';
import '../components/animations/fadeIn.css'
import FadeIn from './animations/FadeIn';

const TextImage = () => {
  return (
    <div className="my-10 mx-10 grid place-items-center">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex justify-center md:w-1/2 md:hidden ">
          <SlideInFromLeft>
            <img
              src={image1}
              loading="lazy"
              alt="elevate your business"
              height={400}
              width={400}
              className="w-4/5 border-4 border-black/90 md:border-0 md:w-full"
            />
          </SlideInFromLeft>
        </div>
        <div className="md:w-1/2 flex justify-center mb-28 md:mb-0">
          <div className="w-9/12">
            <FadeIn>
              <h2 className="text-4xl font-serif py-4">
                Elevate Your Business
              </h2>
              <p>
                Elevate your business presence with an online solution from
                e-commerce to offline business assistance. At Nyeova Systems, we
                help you and your business by doing Business Fitness Check,
                Business Strategy that improves your targeted performance. We
                also provide coaching to implement business strategies.
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="hidden justify-center md:w-1/2  md:flex  overflow-hidden">
          <SlideInFromLeft>
            <img
              src={image1}
              loading="lazy"
              alt="elevate your business"
              height={400}
              width={400}
              className="w-full lg:w-full border-4 border-black/90 md:border-0"
            />
          </SlideInFromLeft>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="flex justify-center md:w-1/2">
          <SlideInFromRight>
            <img
              src={image2}
              loading="lazy"
              alt="conception "
              height="400"
              width="400"
              className="w-4/5 border-4 border-black/90 md:border-0 md:w-full"
            />
          </SlideInFromRight>
        </div>
        <div className="md:w-1/2 flex justify-center mb-28 md:mb-0">
          <div className="w-9/12">
            <FadeIn>
              <h4 className="text-4xl font-serif py-4">Conception</h4>
              <p>
                Since conception, we have had a host of applications in
                development various markets. We also provide network
                architecture and network administration using enterprise-level
                brands of hardware and software. At Nyeova Systems, we are able
                to purchase, configure, install, and manage this hardware for
                you and your company at a fraction of the cost of maintaining a
                full IT department.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="flex justify-center md:w-1/2 md:hidden">
          <SlideInFromLeft>
            <img
              src={image3}
              loading="lazy"
              alt="elevate your business"
              height={400}
              width={400}
              className="w-4/5 border-4 border-black/90 md:border-0 md:w-full"
            />
          </SlideInFromLeft>
        </div>
        <div className="md:w-1/2 flex justify-center mb-28 md:mb-0">
          <div className="w-9/12">
            <FadeIn>
              <h2 className="text-4xl font-serif py-4">
                Elevate Your Business
              </h2>
              <p>
                Elevate your business presence with an online solution from
                e-commerce to offline business assistance. At Nyeova Systems, we
                help you and your business by doing Business Fitness Check,
                Business Strategy that improves your targeted performance. We
                also provide coaching to implement business strategies.
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="hidden justify-center md:w-1/2  md:flex">
          <SlideInFromLeft>
            <img
              src={image3}
              loading="lazy"
              alt="elevate your business"
              height={400}
              width={400}
              className="w-full lg:w-full border-4 border-black/90 md:border-0"
            />
          </SlideInFromLeft>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="flex justify-center md:w-1/2">
          <SlideInFromRight>
            <img
              src={image4}
              loading="lazy"
              alt="conception "
              height="400"
              width="400"
              className="w-4/5 border-4 border-black/90 md:border-0 md:w-full"
            />
          </SlideInFromRight>
        </div>
        <div className="md:w-1/2 flex justify-center mb-28 md:mb-0">
          <div
            className="w-9/12"
            // style={{opacity: 0; transform: scale(0.5) ,translateZ(0)}}
          >
            <FadeIn>
              <h4 className="text-[3.4em]">Development Expertise</h4>
              <div>
                At Nyeova Systems, we bring our world class development and
                project management knowledge together by bringing your
                applications to life in the following disciplines:
                <p className="my-4">
                  <span className="font-semibold">System software</span> to
                  provide core functions such as operating systems,disk
                  management, utilities, hardware management and other
                  operational necessities.
                </p>
                <p className="my-4">
                  <span className="font-semibold">Programming software</span> to
                  give programmers tools such as text editors, compilers,
                  linkers, debuggers and other tools to create code.
                </p>
                <p className="my-4">
                  <span className="font-semibold">Application software</span> to
                  help users and vendors perform tasks like data management
                  software, point of sales software and many more. We also work
                  on web and mobile applications like those used to shop on
                  PigeonUltra App.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImage;
