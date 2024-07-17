import Content from "@/components/ContentWithLogo/Content";
import Logo from "@/components/ContentWithLogo/Logo";
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
import axiosInstance from "@/utils/axiosInstance";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import socialImg from "../../public/assets/images/social.png";
import vthBanner from "../../public/assets/images/staffs/group.jpg";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchHomeContent = async () => {
      try {
        const res = await axiosInstance.get("/home");
        setData(res?.data?.data);
      } catch (error) {
        console.error("Failed to fetch prescription:", error);
      }
    };

    fetchHomeContent();
  }, []);

  return (
    <>
      <Header />
      <PageBanner
        headline="SO GLAD YOU'RE HERE"
        title="Welcome to BAU Veterinary Teaching Hospital"
        buttonName="Our Mission"
        image={vthBanner}
      />
      <div className="tw-overflow-hidden">
        <Content content={data?.content} />
        <Logo logos={data?.logos} />
      </div>
      <Intro />
      <Team />
      <Services />
      <PicBaner />
      <MeetDoctor />
      <Reviews feedbacks={data?.feedbacks} />
      <OnlinePharmacy />
      <Appointment />
      <QRSection />
      <Footer />
      <div className="tw-fixed tw-bottom-7 tw-right-7 tw-z-50 lg:tw-bottom-10 lg:tw-right-10">
        <Link target="_blank" href="https://wa.me/+8801729301016">
          <Image src={socialImg} alt="whats'up" />
        </Link>
      </div>
    </>
  );
}
