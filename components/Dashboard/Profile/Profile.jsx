import Breadcrumb from "@/components/Dashboard/Breadcrumb/Breadcrumb";
import UserProfileEdit from "@/components/Dashboard/Profile/UserProfileEdit";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import React from "react";

const Profile = () => {
  return (
    <DashboardLayout>
      <Breadcrumb pageName="Profile" />
      <div className="tw-mx-auto tw-w-[90%] lg:tw-w-[70%]">
        <UserProfileEdit />
      </div>
    </DashboardLayout>
  );
};

export default Profile;
