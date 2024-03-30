import React from "react";
import { Button, Container } from "react-bootstrap";

function Passion() {
  return (
    <Container
      className="text-center"
      style={{
        padding: "120px 0",
        width: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <Button
        variant="outline-danger"
        className=" px-4 py-2 border-0"
        style={{
          width: "fit-content",
          backgroundColor: "#e6b9b9",
          color: "black",
        }}
      >
        OUR PASSION
      </Button>
      <h2>Why We Do What We Do</h2>
      <p>
        Our team is a family of passionate, dedicated animal lovers known for
        our excellent service to the pets and people of Morgantown and the
        surrounding areas. Our goal is to partner with you to see that your pet
        has as many happy, healthy years as possible. We do that by focusing on
        preventive care, providing comprehensive services, and using a
        customized approach.
      </p>
    </Container>
  );
}

export default Passion;
