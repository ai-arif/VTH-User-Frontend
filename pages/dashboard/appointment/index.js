import Breadcrumb from "@/components/Dashboard/Breadcrumb/Breadcrumb";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import React from "react";

const AppointmentPage = () => {
  return (
    <DashboardLayout>
      <Breadcrumb pageName="Appointment" />
    </DashboardLayout>
  );
};

export default AppointmentPage;
