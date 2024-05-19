import CallSection from "@/components/Shared/CallSection";
import Container from "@/components/UI/Container";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Diagnostics = () => {
  return (
    <div className="tw-bg-primary tw-text-white">
      <Container className="tw-py-10 md:tw-py-14 lg:tw-py-28">
        <div className="tw-flex tw-flex-col tw-gap-x-[60px] tw-gap-y-10 lg:tw-flex-row">
          {/* description part */}
          <div className="lg:tw-w-1/2">
            <h3 className="tw-mb-5 tw-text-lg tw-font-medium tw-capitalize tw-text-secondary md:tw-text-xl lg:tw-mb-11 lg:tw-text-[28px] lg:tw-font-semibold lg:tw-leading-8">
              Answers In A Hurry
            </h3>
            <div className="tw-space-y-2 tw-text-sm tw-font-light md:tw-space-y-3 lg:tw-space-y-5 lg:tw-text-lg">
              <p>
                Having a pet who’s not feeling their best is stressful, and the
                only thing you want is to get them well again as quickly as
                possible. The sooner we can figure out the problem, the sooner
                we can address it—and the sooner your pet can get back to being
                themselves.
              </p>
              <p>
                That’s where our advanced diagnostics come in. We offer a
                comprehensive array of laboratory tests, many of which can be
                done on-site for rapid results. For more extensive lab needs, we
                partner with a high-quality external lab service. Our in-house
                imaging includes not only state of the art digital x-rays, but
                ultrasound as well. Ultrasound allows deep, three-dimensional
                visualization of a pet’s internal structures, and can be used in
                conjunction with x-rays to assess organ function, detect tumors
                or fluid, determine pregnancy, and more.
              </p>
              <p>
                We are also proud to provide PennHip x-rays for the screening of
                common hereditary orthopedic problems, such as canine hip and
                elbow dysplasia. With early detection in young pets, these
                conditions can be better managed.
              </p>
            </div>
          </div>
          {/* Diagnostic Services part */}
          <div className="lg:tw-w-1/2">
            <h3 className="tw-mb-4 tw-text-lg tw-font-medium tw-capitalize tw-text-secondary md:tw-text-xl lg:tw-mb-11 lg:tw-text-[28px] lg:tw-font-semibold lg:tw-leading-8">
              Our Diagnostic Services Include:
            </h3>
            <div className="tw-flex tw-flex-col tw-gap-3 tw-divide-x-0 tw-divide-y tw-divide-solid tw-divide-gray-5 tw-text-secondary lg:tw-gap-6 lg:tw-divide-y-2">
              <div className="tw-flex tw-items-center tw-gap-x-2 tw-text-base lg:tw-gap-x-3 lg:tw-text-2xl">
                <div>
                  <FontAwesomeIcon icon={faPaw} className="tw-rotate-45" />
                </div>
                <span>In-House And Off-Site Laboratory Services</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-x-2 tw-pt-3 tw-text-base lg:tw-gap-x-3 lg:tw-pt-6 lg:tw-text-2xl">
                <div>
                  <FontAwesomeIcon icon={faPaw} className="tw-rotate-45" />
                </div>
                <span>Digital Radiography (X-Rays)</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-x-2 tw-pt-3 tw-text-base lg:tw-gap-x-3 lg:tw-pt-6 lg:tw-text-2xl">
                <div>
                  <FontAwesomeIcon icon={faPaw} className="tw-rotate-45" />
                </div>
                <span>Ultrasound</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-x-2 tw-pt-3 tw-text-base lg:tw-gap-x-3 lg:tw-pt-6 lg:tw-text-2xl">
                <div>
                  <FontAwesomeIcon icon={faPaw} className="tw-rotate-45" />
                </div>
                <span>PennHip X-Rays</span>
              </div>
              <span></span>
            </div>
            {/* call part */}
            <CallSection />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Diagnostics;
