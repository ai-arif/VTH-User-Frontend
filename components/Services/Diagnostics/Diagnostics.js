import CallSection from "@/components/Shared/CallSection";
import Container from "@/components/UI/Container";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Diagnostics = () => {
  return (
    <div className="tw-bg-primary tw-text-white">
      <Container className="tw-py-28">
        <div className="tw-flex tw-gap-x-[60px]">
          {/* description part */}
          <div className="tw-w-1/2">
            <h3 className="tw-mb-11 tw-text-[28px] tw-font-semibold tw-capitalize tw-leading-8 tw-text-secondary">
              Answers In A Hurry
            </h3>
            <div className="tw-space-y-5 tw-text-lg tw-font-light">
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
          <div className="tw-w-1/2">
            <h3 className="tw-mb-11 tw-text-[28px] tw-font-semibold tw-capitalize tw-leading-8 tw-text-secondary">
              Our Diagnostic Services Include:
            </h3>
            <div className="tw-flex tw-flex-col tw-gap-6 tw-divide-x-0 tw-divide-y-2 tw-divide-solid tw-divide-gray-5 tw-text-secondary">
              <div className="tw-flex tw-items-center tw-gap-x-3">
                <div>
                  <FontAwesomeIcon
                    size="xl"
                    icon={faPaw}
                    className="tw-rotate-45"
                  />
                </div>
                <span className="tw-text-2xl">
                  In-House And Off-Site Laboratory Services
                </span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-x-3 tw-pt-6">
                <div>
                  <FontAwesomeIcon
                    size="xl"
                    icon={faPaw}
                    className="tw-rotate-45"
                  />
                </div>
                <span className="tw-text-2xl">
                  Digital Radiography (X-Rays)
                </span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-x-3 tw-pt-6">
                <div>
                  <FontAwesomeIcon
                    size="xl"
                    icon={faPaw}
                    className="tw-rotate-45"
                  />
                </div>
                <span className="tw-text-2xl">Ultrasound</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-x-3 tw-pt-6">
                <div>
                  <FontAwesomeIcon
                    size="xl"
                    icon={faPaw}
                    className="tw-rotate-45"
                  />
                </div>
                <span className="tw-text-2xl">PennHip X-Rays</span>
              </div>
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
