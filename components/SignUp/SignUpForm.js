"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // password show hide toggle
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
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
        <h2 className="text-center">Sign Up Form</h2>
        <FloatingLabel controlId="floatingInput" label="Full Name">
          <Form.Control type="text" placeholder="Enter Full Name" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Email Address">
          <Form.Control type="email" placeholder="Enter Email Address" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Phone Number">
          <Form.Control type="number" placeholder="Enter Phone Number" />
        </FloatingLabel>
        <div className="tw-relative">
          <FloatingLabel controlId="floatingInput" label="Password">
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
            />
          </FloatingLabel>
          <div
            onClick={handleTogglePassword}
            className="tw-text-my-primary tw-absolute tw-bottom-4 tw-right-5 tw-cursor-pointer"
          >
            {showPassword ? (
              <AiFillEye className="tw-text-2xl tw-text-gray-6" />
            ) : (
              <AiFillEyeInvisible className="tw-text-2xl tw-text-gray-6" />
            )}
          </div>
        </div>
        <div className="tw-relative">
          <FloatingLabel controlId="floatingInput" label="Confirm Password">
            <Form.Control
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter Password"
            />
          </FloatingLabel>
          <div
            onClick={handleToggleConfirmPassword}
            className="tw-text-my-primary tw-absolute tw-bottom-4 tw-right-5 tw-cursor-pointer"
          >
            {showConfirmPassword ? (
              <AiFillEye className="tw-text-2xl tw-text-gray-6" />
            ) : (
              <AiFillEyeInvisible className="tw-text-2xl tw-text-gray-6" />
            )}
          </div>
        </div>
        <Button
          variant="primary"
          className="py-2 "
          style={{ borderRadius: "30px" }}
        >
          SIGN UP
        </Button>
        <div className="tw-text-center">
          <span>Already Have An Account?</span>{" "}
          <Link
            href="/login"
            className="tw-text-blue-500t tw-decoration-transparent"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
