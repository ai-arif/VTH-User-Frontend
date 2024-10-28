import Layout from "@/components/Layout";
import Diagnostics from "@/components/Services/Diagnostics/Diagnostics";
import CommonInfo from "@/components/Shared/CommonInfo";
import PageBanner from "@/components/Shared/PageBanner";
import Container from "@/components/UI/Container";
import CustomButton from "@/components/UI/CustomButton";
import SectionTitle from "@/components/UI/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import diagnosticsImg from "/public/assets/images/animals/cat.jpg";

const DiagnosticsPage = () => {
  return (
    <Layout>
      {/* page banner */}
      {/* <PageBanner
        headline="diagnostics"
        title="Advanced Diagnostics Mean Accelerated Healing"
        buttonName="Learn More"
        image={diagnosticsImg}
      /> */}
      <div className="tw-bg-tertiary">
        <Container className="!tw-mt-0 !tw-pr-0 tw-pb-24 tw-pt-7">
          <div className="tw-flex tw-w-full tw-flex-col tw-justify-between tw-gap-y-10 lg:tw-flex-row lg:tw-items-center lg:tw-gap-x-12">
            <div className="tw-space-y-3 md:tw-space-y-5 lg:tw-w-1/2 lg:tw-space-y-8 xl:tw-space-y-10">
              <SectionTitle>Diagnostics</SectionTitle>
              <p className="tw-text-xl tw-font-medium tw-text-primary md:tw-text-2xl md:tw-font-semibold lg:tw-text-[56px] lg:tw-leading-tight">
                Advanced Diagnostics Mean Accelerated Healing
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
                src="/assets/images/animals/cat.jpg"
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
          headline="why it matters"
          title="They Can’t Tell Us Where It Hurts"
          withoutButton={true}
        >
          Unlike us, our pets can’t simply tell us how they feel or where
          they’re having pain. To make things more complicated, they’re also
          very good at hiding signs of pain or illness. This is why fast,
          top-notch diagnostics are critical—and Heritage Animal Hospital has
          the equipment and expertise to get answers fast.
        </CommonInfo>
      </div>
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
