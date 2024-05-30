import Image from "next/image";
import React from "react";
import promoImg from "../../public/assets/images/promo.png";
import Container from "../UI/Container";
import CustomButton from "../UI/CustomButton";
import SectionTitle from "../UI/SectionTitle";

function OnlinePharmacy() {
  return (
    <div className="tw-bg-tertiary">
      <Container className="tw-relative tw-px-0 tw-py-10 md:tw-py-16 lg:tw-py-28">
        <div className="tw-relative">
          <Image
            src={promoImg}
            alt="promo-banner"
            className="tw-h-auto tw-max-w-full tw-rounded-xl lg:tw-rounded-2xl"
          />
          <div className="tw-absolute tw-left-1/2 tw-top-1/2 tw-flex tw-w-full tw-max-w-[300px] -tw-translate-x-1/2 -tw-translate-y-1/2 tw-transform tw-flex-col  tw-items-center tw-space-y-4 tw-rounded-2xl tw-bg-white tw-px-6 tw-py-5 tw-text-center lg:tw-left-[70%] lg:tw-max-w-[500px] lg:tw-space-y-8 lg:tw-px-12 lg:tw-py-14">
            <SectionTitle>ONLINE PHARMACY</SectionTitle>
            <p className="tw-hidden tw-text-xl tw-font-medium tw-text-primary md:tw-block md:tw-text-2xl md:tw-font-semibold">
              Easily Shop For All Your Pet’s Medications, Food, And Supplies
              From Our Convenient Online Pharmacy!
            </p>
            <CustomButton>Get started</CustomButton>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OnlinePharmacy;
