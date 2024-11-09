import Image from "next/image";
import React from "react";

function DownloadLinks() {
  const currentYear = new Date().getFullYear();

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
              alt="Apple App Store Badge"
              width={150}
              height={50}
              objectFit="cover"
            />
            <Image
              src="/assets/images/play-badge.png"
              alt="Google Play Store Badge"
              width={160}
              height={75}
              objectFit="cover"
            />
          </div>
        </div>
        <p className="text-center">
          © {currentYear} PetDesk. Read our <b>Terms of Use</b> and{" "}
          <b>Privacy Policy</b>
          <br /> 1.51.0
        </p>
      </div>
    </>
  );
}

export default DownloadLinks;
