import Layout from "@/components/Layout";
import BannerPage from "@/components/Veterinarians/BannerPage";
import CareTeam from "@/components/Veterinarians/CareTeam";
import Careers from "@/components/Veterinarians/Careers";
import Passion from "@/components/Veterinarians/Passion";
import React from "react";

function index() {
  return (
    <Layout>
        <BannerPage/>
        <Passion/>
        <CareTeam/>
        <Careers/>
    </Layout>
  );
}

export default index;
