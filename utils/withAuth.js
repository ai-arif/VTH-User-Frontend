/* eslint-disable react/display-name */
import Loader from "@/components/UI/Loader";
import { AuthContext } from "@/contexts/AuthProvider";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { user, loading } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push("/login");
      }
    }, [user, loading, router]);

    if (loading) {
      return <Loader />;
    }

    if (!user) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
