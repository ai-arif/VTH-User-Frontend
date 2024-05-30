import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CustomButton from "../UI/CustomButton";
import SectionTitle from "../UI/SectionTitle";

function MeetDoctor() {
  return (
    <Container className="d-none d-lg-block">
      <div style={{ padding: "120px 0" }}>
        <Row
          style={{
            borderRadius: "400px",
            overflow: "hidden",
          }}
          className="pt-5 px-5 tw-bg-secondary"
        >
          <Col
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              columnGap: "1rem",
              rowGap: "2rem",
            }}
          >
            <SectionTitle className="tw-bg-tertiary">
              MEET YOUR DOCTOR
            </SectionTitle>
            <p className="mb-0 tw-pt-1 tw-text-xl tw-font-medium tw-text-primary lg:tw-pt-2 lg:tw-text-4xl lg:tw-font-semibold">
              We’re All About Smiling Faces & Wagging Tails
            </p>
            <Link href="/book-now">
              <CustomButton>Book Now</CustomButton>
            </Link>
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
