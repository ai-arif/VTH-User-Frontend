import Image from "next/image";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Container } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function PicSlider() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    { src: "/assets/images/HAH-tour-01.png", alt: "HAH Tour 1" },
    { src: "/assets/images/HAH-tour-02.png", alt: "HAH Tour 2" },
    { src: "/assets/images/HAH-tour-03.png", alt: "HAH Tour 3" },
    { src: "/assets/images/HAH-tour-04.png", alt: "HAH Tour 4" },
    { src: "/assets/images/HAH-tour-05.png", alt: "HAH Tour 5" },
    { src: "/assets/images/HAH-tour-06.png", alt: "HAH Tour 6" },
  ];

  const itemsWithKeys = items.map((item, index) => (
    <img key={index} src={item.src} alt={item.alt} />
  ));

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
        <p className="tw-text-[56px] tw-font-semibold tw-leading-tight tw-text-primary">
          Our Hospital
        </p>
        <Container className="px-md-5" style={{}}>
          <Carousel
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
          >
            {itemsWithKeys.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </Carousel>
        </Container>
      </Container>
    </>
  );
}

export default PicSlider;
