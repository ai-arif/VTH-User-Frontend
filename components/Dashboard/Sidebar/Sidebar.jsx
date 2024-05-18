"use client";
import { AuthContext } from "@/contexts/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GrStatusGood } from "react-icons/gr";
import { HiOutlineLogout } from "react-icons/hi";
import { PiHandHeartThin } from "react-icons/pi";
import logo from "../../../public/assets/images/logo.png";
import SideItem from "./SideItem";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { logout } = useContext(AuthContext);

  const pathname = usePathname();

  const trigger = useRef(null);
  const sidebar = useRef(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded == null ? false : storedSidebarExpanded == "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);
  return (
    <aside
      ref={sidebar}
      className={`tw-absolute tw-left-0 tw-top-0 tw-z-[9999] tw-flex tw-h-screen tw-w-[290px] tw-flex-col tw-overflow-y-hidden tw-bg-white tw-drop-shadow tw-duration-300 tw-ease-linear lg:tw-static lg:tw-translate-x-0 ${
        sidebarOpen ? "tw-translate-x-0" : "tw--translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="tw-py-5.5 tw-lg-py-6.5 tw-flex tw-items-center tw-justify-between tw-gap-2 tw-px-6">
        <Link
          href="/"
          className="tw-flex tw-items-end tw-gap-x-3 tw-text-2xl tw-text-sky-700 tw-decoration-transparent"
        >
          <Image height={65} src={logo} alt="Logo" priority />
          Dashboard
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="tw-block lg:tw-hidden"
        >
          <svg
            className="tw-fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar tw-flex tw-flex-col tw-overflow-y-auto tw-duration-300 tw-ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="tw-mt-5 tw-px-4 tw-py-4 lg:tw-mt-7 lg:tw-px-6">
          {/* <!-- Menu Group --> */}
          <ul className="tw test tw-mb-6 tw-flex tw-list-none tw-flex-col tw-gap-1.5 tw-pl-0">
            {/* <!-- Menu Item Profile --> */}
            <SideItem href="/dashboard">
              <AiOutlineUser className="tw-text-lg" /> <span>Profile</span>
            </SideItem>
            {/* <!-- Menu Item Profile --> */}

            {/* <!-- Menu Item Appointment --> */}
            <SideItem href="/dashboard/appointment">
              <GrStatusGood className="tw-text-lg" /> <span>Appointment</span>
            </SideItem>
            {/* <!-- Menu Item Appointment --> */}

            {/* <!-- Menu Item Prescription --> */}
            <SideItem href="/dashboard/prescription">
              <PiHandHeartThin className="tw-text-lg" />{" "}
              <span>Prescription</span>
            </SideItem>
            {/* <!-- Menu Item Prescription --> */}

            <hr className="tw-mx-4 tw-text-gray-5" />
            {/* <!-- Menu Item Logout --> */}
            <button
              onClick={logout}
              className="default-route tw-cursor-pointer tw-border-none tw-bg-transparent"
            >
              <HiOutlineLogout className="tw-text-lg" />
              <span>Log Out</span>
            </button>
            {/* <!-- Menu Item Logout --> */}
          </ul>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
