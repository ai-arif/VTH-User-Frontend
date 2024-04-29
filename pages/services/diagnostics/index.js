import Layout from "@/components/Layout";
import Diagnostics from "@/components/Services/Diagnostics/Diagnostics";
import CommonInfo from "@/components/Shared/CommonInfo";
import PageBanner from "@/components/Shared/PageBanner";
import React from "react";
import diagnosticsImg from "../../../public/assets/images/HAH-services-diagnostics.png";

const DiagnosticsPage = () => {
  return (
    <Layout>
      {/* page banner */}
      <PageBanner
        headline="diagnostics"
        title="Advanced Diagnostics Mean Accelerated Healing"
        buttonName="Learn More"
        image={diagnosticsImg}
      />
      {/* information section */}
      <CommonInfo
        headline="why it matters"
        title="They Can’t Tell Us Where It Hurts"
        withoutButton={true}
      >
        Unlike us, our pets can’t simply tell us how they feel or where they’re
        having pain. To make things more complicated, they’re also very good at
        hiding signs of pain or illness. This is why fast, top-notch diagnostics
        are critical—and Heritage Animal Hospital has the equipment and
        expertise to get answers fast.
      </CommonInfo>
      {/* diagnostics services section */}
      <Diagnostics />
      {/* tips section */}
      <CommonInfo
        headline="tips for a healthy pet"
        title="Diagnostics—They’re Not Just For Sick Pets!"
      >
        Many people think of things like blood work and x-rays as only being
        needed when a pet is ill or injured, but that’s far from the truth!
        Routine blood work on healthy pets is not only valuable for establishing
        healthy ‘baseline’ values, it’s also vital in the early detection and
        treatment of any health issues. Routine x-rays can be an important part
        of an aging pet’s health care plan to monitor for any arthritic changes,
        as well as evaluating the health of your pet’s heart, lungs, and more.
        Ask us how our diagnostics can help your pet today!
      </CommonInfo>
    </Layout>
  );
};

export default DiagnosticsPage;
