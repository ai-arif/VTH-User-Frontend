"use client";
import AuthProvider from "@/contexts/AuthProvider";
import React, { useContext, useState } from "react";
import DashboardHeader from "../Dashboard/Header/DashboardHeader";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="tw-flex tw-h-screen tw-overflow-hidden tw-font-Alexandria">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="tw-relative tw-flex tw-flex-1 tw-flex-col tw-overflow-y-auto tw-overflow-x-hidden tw-bg-whiten">
          {/* <!-- ===== Header Start ===== --> */}
          <DashboardHeader
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="tw-mx-auto tw-max-w-screen-xl md:tw-p-6 xl:tw-p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
};

export default DashboardLayout;
