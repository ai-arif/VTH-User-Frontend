import ContentWithLogo from "@/components/ContentWithLogo/ContentWithLogo";
import Appointment from "@/components/LandingPage/Appointment";
import Footer from "@/components/LandingPage/Footer";
import Header from "@/components/LandingPage/Header";
import Intro from "@/components/LandingPage/Intro";
import MeetDoctor from "@/components/LandingPage/MeetDoctor";
import OnlinePharmacy from "@/components/LandingPage/OnlinePharmacy";
import PicBaner from "@/components/LandingPage/PicBanner";
import Reviews from "@/components/LandingPage/Review.js";
import Services from "@/components/LandingPage/Services";
import Team from "@/components/LandingPage/Team";
import QRSection from "@/components/QRSection/QRSection";
import PageBanner from "@/components/Shared/PageBanner";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import socialImg from "../../public/assets/images/social.png";
import vthBanner from "../../public/assets/images/staffs/group.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <PageBanner
        headline="SO GLAD YOU'RE HERE"
        title="Welcome to BAU Veterinary Teaching Hospital"
        buttonName="Our Mission"
        image={vthBanner}
      />
      <ContentWithLogo />
      <Intro />
      <Team />
      <Services />
      <PicBaner />
      <MeetDoctor />
      <Reviews />
      <OnlinePharmacy />
      <Appointment />
      <QRSection />
      <Footer />
      <div className="tw-fixed tw-bottom-10 tw-right-10 tw-z-50">
        <Link target="_blank" href="https://wa.me/+8801303009945">
          <Image src={socialImg} alt="whats'up" />
        </Link>
      </div>
    </>
  );
}
