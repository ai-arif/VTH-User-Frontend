"use client";

import CompleteMessage from "@/components/UI/CompleteMessage";
import CustomButton from "@/components/UI/CustomButton";
import Loader from "@/components/UI/Loader";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import bdData from "../../../public/data.json";
import ChangePassword from "./ChangePassword";

const UserProfileEdit = () => {
  const { user, loading, fetchUser } = useContext(AuthContext);
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");

  const { handleSubmit, register, setValue } = useForm({ values: user });

  // Update division and district state when user data is loaded
  useEffect(() => {
    if (user) {
      setDivision(user.division || "");
      setDistrict(user.district || "");
      setValue("division", user.division || "");
      setValue("district", user.district || "");
      setValue("upazila", user.upazila || "");
    }
  }, [user, setValue]);

  const handleDivisionChange = (e) => {
    setDivision(e.target.value);
    setDistrict("");
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  // Get the list of districts based on the selected division
  const filteredDistricts = bdData?.find(
    (data) => data.division === division,
  )?.districts;

  // Get the list of upazilas based on the selected district
  const filteredUpazilas = filteredDistricts?.find(
    (dist) => dist.district === district,
  )?.upazilas;

  const onSubmit = async (userData) => {
    try {
      const response = await axiosInstance.put("/users/update", userData);
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchUser();
      }
    } catch (error) {
      toast.error("Something Wrong! please try again");
      console.log(error);
    }
  };

  // loader
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {user?.isCompleted === false && <CompleteMessage />}
      <div className="tw-rounded-lg tw-bg-white tw-p-5 tw-text-sm tw-shadow lg:tw-p-8 lg:tw-text-base">
        <p className="tw-text-base lg:tw-text-lg">Personal Information</p>
        <hr />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="tw-space-y-4 lg:tw-space-y-6"
        >
          <div className="tw-grid tw-grid-cols-1 tw-gap-4 lg:tw-grid-cols-2 lg:tw-gap-6">
            <div className="tw-space-y-2 lg:tw-space-y-4">
              <label className="tw-block">Full Name</label>
              <input
                {...register("fullName", { required: true })}
                type="text"
                placeholder="Enter Your Name"
                className="custom-input-field"
              />
            </div>
            <div className="tw-space-y-2 lg:tw-space-y-4">
              <label className="tw-block">Phone Number</label>
              <input
                {...register("phone", { required: true })}
                type="text"
                placeholder="Enter Your Phone No"
                className="custom-input-field"
              />
            </div>
          </div>
          <div className="tw-grid tw-grid-cols-1 tw-gap-4 lg:tw-grid-cols-2 lg:tw-gap-6">
            <div className="tw-space-y-2 lg:tw-space-y-4">
              <label className="tw-block">Division</label>
              <select
                {...register("division", { required: true })}
                value={division}
                onChange={handleDivisionChange}
                className="custom-input-field"
              >
                <option value="">Select</option>
                {bdData?.map((data, idx) => (
                  <option key={idx} value={data.division}>
                    {data.division}
                  </option>
                ))}
              </select>
            </div>
            <div className="tw-space-y-2 lg:tw-space-y-4">
              <label className="tw-block">District</label>
              <select
                {...register("district", { required: true })}
                value={district}
                onChange={handleDistrictChange}
                className="custom-input-field"
              >
                <option value="">Select</option>
                {filteredDistricts?.map((dist, idx) => (
                  <option key={idx} value={dist.district}>
                    {dist.district}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="tw-space-y-2 lg:tw-space-y-4">
            <div className="tw-space-y-2 lg:tw-space-y-4">
              <label className="tw-block">Upazila</label>
              <select
                {...register("upazila", { required: true })}
                className="custom-input-field"
              >
                <option value="">Select</option>
                {filteredUpazilas?.map((upazila, idx) => (
                  <option key={idx} value={upazila}>
                    {upazila}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="tw-space-y-2 lg:tw-space-y-4">
            <label className="tw-block">Email Address</label>
            <input
              {...register("email", { required: false })}
              type="text"
              placeholder="Enter Your Email Address"
              className="custom-input-field"
            />
          </div>
          <div className="tw-space-y-2 lg:tw-space-y-4">
            <label className="tw-block">Address</label>
            <textarea
              {...register("address", { required: false })}
              rows="3"
              placeholder="Write your address"
              className="tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-7 tw-shadow tw-shadow-black/20 tw-outline-none tw-outline-offset-0 tw-transition-all placeholder:tw-text-gray-400 focus:tw-border-primary focus:tw-outline-1 focus:tw-outline-primary"
            />
          </div>
          <CustomButton className="tw-w-full tw-rounded-md">
            Update Profile
          </CustomButton>
        </form>
      </div>
      <ChangePassword user={user} />
    </>
  );
};

export default UserProfileEdit;
