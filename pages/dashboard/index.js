import Profile from "@/components/Dashboard/Profile/Profile";

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.vth_user_token;

  if (!token || token === "null" || token === "undefined") {
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

const DashboardHome = () => {
  return (
    <>
      <Profile />
    </>
  );
};

export default DashboardHome;
