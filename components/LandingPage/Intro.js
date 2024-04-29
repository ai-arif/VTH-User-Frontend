import React from "react";
import { Button, Container } from "react-bootstrap";
import CustomButton from "../UI/CustomButton";
import SectionTitle from "../UI/SectionTitle";

function Intro() {
  return (
    <>
      <Container
        className="text-center"
        style={{
          padding: "120px 0",
          width: "800px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <SectionTitle>Our mission</SectionTitle>
        <h1 className="tw-font-semibold">
          Premier Pet Care With A Personal Touch
        </h1>
        <p className="tw-text-gray-6">
          Our team is a family of passionate, dedicated animal lovers known for
          our excellent service to the pets and people of Mymensingh and the
          surrounding areas. Our goal is to partner with you to see that your
          pet has as many happy, healthy years as possible. We do that by
          focusing on preventive care, providing comprehensive services, and
          using a customized approach.
        </p>
        <CustomButton>Book Now</CustomButton>
      </Container>
    </>
  );
}

export default Intro;
