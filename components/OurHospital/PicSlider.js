import React from "react";
import { Container } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function PicSlider() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img src="/assets/images/HAH-tour-01.png" />,
    <img src="/assets/images/HAH-tour-02.png" />,
    <img src="/assets/images/HAH-tour-03.png" />,
    <img src="/assets/images/HAH-tour-04.png" />,
    <img src="/assets/images/HAH-tour-05.png" />,
    <img src="/assets/images/HAH-tour-06.png" />,
  ];
  return (
    <>
      <Container
        style={{
          padding: "80px 0",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <h1 style={{ fontSize: "55px" }}>Our Hospital</h1>
        <Container className="px-md-5" style={{}}>
          <Carousel
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
          >
            {items.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </Carousel>
        </Container>
      </Container>
    </>
  );
}

export default PicSlider;
