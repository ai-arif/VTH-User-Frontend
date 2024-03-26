import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Reviews() {
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
          position: "relative", // Add position relative to ensure proper stacking context
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          //   justifyContent: "center",
        }}
      >
        <h2>Why People Love Us</h2>
        <Row gx={3}>
          <Col md={4}>
            <Card
              style={{
                padding: "50px 33px",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                justifyItems: "center",
              }}
              className="border-0 shadow-sm"
            >
              <Card.Img
                variant="top"
                src="/assets/images/star-icons.svg"
                className="w-75 px-3"
              />
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  justifyContent: "center",
                }}
              >
                <h3>Trustworthy Veterinary Services</h3>
                <Card.Text>
                  Professional pet care, trustworthy veterinary services, clean
                  facility, & very friendly staff{" "}
                </Card.Text>
                <h3>Chasity Jacobs </h3>
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
                justifyItems: "center",
              }}
            >
              <Card.Img
                variant="top"
                src="/assets/images/star-icons.svg"
                className="w-75 px-3"
              />
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  justifyContent: "center",
                }}
              >
                <h3>Polite And Professional</h3>
                <Card.Text>
                  I always get the best care for my fur babies. You're all
                  polite and professional. I really appreciate all of you.
                </Card.Text>
                <h3>Tonya Hanson</h3>
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
                justifyItems: "center",
              }}
              className="border-0 shadow-sm"
            >
              <Card.Img
                variant="top"
                src="/assets/images/star-icons.svg"
                className="w-75 px-3"
              />
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  justifyContent: "center",
                }}
              >
                <h3>They Saved Our Dog Porter's Life</h3>
                <Card.Text>
                  They saved our dog Porter’s life. Great staff. Thank you so
                  much for taking such good care of him!
                </Card.Text>
                <h3>Abby Kendall </h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Reviews;
