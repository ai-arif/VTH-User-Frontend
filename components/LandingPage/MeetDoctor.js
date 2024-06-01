import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CustomButton from "../UI/CustomButton";
import SectionTitle from "../UI/SectionTitle";

function MeetDoctor() {
  return (
    <Container className="">
      <div style={{ padding: "120px 0" }}>
        <Row
          style={{
            overflow: "hidden",
          }}
          className="pt-5 px-5 pb-5 pb-lg-0 tw-rounded-lg tw-bg-secondary md:tw-rounded-[400px]"
        >
          <Col
            lg={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              columnGap: "1rem",
            }}
            className="align-items-center align-items-lg-start row-gap-2 row-gap-lg-4"
          >
            <SectionTitle className="tw-bg-tertiary">
              MEET YOUR DOCTOR
            </SectionTitle>
            <p className="mb-0 tw-pt-1 tw-text-center tw-text-xl tw-font-medium tw-text-primary lg:tw-pt-2 lg:tw-text-left lg:tw-text-4xl lg:tw-font-semibold">
              We’re All About Smiling Faces & Wagging Tails
            </p>
            <Link href="/book-now">
              <CustomButton>Book Now</CustomButton>
            </Link>
          </Col>
          <Col
            md={6}
            style={{ maxWidth: "90%", overflow: "hidden" }}
            className="d-none d-lg-block"
          >
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
