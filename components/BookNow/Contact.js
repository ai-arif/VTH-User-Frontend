import {
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Row className="gx-4">
        <Col md={4} className="px-5">
          <div
            style={{
              maxWidth: "100%",
              overflow: "hidden",
              borderRadius: "15px",
            }}
          >
            <Image
              src="/assets/images/booknow-dog.jpg"
              alt="Book Now Dog Image"
              width={350}
              height={150}
              objectFit="contain"
            />
          </div>
        </Col>
        <Col style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div style={{ display: "flex", gap: "1rem", paddingTop: "1rem" }}>
            <div
              style={{
                backgroundColor: "#cceff4",
                padding: "0.8rem 1rem",
                borderRadius: "25px",
                height: "fit-content",
              }}
            >
              <FontAwesomeIcon icon={faPhone} size="lg" />
            </div>
            <div>
              <h5>PHONE</h5>
              <p>(270) 526-3839</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div
              style={{
                backgroundColor: "#cceff4",
                padding: "0.8rem 1rem",
                borderRadius: "25px",
                height: "fit-content",
              }}
            >
              <FontAwesomeIcon icon={faClock} size="lg" />
            </div>
            <div>
              <h5>HOURS</h5>
              <p color="#cceff4">
                Saturday: 9:00 AM - 5:00 PM
                <br />
                Sunday: 9:00 AM - 5:00 PM
                <br />
                Monday: 9:00 AM - 5:00 PM
                <br />
                Tuesday: 9:00 AM - 5:00 PM
                <br />
                Wednesday: 9:00 AM - 5:00 PM
                <br />
                Thursday: 9:00 AM - 5:00 PM
                <br />
                Friday: 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </Col>
        <Col style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div
              style={{
                backgroundColor: "#cceff4",
                padding: "0.8rem 1rem",
                borderRadius: "25px",
                height: "fit-content",
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />{" "}
            </div>
            <div>
              <h5>EMAIL</h5>
              <p>director.vth@bau.edu.bd</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div
              style={{
                backgroundColor: "#cceff4",
                padding: "0.8rem 1rem",
                borderRadius: "25px",
                height: "fit-content",
              }}
            >
              <FontAwesomeIcon icon={faLocationDot} size="lg" />
            </div>
            <div>
              <h5>ADDRESS</h5>
              <p>Bangladesh Agricultural University</p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Contact;
