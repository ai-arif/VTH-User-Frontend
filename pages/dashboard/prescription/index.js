import Breadcrumb from "@/components/Dashboard/Breadcrumb/Breadcrumb";
import PrescriptionHome from "@/components/Dashboard/Prescription/PrescriptionHome";
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

const PrescriptionPage = () => {
  return (
    <DashboardLayout>
      <Breadcrumb pageName="Prescription" />
      <PrescriptionHome />
    </DashboardLayout>
  );
};

export default PrescriptionPage;
