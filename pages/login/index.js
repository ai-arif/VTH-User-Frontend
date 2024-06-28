import Layout from "@/components/Layout";
import Login from "@/components/Login";
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

function index() {
  return (
    <Layout>
      <Login />
    </Layout>
  );
}

export default index;
