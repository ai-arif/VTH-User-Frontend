import Layout from "@/components/Layout";
import Dental from "@/components/Services/Dental/Dental";
import CommonInfo from "@/components/Shared/CommonInfo";
import PageBanner from "@/components/Shared/PageBanner";
import React from "react";
import dentalImg from "../../../public/assets/images/HAH-services-dental.png";

const DentalPage = () => {
  return (
    <Layout>
      {/* page banner */}
      <PageBanner
        headline="dental services"
        title="Don’t Brush Off Dental Care"
        buttonName="Learn More"
        image={dentalImg}
      />
      {/* information section */}
      <div id="learn-more">
        <CommonInfo
          headline="why it matters"
          title="Dental Disease Comes At You Fast"
          withoutButton={true}
        >
          Dental care for pets may seem frivolous at first, but it’s quite the
          opposite. Periodontal disease is the most common dental condition in
          dogs and cats, and most pets are showing symptoms of it by the age of
          three—symptoms that will only worsen over time. But dental disease
          affects more than your pet’s mouth, it profoundly affects their
          overall health and quality of life.
        </CommonInfo>
      </div>
      {/* dental services section */}
      <Dental />
      {/* tips section */}
      <CommonInfo
        headline="tips for a healthy pet"
        title="Preventative Dental Care Starts At Home"
      >
        Believe it or not, pet’s need their teeth brushed too! Frequently
        brushing your pet’s teeth at home is not only the best way to keep their
        mouth (and whole body) healthy, it also increases the time between
        regular dental cleanings. If you’re not sure how to get started, just
        ask a member of our staff—we’re happy to show you how! And yes…they do
        make bacon flavored toothpaste for pets, but we don’t recommend you
        sample it. Trust us on this.
      </CommonInfo>
    </Layout>
  );
};

export default DentalPage;
