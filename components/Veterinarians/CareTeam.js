import Image from "next/image";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function CareTeam() {
  return (
    <>
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
          <h2>Our Veterinary Care Team</h2>
          <Row gx={3}>
            <Col md={4}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
                className="border-0 shadow-sm"
              >
                <div
                  style={{ width: "100%", height: "300", overflow: "hidden" }}
                >
                  <Image src="/assets/images/Anisur.png" alt="Anisur" fill />
                </div>
                <Card.Body
                  className="text-center"
                  style={{
                    position: "absolute",
                    zIndex: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    color: "white",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to bottom, transparent, #000)",
                    padding: "20px",
                  }}
                >
                  <h3>Dr. Anisur Rahman </h3>
                  {/* <Card.Text>Veterinarian</Card.Text> */}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  height: "400px",
                  overflow: "hidden",
                }}
                className="border-0 shadow-sm"
              >
                <div
                  style={{ width: "100%", height: "100%", overflow: "hidden" }}
                >
                  <Image src="/assets/images/Joy.jpg" alt="Joy" fill />
                </div>
                <Card.Body
                  className="text-center"
                  style={{
                    position: "absolute", // Position the Card.Body absolutely
                    zIndex: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    color: "white",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to bottom, transparent, #000)", // Apply gradient background
                    padding: "20px", // Add padding for text
                  }}
                >
                  <h3>Dr. Melody Gayheart </h3>
                  <Card.Text>Veterinarian</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  height: "400px",
                  overflow: "hidden",
                  position: "relative", // Add position relative
                }}
                className="border-0 shadow-sm"
              >
                <div
                  style={{ width: "100%", height: "100%", overflow: "hidden" }}
                >
                  <Image src="/assets/images/Melody.jpeg" alt="Melody" fill />
                </div>
                <Card.Body
                  className="text-center"
                  style={{
                    position: "absolute", // Position the Card.Body absolutely
                    zIndex: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    color: "white",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to bottom, transparent, #000)", // Apply gradient background
                    padding: "20px", // Add padding for text
                  }}
                >
                  <h3>Dr. Melody Gayheart </h3>
                  <Card.Text>Veterinarian</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default CareTeam;
