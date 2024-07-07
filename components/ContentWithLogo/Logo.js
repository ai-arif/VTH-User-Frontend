import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Logo = ({ logos }) => {
  return (
    <div>
      <Marquee autoFill className="overflow-y-hidden">
        {logos?.map((logo) => (
          <Image
            key={logo._id}
            className="h-[120px] border-2 border-gray-900 object-contain px-10 py-8 lg:h-[150px] lg:px-20 lg:py-10"
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
