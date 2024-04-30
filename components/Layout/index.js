import React from "react";
import Appointment from "../LandingPage/Appointment";
import Footer from "../LandingPage/Footer";
import Header from "../LandingPage/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Appointment />
      <Footer />
    </>
  );
}

export default Layout;
