import Layout from "@/components/Layout";
import PageBanner from "@/components/Shared/PageBanner";
import CareTeam from "@/components/Veterinarians/CareTeam";
import Careers from "@/components/Veterinarians/Careers";
import Passion from "@/components/Veterinarians/Passion";
import React from "react";
import teamImg from "../../../public/assets/images/team-banner.png";

function index() {
  return (
    <Layout>
      <PageBanner
        headline="GET TO KNOW US"
        title="Dream Doctors. Terrific Techs"
        buttonName="Meet the team"
        image={teamImg}
      />
      <Passion />
      <CareTeam />
      <Careers />
    </Layout>
  );
}

export default index;
