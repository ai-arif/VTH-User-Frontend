import CallSection from "@/components/Shared/CallSection";
import Container from "@/components/UI/Container";
import CustomButton from "@/components/UI/CustomButton";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Therapies = () => {
  return (
    <div className="tw-bg-primary tw-text-white">
      <Container className="tw-py-28">
        <div className="tw-flex tw-gap-x-[60px]">
          {/* description part */}
          <div className="tw-w-1/2">
            <h3 className="tw-mb-11 tw-text-[28px] tw-font-semibold tw-capitalize tw-leading-8">
              Answers In A Hurry
            </h3>
            <div className="tw-space-y-5 tw-text-lg tw-font-light">
              <p>
                Often, the most effective approach to treating an ill or injured
                pet is actually many approaches. The alternative therapies that
                we offer are beneficial both by themselves and when used in
                conjunction with other more ‘traditional’ approaches. We are
                proud to offer these exciting and innovative ways to help your
                pet feel their best.
              </p>
              <p>
                Laser therapy has been used with great success in both the human
                and the veterinary field, and has a broad range of applications.
                Wound care, surgical incision healing, arthritis, muscle pain,
                and much more can all be helped with laser therapy. This
                virtually side-effect free process is quick and painless—in
                fact, many patients find the process soothing and fall asleep
                during their sessions.
              </p>
              <p>
                Chiropractic care isn’t just for people anymore. We are proud to
                offer skilled veterinary chiropractic care for dogs, cats, and
                horses. Conditions that can be treated include many neurological
                or biomechanical issues, such as acute or chronic pain, hip
                dysplasia, disk disease, and musculoskeletal weakness.
              </p>
            </div>
          </div>
          {/* therapies part */}
          <div className="tw-w-1/2">
            <h3 className="tw-mb-11 tw-text-[28px] tw-font-semibold tw-capitalize tw-leading-8">
              Our Alternative Therapies Include:
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
                <span className="tw-text-2xl">Laser Therapy</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-x-3 tw-pt-6">
                <div>
                  <FontAwesomeIcon
                    size="xl"
                    icon={faPaw}
                    className="tw-rotate-45"
                  />
                </div>
                <span className="tw-text-2xl">Laser Therapy</span>
              </div>
              <span></span>
            </div>
            {/* call section */}
            <CallSection />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Therapies;
