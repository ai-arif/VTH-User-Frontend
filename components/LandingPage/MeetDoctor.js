import Image from "next/image";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CustomButton from "../UI/CustomButton";
import SectionTitle from "../UI/SectionTitle";

function MeetDoctor() {
  return (
    <Container>
      <div style={{ padding: "120px 0" }}>
        <Row
          style={{
            backgroundColor: "#e6b9b9",
            borderRadius: "400px",
            overflow: "hidden",
          }}
          className="pt-5 px-5"
        >
          <Col
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <SectionTitle className="tw-bg-secondary">
              MEET YOUR DOCTOR
            </SectionTitle>
            <p className="mb-0 tw-text-[40px] tw-font-semibold tw-leading-[44px]">
              We’re All About Smiling Faces & Wagging Tails
            </p>
            <CustomButton>Book Now</CustomButton>
          </Col>
          <Col md={6} style={{ maxWidth: "90%", overflow: "hidden" }}>
            <Image
              src="/assets/images/meet-doctor.png"
              width={450}
              height={500}
              alt="meet-doc"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default MeetDoctor;
