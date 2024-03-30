import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

function LoginForm() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.75rem",
          border: "5px solid #b5ebf2",
          borderRadius: "20px",
        }}
        className="px-5 py-5 shadow"
      >
        <h2 className="text-center">Login Form</h2>
        <FloatingLabel controlId="floatingInput" label="Phone Number">
          <Form.Control type="number" placeholder="Enter Phone Number" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Password">
          <Form.Control type="password" placeholder="Enter Password" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Confirm Password">
          <Form.Control type="password" placeholder="Confirm Password" />
        </FloatingLabel>
        <Button
          variant="primary"
          className="py-2 "
          style={{ borderRadius: "30px" }}
        >
          LOGIN
        </Button>
      </div>
    </>
  );
}

export default LoginForm;
