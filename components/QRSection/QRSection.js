import Image from "next/image";
import React from "react";
import qrImg from "../../public/assets/images/qr.jpg";
import Container from "../UI/Container";

const QRSection = () => {
  return (
    <Container>
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-3 md:tw-flex-row lg:tw-gap-20">
        <div className="">
          <p className="tw-text-3xl tw-font-medium tw-text-primary lg:tw-text-5xl">
            Donate Here
          </p>
        </div>
        <div className="">
          <Image src={qrImg} alt="Donation QR" />
        </div>
      </div>
    </Container>
  );
};

export default QRSection;
