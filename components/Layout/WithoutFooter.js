import React from "react";
import Header from "../LandingPage/Header";

const WithoutFooter = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default WithoutFooter;
