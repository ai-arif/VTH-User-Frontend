import logo from "@/public/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="">
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-md-11 col-lg-7 col-xl-6 mx-auto">
            <div className="app-branding text-center mb-5">
              <Link href="/">
                <Image className="img-fluid" src={logo} alt="logo" />
              </Link>
            </div>
            <div className="app-card p-5 text-center shadow-sm">
              <h1 className="page-title mb-4">
                404
                <br />
                <span className="font-weight-light">Page Not Found</span>
              </h1>
              <div className="mb-4">
                Sorry, we can&apos;t find the page you&apos;re looking for.
              </div>
              <Link className="btn btn-primary" href="/">
                Go to home page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
