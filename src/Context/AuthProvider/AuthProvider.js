import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };
  //register
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //sign in with email pass
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authinfo = { user, providerLogin, logOut, createUser, signIn };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
