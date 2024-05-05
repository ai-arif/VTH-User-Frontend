import Link from "next/link";
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
        <span className="tw-w-fit tw-cursor-pointer tw-text-sm tw-text-blue-500 hover:tw-underline">
          Forgot Password?
        </span>
        <Button
          variant="primary"
          className="py-2 "
          style={{ borderRadius: "30px" }}
        >
          LOGIN
        </Button>
        <div className="tw-text-center">
          <span>Don&apos;t Have An Account?</span>{" "}
          <Link
            href="/sign-up"
            className="tw-text-blue-500t tw-decoration-transparent"
          >
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
