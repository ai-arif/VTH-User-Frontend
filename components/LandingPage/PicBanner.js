import Image from "next/image";
import React from "react";
import animalBanner from "../../public/assets/images/animal-banner.png";
import Container from "../UI/Container";
import CustomButton from "../UI/CustomButton";
import CustomOutlineButton from "../UI/CustomOutlineButton";

function PicBaner() {
  return (
    <div className="tw-bg-tertiary">
      <Container className="tw-py-28">
        <div className="tw-relative">
          <Image
            src={animalBanner}
            alt="animal-banner"
            className="tw-rounded-2xl"
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "70%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              maxWidth: "500px",
            }}
            className="tw-space-y-8 tw-rounded-2xl tw-bg-white tw-px-12 tw-py-14 tw-text-center"
          >
            <h3 className="tw-text-primary">
              A Refreshing New Vet Experience Starts Here
            </h3>
            <div className="tw-flex tw-flex-col tw-items-center tw-gap-7">
              <CustomButton>Book Online</CustomButton>
              <CustomOutlineButton>Call 270-526-3839</CustomOutlineButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PicBaner;
