import Layout from "@/components/Layout";
import Boarding from "@/components/Services/Boarding/Boarding";
import CommonInfo from "@/components/Shared/CommonInfo";
import PageBanner from "@/components/Shared/PageBanner";
import React from "react";
import boardingImg from "../../../public/assets/images/HAH-services-boarding.png";

const BoardingPage = () => {
  return (
    <Layout>
      {/* page banner */}
      <PageBanner
        headline="Boarding"
        title="Sit. Stay. Have Fun!"
        buttonName="Learn More"
        image={boardingImg}
      />
      {/* information section */}
      <div id="learn-more">
        <CommonInfo
          headline="why it matters"
          title="Worry-Free Pet Boarding"
          withoutButton={true}
        >
          As much as we love to take our pets with us everywhere we go, there
          are some cases where that’s just not an option. Heritage Animal
          Hospital provides the boarding services you need to make your trip
          stress-free and your pets happy!
        </CommonInfo>
      </div>
      {/* boarding services section */}
      <Boarding />
      {/* healthy tips section */}
      <CommonInfo
        headline="tips for a healthy pet"
        title="Where Do You Think You’re Going?"
      >
        Separation anxiety stinks—for both you and your pet! To help with
        separation anxiety in your pet, gradually increase the amount of time
        that they spend home alone. When you do leave, make your exit calmly and
        give them a high value treat as you head out the door to create positive
        associations, and try to keep your demeanor calm and quiet upon your
        return. The goal is to make your pet see that it’s no big deal when you
        come and go—and maybe they’ll even get a treat, too! If your pet has
        separation anxiety, we’re ready to help!
      </CommonInfo>
    </Layout>
  );
};

export default BoardingPage;
