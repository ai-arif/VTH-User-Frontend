import Image from "next/image";
import React from "react";
import promoImg from "../../public/assets/images/promo.png";
import Container from "../UI/Container";
import CustomButton from "../UI/CustomButton";
import SectionTitle from "../UI/SectionTitle";

function OnlinePharmacy() {
  return (
    <div className="tw-bg-tertiary">
      <Container className="tw-py-28">
        <div className="tw-relative">
          <Image src={promoImg} alt="promo-banner" className="tw-rounded-2xl" />
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
            <SectionTitle>ONLINE PHARMACY</SectionTitle>
            <h3 className="tw-text-center tw-text-primary">
              Easily Shop For All Your Pet’s Medications, Food, And Supplies
              From Our Convenient Online Pharmacy!
            </h3>
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
