import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RequestForm from "./RequestForm";
import Image from "next/image";
import Contact from "./Contact";
import DownloadLinks from "./DownloadLinks";

function BookNow() {
  return (
    <>
      <Container
        style={{
          backgroundImage: "url('/images/lg-blue.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "-500px -1150px",
        }}
      >
        <Row>
          <Col
            md={7}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <h5>Trusted and Amazing PetCare</h5>
            <h2 style={{ fontSize: "58px" }}>Heritage Animal Hospital</h2>
            <RequestForm />
          </Col>
          <Col md={5}>
            <div style={{ maxWidth: "100%", overflow: "hidden" }}>
              <Image
                src="/assets/images/booknow-cat.png"
                width={500}
                height={900}
                objectFit="cover"
              />
            </div>
          </Col>
        </Row>
        <div
          style={{
            padding: "80px 0",
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          <h2 className="text-center">Get in Touch</h2>
          <Contact />
        </div>
      </Container>
      <hr />
      <Container className="py-5">
        <DownloadLinks />
      </Container>
    </>
  );
}

export default BookNow;
