import Breadcrumb from "@/components/Dashboard/Breadcrumb/Breadcrumb";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import React from "react";

const PrescriptionPage = () => {
  return (
    <DashboardLayout>
      <Breadcrumb pageName="Prescription" />
      <div className="tw-rounded-lg tw-bg-white tw-p-8 tw-shadow">
        <h2 className="tw-py-10 tw-text-center">PrescriptionPage Page...</h2>
      </div>
    </DashboardLayout>
  );
};

export default PrescriptionPage;
