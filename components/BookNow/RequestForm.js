import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Modal,
  Row,
} from "react-bootstrap";

function RequestForm() {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        border: "5px solid #b5ebf2",
        borderRadius: "20px",
      }}
      className="px-4 py-5 shadow"
    >
      <h2 className="text-center">Request a Service</h2>
      <FloatingLabel controlId="floatingInput" label="Full Name">
        <Form.Control type="text" placeholder="Enter Full Name" />
      </FloatingLabel>
      <Row>
        <Col>
          <FloatingLabel controlId="floatingInput" label="Email address">
            <Form.Control type="email" placeholder="Enter Email" />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="floatingInput" label="Cell Phone">
            <Form.Control type="number" placeholder="Enter Number" />
          </FloatingLabel>
        </Col>
      </Row>
      <FloatingLabel controlId="floatingInput" label="Pet's Name">
        <Form.Control type="text" placeholder="Enter Pet's Name" />
      </FloatingLabel>
      <Row>
        <Col>
          <FloatingLabel controlId="floatingSelect" label="Species">
            <Form.Select aria-label="Species">
              <option></option>
              <option value="1">Bird</option>
              <option value="1">Cat</option>
              <option value="2">Dog</option>
              <option value="3">Ferret</option>
              <option value="3">Horse</option>
              <option value="3">Rabbit</option>
              <option value="3">Reptile</option>
              <option value="3">Roddent</option>
              <option value="3">Other</option>
            </Form.Select>
          </FloatingLabel>{" "}
        </Col>
        <Col>
          <FloatingLabel controlId="floatingInput" label="Breed">
            <Form.Control type="text" placeholder="Enter Breed" />
          </FloatingLabel>
        </Col>
      </Row>
      <FloatingLabel
        controlId="floatingSelect"
        label="Reason's for Appointment"
      >
        <Form.Select
          aria-label="Reason's for Appointment"
          onClick={toggleModal}
        />
      </FloatingLabel>{" "}
      <Modal show={showModal} onHide={toggleModal} size="lg" style={{}}>
        <Modal.Header closeButton className="border-0 pt-4 px-4"></Modal.Header>
        <Modal.Body
          className="px-5"
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <h3>Appointment Reasons</h3>
          <Form
            style={{
              maxHeight: "300px",
              overflowX: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
            }}
          >
            <div>
              <Form.Check type="checkbox" label="Annual Comprehensive Exam" />
              <Form.Text>Please bring fresh fecal sample. </Form.Text>
            </div>
            <Form.Check type="checkbox" label="Vaccinations" />
            <div>
              <Form.Check type="checkbox" label="New Client/Patient Visit" />
              <Form.Text>Please provide previous medical records. </Form.Text>
            </div>
            <div>
              <Form.Check type="checkbox" label="Sick Pet Exam" />
              <Form.Text>
                If urgent, please call us ASAP. Otherwise, please enter notes
                about illness and urgency.{" "}
              </Form.Text>
            </div>
            <div>
              <Form.Check type="checkbox" label="Dental" />
              <Form.Text>
                Drop off is between 8:00 AM - 8:30 AM. No food after midnight
                the night before, water is okay.{" "}
              </Form.Text>
            </div>
            <div>
              <Form.Check type="checkbox" label="Surgery" />
              <Form.Text>
                Drop off is between 8:00 AM - 8:30 AM. No food after midnight
                the night before, water is okay.
              </Form.Text>
            </div>
            <Form.Check type="checkbox" label="Nail Trim" />
            <div>
              <Form.Check type="checkbox" label="Overnight Boarding" />
              <Form.Text>
                Must be current on vaccines, heartworm test, intestinal parasite
                screening, and canine influenza vaccine.{" "}
              </Form.Text>
            </div>
            <div>
              <Form.Check type="checkbox" label="Other" />
              <Form.Text>
                Please enter reason for appointments in the Notes Section{" "}
              </Form.Text>
            </div>
            <div>
              <Form.Check type="checkbox" label="Medification Refill" />
              <Form.Text>
                Refill Requests will be processed in 24-48 hours. Enter
                Medifications in the Notes Section{" "}
              </Form.Text>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0 px-5">
          <Button
            variant="secondary"
            onClick={toggleModal}
            className="px-5 py-3"
            style={{ borderRadius: "30px" }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="px-5 py-3"
            style={{ borderRadius: "30px" }}
          >
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
      <Form.Control type="file" size="lg" />
      <FloatingLabel controlId="floatingTextarea2" label="Notes">
        <Form.Control
          as="textarea"
          placeholder="Notes"
          style={{ height: "100px" }}
        />
      </FloatingLabel>
      <Button
        variant="primary"
        className="py-2 "
        style={{ borderRadius: "30px" }}
      >
        REQUEST
      </Button>
    </div>
  );
}

export default RequestForm;
