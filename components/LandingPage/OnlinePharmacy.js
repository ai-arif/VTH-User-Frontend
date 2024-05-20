import Image from "next/image";
import React from "react";
import promoImg from "../../public/assets/images/promo.png";
import Container from "../UI/Container";
import CustomButton from "../UI/CustomButton";
import SectionTitle from "../UI/SectionTitle";

function OnlinePharmacy() {
  return (
    <div className="tw-bg-tertiary">
      <Container className="tw-relative tw-px-0 tw-py-10 md:tw-py-16 lg:tw-py-28">
        <div className="tw-relative">
          <Image
            src={promoImg}
            alt="promo-banner"
            className="tw-h-auto tw-max-w-full tw-rounded-xl lg:tw-rounded-2xl"
          />
          <div className="px-6 py-5 tw-absolute tw-left-1/2 tw-top-1/2 tw-hidden tw-w-full tw-max-w-[500px] -tw-translate-x-1/2 -tw-translate-y-1/2 tw-transform tw-space-y-4 tw-rounded-2xl tw-bg-white tw-text-center sm:tw-block lg:tw-left-[70%] lg:tw-space-y-8 lg:tw-px-12 lg:tw-py-14">
            <SectionTitle>ONLINE PHARMACY</SectionTitle>
            <p className="tw-text-xl tw-font-medium tw-text-primary md:tw-text-2xl md:tw-font-semibold">
              Easily Shop For All Your Pet’s Medications, Food, And Supplies
              From Our Convenient Online Pharmacy!
            </p>
            <CustomButton>Get started</CustomButton>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OnlinePharmacy;
// TODO: Deleted
{
  /* <Container
fluid
style={{
  backgroundColor: "#faf0f0",
  padding: "120px 0",
  position: "relative",
}}
>
<div
  style={{
    width: "100%",
    maxWidth: "1120px",
    margin: "0 auto",
    position: "relative",
    borderRadius: "20px",
  }}
>
  <Image
    src="/assets/images/promo.png"
    alt="Online Pharmacy Promo"
    width={1120}
    height={600}
    style={{ borderRadius: "20px" }}
  />
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      maxWidth: "960px",
      zIndex: "1",
    }}
  >
    <Row>
      <Col xs={0} md={6}></Col>
      <Col xs={12} md={6}>
        <Card
          className="mx-4 px-4 py-4 shadow-sm"
          style={{
            maxWidth: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              alignItems: "center",
            }}
          >
            <SectionTitle>ONLINE PHARMACY</SectionTitle>
            <h3 className="text-center">
              Easily Shop For All Your Pet’s Medications, Food, And
              Supplies From Our Convenient Online Pharmacy!{" "}
            </h3>
            <CustomButton>GET STARTED</CustomButton>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
</div>
</Container> */
}
