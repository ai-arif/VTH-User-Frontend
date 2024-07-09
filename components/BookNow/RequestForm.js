import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, Modal, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaArrowRightLong } from "react-icons/fa6";
import CreatableSelect from "react-select/creatable";

function RequestForm() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [species, setSpecies] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [speciesByBreeds, setSpeciesByBreeds] = useState([]);
  const [speciesByComplaints, setSpeciesByComplaint] = useState([]);
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleReasonChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedReasons((prev) => [...prev, name]);
    } else {
      setSelectedReasons((prev) => prev.filter((reason) => reason !== name));
    }
  };

  const complaintOptions = speciesByComplaints?.map((complaint) => ({
    value: complaint.complaint,
    label: complaint.complaint,
  }));

  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      data.complaint = data.complaint.value;
      const formData = new FormData();

      formData.append("ownerName", data.ownerName);
      formData.append("phone", data.phone);
      formData.append("district", user?.district);
      formData.append("upazila", user?.upazila);
      formData.append("address", user?.address);
      formData.append("petName", data.petName);
      formData.append("species", data.species);
      formData.append("breed", data.breed);
      formData.append("complaint", data.complaint);
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

  // fetch species
  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const response = await axiosInstance.get("/species?page=1&limit=1000");
        setSpecies(response?.data?.data);
      } catch (error) {
        console.error("Failed to fetch species:", error);
      }
    };

    fetchSpecies();
  }, []);

  // fetch breeds & complaints
  const fetchBreedsAndComplaints = async (speciesId) => {
    if (!speciesId) return;

    try {
      const [breedResponse, complaintsResponse] = await Promise.all([
        axiosInstance.get(`/breed/species/${speciesId}`),
        axiosInstance.get(`/complaint/species/${speciesId}`),
      ]);

      const breedData = breedResponse?.data?.data || [];
      const complaintsData = complaintsResponse?.data?.data || [];

      setSpeciesByBreeds(breedData);
      setSpeciesByComplaint(complaintsData);
    } catch (error) {
      console.error("Error fetching breeds and complaints:", error);
    }
  };

  // fetch departments
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axiosInstance.get(
          "/department?page=1&limit=500",
        );
        setDepartments(response?.data?.data);
      } catch (error) {
        console.error("Failed to fetch departments:", error);
      }
    };

    fetchDepartments();
  }, []);

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
            <small className="text-danger">Full Name is required</small>
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
            <small className="text-danger">Phone number is required</small>
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
                {...register("species", { required: true })}
                aria-label="Species"
                onChange={(e) => fetchBreedsAndComplaints(e.target.value)}
              >
                <option value="">Select</option>
                {species?.data?.map((specie) => (
                  <option key={specie._id} value={specie._id}>
                    {specie.name}
                  </option>
                ))}
              </Form.Select>
              {errors.species && (
                <small className="text-danger">Species is required</small>
              )}
            </FloatingLabel>{" "}
          </Col>
          <Col>
            <FloatingLabel controlId="floatingInput" label="Breed">
              <Form.Select
                disabled={!user?.isCompleted}
                {...register("breed")}
                aria-label="breed"
              >
                <option value="">Select</option>
                {speciesByBreeds?.map((breed) => (
                  <option key={breed._id} value={breed.breed}>
                    {breed.breed}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <FloatingLabel controlId="floatingSelect" style={{ zIndex: "10" }}>
          <div>Select Complaint</div>
          <Controller
            name="complaint"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <CreatableSelect
                disabled={!user?.isCompleted}
                placeholder="Select complaint"
                isClearable
                options={complaintOptions}
                {...field}
              />
            )}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingSelect"
          label="Reason's for Appointment"
        >
          <Form.Control
            disabled={!user?.isCompleted}
            as="textarea"
            readOnly
            value={selectedReasons.join(", ")}
            placeholder="Selected Reasons"
            onClick={toggleModal}
            style={{ cursor: "pointer", backgroundColor: "#fff" }}
          />
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
                  name="Annual Comprehensive Exam"
                  onChange={handleReasonChange}
                />
                <Form.Text>Please bring fresh fecal sample. </Form.Text>
              </div>
              <Form.Check
                {...register("vaccinations")}
                type="checkbox"
                label="Vaccinations"
                name="Vaccinations"
                onChange={handleReasonChange}
              />
              <div>
                <Form.Check
                  {...register("petSick")}
                  type="checkbox"
                  label="Sick Pet Exam"
                  name="Vaccinations"
                  onChange={handleReasonChange}
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
                  name="Dental"
                  onChange={handleReasonChange}
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
                  name="Surgery"
                  onChange={handleReasonChange}
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
                name="Nail Trim"
                onChange={handleReasonChange}
              />
              <div>
                <Form.Check
                  {...register("overnightBoarding")}
                  type="checkbox"
                  label="Overnight Boarding"
                  name="Overnight Boarding"
                  onChange={handleReasonChange}
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
                  name="Other"
                  onChange={handleReasonChange}
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
        <FloatingLabel controlId="floatingSelect" label="Department">
          <Form.Select
            disabled={!user?.isCompleted}
            {...register("department", { required: true })}
            aria-label="Department"
          >
            <option value="">Select</option>
            {departments?.data?.map((department) => (
              <option key={department._id} value={department._id}>
                {department.name}
              </option>
            ))}
          </Form.Select>
          {errors.department && (
            <small className="text-danger">Department is required</small>
          )}
        </FloatingLabel>
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
