import React from 'react';
import image from '../assets/images/contact/image.svg';

const Contact = () => {
  return (
    <div className="md:mt-40 sm:mt-40">
      <div className="flex flex-row justify-center md:mt-32">
        <div className="grid lg:grid-cols-2 w-4/5 justify-center lg:gap-20">
          <div className="hidden lg:flex">
            <img
              alt="contact us"
              loading="lazy"
              width="500"
              height="500"
              decoding="async"
              data-nimg="1"
              className='rounded'
              src={image}
            />
          </div>
          <div>
            <h3 className="text-center lg:text-left">Join The Club</h3>
            <p className="text-center lg:text-left">
              Let us get to know you. Join the Club!
            </p>
            <form>
              <div className="w-full grid md:grid-cols-2  lg:grid-cols-2 gap-10 py-4">
                <div className="">
                  <label>First name</label>
                  <input
                    placeholder="First name"
                    label="First name"
                    className="rounded-md border-2 p-2 "
                    name="firstName"
                    value=""
                  />
                </div>
                <div className="">
                  <label>Last name</label>
                  <input
                    placeholder="Last name"
                    label="Last name"
                    className="rounded-md border-2 p-2"
                    name="lastName"
                    value=""
                  />
                </div>
              </div>
              <div className=" flex flex-col justify-start items-start w-full">
                <label>Email</label>
                <input
                  placeholder="you@example.com"
                  label="Email"
                  className="rounded-md border-2 p-2 w-full"
                  name="email"
                  value=""
                />
              </div>
              <div className="grid">
                <label>Phone number</label>

                <input
                  className="rounded-md border-2 p-2 "
                  placeholder="1 (702) 123-4567"
                  type="tel"
                />
                <div
                  className="flag-dropdown"
                  >
                  <div
                    className="selected-flag"
                    title="Ghana: + 233"
                    tabindex="0"
                    role="button"
                    aria-haspopup="listbox">
                    <div className="flag gh">
                      <div className="arrow"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start py-4">
                <label>Message</label>
                <textarea
                  type="textarea"
                  label="Message"
                  placeholder="Leave us a message..."
                  name="message"
                  className="rounded-md w-full border-2 p-2"
                  rows="5"></textarea>
              </div>
              <button className="rounded-full bg-black text-white py-2 px-8 text-base drop-shadow-xl hover:bg-white hover:text-black w-full transition-all duration-200 my-10">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
