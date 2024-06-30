import Layout from "@/components/Layout";
import Animal from "@/components/Services/Animal/Animal";
import CommonInfo from "@/components/Shared/CommonInfo";
import PageBanner from "@/components/Shared/PageBanner";
import React from "react";
import animalImg from "../../../public/assets/images/animals/cow.jpg";

const AnimalPage = () => {
  return (
    <Layout>
      {/* page banner */}
      <PageBanner
        headline="large animal services"
        title="Large Animal Services"
        buttonName="Learn More"
        image={animalImg}
      />
      {/* information section */}
      <div id="learn-more">
        <CommonInfo
          headline="why it matters"
          title="Large And In Charge"
          withoutButton={true}
        >
          Cats and dogs may get most of the attention, but horses, cattle, and
          goats require the same high level of care as traditional household
          pets do to live long, happy lives. If you need a veterinary partner
          that is experienced in large animal medicine and can work with you to
          keep your equine, bovine, and caprine friends healthy, you’ve found it
          right here.
        </CommonInfo>
      </div>
      {/* animal services section */}
      <Animal />
      {/* healthy tips section */}
      <CommonInfo
        headline="tips for a healthy pet"
        title="Straight From The Horse’s Mouth"
      >
        A horse’s teeth continue to grow throughout their life, and having your
        horse’s teeth checked once or twice a year and floated (filed) as needed
        is an essential part of their care. Teeth that wear unevenly can cause
        sharp points, which can lead to pain or difficulty chewing. Signs of
        dental problems in horses can include bad breath, trouble chewing, and
        discomfort from their bit or noseband. If left untreated, dental issues
        can lead to larger issues like colic—ask us how we can help keep your
        horse healthy today!
      </CommonInfo>
    </Layout>
  );
};

export default AnimalPage;
