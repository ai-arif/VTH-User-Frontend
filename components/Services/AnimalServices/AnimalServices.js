import Container from "@/components/UI/Container";
import CustomButton from "@/components/UI/CustomButton";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AnimalServices = () => {
  return (
    <div className="tw-bg-light-red tw-text-white">
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
            {/* TODO: tailwind border not working */}
            <div className="tw-space-y-6">
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
              <div className="tw-flex tw-items-center tw-gap-x-3 !tw-border-y !tw-border-white">
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
            </div>
            <div className="tw-mt-10 tw-space-y-8 tw-rounded-2xl tw-bg-white tw-px-10 tw-py-14 tw-text-center">
              <h3 className="tw-text-black">Have Any Questions?</h3>
              <CustomButton>Call 270-526-3839</CustomButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AnimalServices;
