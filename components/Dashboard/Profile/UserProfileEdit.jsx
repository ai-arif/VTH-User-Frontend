"use client";
import CustomButton from "@/components/UI/CustomButton";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const UserProfileEdit = () => {
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
    <div>
      <p className="tw-text-lg">Personal Information</p>
      <hr />
      <form className="tw-space-y-6">
        <div className="tw-grid tw-grid-cols-2 tw-gap-6">
          <div className="tw-space-y-4">
            <label className="tw-block">Full Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              defaultValue="Thomas Anree"
              className="tw-h-12 tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-7 tw-shadow tw-shadow-black/20 tw-outline-none tw-outline-offset-0 tw-transition-all placeholder:tw-text-gray-400 focus:tw-border-primary focus:tw-outline-1 focus:tw-outline-primary"
            />
          </div>
          <div className="tw-space-y-4">
            <label className="tw-block">Phone Number</label>
            <input
              type="number"
              placeholder="Enter Your Phone No"
              defaultValue="017002000"
              className="tw-h-12 tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-7 tw-shadow tw-shadow-black/20 tw-outline-none tw-outline-offset-0 tw-transition-all placeholder:tw-text-gray-400 focus:tw-border-primary focus:tw-outline-1 focus:tw-outline-primary"
            />
          </div>
        </div>
        <div className="tw-space-y-4">
          <label className="tw-block">Email Address</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            defaultValue="thomasaneree@gmail.com"
            className="tw-h-12 tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-7 tw-shadow tw-shadow-black/20 tw-outline-none tw-outline-offset-0 tw-transition-all placeholder:tw-text-gray-400 focus:tw-border-primary focus:tw-outline-1 focus:tw-outline-primary"
          />
        </div>
        <div className="tw-space-y-4">
          <label className="tw-block">Old Password</label>
          <input
            type="password"
            placeholder="Type Old Password"
            className="tw-h-12 tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-7 tw-shadow tw-shadow-black/20 tw-outline-none tw-outline-offset-0 tw-transition-all placeholder:tw-text-gray-400 focus:tw-border-primary focus:tw-outline-1 focus:tw-outline-primary"
          />
          <p className="tw-inline-block tw-cursor-pointer tw-text-sm tw-text-blue-500 hover:tw-underline">
            Forgot Password?
          </p>
        </div>
        <div className="tw-grid tw-grid-cols-2 tw-gap-6">
          <div className="tw-relative tw-space-y-4">
            <label className="tw-block">New Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Type New Password"
              className="tw-h-12 tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-7 tw-shadow tw-shadow-black/20 tw-outline-none tw-outline-offset-0 tw-transition-all placeholder:tw-text-gray-400 focus:tw-border-primary focus:tw-outline-1 focus:tw-outline-primary"
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
            <label className="tw-block">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-type New Password"
              className="tw-h-12 tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-7 tw-shadow tw-shadow-black/20 tw-outline-none tw-outline-offset-0 tw-transition-all placeholder:tw-text-gray-400 focus:tw-border-primary focus:tw-outline-1 focus:tw-outline-primary"
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
        <CustomButton className="tw-w-full tw-rounded-md">
          Edit Profile
        </CustomButton>
      </form>
    </div>
  );
};

export default UserProfileEdit;
