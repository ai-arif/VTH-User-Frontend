import Image from "next/image";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

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
              gap: "1.5rem",
            }}
          >
            <Button
              variant="outline-danger"
              className=" px-3 py-2 fw-semibold border-0"
              style={{
                width: "fit-content",
                backgroundColor: "#f0faf5",
                color: "black",
              }}
            >
              MEET YOUR DOCTOR
            </Button>
            <h2>We’re All About Smiling Faces & Wagging Tails</h2>
            <Button
              variant="danger"
              className="px-4 py-3 fw-semibold"
              style={{ borderRadius: "30px", width: "fit-content" }}
            >
              BOOK NOW
            </Button>
          </Col>
          <Col md={6} style={{ maxWidth: "90%", overflow: "hidden" }}>
            <Image
              src="/assets/images/meet-doctor.png"
              width={450}
              height={500}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default MeetDoctor;
