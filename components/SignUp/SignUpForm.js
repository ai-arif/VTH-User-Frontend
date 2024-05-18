"use client";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { createUserAccount } = useContext(AuthContext);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  // password show hide toggle
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    createUserAccount();
    // createUserAccount(data);
    // try {
    //   const response = await dispatch(createDepartment(data));
    //   if (response?.payload?.success) {
    //     toast.success("Department added successfully!");
    //     reset();
    //     document.getElementById("closeModal").click();
    //   } else {
    //     toast.error("Failed to add department! Please try again later.");
    //   }
    // } catch (error) {
    //   console.error("An error occurred while adding department:", error);
    //   toast.error("An error occurred while adding department. Please try again later.");
    // }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
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
        <FloatingLabel label="Full Name">
          <Form.Control
            {...register("fullName", { required: true })}
            type="text"
            placeholder="Enter Full Name"
          />
        </FloatingLabel>
        {errors.fullName && (
          <small className="text-danger">Please write full name</small>
        )}
        <FloatingLabel label="Phone Number">
          <Form.Control
            {...register("phone", { required: true })}
            type="text"
            placeholder="Enter Phone Number"
          />
        </FloatingLabel>
        {errors.phone && (
          <small className="text-danger">Please write phone number</small>
        )}
        <div className="tw-relative">
          <FloatingLabel label="Password">
            <Form.Control
              {...register("password", { required: true })}
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
            />
          </FloatingLabel>
          {errors.password && (
            <small className="text-danger">Please write password</small>
          )}
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
        {/* <div className="tw-relative">
          <FloatingLabel label="Confirm Password">
            <Form.Control
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter Password"
            />
          </FloatingLabel>
          {errors.confirmPassword && (
            <small className="text-danger">Please write confirm full name</small>
          )}
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
        </div> */}
        <Button
          type="submit"
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
      </form>
    </>
  );
}

export default SignUpForm;
