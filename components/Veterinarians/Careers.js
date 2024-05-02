import React from "react";
import CommonInfo from "../Shared/CommonInfo";
import Container from "../UI/Container";
import CustomButton from "../UI/CustomButton";
import SectionTitle from "../UI/SectionTitle";

function Careers() {
  return (
    <Container>
      <div className="tw-mx-auto tw-w-[70%] tw-space-y-6 tw-text-center">
        <SectionTitle>careers at heritage</SectionTitle>
        <p className="mb-0 tw-pt-2 tw-text-[40px] tw-font-semibold tw-leading-[44px] tw-text-primary">
          Care For Pets The Heritage Way
        </p>
        <p className="tw-text-lg tw-font-light tw-text-black">
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
