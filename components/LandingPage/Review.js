import { Rating, StickerStar } from "@smastrom/react-rating";
import React, { useRef } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
// import "swiper/css";
import "@smastrom/react-rating/style.css";
import "swiper/css/free-mode";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNextBtn from "../UI/SwiperNextBtn";
import SwiperPrevBtn from "../UI/SwiperPrevBtn";

const customStyles = {
  itemShapes: StickerStar,
  activeFillColor: "#fbb614",
  inactiveFillColor: "#DEE1E6",
};

function Reviews({ feedbacks }) {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <Container
      fluid
      className="tw-relative tw-px-0 tw-py-10 md:tw-py-16 lg:tw-py-28"
    >
      <div
        className="tw-bg-tertiary"
        style={{
          position: "absolute",
          zIndex: 1,
          width: "100%",
          height: "50%",
          top: 0,
        }}
      ></div>

      <div
        className="tw-bg-secondary"
        style={{
          position: "absolute",
          zIndex: 1,
          width: "100%",
          height: "50%",
          bottom: 0,
        }}
      ></div>

      <Container
        style={{
          position: "relative", // Add position relative to ensure proper stacking context
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          //   justifyContent: "center",
        }}
      >
        <div className="d-flex flex-column gap-3 flex-lg-row justify-content-between align-items-center">
          <p className="mb-0 tw-pt-1 tw-text-xl tw-font-medium tw-text-primary lg:tw-pt-2 lg:tw-text-[40px] lg:tw-font-semibold lg:tw-leading-[44px]">
            Why People Love Us
          </p>
          <div className="d-flex gap-2 gap-lg-3">
            <SwiperPrevBtn handlePrev={handlePrev} />
            <SwiperNextBtn handleNext={handleNext} />
          </div>
        </div>
        <div>
          <Swiper
            ref={swiperRef}
            navigation={true}
            spaceBetween={10}
            freeMode={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation, FreeMode]}
            className="mySwiper"
          >
            <Row>
              {feedbacks?.map((feedback) => (
                <SwiperSlide key={feedback?._id}>
                  <Col>
                    <Card
                      style={{
                        padding: "30px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                        justifyItems: "center",
                      }}
                      className="border-0 shadow-sm"
                    >
                      <Rating
                        style={{ maxWidth: 120 }}
                        value={feedback?.rating}
                        readOnly
                        itemStyles={customStyles}
                      />
                      <Card.Body
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.75rem",
                          justifyContent: "center",
                        }}
                      >
                        {/* <h4 className="tw-text-primary">
                        They Saved Our Dog Porters Life
                      </h4> */}
                        <Card.Text className="tw-text-sm tw-font-light md:tw-text-base">
                          {feedback?.feedback}
                        </Card.Text>
                        <h5 className="tw-text-primary">
                          {feedback?.user?.fullName}
                        </h5>
                      </Card.Body>
                    </Card>
                  </Col>
                </SwiperSlide>
              ))}
            </Row>
          </Swiper>
        </div>
      </Container>
    </Container>
  );
}

export default Reviews;
