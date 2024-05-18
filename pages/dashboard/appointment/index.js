import AppointmentHome from "@/components/Dashboard/Appointment/AppointmentHome";
import Breadcrumb from "@/components/Dashboard/Breadcrumb/Breadcrumb";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import React from "react";

const AppointmentPage = () => {
  return (
    <DashboardLayout>
      <Breadcrumb pageName="Appointment" />
      <AppointmentHome />
    </DashboardLayout>
  );
};

export default AppointmentPage;
