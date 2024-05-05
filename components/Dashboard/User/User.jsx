import Image from "next/image";
import React from "react";
import user from "../../../public/assets/images/user.png";

const User = () => {
  return (
    <div className="tw-flex tw-items-center tw-gap-4">
      <div className="tw-flex tw-flex-col tw-items-end">
        <span className="">Thomas Anree</span>
        <span className="tw-text-xs tw-text-gray-6">
          thomasaneree@gmail.com
        </span>
      </div>

      <div className="h-10 w-10 rounded-full">
        <Image
          width={40}
          height={40}
          src={user}
          style={{
            width: "auto",
            height: "auto",
          }}
          alt="User"
        />
      </div>
    </div>
  );
};

export default User;
