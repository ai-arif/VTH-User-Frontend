import WithoutFooter from "@/components/Layout/WithoutFooter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import success from "../../../public/assets/images/check.png";

const PaymentSuccessPage = () => {
  return (
    <WithoutFooter>
      <div className="tw-h-full tw-w-full">
        <div className="tw-mx-5 tw-my-5 tw-flex tw-flex-col tw-items-center tw-justify-center tw-space-y-4 tw-bg-gray-50 tw-px-3 tw-py-10 tw-text-center lg:tw-mx-auto lg:tw-w-1/2">
          <Image
            className="tw-h-auto tw-max-w-full"
            width={80}
            height={80}
            src={success}
            alt="success"
          />
          <h3 className="tw-text-2xl tw-font-semibold tw-text-teal-500 lg:tw-text-3xl">
            Your payment has been successful!
          </h3>
          <p>
            Thank you for your payment. Your appointment is now confirmed. We
            look forward to seeing you!
          </p>
          <div className="">
            <Link
              href="/"
              className="tw-flex tw-items-center tw-gap-2 tw-rounded-md tw-bg-primary tw-px-4 tw-py-3 tw-text-base tw-font-semibold tw-text-white tw-no-underline tw-shadow tw-transition-all hover:tw-shadow-lg"
            >
              <IoMdArrowBack /> <span>Back To Home</span>
            </Link>
          </div>
        </div>
      </div>
    </WithoutFooter>
  );
};

export default PaymentSuccessPage;
