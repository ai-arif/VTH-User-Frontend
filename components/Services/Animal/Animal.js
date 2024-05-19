import CallSection from "@/components/Shared/CallSection";
import Container from "@/components/UI/Container";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Animal = () => {
  return (
    <div className="tw-bg-primary tw-text-white">
      <Container className="tw-py-10 md:tw-py-14 lg:tw-py-28">
        <div className="tw-flex tw-flex-col tw-gap-x-[60px] tw-gap-y-10 lg:tw-flex-row">
          {/* description part */}
          <div className="lg:tw-w-1/2">
            <h3 className="tw-mb-5 tw-text-lg tw-font-medium tw-capitalize tw-text-secondary md:tw-text-xl lg:tw-mb-11 lg:tw-text-[28px] lg:tw-font-semibold lg:tw-leading-8">
              Exceptional Care For Exceptional Creatures
            </h3>
            <div className="tw-space-y-2 tw-text-sm tw-font-light md:tw-space-y-3 lg:tw-space-y-5 lg:tw-text-lg">
              <p>
                If you have a large animal to care for, you know that it’s not
                just the size that’s bigger—the work and responsibility increase
                as well! We understand the unique needs and challenges that come
                with large animal ownership and are proud to offer comprehensive
                veterinary care for large animals in our area.
              </p>
            </div>
          </div>
          {/* animal service part */}
          <div className="lg:tw-w-1/2">
            <h3 className="tw-mb-4 tw-text-lg tw-font-medium tw-capitalize tw-text-secondary md:tw-text-xl lg:tw-mb-11 lg:tw-text-[28px] lg:tw-font-semibold lg:tw-leading-8">
              Our Large Animal Services Include:
            </h3>
            <div className="tw-flex tw-flex-col tw-gap-3 tw-divide-x-0 tw-divide-y tw-divide-solid tw-divide-gray-5 tw-text-secondary lg:tw-gap-6 lg:tw-divide-y-2">
              <div className="tw-flex tw-items-center tw-gap-x-2 tw-text-base lg:tw-gap-x-3 lg:tw-text-2xl">
                <div>
                  <FontAwesomeIcon icon={faPaw} className="tw-rotate-45" />
                </div>
                <span>
                  Haul In Facilities For Routine Vaccinations, Parasite
                  Prevention, And Procedures
                </span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-x-2 tw-pt-3 tw-text-base lg:tw-gap-x-3 lg:tw-pt-6 lg:tw-text-2xl">
                <div>
                  <FontAwesomeIcon icon={faPaw} className="tw-rotate-45" />
                </div>
                <span>
                  Farm Visits For Both Routine Herd Health Needs And Emergencies
                </span>
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

export default Animal;
