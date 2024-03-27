import Appointment from "@/components/LandingPage/Appointment";
import Header from "@/components/LandingPage/Header";
import HeroBanner from "@/components/LandingPage/HeroBanner";
import Intro from "@/components/LandingPage/Intro";
import MeetDoctor from "@/components/LandingPage/MeetDoctor";
import PicBaner from "@/components/LandingPage/PicBanner";
import Reviews from "@/components/LandingPage/Review.js";
import Services from "@/components/LandingPage/Services";
import Team from "@/components/LandingPage/Team";
import OnlinePharmacy from "@/components/LandingPage/OnlinePharmacy";
import React from "react";
import Footer from "@/components/LandingPage/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Intro />
      <Team />
      <Services />
      <PicBaner />
      <MeetDoctor />
      <Reviews />
      <OnlinePharmacy />
      <Appointment />
      <Footer/>
    </>
  );
}
