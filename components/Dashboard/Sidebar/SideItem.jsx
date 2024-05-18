import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SideItem = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <li className="nav-item">
      <Link
        href={href}
        className={`default-route ${isActive ? "active-route" : ""}`}
      >
        {children}
      </Link>
    </li>
  );
};

export default SideItem;
