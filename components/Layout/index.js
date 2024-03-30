import React from "react";
import Header from "../LandingPage/Header";
import Footer from "../LandingPage/Footer";
import Appointment from "../LandingPage/Appointment";

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
