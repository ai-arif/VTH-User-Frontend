import Container from "@/components/UI/Container";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const AllServices = () => {
  return (
    <div className="tw-bg-primary tw-text-white">
      <Container className="tw-py-10 md:tw-py-14 lg:tw-py-28">
        <h3 className="text-center tw-pb-10 tw-opacity-90">
          Explore Our Services
        </h3>
        <div className="tw-flex tw-flex-col tw-gap-x-[60px] tw-gap-y-10 lg:tw-flex-row">
          {/* left side navigation part */}
          <div className="lg:tw-w-1/2 lg:tw-text-2xl">
            <div>
              <Link
                href="/services/alternative-therapies"
                className="tw-border-tx-0 tw-group tw-flex tw-items-center tw-justify-between tw-border-x-0 tw-border-b-2 tw-border-t-0 tw-border-solid tw-border-slate-4 tw-py-3 tw-text-secondary tw-decoration-transparent tw-transition-all hover:tw-border-secondary lg:tw-py-6"
              >
                <span>Medicine</span>
                <HiOutlineArrowNarrowRight className="tw-text-3xl tw-text-slate-4 group-hover:tw-text-secondary" />
              </Link>
            </div>
            <div>
              <Link
                href="/services/boarding"
                className="tw-border-tx-0 tw-group tw-flex tw-items-center tw-justify-between tw-border-x-0 tw-border-b-2 tw-border-t-0 tw-border-solid tw-border-slate-4 tw-py-3 tw-text-secondary tw-decoration-transparent tw-transition-all hover:tw-border-secondary lg:tw-py-6"
              >
                <span>Surgery</span>
                <HiOutlineArrowNarrowRight className="tw-text-3xl tw-text-slate-4 group-hover:tw-text-secondary" />
              </Link>
            </div>
            <div>
              <Link
                href="/services/animal"
                className="tw-border-tx-0 tw-group tw-flex tw-items-center tw-justify-between tw-border-x-0 tw-border-b-2 tw-border-t-0 tw-border-solid tw-border-slate-4 tw-py-3 tw-text-secondary tw-decoration-transparent tw-transition-all hover:tw-border-secondary lg:tw-py-6"
              >
                <span>Theriogenology</span>
                <HiOutlineArrowNarrowRight className="tw-text-3xl tw-text-slate-4 group-hover:tw-text-secondary" />
              </Link>
            </div>
          </div>
          {/* right side navigation part */}
          <div className="lg:tw-w-1/2 lg:tw-text-2xl">
            <div>
              <Link
                href="/services/dental"
                className="tw-border-tx-0 tw-group tw-flex tw-items-center tw-justify-between tw-border-x-0 tw-border-b-2 tw-border-t-0 tw-border-solid tw-border-slate-4 tw-py-3 tw-text-secondary tw-decoration-transparent tw-transition-all hover:tw-border-secondary lg:tw-py-6"
              >
                <span>Necropsy</span>
                <HiOutlineArrowNarrowRight className="tw-text-3xl tw-text-slate-4 group-hover:tw-text-secondary" />
              </Link>
            </div>
            <div>
              <Link
                href="/services/diagnostics"
                className="tw-border-tx-0 tw-group tw-flex tw-items-center tw-justify-between tw-border-x-0 tw-border-b-2 tw-border-t-0 tw-border-solid tw-border-slate-4 tw-py-3 tw-text-secondary tw-decoration-transparent tw-transition-all hover:tw-border-secondary lg:tw-py-6"
              >
                <span>Ambulatory, Consultancy</span>
                <HiOutlineArrowNarrowRight className="tw-text-3xl tw-text-slate-4 group-hover:tw-text-secondary" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllServices;
