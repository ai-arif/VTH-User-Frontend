import React from "react";
import Container from "../UI/Container";
import SectionTitle from "../UI/SectionTitle";

const Info = () => {
  return (
    <Container>
      <div className="tw-mx-auto tw-w-2/3 tw-space-y-6 tw-text-center">
        <SectionTitle>Our mission</SectionTitle>
        <p className="mb-0 tw-pt-2 tw-text-[40px] tw-font-semibold tw-leading-[44px]">
          We Don’t Wait To Innovate
        </p>
        <p className="tw-text-lg tw-font-light tw-text-gray-7">
          The veterinary field continues to grow and expand every day. We are
          dedicated to keeping up with those changes and offering our patients
          and clients the latest and best advancements possible. This includes
          laser therapy proven to be beneficial in a variety of applications
          from wound care to the treatment of pain and chronic conditions, and
          skilled veterinary chiropractic services.
        </p>
      </div>
    </Container>
  );
};

export default Info;
