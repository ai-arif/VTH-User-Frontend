import Profile from "@/components/Dashboard/Profile/Profile";

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.token;

  if (!token) {
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
