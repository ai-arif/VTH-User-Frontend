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
        <div className="tw-flex tw-w-full tw-items-center tw-justify-between tw-gap-x-12">
          <div className="tw-space-y-10">
            <SectionTitle>{headline}</SectionTitle>
            <p className="tw-text-[56px] tw-font-semibold tw-leading-tight tw-text-primary">
              {title}
            </p>
            <div>
              <Link href="#learn-more">
                <CustomButton>{buttonName}</CustomButton>
              </Link>
            </div>
          </div>
          <div className="">
            <Image src={image} width={690} height={550} alt="Page Banner" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PageBanner;
