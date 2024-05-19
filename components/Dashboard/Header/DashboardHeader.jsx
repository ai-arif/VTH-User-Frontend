import Link from "next/link";
import React from "react";
import User from "../User/User";

const DashboardHeader = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="tw-sticky tw-top-0 tw-z-[999] tw-flex tw-w-full tw-bg-white tw-drop-shadow">
      <div className="tw-flex tw-flex-grow tw-items-center tw-justify-between tw-px-4 tw-py-4 md:tw-px-6 xl:tw-px-11">
        <div className="tw-flex tw-items-center tw-gap-2 sm:tw-gap-4 lg:tw-hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="tw-border-stroke tw-z-[99999] tw-block tw-rounded-sm tw-border tw-border-solid tw-bg-gray-100 tw-p-1.5 tw-shadow-sm lg:tw-hidden"
          >
            <span className="tw-relative tw-block tw-h-[22px] tw-w-[22px] tw-cursor-pointer">
              <span className="tw-absolute tw-right-0 tw-h-full tw-w-full">
                <span
                  className={`tw-relative tw-left-0 tw-top-0 tw-my-1 tw-block tw-h-0.5 tw-w-0 tw-rounded-sm tw-bg-black tw-delay-[0] tw-duration-200 tw-ease-in-out ${
                    !sidebarOpen && "!tw-w-full tw-delay-300"
                  }`}
                ></span>
                <span
                  className={`tw-relative tw-left-0 tw-top-0 tw-my-1 tw-block tw-h-0.5 tw-w-0 tw-rounded-sm tw-bg-black tw-delay-150 tw-duration-200 tw-ease-in-out ${
                    !sidebarOpen && "tw-delay-400 !tw-w-full"
                  }`}
                ></span>
                <span
                  className={`tw-relative tw-left-0 tw-top-0 tw-my-1 tw-block tw-h-0.5 tw-w-0 tw-rounded-sm tw-bg-black tw-delay-200 tw-duration-200 tw-ease-in-out ${
                    !sidebarOpen && "!tw-w-full tw-delay-500"
                  }`}
                ></span>
              </span>
              <span className="tw-absolute tw-right-0 tw-h-full tw-w-full tw-rotate-45">
                <span
                  className={`tw-absolute tw-left-2.5 tw-top-0 tw-block tw-h-full tw-w-0.5 tw-rounded-sm tw-bg-black tw-delay-300 tw-duration-200 tw-ease-in-out ${
                    !sidebarOpen && "!tw-h-0 !tw-delay-[0]"
                  }`}
                ></span>
                <span
                  className={`tw-delay-400 tw-absolute tw-left-0 tw-top-2.5 tw-block tw-h-0.5 tw-w-full tw-rounded-sm tw-bg-black tw-duration-200 tw-ease-in-out ${
                    !sidebarOpen && "!tw-h-0 !tw-delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        <div className="tw-hidden tw-text-lg md:tw-block">Welcome To VTH</div>

        {/* <!-- User Area --> */}
        <User />
        {/* <!-- User Area --> */}
      </div>
    </header>
  );
};

export default DashboardHeader;
