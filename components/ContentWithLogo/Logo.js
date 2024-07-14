import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Logo = ({ logos }) => {
  return (
    <div>
      <div className="tw-mb-5 tw-text-center tw-text-xl tw-font-medium tw-text-primary md:tw-mb-5 lg:tw-mb-7 lg:tw-text-[40px] lg:tw-font-semibold lg:tw-leading-[44px] xl:tw-mb-8">
        Partially supported by
      </div>
      <Marquee autoFill className="tw-overflow-y-hidden">
        {logos?.map((logo) => (
          <Image
            key={logo._id}
            className="tw-h-[80px] tw-w-full tw-object-contain tw-px-4 sm:tw-h-[100px] md:tw-px-7 lg:tw-h-[130px] lg:tw-px-10"
            src={logo?.image}
            height={150}
            width={400}
            alt="about-marque-img"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Logo;
