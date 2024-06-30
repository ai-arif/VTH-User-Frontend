import { staffsData } from "@/public/data/staffsData";
import Image from "next/image";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function CareTeam() {
  return (
    <div id="learn-more">
      <Container fluid style={{ padding: "120px 0", position: "relative" }}>
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
          <p className="mb-0 tw-text-[40px] tw-font-semibold tw-leading-[44px] tw-text-primary">
            What Sets Us Apart
          </p>
          <Row gx={3} className="tw-gap-y-9">
            {staffsData?.map((staff) => (
              <Col lg={4} key={staff.id}>
                <Card
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    height: "400px",
                    overflow: "hidden",
                    position: "relative", // Add position relative
                  }}
                  className="border-0 shadow-sm"
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      className="img-fluid tw-scale-125"
                      src={staff?.image}
                      alt={staff?.name}
                      fill
                    />
                  </div>
                  <Card.Body
                    className="text-center"
                    style={{
                      position: "absolute", // Position the Card.Body absolutely
                      zIndex: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      color: "white",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(to bottom, transparent, #171717)", // Apply gradient background
                      padding: "20px", // Add padding for text
                    }}
                  >
                    <h3>{staff?.name}</h3>
                    <Card.Text>{staff?.designation}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default CareTeam;
