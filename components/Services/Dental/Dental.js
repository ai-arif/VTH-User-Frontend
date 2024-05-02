import CallSection from "@/components/Shared/CallSection";
import Container from "@/components/UI/Container";
import CustomButton from "@/components/UI/CustomButton";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Dental = () => {
  return (
    <div className="tw-bg-primary tw-text-white">
      <Container className="tw-py-28">
        <div className="tw-flex tw-gap-x-[60px]">
          {/* description part */}
          <div className="tw-w-1/2">
            <h3 className="tw-mb-11 tw-text-[28px] tw-font-semibold tw-capitalize tw-leading-8 tw-text-secondary">
              It’s Much More Than Fresh Breath
            </h3>
            <div className="tw-space-y-5 tw-text-lg tw-font-light">
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
          <div className="tw-w-1/2">
            <h3 className="tw-mb-11 tw-text-[28px] tw-font-semibold tw-capitalize tw-leading-8 tw-text-secondary">
              Dental Services:
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
                <span className="tw-text-2xl">Dental Cleanings</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-x-3 tw-pt-6">
                <div>
                  <FontAwesomeIcon
                    size="xl"
                    icon={faPaw}
                    className="tw-rotate-45"
                  />
                </div>
                <span className="tw-text-2xl">Tooth Extractions</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-x-3 tw-pt-6">
                <div>
                  <FontAwesomeIcon
                    size="xl"
                    icon={faPaw}
                    className="tw-rotate-45"
                  />
                </div>
                <span className="tw-text-2xl">Oral Surgery</span>
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

export default Dental;
