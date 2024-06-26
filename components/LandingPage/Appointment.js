import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Container from "../UI/Container";
import CustomButton from "../UI/CustomButton";

function Appointment() {
  return (
    <section className="tw-bg-secondary tw-py-8 lg:tw-py-12">
      <Container className="text-center">
        <div className="tw-text-primary">
          <h4>Ready To </h4>
          <h2 className="tw-font-semibold">Make an Appointment?</h2>
        </div>
        <div
          style={{ backgroundColor: "#ffff" }}
          className="tw-mx-auto tw-mt-6 tw-flex tw-w-fit tw-items-center tw-justify-between tw-gap-5 tw-rounded-full tw-px-6 tw-py-2 lg:tw-mt-10 lg:tw-gap-16 lg:tw-px-20 lg:tw-py-4 xl:tw-gap-28"
        >
          <div className="tw-flex tw-items-center tw-gap-3 tw-text-primary">
            <FontAwesomeIcon icon={faPhone} />
            <h4 className="mb-0">+88 01729301016</h4>
          </div>
          <div>
            <Link href="/book-now">
              <CustomButton>Book Now</CustomButton>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Appointment;
