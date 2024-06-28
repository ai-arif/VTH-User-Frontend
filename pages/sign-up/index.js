import Layout from "@/components/Layout";
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
    <Layout>
      <SignUp />
    </Layout>
  );
};

export default SignUpPage;
