import Link from "next/link";
import React from "react";

const Breadcrumb = ({ pageName }) => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-3 sm:tw-flex-row sm:tw-items-center sm:tw-justify-between lg:tw-mb-6">
      <p className="tw-hidden tw-text-xl tw-tracking-wide tw-text-black/80 lg:tw-block lg:tw-text-2xl">
        {pageName}
      </p>
      <nav className="tw-mt-5 lg:tw-mt-0">
        <ol className="tw-flex tw-list-none tw-items-center tw-gap-2">
          <li>
            <Link
              href="/dashboard"
              className=" tw-text-gray-6 tw-decoration-transparent"
            >
              Dashboard /
            </Link>
          </li>
          <li className=" tw-text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
