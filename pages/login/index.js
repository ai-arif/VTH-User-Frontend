import WithoutFooter from "@/components/Layout/WithoutFooter";
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
    <WithoutFooter>
      <Login />
    </WithoutFooter>
  );
}

export default index;
