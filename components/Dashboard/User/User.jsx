import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";

const User = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="tw-flex tw-items-center tw-gap-4">
      <div className="tw-flex tw-flex-col tw-items-end">
        <span className="">{user?.fullName}</span>
        <span className="tw-text-xs tw-text-gray-6">{user?.phone}</span>
      </div>

      <div className="tw-text-4xl tw-text-primary">
        <FaUserCircle />
      </div>
    </div>
  );
};

export default User;
