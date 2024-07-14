import Link from "next/link";
import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import CustomButton from "../UI/CustomButton";

function Footer() {
  return (
    <>
      <Container
        fluid
        className="tw-bg-primary tw-text-white"
        style={{ padding: "80px 0" }}
      >
        <Container>
          <Row>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.75rem",
              }}
            >
              <Row>
                <Col md={6}>
                  <h3>Hospital Hours</h3>
                  <p>
                    <b>Monday: </b>9:00am-5:00pm
                  </p>
                  <p>
                    <b>Tuesday: </b>9:00am-5:00pm
                  </p>
                  <p>
                    <b>Wednesday: </b>9:00am-5:00pm
                  </p>
                  <p>
                    <b>Thursday: </b>9:00am-5:00pm
                  </p>
                  <p>
                    <b>Friday: </b>9:00am-2:00pm
                  </p>
                  <p>
                    <b>Saturday: </b>9:00am-5:00pm
                  </p>
                  <p>
                    <b>Sunday: </b>9:00am-5:00pm
                  </p>
                </Col>
                <Col md={6}>
                  <h3>Services</h3>
                  <ul className="list-unstyled tw-space-y-2 lg:tw-space-y-3">
                    <li>
                      <Link
                        href="/services/diagnostics"
                        className="text-white text-decoration-none"
                      >
                        Medicine
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/boarding"
                        className="text-white text-decoration-none"
                      >
                        Surgery
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/animal"
                        className="text-white text-decoration-none"
                      >
                        Theriogenology
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/dental"
                        className="text-white text-decoration-none"
                      >
                        Pathology & Necropsy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/diagnostics"
                        className="text-white text-decoration-none"
                      >
                        Hospital & Consultation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/all-services"
                        className="text-white text-decoration-none"
                      >
                        All Services
                      </Link>
                    </li>
                  </ul>

                  <Link
                    className="text-white"
                    href="https://www.facebook.com/profile.php?id=61553678588748"
                  >
                    <FaFacebook size={26} />
                  </Link>
                  <span className="mx-2"> </span>
                  <Link
                    className="text-white"
                    href="https://www.youtube.com/@VeterinaryTeachingHospit-pk1hz"
                  >
                    <FaYoutube size={26} />
                  </Link>
                </Col>
              </Row>
              <div>
                <h3>Contact Us</h3>
                <p>
                  <b>BOOK NOW | director.vth@bau.edu.bd | +88 01729301016</b>
                </p>
              </div>
              <hr />
            </Col>
            <Col
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2.75rem",
              }}
            >
              {" "}
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7248.422605552096!2d90.426658!3d24.719625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f8d52440287%3A0xfcebfe71fc354e6c!2sBangladesh%20Agricultural%20University%20(BAU)!5e0!3m2!1sen!2sus!4v1711824458060!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              {/* <div>
                <h3>Stay in Touch!</h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <InputGroup size="lg" className="mb-3">
                    <Form.Control placeholder="Enter Your email" />
                    <Button variant="btn btn-primary tw-bg-secondary !tw-text-primary hover:tw-bg-deep-secondary border-0">
                      Subscribe
                    </Button>
                  </InputGroup>
                </div>
              </div> */}
              <hr />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="tw-bg-secondary">
        <Container className="py-4">
          <p className="mb-0 tw-flex tw-flex-col tw-items-center tw-justify-between tw-gap-2 tw-text-sm md:tw-flex-row lg:tw-text-base">
            <span>
              © 2024 VTH BAU, Mymensingh, Bangladesh. All Rights Reserved.
            </span>
            <span>
              Developed By-{" "}
              <Link
                href="https://www.devsgiant.com/"
                className="fw-medium text-black text-decoration-none"
                target="_blank"
              >
                DevsGiant
              </Link>
            </span>
          </p>
        </Container>
      </Container>
    </>
  );
}

export default Footer;
