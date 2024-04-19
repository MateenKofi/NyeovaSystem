import React from 'react';
import MobileAPP from '../_next/11.png';
import WebAPP from '../_next/22.png';
import Hosting from '../_next/33.png';
import Consulting from '../_next/44.png';
import HeroSection from './HeroSection';
import LetsTalk from './LetsTalk';

const About = () => {
  return (
    <div className="mt-40">
      <section className="flex flex-col items-center">
        <header className="flex flex-col items-center text-center mt-2 mb-12">
          <HeroSection>About</HeroSection>
        </header>
        <section className="flex flex-col w-4/5 md:w-8/12 md:text-center">
          <p>
            Nyeova Systems is a full-service IT self-performing and consulting
            firm committed to assisting our clients in improving business
            processes, strengthening IT teams, and increasing bottom-line
            performance.Small and medium enterprises, as well as other consumer
            service industries such as restaurants and entertainment
            organizations are part of our host of service and support, thus
            benefiting from our extensive advisory offerings.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="156"
            height="65"
            fill="none"
            className="mt-4 self-end md:mt-0">
            <path
              fill="#101828"
              d="M6.507 1.526a.804.804 0 1 0-1.469.657l1.47-.657Zm88.436 7.533.139-.792-.139.792ZM70.298 55.1l.626-.505-.626.505Zm85.228-45.81a.804.804 0 1 0-1.575-.328l1.575.329ZM.851 12.294a.804.804 0 1 0 1.538.474L.85 12.293ZM5.224.828 5.36.035a.804.804 0 0 0-.906.556l.769.237Zm12.113 2.65a.804.804 0 1 0 .108-1.605l-.108 1.605ZM5.773 1.854c-.735.329-.734.33-.734.33l.001.002a2.758 2.758 0 0 0 .017.038 26.606 26.606 0 0 0 .262.564c.184.39.458.96.82 1.683a122.16 122.16 0 0 0 3.206 5.963c2.814 4.916 6.966 11.443 12.314 17.878 10.665 12.832 26.252 25.491 45.599 23.91l-.131-1.603c-18.532 1.514-33.655-10.61-44.23-23.335-5.272-6.343-9.373-12.788-12.156-17.65a120.59 120.59 0 0 1-3.163-5.883 80.03 80.03 0 0 1-1.055-2.19 8.141 8.141 0 0 1-.012-.027l-.003-.006v-.002l-.735.328Zm61.485 50.369c19.213-1.57 30.4-11.637 34.716-21.79 2.15-5.06 2.604-10.17 1.44-14.243-1.171-4.1-4-7.169-8.332-7.923l-.277 1.585c3.617.63 6.028 3.16 7.062 6.78 1.042 3.645.666 8.373-1.374 13.171-4.064 9.561-14.702 19.291-33.366 20.816l.13 1.604ZM95.08 8.267c-4.217-.734-9.038.511-13.569 3.045-4.542 2.54-8.872 6.415-12.13 11.075-6.523 9.327-8.822 21.936.29 33.219l1.252-1.011c-8.538-10.572-6.462-22.366-.224-31.286 3.123-4.465 7.27-8.174 11.597-10.593 4.339-2.426 8.779-3.513 12.509-2.864l.275-1.585ZM69.672 55.606c4.606 5.704 11.78 8.352 19.966 8.488 8.186.135 17.46-2.235 26.428-6.655 17.926-8.835 34.831-25.968 39.46-48.148l-1.575-.33c-4.503 21.58-20.995 38.36-38.596 47.035-8.795 4.335-17.816 6.62-25.69 6.489-7.873-.13-14.524-2.668-18.74-7.89l-1.252 1.01ZM2.39 12.766 5.992 1.066 4.455.591.85 12.293l1.538.474ZM5.224.829a418.926 418.926 0 0 0-.137.793h.002l.005.001.021.004.083.014a329.99 329.99 0 0 0 1.455.247c.954.161 2.252.377 3.625.599 2.724.438 5.811.908 7.059.992l.108-1.605c-1.155-.078-4.152-.532-6.91-.976A519.506 519.506 0 0 1 5.387.04l-.02-.003-.006-.001h-.001l-.137.792Z"></path>
          </svg>
        </section>

        <section className="flex my-20 h-fit w-full">
          <div className="aspect-[2/3] w-1/4 overflow-clip relative ">
            <img
              alt="mobile app"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: '0',
                top: '0',
                right: '0',
                bottom: '0',
                color: 'transparent',
              }}
              sizes="100vw"
              src={MobileAPP}
            />
            <div className="opacity-0 hover:opacity-100 bg-black/70 z-10 absolute h-full w-full text-white flex items-center justify-center transition-all duration-300 cursor-pointer">
              <h4 className="text-base md:text-3xl text-center">
                Mobile App Development
              </h4>
            </div>
          </div>
          <div className="aspect-[2/3] w-1/4 overflow-clip relative ">
            <img
              alt="mobile app"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: '0',
                top: '0',
                right: '0',
                bottom: '0',
                color: 'transparent',
              }}
              sizes="100vw"
              src={WebAPP}
            />
            <div className="opacity-0 hover:opacity-100 bg-black/70 z-10 absolute h-full w-full text-white flex items-center justify-center transition-all duration-300 cursor-pointer">
              <h4 className="text-base md:text-3xl text-center">
                Web Development
              </h4>
            </div>
          </div>
          <div className="aspect-[2/3] w-1/4 overflow-clip relative ">
            <img
              alt="mobile app"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: '0',
                top: '0',
                right: '0',
                bottom: '0',
                color: 'transparent',
              }}
              sizes="100vw"
              src={Hosting}
            />
            <div className="opacity-0 hover:opacity-100 bg-black/70 z-10 absolute h-full w-full text-white flex items-center justify-center transition-all duration-300 cursor-pointer">
              <h4 className="text-base md:text-4xl text-center">Hosting</h4>
            </div>
          </div>
          <div className="aspect-[2/3] w-1/4 overflow-clip relative ">
            <img
              alt="mobile app"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: '0',
                top: '0',
                right: '0',
                bottom: '0',
                color: 'transparent',
              }}
              sizes="100vw"
              src={Consulting}
            />
            <div className="opacity-0 hover:opacity-100 bg-black/70 z-10 absolute h-full w-full text-white flex items-center justify-center transition-all duration-300 cursor-pointer">
              <h4 className="text-base md:text-4xl text-center transition-all duration-200">
                Consulting
              </h4>
            </div>
          </div>
        </section>

        <div className="w-4/5 ">
          <div className="flex flex-col md:flex-row items-center mb-20">
            <h4 className="md:w-1/2 ">Our Workforce</h4>
            <p className="md:w-1/2">
              Our workforce is made up of small and medium-sized businesses
              (SMEs) that are tailored to your growth goals. Our software
              engineers work at the cutting edge of technology and have the
              resources necessary to create, release, and scale your application
              vision to meet your specific requirements.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center mb-20">
            <h4 className="md:w-1/2 ">Our Experience</h4>
            <p className="md:w-1/2">
              Our experience allows us to appreciate the difficulty of managing
              your app distribution channels. This is why, in addition
              to developing your software, we also manage your app store. Our
              tight-knit management practices allow you to focus on providing
              excellent service to your clients while we take care of your
              consulting and application needs. Furthermore, our scalable and
              dynamic design patterns enable us to deliver and respond to high
              needs, thus exceeding high expectations beyond limits.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center mb-20">
            <h4 className="md:w-1/2 ">Team Work</h4>
            <p className="md:w-1/2">
              Our value for teamwork enhances our work flow and relationship not
              only amongst the team but our customers as well. This enables us
              deliver seamless products to suit our customer requirement
              specifications.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center mb-20">
            <h4 className="md:w-1/2 ">Our DNA</h4>
            <p className="md:w-1/2">
              Our business is based on Trust, Sincerity, and Openness with our
              customers, colleagues, and business partners. Our unrivaled cost
              efficient development methods enables us to offer the best values
              for our services. Our applications are built to test today’s ever
              increasing demands and changes dynamically.
            </p>
          </div>
        </div>

        <section className="w-4/5 grid md:grid-cols-2 gap-20 my-20"></section>
        <LetsTalk/>
      </section>
    </div>
  );
};

export default About;
