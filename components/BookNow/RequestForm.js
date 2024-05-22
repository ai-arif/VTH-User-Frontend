import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import React, { useContext, useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";

function RequestForm() {
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("fullName", data.fullName);
      formData.append("phone", data.phone);
      formData.append("petName", data.petName);
      formData.append("species", data.species);
      formData.append("breed", data.breed);
      formData.append("notes", data.notes);

      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
      }

      Object.keys(data).forEach((key) => {
        if (typeof data[key] === "boolean" && data[key]) {
          formData.append(key, data[key]);
        }
      });

      const response = await axiosInstance.post("/appointment", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
        <Form.Control
          type="text"
          {...register("fullName", { required: true })}
          placeholder="Enter Full Name"
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Cell Phone">
        <Form.Control
          value={user?.phone}
          readOnly
          type="text"
          {...register("phone", { required: true })}
          placeholder="Enter Number"
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Pet's Name">
        <Form.Control
          type="text"
          {...register("petName", { required: true })}
          placeholder="Enter Pet's Name"
        />
      </FloatingLabel>
      <Row>
        <Col>
          <FloatingLabel controlId="floatingSelect" label="Species">
            <Form.Select
              {...register("species", { required: true })}
              aria-label="Species"
            >
              <option value="">Select</option>
              <option value="bird">Bird</option>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="ferret">Ferret</option>
              <option value="horse">Horse</option>
              <option value="rabbit">Rabbit</option>
              <option value="reptile">Reptile</option>
              <option value="roddent">Roddent</option>
              <option value="other">Other</option>
            </Form.Select>
          </FloatingLabel>{" "}
        </Col>

        <Col>
          <FloatingLabel controlId="floatingInput" label="Breed">
            <Form.Control
              {...register("breed", { required: true })}
              type="text"
            />
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
      {/* Modal */}
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
              <Form.Check
                {...register("annualComprehensiveExam")}
                type="checkbox"
                label="Annual Comprehensive Exam"
              />
              <Form.Text>Please bring fresh fecal sample. </Form.Text>
            </div>
            <Form.Check
              {...register("vaccinations")}
              type="checkbox"
              label="Vaccinations"
            />
            <div>
              <Form.Check
                {...register("patientType")}
                type="checkbox"
                label="New Client/Patient Visit"
              />
              <Form.Text>Please provide previous medical records. </Form.Text>
            </div>
            <div>
              <Form.Check
                {...register("petSick")}
                type="checkbox"
                label="Sick Pet Exam"
              />
              <Form.Text>
                If urgent, please call us ASAP. Otherwise, please enter notes
                about illness and urgency.{" "}
              </Form.Text>
            </div>
            <div>
              <Form.Check
                {...register("dental")}
                type="checkbox"
                label="Dental"
              />
              <Form.Text>
                Drop off is between 8:00 AM - 8:30 AM. No food after midnight
                the night before, water is okay.{" "}
              </Form.Text>
            </div>
            <div>
              <Form.Check
                {...register("surgery")}
                type="checkbox"
                label="Surgery"
              />
              <Form.Text>
                Drop off is between 8:00 AM - 8:30 AM. No food after midnight
                the night before, water is okay.
              </Form.Text>
            </div>
            <Form.Check
              {...register("nailTrim")}
              type="checkbox"
              label="Nail Trim"
            />
            <div>
              <Form.Check
                {...register("overnightBoarding")}
                type="checkbox"
                label="Overnight Boarding"
              />
              <Form.Text>
                Must be current on vaccines, heartworm test, intestinal parasite
                screening, and canine influenza vaccine.{" "}
              </Form.Text>
            </div>
            <div>
              <Form.Check
                {...register("other")}
                type="checkbox"
                label="Other"
              />
              <Form.Text>
                Please enter reason for appointments in the Notes Section{" "}
              </Form.Text>
            </div>
            <div>
              <Form.Check
                {...register("medificationRefill")}
                type="checkbox"
                label="Medification Refill"
              />
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
            onClick={toggleModal}
            className="px-5 py-3"
            style={{ borderRadius: "30px" }}
          >
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        Upload Animal Image
        <Form.Control
          {...register("image", { required: true })}
          type="file"
          size="lg"
        />
      </div>
      <FloatingLabel controlId="floatingTextarea2" label="Notes">
        <Form.Control
          {...register("notes")}
          as="textarea"
          placeholder="Notes"
          style={{ height: "100px" }}
        />
      </FloatingLabel>
      <Button
        type="submit"
        variant="primary"
        className="py-2 "
        style={{ borderRadius: "30px" }}
      >
        REQUEST
      </Button>
    </form>
  );
}

export default RequestForm;
