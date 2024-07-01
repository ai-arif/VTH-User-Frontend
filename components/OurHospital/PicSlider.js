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
    {
      src: "/assets/images/hospital/vth-hospital-1.jpg",
      alt: "VTH Hospital",
    },
    { src: "/assets/images/hospital/vth-hospital-2.jpeg", alt: "VTH Hospital" },
    { src: "/assets/images/hospital/vth-hospital-3.jpg", alt: "VTH Hospital" },
    { src: "/assets/images/hospital/vth-hospital-4.jpg", alt: "VTH Hospital" },
    { src: "/assets/images/hospital/vth-hospital-5.jpg", alt: "VTH Hospital" },
    { src: "/assets/images/hospital/vth-hospital-6.jpg", alt: "VTH Hospital" },
    { src: "/assets/images/hospital/vth-hospital-7.jpg", alt: "VTH Hospital" },
    { src: "/assets/images/hospital/vth-hospital-8.jpg", alt: "VTH Hospital" },
  ];

  const itemsWithKeys = items.map((item, index) => (
    <img
      style={{ width: "100%", height: "25%" }}
      className="img-fluid"
      key={index}
      src={item.src}
      alt={item.alt}
    />
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
