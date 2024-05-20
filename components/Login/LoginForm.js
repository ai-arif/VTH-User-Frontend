import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function LoginForm() {
  const router = useRouter();
  const { fetchUser } = useContext(AuthContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (userData) => {
    try {
      const response = await axiosInstance.post("/users/login", userData);
      if (response.data.success) {
        Cookies.set("token", response.data.data.token);
        router.push("/");
        toast.success(response.data.message);
        reset();
        await fetchUser();
      }
    } catch (error) {
      toast.error(error.response.data.message || "Invalid credentials");
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
        className="p-3 p-md-4 p-lg-5 shadow"
      >
        <h2 className="text-center">Login Form</h2>
        <FloatingLabel label="Phone Number">
          <Form.Control
            type="text"
            {...register("phone", { required: true })}
            placeholder="Enter Phone Number"
          />
        </FloatingLabel>
        {errors.phone && (
          <small className="text-danger">Please enter your phone number</small>
        )}
        <FloatingLabel label="Password">
          <Form.Control
            type="password"
            {...register("password", { required: true })}
            placeholder="Enter Password"
          />
        </FloatingLabel>
        {errors.password && (
          <small className="text-danger">Please enter your password</small>
        )}
        <span className="tw-w-fit tw-cursor-pointer tw-text-sm tw-text-blue-500 hover:tw-underline">
          Forgot Password?
        </span>
        <Button
          type="submit"
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
      </form>
    </>
  );
}

export default LoginForm;
