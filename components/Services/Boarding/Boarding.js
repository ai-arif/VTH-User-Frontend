import CallSection from "@/components/Shared/CallSection";
import Container from "@/components/UI/Container";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Boarding = () => {
  return (
    <div className="tw-bg-primary tw-text-white">
      <Container className="tw-py-10 md:tw-py-14 lg:tw-py-28">
        <div className="tw-flex tw-flex-col tw-gap-x-[60px] tw-gap-y-10 lg:tw-flex-row">
          {/* description part */}
          <div className="lg:tw-w-1/2">
            <h3 className="tw-mb-5 tw-text-lg tw-font-medium tw-capitalize tw-text-secondary md:tw-text-xl lg:tw-mb-11 lg:tw-text-[28px] lg:tw-font-semibold lg:tw-leading-8">
              Their Home Away From Home
            </h3>
            <div className="tw-space-y-2 tw-text-sm tw-font-light md:tw-space-y-3 lg:tw-space-y-5 lg:tw-text-lg">
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
          <div className="lg:tw-w-1/2">
            <h3 className="tw-mb-4 tw-text-lg tw-font-medium tw-capitalize tw-text-secondary md:tw-text-xl lg:tw-mb-11 lg:tw-text-[28px] lg:tw-font-semibold lg:tw-leading-8">
              Our Boarding Services Include:
            </h3>
            <div className="tw-flex tw-flex-col tw-gap-3 tw-divide-x-0 tw-divide-y tw-divide-solid tw-divide-gray-5 tw-text-secondary lg:tw-gap-6 lg:tw-divide-y-2">
              <div className="tw-flex tw-items-center tw-gap-x-2 tw-text-base lg:tw-gap-x-3 lg:tw-text-2xl">
                <div>
                  <FontAwesomeIcon icon={faPaw} className="tw-rotate-45" />
                </div>
                <span>Regular Walks And Play Time</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-x-2 tw-pt-3 tw-text-base lg:tw-gap-x-3 lg:tw-pt-6 lg:tw-text-2xl">
                <div>
                  <FontAwesomeIcon icon={faPaw} className="tw-rotate-45" />
                </div>
                <span>Separate Areas For Dogs And Cats</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-x-2 tw-pt-3 tw-text-base lg:tw-gap-x-3 lg:tw-pt-6 lg:tw-text-2xl">
                <div>
                  <FontAwesomeIcon icon={faPaw} className="tw-rotate-45" />
                </div>
                <span>Separate Areas For Dogs And Cats</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-x-2 tw-pt-3 tw-text-base lg:tw-gap-x-3 lg:tw-pt-6 lg:tw-text-2xl">
                <div>
                  <FontAwesomeIcon icon={faPaw} className="tw-rotate-45" />
                </div>
                <span>Daily Medication Administration</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-x-2 tw-pt-3 tw-text-base lg:tw-gap-x-3 lg:tw-pt-6 lg:tw-text-2xl">
                <div>
                  <FontAwesomeIcon icon={faPaw} className="tw-rotate-45" />
                </div>
                <span>Veterinary Supervision</span>
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
