import AppointmentHome from "@/components/Dashboard/Appointment/AppointmentHome";
import Breadcrumb from "@/components/Dashboard/Breadcrumb/Breadcrumb";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import React from "react";

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const AppointmentPage = () => {
  return (
    <DashboardLayout>
      <Breadcrumb pageName="Appointment" />
      <AppointmentHome />
    </DashboardLayout>
  );
};

export default AppointmentPage;
