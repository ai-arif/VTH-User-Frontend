import Layout from "@/components/Layout";
import AllServices from "@/components/Services/AllServices/AllServices";
import CommonInfo from "@/components/Shared/CommonInfo";
import PageBanner from "@/components/Shared/PageBanner";
import Container from "@/components/UI/Container";
import CustomButton from "@/components/UI/CustomButton";
import SectionTitle from "@/components/UI/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ServicesImg from "/public/assets/images/animals/sheep.jpg";

const AllServicesPage = () => {
  return (
    <Layout>
      {/* page banner */}
      {/* <PageBanner
        headline="Our Services"
        title="Explore our all services"
        buttonName="Learn More"
        image={ServicesImg}
      /> */}
      <div className="tw-bg-tertiary">
        <Container className="!tw-mt-0 !tw-pr-0 tw-pb-24 tw-pt-7">
          <div className="tw-flex tw-w-full tw-flex-col tw-justify-between tw-gap-y-10 lg:tw-flex-row lg:tw-items-center lg:tw-gap-x-12">
            <div className="tw-space-y-3 md:tw-space-y-5 lg:tw-w-1/2 lg:tw-space-y-8 xl:tw-space-y-10">
              <SectionTitle>Our Services</SectionTitle>
              <p className="tw-text-xl tw-font-medium tw-text-primary md:tw-text-2xl md:tw-font-semibold lg:tw-text-[56px] lg:tw-leading-tight">
                Explore our all services
              </p>
              <div>
                <Link href="#learn-more">
                  <CustomButton>Learn More</CustomButton>
                </Link>
              </div>
            </div>
            <div className="lg:tw-w-1/2">
              <Image
                className="tw-h-auto tw-max-w-full tw-rounded-s-full tw-object-cover"
                src="/assets/images/animals/sheep.jpg"
                alt="animal"
                width={600}
                height={400}
              />
            </div>
          </div>
        </Container>
      </div>
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
