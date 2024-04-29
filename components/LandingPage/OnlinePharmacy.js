import Image from "next/image";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CustomButton from "../UI/CustomButton";
import SectionTitle from "../UI/SectionTitle";

function OnlinePharmacy() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#faf0f0",
        padding: "120px 0",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1120px",
          margin: "0 auto",
          position: "relative",
          borderRadius: "20px",
        }}
      >
        <Image
          src="/assets/images/promo.png"
          alt="Online Pharmacy Promo"
          width={1120}
          height={600}
          style={{ borderRadius: "20px" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxWidth: "960px",
            zIndex: "1",
          }}
        >
          <Row>
            <Col xs={0} md={6}></Col>
            <Col xs={12} md={6}>
              <Card
                className="mx-4 px-4 py-4 shadow-sm"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                    alignItems: "center",
                  }}
                >
                  <SectionTitle>ONLINE PHARMACY</SectionTitle>
                  <h3 className="text-center">
                    Easily Shop For All Your Pet’s Medications, Food, And
                    Supplies From Our Convenient Online Pharmacy!{" "}
                  </h3>
                  <CustomButton>GET STARTED</CustomButton>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default OnlinePharmacy;
