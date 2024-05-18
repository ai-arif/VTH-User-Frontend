import axiosInstance from "@/utils/axiosInstance";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // create a new user account with number and password
  const createUserAccount = async (user) => {
    try {
      const response = await axiosInstance.post("users/register", user);
      setUser(response.data);
      //   return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const authInfo = { createUserAccount, user };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
