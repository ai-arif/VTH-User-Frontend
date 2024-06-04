import AppointmentHome from "@/components/Dashboard/Appointment/AppointmentHome";
import Breadcrumb from "@/components/Dashboard/Breadcrumb/Breadcrumb";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import React from "react";

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.vth_user_token;

  if (!token || token === "null" || token === "undefined") {
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
