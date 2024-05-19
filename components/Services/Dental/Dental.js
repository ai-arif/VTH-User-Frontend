import CallSection from "@/components/Shared/CallSection";
import Container from "@/components/UI/Container";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Dental = () => {
  return (
    <div className="tw-bg-primary tw-text-white">
      <Container className="tw-py-10 md:tw-py-14 lg:tw-py-28">
        <div className="tw-flex tw-flex-col tw-gap-x-[60px] tw-gap-y-10 lg:tw-flex-row">
          {/* description part */}
          <div className="lg:tw-w-1/2">
            <h3 className="tw-mb-5 tw-text-lg tw-font-medium tw-capitalize tw-text-secondary md:tw-text-xl lg:tw-mb-11 lg:tw-text-[28px] lg:tw-font-semibold lg:tw-leading-8">
              It’s Much More Than Fresh Breath
            </h3>
            <div className="tw-space-y-2 tw-text-sm tw-font-light md:tw-space-y-3 lg:tw-space-y-5 lg:tw-text-lg">
              <p>
                Regular dental care for your pet will do so much more than make
                those kisses less pungent—although that is a nice side effect.
                The health of your pet’s mouth has a significant impact on both
                their overall health and their longevity.
              </p>
              <p>
                When tartar and plaque are allowed to accumulate in your pet’s
                mouth, it leads to pain, infection, tooth decay, and tooth loss.
                If periodontal disease is left unchecked and becomes severe, it
                allows harmful bacteria to spread throughout your pet’s system.
                Kidney, liver, and heart disease in pets can all stem from an
                underlying dental infection.
              </p>
              <p>
                Regular dental care for pets is every bit as important as it is
                for us humans, and Heritage Animal Hospital is ready to make
                sure both you and your pet are all smiles.
              </p>
            </div>
          </div>
          {/* dental services part */}
          <div className="lg:tw-w-1/2">
            <h3 className="tw-mb-4 tw-text-lg tw-font-medium tw-capitalize tw-text-secondary md:tw-text-xl lg:tw-mb-11 lg:tw-text-[28px] lg:tw-font-semibold lg:tw-leading-8">
              Dental Services:
            </h3>
            <div className="tw-flex tw-flex-col tw-gap-3 tw-divide-x-0 tw-divide-y tw-divide-solid tw-divide-gray-5 tw-text-secondary lg:tw-gap-6 lg:tw-divide-y-2">
              <div className="tw-flex tw-items-center tw-gap-x-2 tw-text-base lg:tw-gap-x-3 lg:tw-text-2xl">
                <div>
                  <FontAwesomeIcon icon={faPaw} className="tw-rotate-45" />
                </div>
                <span>Dental Cleanings</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-x-2 tw-pt-3 tw-text-base lg:tw-gap-x-3 lg:tw-pt-6 lg:tw-text-2xl">
                <div>
                  <FontAwesomeIcon icon={faPaw} className="tw-rotate-45" />
                </div>
                <span>Tooth Extractions</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-x-2 tw-pt-3 tw-text-base lg:tw-gap-x-3 lg:tw-pt-6 lg:tw-text-2xl">
                <div>
                  <FontAwesomeIcon icon={faPaw} className="tw-rotate-45" />
                </div>
                <span>Oral Surgery</span>
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

export default Dental;
