import CompleteMessage from "@/components/UI/CompleteMessage";
import Loader from "@/components/UI/Loader";
import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext } from "react";
import ViewAppointment from "../Appointment/ViewAppointment";

const PrescriptionHome = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    <Loader />;
  }
  return (
    <>
      {user?.isCompleted === false ? <CompleteMessage /> : <ViewAppointment />}
    </>
  );
};

export default PrescriptionHome;
