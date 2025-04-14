import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [jwt, setJWT] = useState();
  const [id_user, setIdUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem("jwt") &&
      setJWT(JSON.parse(localStorage.getItem("jwt")));
    localStorage.getItem("user") &&
      setIdUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const addLocal = (jwt, user) => {
    localStorage.setItem("jwt", JSON.stringify(jwt));
    localStorage.setItem("id_user", JSON.stringify(user));

    setJWT(jwt);
    setIdUser(user);
  };

  const logOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");

    setJWT();
    setIdUser();
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        jwt,
        id_user,
        addLocal,
        logOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
