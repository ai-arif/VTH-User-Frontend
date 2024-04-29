import Image from "next/image";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CustomButton from "../UI/CustomButton";
import SectionTitle from "../UI/SectionTitle";

function HeroBanner() {
  return (
    <>
      <Container fluid className="py-5" style={{ backgroundColor: "#faf0f0" }}>
        <Row>
          <Col md={6} style={{ display: "flex", justifyContent: "center" }}>
            <Container
              className="w-75"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "2rem",
              }}
            >
              <SectionTitle>SO GLAD YOU&apos;RE HERE</SectionTitle>
              <p className="tw-text-[56px] tw-font-semibold tw-leading-none">
                We are building a clinic experience as unique as the pets we
                care for.
              </p>
              <CustomButton>OUR MISSION</CustomButton>
            </Container>
          </Col>
          <Col md={6} style={{ maxWidth: "100%", overflow: "hidden" }}>
            <Image
              src="/assets/images/herobanner.jpg"
              className="tw-rounded-s-full"
              width={900}
              height={600}
              alt="Home Banner"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HeroBanner;
