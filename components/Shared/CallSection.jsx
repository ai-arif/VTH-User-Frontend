import Link from "next/link";
import React from "react";
import CustomButton from "../UI/CustomButton";

const CallSection = () => {
  return (
    <div className="tw-mt-14 tw-space-y-8 tw-rounded-2xl tw-bg-white tw-px-10 tw-py-14 tw-text-center">
      <h3 className="tw-text-primary">Have Any Questions?</h3>
      <div>
        <Link href="tel:270-526-3839">
          <CustomButton>Call 270-526-3839</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default CallSection;
