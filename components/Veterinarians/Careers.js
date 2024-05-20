import React from "react";
import CommonInfo from "../Shared/CommonInfo";
import Container from "../UI/Container";
import CustomButton from "../UI/CustomButton";
import SectionTitle from "../UI/SectionTitle";

function Careers() {
  return (
    <Container>
      <div className="tw-mx-auto tw-space-y-2 tw-text-center md:tw-space-y-3 lg:tw-w-[70%] lg:tw-space-y-6">
        <SectionTitle>careers at heritage</SectionTitle>
        <p className="mb-0 tw-pt-1 tw-text-xl tw-font-medium tw-text-primary lg:tw-pt-2 lg:tw-text-[40px] lg:tw-font-semibold lg:tw-leading-[44px]">
          Care For Pets The Heritage Way
        </p>
        <p className="tw-text-sm tw-font-light tw-text-black lg:tw-text-lg">
          Our team is a family of passionate, dedicated animal lovers known for
          our excellent service to the pets and people of Mymensingh and the
          surrounding areas. Our goal is to partner with you to see that your
          pet has as many happy, healthy years as possible. We do that by
          focusing on preventive care, providing comprehensive services, and
          using a customized approach.
        </p>

        <CustomButton>Learn More</CustomButton>
      </div>
    </Container>
  );
}

export default Careers;
