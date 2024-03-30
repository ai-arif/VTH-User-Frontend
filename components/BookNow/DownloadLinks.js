import Image from "next/image";
import React from "react";

function DownloadLinks() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
        }}
      >
        <div>
          <h3>Download Our PetDesk App</h3>
          <div style={{ width: "fit-content", margin: "0 auto" }}>
            <Image
              src="/assets/images/apple-badge.svg"
              width={150}
              height={50}
              objectFit="cover"
              cursor="pointer"
            />
            <Image
              src="/assets/images/play-badge.png"
              width={160}
              height={75}
              objectFit="cover"
            />
          </div>
        </div>
        <p className="text-center">
          © 2024 PetDesk. Read our <b>Terms of Use</b> and <b>Privacy Policy</b>
          <br /> 1.51.0
        </p>
      </div>
    </>
  );
}

export default DownloadLinks;
