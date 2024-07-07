import axiosInstance from "@/utils/axiosInstance";
import React, { useEffect, useState } from "react";
import Content from "./Content";
import Logo from "./Logo";

const ContentWithLogo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchHomeContent = async () => {
      try {
        const res = await axiosInstance.get("/home");
        setData(res?.data?.data);
      } catch (error) {
        console.error("Failed to fetch prescription:", error);
      }
    };

    fetchHomeContent();
  }, []);

  return (
    <>
      <Content content={data?.content} />
      <Logo logos={data?.logos} />
    </>
  );
};

export default ContentWithLogo;
