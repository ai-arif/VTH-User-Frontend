import Container from "@/components/UI/Container";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const AllServices = () => {
  return (
    <div className="tw-bg-primary tw-text-white">
      <Container className="tw-py-28">
        <h3 className="text-center tw-pb-10 tw-opacity-90">
          Explore Our Services
        </h3>
        <div className="tw-flex tw-gap-x-[60px]">
          {/* left side navigation part */}
          <div className="tw-w-1/2 tw-text-2xl">
            <div>
              <Link
                href="/services/alternative-therapies"
                className="tw-border-tx-0 tw-border-slate-4 tw-flex tw-items-center tw-justify-between tw-border-x-0 tw-border-b-2 tw-border-t-0 tw-border-solid tw-py-6 tw-text-secondary tw-decoration-transparent"
              >
                <span>Alternative Therapies</span>
                <HiOutlineArrowNarrowRight className="tw-text-slate-4 tw-text-3xl" />
              </Link>
            </div>
            <div>
              <Link
                href="/services/boarding"
                className="tw-border-tx-0 tw-border-slate-4 tw-flex tw-items-center tw-justify-between tw-border-x-0 tw-border-b-2 tw-border-t-0 tw-border-solid tw-py-6 tw-text-secondary tw-decoration-transparent"
              >
                <span>Boarding</span>
                <HiOutlineArrowNarrowRight className="tw-text-slate-4 tw-text-3xl" />
              </Link>
            </div>
            <div>
              <Link
                href="/services/animal"
                className="tw-border-tx-0 tw-border-slate-4 tw-flex tw-items-center tw-justify-between tw-border-x-0 tw-border-b-2 tw-border-t-0 tw-border-solid tw-py-6 tw-text-secondary tw-decoration-transparent"
              >
                <span>Large Animal Services</span>
                <HiOutlineArrowNarrowRight className="tw-text-slate-4 tw-text-3xl" />
              </Link>
            </div>
          </div>
          {/* right side navigation part */}
          <div className="tw-w-1/2 tw-text-2xl">
            <div>
              <Link
                href="/services/dental"
                className="tw-border-tx-0 tw-border-slate-4 tw-flex tw-items-center tw-justify-between tw-border-x-0 tw-border-b-2 tw-border-t-0 tw-border-solid tw-py-6 tw-text-secondary tw-decoration-transparent"
              >
                <span>Dental Services</span>
                <HiOutlineArrowNarrowRight className="tw-text-slate-4 tw-text-3xl" />
              </Link>
            </div>
            <div>
              <Link
                href="/services/diagnostics"
                className="tw-border-tx-0 tw-border-slate-4 tw-flex tw-items-center tw-justify-between tw-border-x-0 tw-border-b-2 tw-border-t-0 tw-border-solid tw-py-6 tw-text-secondary tw-decoration-transparent"
              >
                <span>Diagnostics</span>
                <HiOutlineArrowNarrowRight className="tw-text-slate-4 tw-text-3xl" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllServices;
