import { AuthContext } from "@/contexts/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import {
  Accordion,
  Col,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { FaCalendarCheck } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { LiaAngleDownSolid, LiaAngleRightSolid } from "react-icons/lia";
import CustomButton from "../UI/CustomButton";
import CustomOutlineButton from "../UI/CustomOutlineButton";

function Header() {
  const [showStickyContainer, setShowStickyContainer] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const { user } = useContext(AuthContext);

  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle accordion based on index
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop < lastScrollTop && window.pageYOffset > 700) {
        // Scrolling up
        setShowStickyContainer(true);
      } else {
        // Scrolling down
        setShowStickyContainer(false);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      {/* top scroll part */}
      <Container
        fluid
        className={`sticky-container d-none d-lg-block ${showStickyContainer ? "show" : ""}`}
      >
        <Row>
          <Col
            className="py-4 tw-bg-tertiary tw-text-primary"
            style={{
              display: "flex",
              fontSize: "1.2rem",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <Link
              className="d-flex gap-2 tw-text-primary tw-decoration-transparent"
              href="/book-now"
            >
              <FaCalendarCheck size={22} /> Appointments
            </Link>
          </Col>
          <Col
            className="tw-bg-secondary tw-text-primary tw-decoration-transparent"
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "1.2rem",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <Link
              className="d-flex gap-2 tw-text-primary tw-decoration-transparent"
              href="tel:+88 01729301016"
            >
              <IoCall size={22} /> Call Now
            </Link>
          </Col>
          <Col
            className="tw-bg-primary"
            style={{
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              fontSize: "1.2rem",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <Link
              href="/services/all-services"
              className="d-flex gap-2 tw-text-white tw-decoration-transparent"
            >
              <FaClipboardList size={22} color="#fff" /> Services
            </Link>
          </Col>
        </Row>
      </Container>
      {/* navbar part */}
      <Navbar
        expand={"lg"}
        className="py-3 py-lg-4 navbar-container tw-bg-tertiary"
      >
        <Container>
          <Link href="/" className="navbar-brand">
            <Image
              src="/assets/images/logo.png"
              alt="VTH"
              width={100}
              height={50}
            />
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                VETERINARY TEACHING HOSPITAL
              </Offcanvas.Title>
              <div className="d-lg-none">
                <Link href="/" className="navbar-brand">
                  <Image
                    src="/assets/images/logo1.png"
                    alt="VTH"
                    width={80}
                    height={40}
                  />
                </Link>
              </div>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 gap-lg-2 mt-lg-2 pe-3">
                <Link className="nav-link tw-text-primary" href="/">
                  Home
                </Link>

                <NavDropdown title="About" id="nav-dropdown">
                  <Link
                    className="dropdown-item tw-text-primary"
                    href="/about/veterinarians"
                  >
                    Our Team
                  </Link>
                  <Link
                    className="dropdown-item tw-text-primary"
                    href="/about/our-hospital"
                  >
                    Our Hospital
                  </Link>
                </NavDropdown>

                <NavDropdown
                  title="Services"
                  id="nav-dropdown"
                  className="services-dropdown"
                >
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Clinical Services</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            Small Animal Medicine, Surgery & Theriogenology
                          </li>
                          <li>
                            Large Animal Medicine, Surgery & Theriogenology
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Diagnostic Services</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Diagnostic Imaging</li>
                          <ul>
                            <li>Radiography</li>
                            <li>Ultrasonography</li>
                            <li>
                              Computed Tomography (CT) and Magnetic Resonance
                              Imaging (MRI) [Upcoming]
                            </li>
                            <li>Endoscopy [Upcoming]</li>
                          </ul>
                          <li>Routine Hematology</li>
                          <li>Serology and biochemistry</li>
                          <li>Milk analysis</li>
                          <li>Post-mortem examination</li>
                          <li>Histopathology and biopsy</li>
                          <li>Microbiology</li>
                          <li>Molecular diagnostics</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Preventive and Wellness Services
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Vaccination and Deworming Programs</li>
                          <li>Routine Health Check-ups</li>
                          <li>Nutritional Consultation</li>
                          <li>Herd Health and Biosecurity Programs</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Teaching and Research</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Teaching and Research</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        Ambulatory and Outreach Services
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Ambulatory and Outreach Services</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        Emergency and Critical Care Services [Upcoming]
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>24/7 Emergency Care and Hospitalization</li>
                          <li>
                            Intensive Care Units for Small and Large Animals
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        Specialty Services [Upcoming]
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Ophthalmology</li>
                          <li>Dentistry</li>
                          <li>Neurology</li>
                          <li>Rehabilitation and Physical Therapy</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Link
                    className="dropdown-item tw-border-b tw-border-l tw-border-r tw-border-solid tw-border-gray-300 tw-text-primary"
                    href="/services/all-services"
                  >
                    View All Services
                  </Link>
                </NavDropdown>

                <Link className="nav-link tw-text-primary" href="/contact-us">
                  Contact Us
                </Link>
              </Nav>

              <div className="d-flex gap-2 gap-lg-4">
                {user?.phone ? (
                  <Link href="/dashboard">
                    <CustomOutlineButton>Dashboard</CustomOutlineButton>
                  </Link>
                ) : (
                  <Link href="/login">
                    <CustomOutlineButton>Login</CustomOutlineButton>
                  </Link>
                )}
                <Link href="/book-now">
                  <CustomButton>Book Now</CustomButton>
                </Link>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* --------- TODO: removed used code when back to previous system (jsx & css) start -------- */}
      {/* <Navbar
        expand={"lg"}
        className="py-3 py-lg-4 navbar-container tw-bg-tertiary"
      >
        <Container>
          <Link href="/" className="navbar-brand">
            <Image
              src="/assets/images/logo.png"
              alt="VTH"
              width={100}
              height={50}
            />
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                VETERINARY TEACHING HOSPITAL
              </Offcanvas.Title>
              <div className="d-lg-none">
                <Link href="/" className="navbar-brand">
                  <Image
                    src="/assets/images/logo1.png"
                    alt="VTH"
                    width={80}
                    height={40}
                  />
                </Link>
              </div>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 gap-lg-2 mt-lg-2 pe-3">
                <Link className="nav-link tw-text-primary" href="/">
                  Home
                </Link>

                <NavDropdown title="About" id="nav-dropdown">
                  <Link
                    className="dropdown-item tw-text-primary"
                    href="/about/veterinarians"
                  >
                    Our Team
                  </Link>
                  <Link
                    className="dropdown-item tw-text-primary"
                    href="/about/our-hospital"
                  >
                    Our Hospital
                  </Link>
                </NavDropdown>

                <NavDropdown title="Services" id="nav-dropdown">
                  <div className="service-item">
                    <p className="dropdown-item tw-mb-0 tw-flex tw-items-center tw-justify-between tw-text-primary">
                      Clinical Services <LiaAngleRightSolid />
                    </p>
                    <div className="sub-menu">
                      <p className="dropdown-item tw-text-primary">
                        Small Animal Medicine, Surgery & Theriogenology
                      </p>
                      <p className="dropdown-item tw-text-primary">
                        Large Animal Medicine, Surgery & Theriogenology
                      </p>
                    </div>
                  </div>

                  <div className="service-item">
                    <p
                      className="dropdown-item tw-mb-0 tw-flex tw-items-center tw-justify-between tw-text-primary"
                      href="/services/diagnostics"
                    >
                      Diagnostic Services <LiaAngleRightSolid />
                    </p>
                    <div className="sub-menu">
                      <p className="dropdown-item tw-text-primary">
                        Diagnostic imaging
                      </p>
                      <div className="tw-pl-6">
                        <p className="dropdown-item tw-text-primary">
                          Radiography
                        </p>
                        <p className="dropdown-item tw-text-primary">
                          Ultrasonography
                        </p>
                        <p className="dropdown-item tw-text-primary">
                          Computed Tomography (CT) and Magnetic <br /> Resonance
                          Imaging (MRI) [Upcoming]
                        </p>
                        <p className="dropdown-item tw-text-primary">
                          Endoscopy [Upcoming]
                        </p>
                      </div>
                      <p className="dropdown-item tw-text-primary">
                        Routine Hematology
                      </p>
                      <p className="dropdown-item tw-text-primary">
                        Serology and biochemistry
                      </p>
                      <p className="dropdown-item tw-text-primary">
                        Milk analysis
                      </p>
                      <p className="dropdown-item tw-text-primary">
                        Post-mortem examination
                      </p>
                      <p className="dropdown-item tw-text-primary">
                        Histopathology and biopsy
                      </p>
                      <p className="dropdown-item tw-text-primary">
                        Microbiology
                      </p>
                      <p className="dropdown-item tw-text-primary">
                        Molecular diagnostics
                      </p>
                    </div>
                  </div>

                  <div className="service-item">
                    <p className="dropdown-item tw-mb-0 tw-flex tw-items-center tw-justify-between tw-text-primary">
                      Preventive and wellness services
                      <LiaAngleRightSolid />
                    </p>
                    <div className="sub-menu">
                      <p className="dropdown-item tw-text-primary">
                        Vaccination and deworming programs
                      </p>
                      <p className="dropdown-item tw-text-primary">
                        Routine health check-ups
                      </p>
                      <p className="dropdown-item tw-text-primary">
                        Nutritional consultation
                      </p>
                      <p className="dropdown-item tw-text-primary">
                        Herd health and biosecurity programs
                      </p>
                    </div>
                  </div>

                  <p className="dropdown-item tw-mb-0 tw-text-primary">
                    Teaching and Research
                  </p>

                  <p className="dropdown-item tw-mb-0 tw-text-primary">
                    Ambulatory and Outreach Services
                  </p>

                  <div className="service-item">
                    <p className="dropdown-item tw-mb-0 tw-flex tw-items-center tw-justify-between tw-text-primary">
                      Emergency and Critical Care Services [Upcoming]
                      <LiaAngleRightSolid />
                    </p>
                    <div className="sub-menu">
                      <p className="dropdown-item tw-text-primary">
                        24/7 emergency care and Hospitalization
                      </p>
                      <p className="dropdown-item tw-text-primary">
                        Intensive Care Units for small and large animals
                      </p>
                    </div>
                  </div>

                  <div className="service-item">
                    <p className="dropdown-item tw-mb-0 tw-flex tw-items-center tw-justify-between tw-text-primary">
                      Specialty Services [Upcoming] <LiaAngleRightSolid />
                    </p>
                    <div className="sub-menu">
                      <p className="dropdown-item tw-text-primary">
                        Ophthalmology
                      </p>
                      <p className="dropdown-item tw-text-primary">Dentistry</p>
                      <p className="dropdown-item tw-text-primary">Neurology</p>
                      <p className="dropdown-item tw-text-primary">
                        Rehabilitation and physical therapy
                      </p>
                    </div>
                  </div>

                  <Link
                    className="dropdown-item tw-text-primary"
                    href="/services/all-services"
                  >
                    View All Services
                  </Link>
                </NavDropdown>

                <Link className="nav-link tw-text-primary" href="/contact-us">
                  Contact Us
                </Link>
              </Nav>

              <div className="d-flex gap-2 gap-lg-4">
                {user?.phone ? (
                  <Link href="/dashboard">
                    <CustomOutlineButton>Dashboard</CustomOutlineButton>
                  </Link>
                ) : (
                  <Link href="/login">
                    <CustomOutlineButton>Login</CustomOutlineButton>
                  </Link>
                )}
                <Link href="/book-now">
                  <CustomButton>Book Now</CustomButton>
                </Link>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar> */}
      {/* --------- TODO: removed used code back to previous system (jsx & css) end  -------- */}
    </>
  );
}

export default Header;
