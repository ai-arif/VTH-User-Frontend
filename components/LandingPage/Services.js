import React from "react";
import { Button, Container } from "react-bootstrap";
import CustomButton from "../UI/CustomButton";
import SectionTitle from "../UI/SectionTitle";

function Services() {
  return (
    <Container
      className="text-center"
      style={{
        width: "800px",
        padding: "120px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <SectionTitle>Our Services</SectionTitle>
      <p className="mb-0 tw-text-[40px] tw-font-semibold tw-leading-[44px]">
        VTH Trusted Home For Compassionate Veterinary Services
      </p>
      <CustomButton>All Services</CustomButton>
    </Container>
  );
}

export default Services;
