import Link from "next/link";
import React from "react";

const Breadcrumb = ({ pageName }) => {
  return (
    <div className="tw-mb-6 tw-flex tw-flex-col tw-gap-3 sm:tw-flex-row sm:tw-items-center sm:tw-justify-between">
      <p className="tw-text-2xl tw-tracking-wide tw-text-black/80">
        {pageName}
      </p>
      <nav>
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
