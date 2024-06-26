import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../UI/Container";
import CustomButton from "../UI/CustomButton";
import SectionTitle from "../UI/SectionTitle";

const PageBanner = ({ headline, title, buttonName, image }) => {
  return (
    <div className="tw-bg-tertiary">
      <Container className="!tw-mt-0 !tw-pr-0 tw-pb-24 tw-pt-7">
        <div className="tw-flex tw-w-full tw-flex-col tw-justify-between tw-gap-y-10 lg:tw-flex-row lg:tw-items-center lg:tw-gap-x-12">
          <div className="tw-space-y-3 md:tw-space-y-5 lg:tw-w-1/2 lg:tw-space-y-8 xl:tw-space-y-10">
            <SectionTitle>{headline}</SectionTitle>
            <p className="tw-text-xl tw-font-medium tw-text-primary md:tw-text-2xl md:tw-font-semibold lg:tw-text-[56px] lg:tw-leading-tight">
              {title}
            </p>
            <div>
              <Link href="#learn-more">
                <CustomButton>{buttonName}</CustomButton>
              </Link>
            </div>
          </div>
          <div className="lg:tw-w-1/2">
            <Image
              className="tw-h-auto tw-max-w-full tw-rounded-s-full tw-object-cover"
              src={image}
              alt="animal"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PageBanner;
