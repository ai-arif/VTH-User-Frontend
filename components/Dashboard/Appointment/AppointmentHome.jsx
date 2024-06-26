import CompleteMessage from "@/components/UI/CompleteMessage";
import Loader from "@/components/UI/Loader";
import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext } from "react";
import ViewAppointment from "./ViewAppointment";

const AppointmentHome = () => {
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

export default AppointmentHome;
