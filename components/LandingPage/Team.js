import React, { useRef } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNextBtn from "../UI/SwiperNextBtn";
import SwiperPrevBtn from "../UI/SwiperPrevBtn";

function Team() {
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
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <div className="d-flex flex-column gap-3 flex-lg-row justify-content-between align-items-center">
          <p className="mb-0 tw-pt-1 tw-text-xl tw-font-medium tw-text-primary lg:tw-pt-2 lg:tw-text-[40px] lg:tw-font-semibold lg:tw-leading-[44px]">
            What Sets Us Apart
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
              <SwiperSlide>
                <Col>
                  <Card
                    style={{
                      padding: "50px 33px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                      alignItems: "center",
                    }}
                    className="border-0 shadow-sm"
                  >
                    <Card.Img variant="top" src="/assets/images/team-1.png" />
                    <Card.Body
                      className="text-center"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                        alignItems: "center",
                      }}
                    >
                      <h3 className="tw-text-primary">Same-Day Appointments</h3>
                      <Card.Text className="tw-text-lg tw-font-light">
                        We know that the unexpected happens, and we promise to
                        do our best to accommodate the needs of our patients and
                        clients.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </SwiperSlide>

              <SwiperSlide>
                <Col>
                  <Card
                    className="border-0 shadow-sm"
                    style={{
                      padding: "50px 33px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                      alignItems: "center",
                    }}
                  >
                    <Card.Img variant="top" src="/assets/images/team-2.png" />
                    <Card.Body
                      className="text-center"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                        alignItems: "center",
                      }}
                    >
                      <h3 className="tw-text-primary">
                        Local Favorite Veterinarians
                      </h3>
                      <Card.Text className="tw-text-lg tw-font-light">
                        We’re more than just your veterinary team! We’re your
                        friends, neighbors, and family, and we’re proud to be a
                        part of the Mymensingh community.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </SwiperSlide>

              <SwiperSlide>
                <Col>
                  <Card
                    style={{
                      padding: "50px 33px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                      alignItems: "center",
                    }}
                    className="border-0 shadow-sm"
                  >
                    <Card.Img variant="top" src="/assets/images/team-3.png" />
                    <Card.Body
                      className="text-center"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                        alignItems: "center",
                      }}
                    >
                      <h3 className="tw-text-primary">Urgent Care Available</h3>
                      <Card.Text className="tw-text-lg tw-font-light">
                        Though we hope you never need it, we’re available to
                        provide urgent care during our open hours, and we have
                        an on-call veterinarian for after-hours emergencies.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </SwiperSlide>
            </Row>
          </Swiper>
        </div>
      </Container>
    </Container>
  );
}

export default Team;
