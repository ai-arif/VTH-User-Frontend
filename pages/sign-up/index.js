import SignUp from "@/components/SignUp/SignUp";
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

const SignUpPage = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default SignUpPage;
