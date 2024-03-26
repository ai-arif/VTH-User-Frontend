import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Team() {
  return (
    <Container fluid style={{ padding: "120px 0", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          width: "100%",
          height: "50%",
          top: 0,
          backgroundColor: "#faf0f0",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          zIndex: 1,
          width: "100%",
          height: "50%",
          bottom: 0,
          backgroundColor: "#e6b9b9",
        }}
      ></div>

      <Container
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <h2>What Sets Us Apart</h2>
        <Row gx={3}>
          <Col md={4}>
            <Card
              style={{
                padding: "50px 33px",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                alignItems: "center",
              }}
              className="border-0 shadow-sm"
            >
              <Card.Img variant="top" src="/assets/images/team-1.png" />
              <Card.Body
                className="text-center"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                <h3 >Same-Day Appointments</h3>
                <Card.Text>
                  We know that the unexpected happens, and we promise to do our
                  best to accommodate the needs of our patients and clients.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="border-0 shadow-sm"
              style={{
                padding: "50px 33px",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                alignItems: "center",
              }}
            >
              <Card.Img variant="top" src="/assets/images/team-2.png" />
              <Card.Body
                className="text-center"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                <h3 >
                  Local Favorite Veterinarians
                </h3>
                <Card.Text>
                  We’re more than just your veterinary team! We’re your friends,
                  neighbors, and family, and we’re proud to be a part of the
                  Morgantown community.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              style={{
                padding: "50px 33px",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                alignItems: "center",
              }}
              className="border-0 shadow-sm"
            >
              <Card.Img variant="top" src="/assets/images/team-3.png" />
              <Card.Body
                className="text-center"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                <h3 >Urgent Care Available</h3>
                <Card.Text>
                  Though we hope you never need it, we’re available to provide
                  urgent care during our open hours, and we have an on-call
                  veterinarian for after-hours emergencies.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Team;
