import React from "react";
import Container from "../UI/Container";
import CustomButton from "../UI/CustomButton";
import SectionTitle from "../UI/SectionTitle";

function Services() {
  return (
    <Container>
      <div className="tw-mx-auto tw-w-[70%] tw-space-y-6 tw-text-center">
        <SectionTitle>Our Services</SectionTitle>
        <p className="mb-0 tw-pt-2 tw-text-[40px] tw-font-semibold tw-leading-[44px] tw-text-primary">
          VTH Trusted Home For Compassionate Veterinary Services
        </p>
        <CustomButton>All Services</CustomButton>
      </div>
    </Container>
  );
}

export default Services;
