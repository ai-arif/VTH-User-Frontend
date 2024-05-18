import { AuthContext } from "@/contexts/AuthProvider";
import {
  faCalendarCheck,
  faClipboard,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import {
  Col,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  NavbarBrand,
  Row,
} from "react-bootstrap";
import CustomButton from "../UI/CustomButton";
import CustomOutlineButton from "../UI/CustomOutlineButton";

function Header() {
  const [showStickyContainer, setShowStickyContainer] = useState(false);
  const router = useRouter();
  const { user } = useContext(AuthContext);
  // console.log(user.phone);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 800) {
        setShowStickyContainer(true);
      } else {
        setShowStickyContainer(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showStickyContainer && (
        <Container fluid className="sticky-top">
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
                className="tw-text-primary tw-decoration-transparent"
                href="/book-now"
              >
                <FontAwesomeIcon icon={faCalendarCheck} size="lg" />{" "}
                Appointments
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
                className="tw-text-primary tw-decoration-transparent"
                href="tel:270-526-3839"
              >
                <FontAwesomeIcon icon={faPhone} size="lg" /> Call Now
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
                className="tw-text-white tw-decoration-transparent"
              >
                <FontAwesomeIcon icon={faClipboard} size="lg" color="#fff" />{" "}
                Services
              </Link>
            </Col>
          </Row>
        </Container>
      )}
      <Navbar expand="lg" className="py-3 tw-bg-tertiary">
        <Container className="py-3">
          <NavbarBrand href="/">
            <Image
              src="/assets/images/logo.png"
              alt="Apple App Store Badge"
              width={150}
              height={60}
            />
          </NavbarBrand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Nav
              className="mx-5 my-lg-0 tw-text-primary"
              style={{ maxHeight: "80px", display: "flex", gap: "1rem" }}
              navbarScroll
            >
              <Nav.Link className="tw-text-primary" href="/">
                Home
              </Nav.Link>
              <NavDropdown
                className="tw-text-primary"
                title="About"
                id="nav-dropdown"
              >
                <NavDropdown.Item
                  className="tw-text-primary"
                  href="/about/veterinarians"
                >
                  Our Team
                </NavDropdown.Item>

                <NavDropdown.Item
                  className="tw-text-primary"
                  href="/about/our-hospital"
                >
                  Our Hospital
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Services" id="nav-dropdown">
                <NavDropdown.Item
                  className="tw-text-primary"
                  href="/services/alternative-therapies"
                >
                  Alternative Therapies
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="tw-text-primary"
                  href="/services/boarding"
                >
                  Boarding
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="tw-text-primary"
                  href="/services/animal"
                >
                  Large Animal Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="tw-text-primary"
                  href="/services/dental"
                >
                  Dental Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="tw-text-primary"
                  href="/services/diagnostics"
                >
                  Diagnostics
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="tw-text-primary"
                  href="/services/all-services"
                >
                  View All Services
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="tw-text-primary" href="/contact-us">
                Contact Us
              </Nav.Link>
            </Nav>
            <div className="tw-flex tw-gap-4">
              <Link href="/login">
                <CustomOutlineButton>Login</CustomOutlineButton>
              </Link>
              <Link href="/book-now">
                <CustomButton>Book Now</CustomButton>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
