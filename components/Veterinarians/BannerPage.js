import Image from "next/image";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CustomButton from "../UI/CustomButton";
import SectionTitle from "../UI/SectionTitle";

function BannerPage() {
  return (
    <Container fluid className="py-5 tw-bg-tertiary">
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
            <SectionTitle>GET TO KNOW US</SectionTitle>
            <p className="tw-text-[56px] tw-font-semibold tw-leading-tight tw-text-primary">
              Dream Doctors. Terrific Techs
            </p>
            <CustomButton>MEET THE TEAM</CustomButton>
          </Container>
        </Col>
        <Col md={6} style={{ maxWidth: "100%", overflow: "hidden" }}>
          <Image
            src="/assets/images/team-banner.png"
            width={900}
            height={600}
            alt="Team Banner"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default BannerPage;
