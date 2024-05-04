import Breadcrumb from "@/components/Dashboard/Breadcrumb/Breadcrumb";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import React from "react";

const Status = () => {
  return (
    <DashboardLayout>
      <Breadcrumb pageName="Status" />
      <div className="tw-rounded-lg tw-bg-white tw-p-8 tw-shadow">
        <h2 className="tw-py-10 tw-text-center">Status Page...</h2>
      </div>
    </DashboardLayout>
  );
};

export default Status;
