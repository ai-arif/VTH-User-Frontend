import CallSection from "@/components/Shared/CallSection";
import Container from "@/components/UI/Container";
import CustomButton from "@/components/UI/CustomButton";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Boarding = () => {
  return (
    <div className="tw-bg-primary tw-text-white">
      <Container className="tw-py-28">
        <div className="tw-flex tw-gap-x-[60px]">
          {/* description part */}
          <div className="tw-w-1/2">
            <h3 className="tw-mb-11 tw-text-[28px] tw-font-semibold tw-capitalize tw-leading-8 tw-text-secondary">
              Their Home Away From Home
            </h3>
            <div className="tw-space-y-5 tw-text-lg tw-font-light">
              <p>
                When you’re out of town, you can trust that the Heritage Animal
                Hospital team is here to provide a calm, comfortable, and secure
                home away from home for your pet. The fact that we’re also a
                medical facility means additional peace of mind—should problems
                arise with your pet while you’re out of town, they’re already
                right where they need to be and in good hands.
              </p>
              <p>
                All boarders are required to be current on their vaccinations
                two weeks prior to their stay with us for their health and the
                health of other animals in our care. Give us a call today to
                discuss boarding and scheduling options for your pet!
              </p>
            </div>
          </div>
          {/* service part */}
          <div className="tw-w-1/2">
            <h3 className="tw-mb-11 tw-text-[28px] tw-font-semibold tw-capitalize tw-leading-8 tw-text-secondary">
              Our Boarding Services Include:
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
                <span className="tw-text-2xl">Regular Walks And Play Time</span>
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
                  Separate Areas For Dogs And Cats
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
                  Separate Areas For Dogs And Cats
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
                  Daily Medication Administration
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
                <span className="tw-text-2xl">Veterinary Supervision</span>
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

export default Boarding;
