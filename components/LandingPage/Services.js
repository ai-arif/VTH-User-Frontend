import React from "react";
import Container from "../UI/Container";
import CustomButton from "../UI/CustomButton";
import SectionTitle from "../UI/SectionTitle";

function Services() {
  return (
    <Container>
      <div className="tw-mx-auto tw-w-[70%] tw-space-y-6 tw-text-center">
        <SectionTitle>Our Services</SectionTitle>
        <p className="mb-0 tw-pt-1 tw-text-xl tw-font-medium tw-text-primary lg:tw-pt-2 lg:tw-text-[40px] lg:tw-font-semibold lg:tw-leading-[44px]">
          VTH Trusted Home For Compassionate Veterinary Services
        </p>
        <CustomButton>All Services</CustomButton>
      </div>
    </Container>
  );
}

export default Services;
