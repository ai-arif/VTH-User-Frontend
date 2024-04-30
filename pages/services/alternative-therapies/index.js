import Layout from "@/components/Layout";
import Therapies from "@/components/Services/AlternativeTherapies/Therapies";
import CommonInfo from "@/components/Shared/CommonInfo";
import PageBanner from "@/components/Shared/PageBanner";
import React from "react";
import therapyImg from "../../../public/assets/images/HAH-services-therapies-1.png";

const TherapiesPage = () => {
  return (
    <Layout>
      {/* page banner */}
      <PageBanner
        headline="alternative therapies"
        title="Beyond the Basics"
        buttonName="Learn More"
        image={therapyImg}
      />
      {/* information section */}
      <CommonInfo
        headline="why it matters"
        title="We Don’t Wait To Innovate"
        withoutButton={true}
      >
        The veterinary field continues to grow and expand every day. We are
        dedicated to keeping up with those changes and offering our patients and
        clients the latest and best advancements possible. This includes laser
        therapy proven to be beneficial in a variety of applications from wound
        care to the treatment of pain and chronic conditions, and skilled
        veterinary chiropractic services.
      </CommonInfo>
      {/* therapy services section */}
      <Therapies />
      {/* tips section */}
      <CommonInfo
        headline="tips for a healthy pet"
        title="Laser Therapy— Healing From The Inside Out"
        buttonName="Book Now"
      >
        How does it work? We’re glad you asked! Therapeutic lasers involve the
        application of light energy to the affected areas of the body to
        stimulate and enhance the body’s own natural healing abilities.
        Therapeutic lasers decrease both pain and inflammation and increase
        blood flow, which stimulates healing activity on a cellular level. If
        you’re wondering if your pet could benefit from laser therapy, the
        answer is probably yes—just ask us for more information.
      </CommonInfo>
    </Layout>
  );
};

export default TherapiesPage;
