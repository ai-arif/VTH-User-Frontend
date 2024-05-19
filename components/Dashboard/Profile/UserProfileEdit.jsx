"use client";
import CompleteMessage from "@/components/UI/CompleteMessage";
import CustomButton from "@/components/UI/CustomButton";
import Loader from "@/components/UI/Loader";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ChangePassword from "./ChangePassword";

const UserProfileEdit = () => {
  const { user, loading, fetchUser } = useContext(AuthContext);

  const { handleSubmit, register } = useForm({ values: user });

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
                className="tw-h-8 tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-7 tw-shadow tw-shadow-black/20 tw-outline-none tw-outline-offset-0 tw-transition-all placeholder:tw-text-gray-400 focus:tw-border-primary focus:tw-outline-1 focus:tw-outline-primary lg:tw-h-12"
              />
            </div>
            <div className="tw-space-y-2 lg:tw-space-y-4">
              <label className="tw-block">Phone Number</label>
              <input
                {...register("phone", { required: true })}
                type="text"
                placeholder="Enter Your Phone No"
                className="tw-h-8 tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-7 tw-shadow tw-shadow-black/20 tw-outline-none tw-outline-offset-0 tw-transition-all placeholder:tw-text-gray-400 focus:tw-border-primary focus:tw-outline-1 focus:tw-outline-primary lg:tw-h-12"
              />
            </div>
          </div>
          <div className="tw-grid tw-grid-cols-1 tw-gap-4 lg:tw-grid-cols-2 lg:tw-gap-6">
            <div className="tw-space-y-2 lg:tw-space-y-4">
              <label className="tw-block">District</label>
              <select
                {...register("district", { required: true })}
                className="tw-h-8 tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-7 tw-shadow tw-shadow-black/20 tw-outline-none tw-outline-offset-0 tw-transition-all placeholder:tw-text-gray-400 focus:tw-border-primary focus:tw-outline-1 focus:tw-outline-primary lg:tw-h-12"
              >
                <option value="Mymensingh">Mymensingh</option>
              </select>
            </div>
            <div className="tw-space-y-2 lg:tw-space-y-4">
              <label className="tw-block">Upazila</label>
              <select
                {...register("upazila", { required: true })}
                className="tw-h-8 tw-w-full tw-rounded tw-border-0 tw-border-primary tw-bg-whiten tw-px-4 tw-text-gray-7 tw-shadow tw-shadow-black/20 tw-outline-none tw-outline-offset-0 tw-transition-all placeholder:tw-text-gray-400 focus:tw-border-primary focus:tw-outline-1 focus:tw-outline-primary lg:tw-h-12"
              >
                <option value="">Select</option>
                <option value="Mymensingh Sadar">Mymensingh Sadar</option>
                <option value="Trishal">Trishal</option>
                <option value="Bhaluka">Bhaluka</option>
                <option value="Fulbaria">Fulbaria</option>
                <option value="Muktagacha">Muktagacha</option>
                <option value="Gafargaon">Gafargaon</option>
                <option value="Gauripur">Gauripur</option>
                <option value="Ishwarganj">Ishwarganj</option>
                <option value="Nandail">Nandail</option>
                <option value="Tarakanda">Tarakanda</option>
                <option value="Fulpur">Fulpur</option>
                <option value="Haluaghat">Haluaghat</option>
                <option value="Dhubaura">Dhubaura</option>
                <option value="Pagla">Pagla</option>
              </select>
            </div>
          </div>
          <div className="tw-space-y-2 lg:tw-space-y-4">
            <label className="tw-block">Address</label>
            <textarea
              {...register("address", { required: true })}
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
      <ChangePassword />
    </>
  );
};

export default UserProfileEdit;
