import Container from "@/components/UI/Container";
import React from "react";
import { Accordion } from "react-bootstrap";

const AllServices = () => {
  return (
    <div className="tw-bg-primary tw-text-white">
      <Container className="tw-py-10 md:tw-py-14 lg:tw-py-28">
        <h3 className="text-center tw-pb-10 tw-opacity-90">
          Explore Our Services
        </h3>
        <div className="tw-flex tw-flex-col tw-gap-5 tw-gap-y-10 lg:tw-flex-row lg:tw-gap-10">
          {/* Left Column - Services Accordion */}
          <div className="tw-w-full lg:tw-w-1/2">
            <Accordion defaultActiveKey="0" flush alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Clinical Services</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Small Animal Medicine, Surgery & Theriogenology</li>
                    <li>Large Animal Medicine, Surgery & Theriogenology</li>
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
                        Computed Tomography (CT) and Magnetic Resonance Imaging
                        (MRI) [Upcoming]
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
                  Ambulatory and Outreach Services
                </Accordion.Header>
                <Accordion.Body>
                  Ambulatory and Outreach Services
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Teaching and Research</Accordion.Header>
                <Accordion.Body>Teaching and Research</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          {/* Right Column - Services Accordion */}
          <div className="tw-w-full lg:tw-w-1/2">
            <Accordion defaultActiveKey="4" flush alwaysOpen>
              <Accordion.Item eventKey="4">
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
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Emergency and Critical Care Services [Upcoming]
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>24/7 Emergency Care and Hospitalization</li>
                    <li>Intensive Care Units for Small and Large Animals</li>
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllServices;
