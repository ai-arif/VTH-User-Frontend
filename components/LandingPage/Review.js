import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Reviews() {
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
        <p className="mb-0 tw-pt-1 tw-text-xl tw-font-medium tw-text-primary lg:tw-pt-2 lg:tw-text-[40px] lg:tw-font-semibold lg:tw-leading-[44px]">
          Why People Love Us
        </p>
        <Row gx={3} className="row-gap-3">
          <Col md={4}>
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
                  Professional pet care, trustworthy veterinary services, clean
                  facility, & very friendly staff
                </Card.Text>
                <h4 className="tw-text-primary">Chasity Jacobs </h4>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
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
                <h4 className="tw-text-primary">Polite And Professional</h4>
                <Card.Text className="tw-text-lg tw-font-light">
                  I always get the best care for my fur babies. Your all polite
                  and professional. I really appreciate all of you.
                </Card.Text>
                <h4 className="tw-text-primary">Tonya Hanson</h4>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
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
                  They saved our dog Porters life. Great staff. Thank you so
                  much for taking such good care of him!
                </Card.Text>
                <h4 className="tw-text-primary">Abby Kendall </h4>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Reviews;
