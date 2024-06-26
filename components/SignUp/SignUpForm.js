"use client";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { fetchUser } = useContext(AuthContext);
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

  // Password show/hide toggle
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (userData) => {
    if (userData.password !== userData.confirmPassword) {
      return toast.error("password doesn't match");
    }
    delete userData.confirmPassword;

    try {
      setLoading(true);
      const response = await axiosInstance.post("/users/register", userData);
      if (response.data.success) {
        toast.success(response.data.message);
        Cookies.set("vth_user_token", response.data.data.token);
        await fetchUser();
        reset();
        router.push("/");
      }
    } catch (error) {
      toast.error(error.response.data.message || "Something wrong! try again");
      console.log(error);
      setLoading(false);
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
        className="p-3 p-md-4 p-lg-5 shadow"
      >
        <h2 className="text-center">Sign Up Form</h2>
        <FloatingLabel label="Full Name">
          <Form.Control
            {...register("fullName", { required: true })}
            type="text"
            placeholder="Enter Full Name"
          />
        </FloatingLabel>
        <FloatingLabel label="Phone Number">
          <Form.Control
            {...register("phone", { required: true })}
            type="text"
            placeholder="Enter Phone Number"
          />
        </FloatingLabel>

        <div className="tw-relative">
          <FloatingLabel label="Password">
            <Form.Control
              {...register("password", { required: true })}
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
          <FloatingLabel label="Confirm Password">
            <Form.Control
              {...register("confirmPassword", { required: true })}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter Confirm Password"
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

        <div>
          {loading ? (
            <Button
              type="submit"
              variant="primary"
              className="py-2 w-100"
              style={{ borderRadius: "30px" }}
            >
              Loading...
            </Button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              className="py-2 w-100"
              style={{ borderRadius: "30px" }}
            >
              SIGN UP
            </Button>
          )}
        </div>

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
