import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#faf0f0" }}
        className="py-4"
      >
        <Container className="py-3">
          <NavbarBrand href="#">Brand Logo</NavbarBrand>
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
              <Nav.Link href="#action1">Home</Nav.Link>
              <NavDropdown title="About" id="nav-dropdown">
                <NavDropdown.Item href="#action3">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Our Hospital
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Services" id="nav-dropdown">
                <NavDropdown.Item href="#action3">
                  Alternative Therpaies
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">Boarding</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Large Animal Services
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
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
                className="mx-3 px-4 py-3"
                style={{
                  borderRadius: "30px",
                  borderColor: "#dc3545",
                  color: "#dc3545",
                }}
              >
                <FontAwesomeIcon icon={faPhone} />
                <span className="ms-2">56565757</span>
              </Button>
              <Button
                variant="danger"
                className="px-4 py-3"
                style={{ borderRadius: "30px" }}
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
