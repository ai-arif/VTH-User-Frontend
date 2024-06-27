import Image from "next/image";
import Link from "next/link";
import React from "react";
import animalBanner from "../../public/assets/images/animal-banner.png";
import Container from "../UI/Container";
import CustomButton from "../UI/CustomButton";
import CustomOutlineButton from "../UI/CustomOutlineButton";

function PicBaner() {
  return (
    <div className="tw-bg-tertiary">
      <Container className="tw-py-16 lg:tw-py-28">
        <div className="tw-relative">
          <Image
            src={animalBanner}
            alt="animal-banner"
            className="tw-h-auto tw-max-w-full tw-rounded-xl lg:tw-rounded-2xl"
          />
          <div className="tw-absolute tw-left-1/2 tw-top-1/2 tw-w-full tw-max-w-[300px] -tw-translate-x-1/2 -tw-translate-y-1/2 tw-transform tw-space-y-4 tw-rounded-2xl tw-bg-white tw-px-6 tw-py-5 tw-text-center lg:tw-left-[70%] lg:tw-max-w-[500px] lg:tw-space-y-8 lg:tw-px-12 lg:tw-py-14">
            <p className="tw-hidden tw-text-base tw-font-medium tw-text-primary md:tw-block md:tw-text-2xl md:tw-font-semibold lg:tw-text-3xl">
              Book your appointment anytime from anywhere
            </p>
            <div className="tw-flex tw-flex-col tw-items-center tw-gap-3 lg:tw-gap-7">
              <Link href="/book-now">
                <CustomButton>Book Online</CustomButton>
              </Link>
              <Link href="tel:270-526-3839">
                <CustomOutlineButton>Call 270-526-3839</CustomOutlineButton>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PicBaner;
