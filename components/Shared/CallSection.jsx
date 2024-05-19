import Link from "next/link";
import React from "react";
import CustomButton from "../UI/CustomButton";

const CallSection = () => {
  return (
    <div className="tw-my-10 tw-mt-7 tw-space-y-2 tw-rounded-lg tw-bg-white tw-px-5 tw-py-8 tw-text-center md:tw-space-y-4 lg:tw-mt-14 lg:tw-space-y-8 lg:tw-rounded-2xl lg:tw-px-10 lg:tw-py-14">
      <p className="tw-text-base tw-text-primary lg:tw-text-xl lg:tw-font-semibold">
        Have Any Questions?
      </p>
      <div>
        <Link href="tel:270-526-3839">
          <CustomButton>Call 270-526-3839</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default CallSection;
