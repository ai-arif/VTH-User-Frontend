import React, { useRef } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
// import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNextBtn from "../UI/SwiperNextBtn";
import SwiperPrevBtn from "../UI/SwiperPrevBtn";

function Reviews() {
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
              <SwiperSlide>
                <Col>
                  <Card
                    style={{
                      padding: "50px 33px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                      justifyItems: "center",
                    }}
                    className="border-0 shadow-sm"
                  >
                    <Card.Img
                      variant="top"
                      src="/assets/images/star-icons.svg"
                      className="w-75 px-3"
                      alt="star-icons"
                    />
                    <Card.Body
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                        justifyContent: "center",
                      }}
                    >
                      <h4 className="tw-text-primary">
                        Trustworthy Veterinary Services
                      </h4>
                      <Card.Text className="tw-text-lg tw-font-light">
                        Professional pet care, trustworthy veterinary services,
                        clean facility, & very friendly staff
                      </Card.Text>
                      <h4 className="tw-text-primary">Chasity Jacobs </h4>
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
                      justifyItems: "center",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="/assets/images/star-icons.svg"
                      className="w-75 px-3"
                    />
                    <Card.Body
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                        justifyContent: "center",
                      }}
                    >
                      <h4 className="tw-text-primary">
                        Polite And Professional
                      </h4>
                      <Card.Text className="tw-text-lg tw-font-light">
                        I always get the best care for my fur babies. Your all
                        polite and professional. I really appreciate all of you.
                      </Card.Text>
                      <h4 className="tw-text-primary">Tonya Hanson</h4>
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
                      justifyItems: "center",
                    }}
                    className="border-0 shadow-sm"
                  >
                    <Card.Img
                      variant="top"
                      src="/assets/images/star-icons.svg"
                      className="w-75 px-3"
                    />
                    <Card.Body
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                        justifyContent: "center",
                      }}
                    >
                      <h4 className="tw-text-primary">
                        They Saved Our Dog Porters Life
                      </h4>
                      <Card.Text className="tw-text-lg tw-font-light">
                        They saved our dog Porters life. Great staff. Thank you
                        so much for taking such good care of him!
                      </Card.Text>
                      <h4 className="tw-text-primary">Abby Kendall </h4>
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
                      justifyItems: "center",
                    }}
                    className="border-0 shadow-sm"
                  >
                    <Card.Img
                      variant="top"
                      src="/assets/images/star-icons.svg"
                      className="w-75 px-3"
                    />
                    <Card.Body
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                        justifyContent: "center",
                      }}
                    >
                      <h4 className="tw-text-primary">
                        They Have Been A Godsend
                      </h4>
                      <Card.Text className="tw-text-lg tw-font-light">
                        They have been a Godsend to our Newfie. We drive an hour
                        and a half round trip to see Dr.
                      </Card.Text>
                      <h4 className="tw-text-primary">Brad Whitlow</h4>
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
                      justifyItems: "center",
                    }}
                    className="border-0 shadow-sm"
                  >
                    <Card.Img
                      variant="top"
                      src="/assets/images/star-icons.svg"
                      className="w-75 px-3"
                    />
                    <Card.Body
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                        justifyContent: "center",
                      }}
                    >
                      <h4 className="tw-text-primary">
                        The New Facility Is Top Notch
                      </h4>
                      <Card.Text className="tw-text-lg tw-font-light">
                        Heritage has a great staff. The new facility is top
                        notch in a convenient easy access location.
                      </Card.Text>
                      <h4 className="tw-text-primary">Carra Cole</h4>
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

export default Reviews;
