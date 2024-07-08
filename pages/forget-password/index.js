import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function index() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { redirect } = router.query;
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
        "/users/forgot-password",
        userData,
      );
      if (response.data.success) {
        toast.success(response.data.message);
        reset();
        setLoading(false);
        router.push(redirect || "/");
      }
    } catch (error) {
      toast.error(error.response.data.message || "Something wrong! try again");
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
          <h2 className="text-center">Forget Password</h2>
          <FloatingLabel label="Email Address">
            <Form.Control
              type="text"
              {...register("email", { required: true })}
              placeholder="Enter Email Address"
            />
          </FloatingLabel>
          {errors.phone && (
            <small className="text-danger">Please Enter Valid Email</small>
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
                Send Reset Email
              </Button>
            )}
          </div>
          <div className="tw-text-center">
            <span>Already Have An Account?</span>{" "}
            <Link
              href="/login"
              className="tw-text-blue-500t tw-decoration-transparent"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default index;
