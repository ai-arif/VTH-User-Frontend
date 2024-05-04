import Breadcrumb from "@/components/Dashboard/Breadcrumb/Breadcrumb";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import React from "react";

const Advice = () => {
  return (
    <DashboardLayout>
      <Breadcrumb pageName="Advice" />
      <div className="tw-rounded-lg tw-bg-white tw-p-8 tw-shadow">
        <h2 className="tw-py-10 tw-text-center">Advice Page...</h2>
      </div>
    </DashboardLayout>
  );
};

export default Advice;
