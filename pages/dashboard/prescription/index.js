import Breadcrumb from "@/components/Dashboard/Breadcrumb/Breadcrumb";
import PrescriptionHome from "@/components/Dashboard/Prescription/PrescriptionHome";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import React from "react";

const PrescriptionPage = () => {
  return (
    <DashboardLayout>
      <Breadcrumb pageName="Prescription" />
      <PrescriptionHome />
    </DashboardLayout>
  );
};

export default PrescriptionPage;
