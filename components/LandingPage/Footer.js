import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container fluid style={{ padding: "80px 0" }}>
        <Container>
          <Row>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.75rem",
              }}
            >
              <Row>
                <Col md={6}>
                  <h3>Hospital Hours</h3>
                  <p>
                    <b>Monday: </b>8:00am-5:00pm
                  </p>
                  <p>
                    <b>Tuesday: </b>8:00am-5:00pm
                  </p>
                  <p>
                    <b>Wednesday: </b>8:00am-5:00pm
                  </p>
                  <p>
                    <b>Thursday: </b>8:00am-5:00pm
                  </p>
                  <p>
                    <b>Friday: </b>8:00am-5:00pm
                  </p>
                  <p>
                    <b>Saturday: </b>8:00am-12:00pm
                  </p>
                  <p>
                    <b>Closed Sunday & M-F 12:00-1:00pm</b>
                  </p>
                </Col>
                <Col md={6}>
                  <h3>Quick Links</h3>
                  <p>New Clients</p>
                  <p>Careers </p>
                  <p>Our Services </p>
                  <p>Team </p>
                </Col>
              </Row>
              <div>
                <h3>Contact Us</h3>
                <p>
                  <b>
                    BOOK NOW | heritageanimalhospital@yahoo.com | 270-526-3839
                  </b>
                </p>
              </div>
              <hr />
            </Col>
            <Col
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2.75rem",
              }}
            >
              {" "}
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7248.422605552096!2d90.426658!3d24.719625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f8d52440287%3A0xfcebfe71fc354e6c!2sBangladesh%20Agricultural%20University%20(BAU)!5e0!3m2!1sen!2sus!4v1711824458060!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{border: 0}}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div>
                <h3>Stay in Touch!</h3>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <InputGroup className="border-0">
                    <Form.Control
                      className="border-0 w-75"
                      placeholder="ENTER YOUR EMAIL"
                      aria-label="ENTER YOUR EMAIL"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <Button
                    variant="danger"
                    className="px-3 py-2 fw-semibold"
                    style={{ borderRadius: "30px", minWidth: "100px" }}
                  >
                    SIGN UP
                  </Button>
                </div>
              </div>
              <hr />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid style={{ backgroundColor: "#e6b9b9" }}>
        <Container className="py-4">
          <p className="mb-0 text-center">
            Privacy Policy | Accessibility | © Copyright 2024 - Heritage Animal
            Hospital. Veterinary Marketing powered by iVET360.
          </p>
        </Container>
      </Container>
    </>
  );
}

export default Footer;
