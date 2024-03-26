import React from "react";
import { Button, Container } from "react-bootstrap";

function Services() {
  return (
    <Container
      className="text-center"
      style={{
        width: "800px",
        padding: "120px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Button
        variant="outline-danger"
        className=" px-4 py-2  border-0"
        style={{
          width: "fit-content",
          backgroundColor: "#e6b9b9",
          color: "black",
        }}
      >
        OUR SERVICES
      </Button>
      <h2>Morgantown's Trusted Home For Compassionate Veterinary Services</h2>
      <Button
        variant="danger"
        className="px-5 py-3 fw-semibold"
        style={{ borderRadius: "30px", width: "fit-content" }}
      >
        ALL SERVICES
      </Button>
    </Container>
  );
}

export default Services;
