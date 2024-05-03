import Layout from "@/components/Layout";
import AllServices from "@/components/Services/AllServices/AllServices";
import CommonInfo from "@/components/Shared/CommonInfo";
import PageBanner from "@/components/Shared/PageBanner";
import React from "react";
import ServicesImg from "../../../public/assets/images/HAH-services.png";

const AllServicesPage = () => {
  return (
    <Layout>
      {/* page banner */}
      <PageBanner
        headline="Our Services"
        title="Comprehensive Care Starts Here"
        buttonName="Learn More"
        image={ServicesImg}
      />
      {/* information section */}
      <div id="learn-more">
        <CommonInfo
          headline="we're here to help"
          title="Dedicated To Morgantown Pets"
          withoutButton={true}
        >
          Our team is a family of passionate, dedicated animal lovers known for
          our excellent service to the pets and people of Morgantown and the
          surrounding areas. Our goal is to partner with you to see that your
          pet has as many happy, healthy years as possible. We do that by
          focusing on preventive care, providing comprehensive services, and
          using a customized approach.
        </CommonInfo>
      </div>
      {/* all services section */}
      <AllServices />
      {/* healthy tips section */}
      <CommonInfo headline="new to heritage?" title="Welcoming New Clients">
        Our team is a family of passionate, dedicated animal lovers known for
        our excellent service to the pets and people of Morgantown and the
        surrounding areas. Our goal is to partner with you to see that your pet
        has as many happy, healthy years as possible. We do that by focusing on
        preventive care, providing comprehensive services, and using a
        customized approach.
      </CommonInfo>
    </Layout>
  );
};

export default AllServicesPage;
