import { AuthContext } from "@/contexts/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import {
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
import CustomButton from "../UI/CustomButton";
import CustomOutlineButton from "../UI/CustomOutlineButton";

function Header() {
  const [showStickyContainer, setShowStickyContainer] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const { user } = useContext(AuthContext);

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
              href="tel:270-526-3839"
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
                  <Link
                    className="dropdown-item tw-text-primary"
                    href="/services/alternative-therapies"
                  >
                    Alternative Therapies
                  </Link>
                  <Link
                    className="dropdown-item tw-text-primary"
                    href="/services/boarding"
                  >
                    Boarding
                  </Link>
                  <Link
                    className="dropdown-item tw-text-primary"
                    href="/services/animal"
                  >
                    Large Animal Services
                  </Link>
                  <Link
                    className="dropdown-item tw-text-primary"
                    href="/services/dental"
                  >
                    Dental Services
                  </Link>
                  <Link
                    className="dropdown-item tw-text-primary"
                    href="/services/diagnostics"
                  >
                    Diagnostics
                  </Link>
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
      </Navbar>
    </>
  );
}

export default Header;
