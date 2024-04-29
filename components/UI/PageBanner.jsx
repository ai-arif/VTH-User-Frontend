import Image from "next/image";
import React from "react";
import Container from "./Container";
import CustomButton from "./CustomButton";
import SectionTitle from "./SectionTitle";

const PageBanner = ({ headline, title, buttonName, image }) => {
  return (
    <div className="tw-bg-secondary">
      <Container className="!tw-mt-0 !tw-pr-0 tw-pb-24 tw-pt-7">
        <div className="tw-flex tw-w-full tw-items-center tw-justify-between">
          <div className="tw-space-y-10">
            <SectionTitle>{headline}</SectionTitle>
            <p className="tw-text-[56px] tw-font-semibold tw-leading-none">
              {title}
            </p>
            <CustomButton>{buttonName}</CustomButton>
          </div>
          <div>
            <Image src={image} placeholder="blur" alt="Page Banner" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PageBanner;
