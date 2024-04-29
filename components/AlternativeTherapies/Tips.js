import React from "react";
import Container from "../UI/Container";
import CustomButton from "../UI/CustomButton";
import SectionTitle from "../UI/SectionTitle";

const Tips = () => {
  return (
    <Container>
      <div className="tw-mx-auto tw-w-2/3 tw-space-y-6 tw-text-center">
        <SectionTitle>TIPS FOR A HEALTHY PET</SectionTitle>
        <p className="mb-0 tw-pt-2 tw-text-[40px] tw-font-semibold tw-leading-[44px]">
          Laser Therapy— Healing From The Inside Out
        </p>
        <p className="tw-text-lg tw-font-light tw-text-gray-7">
          How does it work? We’re glad you asked! Therapeutic lasers involve the
          application of light energy to the affected areas of the body to
          stimulate and enhance the body’s own natural healing abilities.
          Therapeutic lasers decrease both pain and inflammation and increase
          blood flow, which stimulates healing activity on a cellular level. If
          you’re wondering if your pet could benefit from laser therapy, the
          answer is probably yes—just ask us for more information.
        </p>
        <CustomButton>Book Now</CustomButton>
      </div>
    </Container>
  );
};

export default Tips;
