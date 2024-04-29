import {
  faCalendarCheck,
  faClipboard,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  NavbarBrand,
  Row,
} from "react-bootstrap";

function Header() {
  const [showStickyContainer, setShowStickyContainer] = useState(false);
  const router = useRouter();

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
              className="py-4"
              style={{
                backgroundColor: "#faf0f0",
                display: "flex",
                fontSize: "1.2rem",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              <FontAwesomeIcon icon={faCalendarCheck} size="xl" /> Appointments
            </Col>
            <Col
              style={{
                backgroundColor: "#e6b9b9",
                display: "flex",
                justifyContent: "center",
                fontSize: "1.2rem",

                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              <FontAwesomeIcon icon={faPhone} size="xl" /> Call Now
            </Col>
            <Col
              style={{
                backgroundColor: "#dc3545",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                fontSize: "1.2rem",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              {" "}
              <FontAwesomeIcon icon={faClipboard} size="xl" color="#fff" />{" "}
              Services
            </Col>
          </Row>
        </Container>
      )}
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#faf0f0" }}
        className="py-3 "
      >
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
              className="mx-5 my-lg-0"
              style={{ maxHeight: "80px", display: "flex", gap: "1rem" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="About" id="nav-dropdown">
                <NavDropdown.Item href="/about/veterinarians">
                  Our Team
                </NavDropdown.Item>

                <NavDropdown.Item href="/about/our-hospital">
                  Our Hospital
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Services" id="nav-dropdown">
                <NavDropdown.Item href="/services/alternative-therapies">
                  Alternative Therapies
                </NavDropdown.Item>
                <NavDropdown.Item href="/services/boarding">
                  Boarding
                </NavDropdown.Item>
                <NavDropdown.Item href="/services/animal-services">
                  Large Animal Services
                </NavDropdown.Item>
                <NavDropdown.Item href="/services/diagnostics">
                  Dental Services
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Client" id="nav-dropdown">
                <NavDropdown.Item href="#action3">
                  New Client Form
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action7">Pharmacy</Nav.Link>
            </Nav>
            <div>
              <Button
                variant="outline-light"
                className="mx-3 px-5 py-3"
                style={{
                  borderRadius: "30px",
                  borderColor: "#dc3545",
                  color: "#dc3545",
                }}
                onClick={() => router.push("/login")}
              >
                {/* <FontAwesomeIcon icon={faPhone} /> */}
                LOGIN
              </Button>
              <Button
                variant="danger"
                className="px-5 py-3"
                style={{ borderRadius: "30px" }}
                onClick={() => router.push("/book-now")}
              >
                BOOK NOW
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
