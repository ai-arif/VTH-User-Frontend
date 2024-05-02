import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { Button, Container } from "react-bootstrap";
import CustomButton from "../UI/CustomButton";

function Appointment() {
  return (
    <Container fluid className="tw-bg-secondary">
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
        <div className="tw-text-primary">
          <h4>Ready To </h4>
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
            className="tw-text-primary"
            style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}
          >
            <FontAwesomeIcon icon={faPhone} size="lg" />
            <h4 className="mb-0">270-526-3839 </h4>
          </div>
          <Link href="/book-now">
            <CustomButton>Book Now</CustomButton>
          </Link>
        </div>
      </Container>
    </Container>
  );
}

export default Appointment;
