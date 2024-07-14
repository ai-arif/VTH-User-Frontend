import Link from "next/link";
import React from "react";
import Container from "../UI/Container";
import CustomButton from "../UI/CustomButton";
import SectionTitle from "../UI/SectionTitle";

const CommonInfo = ({ headline, title, children, withoutButton }) => {
  return (
    <Container>
      <div className="tw-mx-auto tw-space-y-2 tw-text-center md:tw-space-y-3 lg:tw-w-[70%] lg:tw-space-y-6">
        <SectionTitle>{headline}</SectionTitle>
        <p className="mb-0 tw-pt-1 tw-text-xl tw-font-medium tw-text-primary lg:tw-pt-2 lg:tw-text-[40px] lg:tw-font-semibold lg:tw-leading-[44px]">
          {title}
        </p>
        <p className="tw-text-sm tw-font-light tw-text-gray-700 lg:tw-text-lg">
          {children}
        </p>
        {!withoutButton && (
          <div>
            <Link href="/book-now">
              <CustomButton>Book Now</CustomButton>
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
};

export default CommonInfo;
