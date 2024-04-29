import React from "react";
import Container from "../UI/Container";
import CustomButton from "../UI/CustomButton";
import SectionTitle from "../UI/SectionTitle";

const CommonInfo = ({ headline, title, children, withoutButton }) => {
  return (
    <Container>
      <div className="tw-mx-auto tw-w-[63%] tw-space-y-6 tw-text-center">
        <SectionTitle>{headline}</SectionTitle>
        <p className="mb-0 tw-pt-2 tw-text-[40px] tw-font-semibold tw-leading-[44px]">
          {title}
        </p>
        <p className="tw-text-lg tw-font-light tw-text-gray-7">{children}</p>
        {!withoutButton && <CustomButton>Book Now</CustomButton>}
      </div>
    </Container>
  );
};

export default CommonInfo;
