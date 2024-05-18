import Breadcrumb from "@/components/Dashboard/Breadcrumb/Breadcrumb";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import React from "react";

const PrescriptionPage = () => {
  return (
    <DashboardLayout>
      <Breadcrumb pageName="Prescription" />
    </DashboardLayout>
  );
};

export default PrescriptionPage;
