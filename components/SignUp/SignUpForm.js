"use client";
import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  // Password show/hide toggle
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (userData) => {
    try {
      const response = await axiosInstance.post("/users/register", userData);
      if (response.data.success) {
        Cookies.set("token", response.data?.data?.token);
        toast.success(response.data.message);
        reset();
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
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
          <small className="text-danger">Please enter your full name</small>
        )}
        <FloatingLabel label="Phone Number">
          <Form.Control
            {...register("phone", { required: true })}
            type="text"
            placeholder="Enter Phone Number"
          />
        </FloatingLabel>
        {errors.phone && (
          <small className="text-danger">Please enter your phone number</small>
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
            <small className="text-danger">Please enter your password</small>
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
        <Button
          type="submit"
          variant="primary"
          className="py-2"
          style={{ borderRadius: "30px" }}
        >
          SIGN UP
        </Button>
        <div className="tw-text-center">
          <span>Already Have An Account?</span>{" "}
          <Link
            href="/login"
            className="tw-text-blue-500 tw-decoration-transparent"
          >
            Log In
          </Link>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
