import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaArrowRightLong } from "react-icons/fa6";

function RequestForm() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axiosInstance.get("/department");
        setDepartments(response?.data?.data);
      } catch (error) {
        console.error("Failed to fetch departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("ownerName", data.ownerName);
      formData.append("phone", data.phone);
      formData.append("district", user?.district);
      formData.append("upazila", user?.upazila);
      formData.append("address", user?.address);
      formData.append("petName", data.petName);
      formData.append("species", data.species);
      formData.append("breed", data.breed);
      formData.append("department", data.department);
      formData.append("notes", data.notes);

      if (imageFiles.length > 0) {
        imageFiles.forEach((file) => {
          formData.append("images", file);
        });
      }

      Object.keys(data).forEach((key) => {
        if (typeof data[key] === "boolean" && data[key]) {
          formData.append(key, data[key]);
        }
      });

      const response = await axiosInstance.post("/user-appointment", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        router.push("/dashboard/appointment");
        reset();
        toast.success("Successfully booked service!");
      }
    } catch (error) {
      toast.error("Something is wrong! try agin later");
      console.log(error);
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (imageFiles.length + files.length > 5) {
      toast.error("You can only upload up to 5 images");
      return;
    }
    setSelectedImages((prevImages) => [
      ...prevImages,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);
    setImageFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleImageDelete = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <>
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
        {!user?.isCompleted && (
          <div className="tw-mx-auto tw-w-1/2 tw-text-center">
            <Link
              className="default-route active-route tw-text-center"
              href="/dashboard"
            >
              Update Your Profile <FaArrowRightLong />
            </Link>
          </div>
        )}
        <h2 className="text-center">Request a Service</h2>
        <FloatingLabel controlId="floatingInput" label="Full Name">
          <Form.Control
            disabled={!user?.isCompleted}
            defaultValue={user?.fullName}
            readOnly
            type="text"
            {...register("ownerName", { required: true })}
            placeholder="Enter Full Name"
          />
          {errors.ownerName && (
            <p className="text-danger">Full Name is required</p>
          )}
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Cell Phone">
          <Form.Control
            disabled={!user?.isCompleted}
            defaultValue={user?.phone}
            readOnly
            type="text"
            {...register("phone", { required: true })}
            placeholder="Enter Number"
          />
          {errors.phone && (
            <p className="text-danger">Phone number is required</p>
          )}
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Pet's Name">
          <Form.Control
            disabled={!user?.isCompleted}
            type="text"
            {...register("petName")}
            placeholder="Enter Pet's Name"
          />
        </FloatingLabel>
        <Row>
          <Col>
            <FloatingLabel controlId="floatingSelect" label="Species">
              <Form.Select
                disabled={!user?.isCompleted}
                {...register("species")}
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
                <option value="rodent">Rodent</option>
                <option value="other">Other</option>
              </Form.Select>
            </FloatingLabel>{" "}
          </Col>

          <Col>
            <FloatingLabel controlId="floatingInput" label="Breed">
              <Form.Control
                disabled={!user?.isCompleted}
                {...register("breed")}
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
            disabled={!user?.isCompleted}
            aria-label="Reason's for Appointment"
            onClick={toggleModal}
          />
        </FloatingLabel>{" "}
        <FloatingLabel controlId="floatingSelect" label="Department">
          <Form.Select
            disabled={!user?.isCompleted}
            {...register("department", { required: true })}
            aria-label="Department"
          >
            <option value="">Select</option>
            {departments?.map((department) => (
              <option key={department._id} value={department._id}>
                {department.name}
              </option>
            ))}
          </Form.Select>
          {errors.department && (
            <p className="text-danger">Department is required</p>
          )}
        </FloatingLabel>
        {/* Modal */}
        <Modal show={showModal} onHide={toggleModal} size="lg" style={{}}>
          <Modal.Header
            closeButton
            className="border-0 pt-4 px-4"
          ></Modal.Header>
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
                  Must be current on vaccines, heartworm test, intestinal
                  parasite screening, and canine influenza vaccine.{" "}
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
                  {...register("medicationRefill")}
                  type="checkbox"
                  label="Medication Refill"
                />
                <Form.Text>
                  Refill Requests will be processed in 24-48 hours. Enter
                  Medications in the Notes Section{" "}
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
          Upload Animal Images (0 to 5 images), Only images (pdf is not allowed)
          <Form.Control
            disabled={!user?.isCompleted}
            {...register("images")}
            type="file"
            size="lg"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <div className="image-preview">
          {selectedImages.map((image, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                display: "inline-block",
                margin: "10px",
              }}
            >
              <img
                src={image}
                alt={`Selected ${index}`}
                style={{ maxWidth: "90px" }}
              />
              <button
                type="button"
                onClick={() => handleImageDelete(index)}
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  background: "rgba(255, 0, 0, 0.7)",
                  border: "none",
                  borderRadius: "50%",
                  color: "white",
                  cursor: "pointer",
                  width: "20px",
                  height: "20px",
                  textAlign: "center",
                  lineHeight: "20px",
                }}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
        <FloatingLabel controlId="floatingTextarea2" label="Notes">
          <Form.Control
            disabled={!user?.isCompleted}
            {...register("notes")}
            as="textarea"
            placeholder="Notes"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <div>
          {loading ? (
            <Button
              type="submit"
              variant="primary"
              className="py-2 w-100"
              style={{ borderRadius: "30px" }}
            >
              LOADING...
            </Button>
          ) : (
            <Button
              disabled={!user?.isCompleted}
              type="submit"
              variant="primary"
              className="py-2 w-100"
              style={{ borderRadius: "30px" }}
            >
              REQUEST
            </Button>
          )}
        </div>
      </form>
    </>
  );
}

export default RequestForm;
