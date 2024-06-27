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
import PageBanner from "@/components/Shared/PageBanner";
import React from "react";
import vthBanner from "../../public/assets/images/herobanner.jpg";

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
      <Intro />
      <Team />
      <Services />
      <PicBaner />
      <MeetDoctor />
      <Reviews />
      <OnlinePharmacy />
      <Appointment />
      <Footer />
    </>
  );
}
