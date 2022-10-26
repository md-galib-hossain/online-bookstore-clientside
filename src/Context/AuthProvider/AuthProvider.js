import React from "react";
import { createContext } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const user = { name: "Galib" };
  const authinfo = { user };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
