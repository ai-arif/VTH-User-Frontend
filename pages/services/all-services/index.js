import Layout from "@/components/Layout";
import AllServices from "@/components/Services/AllServices/AllServices";
import CommonInfo from "@/components/Shared/CommonInfo";
import PageBanner from "@/components/Shared/PageBanner";
import React from "react";
import ServicesImg from "../../../public/assets/images/animals/sheep.jpg";

const AllServicesPage = () => {
  return (
    <Layout>
      {/* page banner */}
      <PageBanner
        headline="Our Services"
        title="Explore our all services"
        buttonName="Learn More"
        image={ServicesImg}
      />
      {/* information section */}
      <div id="learn-more">
        <CommonInfo
          headline="Explore Our Services"
          title="Comprehensive Care for Every Stage of Animal Health"
          withoutButton={true}
        >
          Discover a full spectrum of veterinary services designed to support
          the health, wellbeing, and longevity of all animals under our care.
          From routine wellness exams and preventive programs to advanced
          diagnostics and specialized treatments, our team is committed to
          delivering compassionate, expert care tailored to each animal’s unique
          needs. Serving Morgantown and surrounding areas, we build lasting
          partnerships with animal owners and caretakers to ensure each animal
          receives the highest quality of life.
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
