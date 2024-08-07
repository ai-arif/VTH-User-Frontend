import React from "react";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import Container from "../UI/Container";

const ContactUs = () => {
  return (
    <Container>
      <div className="tw-flex tw-flex-col tw-justify-between tw-gap-10 lg:tw-flex-row">
        {/* contact us part */}
        <div className="tw-w-full">
          <div className="tw-mb-10">
            <p className="tw-mb-5 tw-text-xl tw-font-medium tw-capitalize tw-text-primary md:tw-text-3xl md:tw-font-semibold xl:tw-text-4xl xl:tw-font-bold xl:tw-tracking-wide">
              Contact Us
            </p>
            <p className="tw-text-justify tw-text-sm tw-font-light tw-text-black lg:tw-text-start lg:tw-text-lg xl:tw-leading-7">
              Here are Us contact Information. Feel free to contact with us or
              send message by this contact form.
            </p>
          </div>
          <div className="tw-flex tw-flex-col tw-justify-between tw-gap-10 md:tw-flex-row lg:tw-items-center">
            <div className="tw-space-y-3 lg:tw-space-y-6">
              <div className="tw-flex tw-items-center tw-gap-2 lg:tw-gap-4">
                <div className="tw-rounded-lg tw-bg-deep-secondary tw-p-2 tw-text-white lg:tw-p-3">
                  <FaLocationDot className="tw-text-3xl lg:tw-text-5xl" />
                </div>
                <div className="tw-flex-grow">
                  <h3 className="tw-text-lg tw-font-semibold lg:tw-text-xl">
                    Our Location
                  </h3>
                  <p className="tw-text-xs lg:tw-text-base">
                    North to the Jobbar&apos;s Mor and East to the railstation,
                    BAU, Mymensingh
                  </p>
                </div>
              </div>
              <div className="tw-flex tw-items-center tw-gap-2 lg:tw-gap-4">
                <div className="tw-rounded-lg tw-bg-deep-secondary tw-p-2 tw-text-white lg:tw-p-3">
                  <FaPhoneVolume className="tw-text-3xl lg:tw-text-5xl" />
                </div>
                <div className="tw-flex-grow">
                  <h3 className="tw-text-lg tw-font-semibold lg:tw-text-xl">
                    Phone Number
                  </h3>
                  <p className="tw-text-xs lg:tw-text-base">+88 01729301016</p>
                </div>
              </div>
              <div className="tw-flex tw-items-center tw-gap-2 lg:tw-gap-4">
                <div className="tw-rounded-lg tw-bg-deep-secondary tw-p-2 tw-text-white lg:tw-p-3">
                  <MdOutlineMail className="tw-text-3xl lg:tw-text-5xl" />
                </div>
                <div className="tw-flex-grow">
                  <h3 className="tw-text-lg tw-font-semibold lg:tw-text-xl">
                    Email Address
                  </h3>
                  <p className="tw-text-xs lg:tw-text-base">
                    director.vth@bau.edu.bd
                  </p>
                </div>
              </div>
              {/* <div className="tw-flex tw-items-center tw-gap-2 lg:tw-gap-4">
                <div className="tw-rounded-lg tw-bg-deep-secondary tw-p-2 tw-text-white lg:tw-p-3">
                  <LuFacebook className="tw-text-3xl lg:tw-text-5xl" />
                </div>
                <div className="tw-flex-grow">
                  <h3 className="tw-text-lg tw-font-semibold lg:tw-text-xl">
                    {" "}
                    Stay Connected
                  </h3>
                  <p className="tw-text-xs lg:tw-text-base">vth-hospital</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* get in touch part */}
        <div className="tw-w-full">
          <div className="tw-mb-10">
            <p className="tw-mb-5 tw-text-xl tw-font-medium tw-capitalize tw-text-primary md:tw-text-3xl md:tw-font-semibold xl:tw-text-4xl xl:tw-font-bold xl:tw-tracking-wide">
              Get in touch
            </p>
            <p className="tw-text-justify tw-text-sm tw-font-light tw-text-black lg:tw-text-start lg:tw-text-lg xl:tw-leading-7">
              We&apos;re here to help your pets, online. Talk to our experienced
              vets for advice or to schedule an appointment from the comfort of
              your home.
            </p>
          </div>
          <div className="tw-space-y-6">
            <form>
              <input
                className="tw-mb-4 tw-h-12 tw-w-11/12 tw-rounded tw-border tw-border-solid tw-border-deep-secondary tw-p-2 tw-font-medium tw-placeholder-gray-400 focus:tw-border-2 focus:tw-outline-none"
                placeholder="Your Name"
                required
                type="text"
                name="name"
              />
              <br />
              <input
                className="tw-mb-4 tw-h-12 tw-w-11/12 tw-rounded tw-border tw-border-solid tw-border-deep-secondary tw-p-2 tw-font-medium tw-placeholder-gray-400 focus:tw-border-2 focus:tw-outline-none"
                placeholder="Your Email"
                required
                type="email"
                name="email"
              />
              <br />
              <input
                className="tw-mb-4 tw-h-12 tw-w-11/12 tw-rounded tw-border tw-border-solid tw-border-deep-secondary tw-p-2 tw-font-medium tw-placeholder-gray-400 focus:tw-border-2 focus:tw-outline-none"
                placeholder="Subject"
                required
                type="subject"
                name="subject"
              />
              <br />
              <textarea
                className="tw-mb-4 tw-h-32 tw-w-11/12 tw-rounded tw-border tw-border-solid tw-border-deep-secondary tw-p-2 tw-font-medium tw-placeholder-gray-400 focus:tw-border-2 focus:tw-outline-none"
                placeholder="Your Message"
                name="message"
                id="message"
                cols="30"
                rows="10"
              />
              <br />
              <input
                className="tw-inline-block tw-w-11/12 tw-cursor-pointer tw-rounded tw-border-0 tw-bg-deep-secondary tw-px-10 tw-py-4 tw-text-center tw-text-sm tw-font-semibold tw-uppercase tw-tracking-[0.04em] tw-text-white tw-transition-all tw-delay-100 tw-duration-200 tw-ease-linear hover:tw-bg-primary"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
