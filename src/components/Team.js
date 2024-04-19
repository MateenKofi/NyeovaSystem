import React from 'react';
import Bervly from '../_next/3.png';
import Rechel from '../_next/6.png'
import Zakia from '../_next/8.png'
import  Doreen from '../_next/4.png'
import Benjamin from '../_next/2.png'
import Fred from '../_next/5.png'
import Theodora from '../_next/7.png'
import Amirr from '../_next/1.png'
import HeroSection from './HeroSection';


const Team = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center md:mt-2">
        <HeroSection>Meet Our Team</HeroSection>
        <div className="w-4/5 grid gap-20 grid-cols-2 lg:grid-cols-3 text-center mt-12">
          <div className="flex flex-col items-center mb-10">
            <div className="rounded-full bg-black w-32 h-32 md:w-48 md:h-48 overflow-clip drop-shadow flex justify-center">
              <img
                alt="team member"
                loading="lazy"
                width="180"
                height="200"
                decoding="async"
                data-nimg="1"
                style={{ color: 'transparent' }}
                src={Bervly}
              />
            </div>
            <h6 className="mt-3">Beverly</h6>
            <p className="text-sm md:text-base">Head Honcho</p>
          </div>
          <div className="flex flex-col items-center mb-10">
            <div className="rounded-full bg-black w-32 h-32 md:w-48 md:h-48 overflow-clip drop-shadow flex justify-center">
              <img
                alt="team member"
                loading="lazy"
                width="180"
                height="200"
                decoding="async"
                data-nimg="1"
                style={{ color: 'transparent' }}
                src={Rechel}
              />
            </div>
            <h6 className="mt-3">Rachel</h6>
            <p className="text-sm md:text-base">Head Honcho</p>
          </div>
          <div className="flex flex-col items-center mb-10">
            <div className="rounded-full bg-black w-32 h-32 md:w-48 md:h-48 overflow-clip drop-shadow flex justify-center">
              <img
                alt="team member"
                loading="lazy"
                width="180"
                height="200"
                decoding="async"
                data-nimg="1"
                style={{ color: 'transparent' }}
               src={Zakia}
              />
            </div>
            <h6 className="mt-3">Zakia</h6>
            <p className="text-sm md:text-base">Finance</p>
          </div>
          <div className="flex flex-col items-center mb-10">
            <div className="rounded-full bg-black w-32 h-32 md:w-48 md:h-48 overflow-clip drop-shadow flex justify-center">
              <img
                alt="team member"
                loading="lazy"
                width="180"
                height="200"
                decoding="async"
                data-nimg="1"
                style={{ color: 'transparent' }}
               src={Doreen}
              />
            </div>
            <h6 className="mt-3">Doreen</h6>
            <p className="text-sm md:text-base">Head of Marketing</p>
          </div>
          <div className="flex flex-col items-center mb-10">
            <div className="rounded-full bg-black w-32 h-32 md:w-48 md:h-48 overflow-clip drop-shadow flex justify-center">
              <img
                alt="team member"
                loading="lazy"
                width="180"
                height="200"
                decoding="async"
                data-nimg="1"
                style={{ color: 'transparent' }}
               src={Benjamin}
              />
            </div>
            <h6 className="mt-3">Benjamin</h6>
            <p className="text-sm md:text-base">Lead Software Engineer</p>
          </div>
          <div className="flex flex-col items-center mb-10">
            <div className="rounded-full bg-black w-32 h-32 md:w-48 md:h-48 overflow-clip drop-shadow flex justify-center">
              <img
                alt="team member"
                loading="lazy"
                width="180"
                height="200"
                decoding="async"
                data-nimg="1"
                style={{ color: 'transparent' }}
               src={Fred}
              />
            </div>
            <h6 className="mt-3">Fred</h6>
            <p className="text-sm md:text-base">Software Engineer</p>
          </div>
          <div className="flex flex-col items-center mb-10">
            <div className="rounded-full bg-black w-32 h-32 md:w-48 md:h-48 overflow-clip drop-shadow flex justify-center">
              <img
                alt="team member"
                loading="lazy"
                width="180"
                height="200"
                decoding="async"
                data-nimg="1"
                style={{ color: 'transparent' }}
                src={Theodora}
              />
            </div>
            <h6 className="mt-3">Theodora</h6>
            <p className="text-sm md:text-base">Software Engineer</p>
          </div>
          <div className="flex flex-col items-center mb-10">
            <div className="rounded-full bg-black w-32 h-32 md:w-48 md:h-48 overflow-clip drop-shadow flex justify-center">
              <img
                alt="team member"
                loading="lazy"
                width="180"
                height="200"
                decoding="async"
                data-nimg="1"
                style={{ color: 'transparent' }}
               src={Amirr}
              />
            </div>
            <h6 className="mt-3">Amirr</h6>
            <p className="text-sm md:text-base">Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
