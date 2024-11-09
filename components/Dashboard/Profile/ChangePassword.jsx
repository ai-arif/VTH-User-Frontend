import CustomButton from "@/components/UI/CustomButton";
import axiosInstance from "@/utils/axiosInstance";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const ChangePassword = ({ user }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // password show hide toggle
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (passwordObj) => {
    if (passwordObj.newPassword !== passwordObj.confirmNewPassword) {
      return toast.error("password doesn't match");
    }
    delete passwordObj.confirmNewPassword;

    try {
      passwordObj.id = user._id;
      const response = await axiosInstance.put(
        "/users/change-password",
        passwordObj,
      );
      if (response.data.success) {
        toast.success(response.data.message);
        reset();
      }
    } catch (error) {
      toast.error("Invalid credentials");
      console.log(error);
    }
  };

  return (
    <div className="tw-mt-6 tw-rounded-lg tw-bg-white tw-p-5 tw-shadow lg:tw-mt-10 lg:tw-p-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="tw-space-y-4 lg:tw-space-y-6"
      >
        <div className="tw-space-y-2 lg:tw-space-y-4">
          <label className="tw-block">Old Password</label>
          <input
            {...register("oldPassword", { required: true })}
            type="password"
            placeholder="Type Old Password"
            className="tw-h-8 tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-7 tw-shadow tw-shadow-black/20 tw-outline-none tw-outline-offset-0 tw-transition-all placeholder:tw-text-gray-400 focus:tw-border-primary focus:tw-outline-1 focus:tw-outline-primary lg:tw-h-12"
          />
          {/* <p className="tw-inline-block tw-cursor-pointer tw-text-sm tw-text-blue-500 hover:tw-underline">
            Forgot Password?
          </p> */}
        </div>
        <div className="tw-grid tw-grid-cols-1 tw-gap-4 lg:tw-grid-cols-2 lg:tw-gap-6">
          <div className="tw-relative tw-space-y-4">
            <label className="tw-block">New Password</label>
            <input
              {...register("newPassword", { required: true })}
              type={showPassword ? "text" : "password"}
              placeholder="Type New Password"
              className="tw-h-8 tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-7 tw-shadow tw-shadow-black/20 tw-outline-none tw-outline-offset-0 tw-transition-all placeholder:tw-text-gray-400 focus:tw-border-primary focus:tw-outline-1 focus:tw-outline-primary lg:tw-h-12"
            />
            <div
              onClick={handleTogglePassword}
              type="button"
              className="tw-text-my-primary tw-absolute tw-bottom-3 tw-right-4"
            >
              {showPassword ? (
                <AiFillEye className="tw-text-2xl tw-text-gray-6" />
              ) : (
                <AiFillEyeInvisible className="tw-text-2xl tw-text-gray-6" />
              )}
            </div>
          </div>
          <div className="tw-relative tw-space-y-4">
            <label className="tw-block">Confirm New Password</label>
            <input
              {...register("confirmNewPassword", { required: true })}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-type New Password"
              className="tw-h-8 tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-7 tw-shadow tw-shadow-black/20 tw-outline-none tw-outline-offset-0 tw-transition-all placeholder:tw-text-gray-400 focus:tw-border-primary focus:tw-outline-1 focus:tw-outline-primary lg:tw-h-12"
            />
            <div
              onClick={handleToggleConfirmPassword}
              type="button"
              className="tw-text-my-primary tw-absolute tw-bottom-3 tw-right-4"
            >
              {showConfirmPassword ? (
                <AiFillEye className="tw-text-2xl tw-text-gray-6" />
              ) : (
                <AiFillEyeInvisible className="tw-text-2xl tw-text-gray-6" />
              )}
            </div>
          </div>
        </div>
        <CustomButton className="tw-mt-10 tw-w-full tw-rounded-md">
          Change Password
        </CustomButton>
      </form>
    </div>
  );
};

export default ChangePassword;
