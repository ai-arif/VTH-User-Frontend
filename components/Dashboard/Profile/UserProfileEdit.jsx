import CustomButton from "@/components/UI/CustomButton";
import React from "react";

const UserProfileEdit = () => {
  return (
    <div>
      <p>Personal Information</p>
      <hr />
      <form className="tw-space-y-6">
        <div className="tw-grid tw-grid-cols-2 tw-gap-6">
          <div className="tw-space-y-4">
            <label className="tw-block">Full Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              defaultValue="Thomas Anree"
              className="tw-h-12 tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-6 focus:tw-border-primary"
            />
          </div>
          <div className="tw-space-y-4">
            <label className="tw-block">Phone Number</label>
            <input
              type="number"
              placeholder="Enter Your Phone No"
              defaultValue="017002000"
              className="tw-h-12 tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-6 focus:tw-border-primary"
            />
          </div>
        </div>
        <div className="tw-space-y-4">
          <label className="tw-block">Email Address</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            defaultValue="thomasaneree@gmail.com"
            className="tw-h-12 tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-6 focus:tw-border-primary"
          />
        </div>
        <div className="tw-space-y-4">
          <label className="tw-block">Old Password</label>
          <input
            type="password"
            placeholder="Type Old Password"
            className="tw-h-12 tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-6 focus:tw-border-primary"
          />
        </div>
        <div className="tw-grid tw-grid-cols-2 tw-gap-6">
          <div className="tw-space-y-4">
            <label className="tw-block">New Password</label>
            <input
              type="password"
              placeholder="Type New Password"
              className="tw-h-12 tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-6 focus:tw-border-primary"
            />
          </div>
          <div className="tw-space-y-4">
            <label className="tw-block">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-type New Password"
              className="tw-h-12 tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-6 focus:tw-border-primary"
            />
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
