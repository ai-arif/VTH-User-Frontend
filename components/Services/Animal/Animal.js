import CallSection from "@/components/Shared/CallSection";
import Container from "@/components/UI/Container";
import CustomButton from "@/components/UI/CustomButton";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Animal = () => {
  return (
    <div className="tw-bg-primary tw-text-white">
      <Container className="tw-py-28">
        <div className="tw-flex tw-gap-x-[60px]">
          {/* description part */}
          <div className="tw-w-1/2">
            <h3 className="tw-mb-11 tw-text-[28px] tw-font-semibold tw-capitalize tw-leading-8">
              Exceptional Care For Exceptional Creatures
            </h3>
            <div className="tw-text-lg tw-font-light">
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
          <div className="tw-w-1/2">
            <h3 className="tw-mb-11 tw-text-[28px] tw-font-semibold tw-capitalize tw-leading-8">
              Our Large Animal Services Include:
            </h3>
            <div className="tw-flex tw-flex-col tw-gap-6 tw-divide-x-0 tw-divide-y-2 tw-divide-solid tw-divide-gray-5">
              <div className="tw-flex tw-items-center tw-gap-x-3">
                <div>
                  <FontAwesomeIcon
                    size="xl"
                    icon={faPaw}
                    className="tw-rotate-45"
                  />
                </div>
                <span className="tw-text-2xl">
                  Haul In Facilities For Routine Vaccinations, Parasite
                  Prevention, And Procedures
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
