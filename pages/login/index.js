import Login from "@/components/Login";
import React from "react";

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.token;

  if (token && token != "undefined") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

function index() {
  return (
    <>
      <Login />
    </>
  );
}

export default index;
