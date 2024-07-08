import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Logo = ({ logos }) => {
  return (
    <div>
      <Marquee autoFill className="tw-overflow-y-hidden">
        {logos?.map((logo) => (
          <Image
            key={logo._id}
            className="tw-tw-object-contain tw-h-[100px] tw-w-full tw-px-10 lg:tw-h-[150px]"
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
