import Layout from "@/components/Layout";
import WithoutFooter from "@/components/Layout/WithoutFooter";
import SignUp from "@/components/SignUp/SignUp";
import React from "react";

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.vth_user_token;

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
    <WithoutFooter>
      <SignUp />
    </WithoutFooter>
  );
};

export default SignUpPage;
