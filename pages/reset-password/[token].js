import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState, useEffect } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { token } = router.query; // Get the token from query parameters
  const { fetchUser } = useContext(AuthContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (userData) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post(
        `/users/reset-password/${token}`, // Use the token from query parameters
        userData,
      );
      if (response.data.success) {
        toast.success(response.data.message);
        reset();
        setLoading(false);
        router.push("/login"); // Redirect to login after successful password reset
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong! Try again",
      );
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
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
          <h2 className="text-center">New Password</h2>
          <FloatingLabel label="New Password">
            <Form.Control
              type="password" // Use "password" type for password input
              {...register("password", { required: true })} // Register as "password" instead of "email"
              placeholder="Enter New Password"
            />
          </FloatingLabel>
          {errors.password && (
            <small className="text-danger">Please enter a valid password</small>
          )}
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
                Reset Password
              </Button>
            )}
          </div>
          <div className="tw-text-center">
            <span>Already have an account?</span>{" "}
            <Link
              href="/login"
              className="tw-text-blue-500 tw-decoration-transparent"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default ResetPassword;
