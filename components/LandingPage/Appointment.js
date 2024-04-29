import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container } from "react-bootstrap";
import CustomButton from "../UI/CustomButton";

function Appointment() {
  return (
    <Container fluid style={{ backgroundColor: "#e6b9b9" }}>
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
        <div>
          <h3>Ready To </h3>
          <h2>Make an Appointment?</h2>
        </div>
        <div
          className="p-3"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "100px",
            width: "100%",
          }}
        >
          <div
            style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}
          >
            <FontAwesomeIcon icon={faPhone} size="xl" />
            <h3 className="mb-0">270-526-3839 </h3>
          </div>
          <CustomButton>BOOK NOW</CustomButton>
        </div>
      </Container>
    </Container>
  );
}

export default Appointment;
