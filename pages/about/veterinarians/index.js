import Layout from "@/components/Layout";
import PageBanner from "@/components/Shared/PageBanner";
import CareTeam from "@/components/Veterinarians/CareTeam";
import Careers from "@/components/Veterinarians/Careers";
import Passion from "@/components/Veterinarians/Passion";
import React from "react";
import teamImg from "../../../public/assets/images/staffs/group.jpg";

function index() {
  return (
    <Layout>
      <PageBanner
        headline="GET TO KNOW US"
        title="Compassionate Caregivers Skilled Animal Health Experts"
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
