import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

function BannerPage() {
  return (
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
            <Button
              // variant="outline-danger"

              className=" px-3 py-2 border-0"
              style={{
                width: "fit-content",
                backgroundColor: "#e6b9b9",
                color: "black",
              }}
            >
              GET TO KNOW US
            </Button>
            <h1 style={{ fontSize: "56px"}}>Dream Doctors. Terrific Techs.</h1>
            <Button
              variant="danger"
              className="px-4 py-3"
              style={{ borderRadius: "30px", width: "fit-content" }}
            >
              MEET THE TEAM
            </Button>
          </Container>
        </Col>
        <Col md={6} style={{ maxWidth: "100%", overflow: "hidden" }}>
          <Image src="/assets/images/team-banner.png" width={900} height={600} alt="Team Banner" />
        </Col>
      </Row>
    </Container>
  );
}

export default BannerPage;
