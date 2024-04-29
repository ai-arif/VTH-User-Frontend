import Info from "@/components/AlternativeTherapies/Info";
import Therapies from "@/components/AlternativeTherapies/Therapies";
import Tips from "@/components/AlternativeTherapies/Tips";
import Layout from "@/components/Layout";
import PageBanner from "@/components/UI/PageBanner";
import React from "react";
import therapyImg from "../../../public/assets/images/HAH-services-therapies-1.png";

const TherapiesPage = () => {
  return (
    <Layout>
      <PageBanner
        headline="alternative therapies"
        title="Beyond the Basics"
        buttonName="Learn More"
        image={therapyImg}
      />
      <Info />
      <Therapies />
      <Tips />
    </Layout>
  );
};

export default TherapiesPage;
