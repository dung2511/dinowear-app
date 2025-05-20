import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [token, setToken] = useState();
  const [id_user, setIdUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem("token") &&
      setToken(JSON.parse(localStorage.getItem("token")));
    localStorage.getItem("id_user") &&
      setIdUser(JSON.parse(localStorage.getItem("id_user")));
  }, []);

  const addLocal = (token, id_user) => {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("id_user", JSON.stringify(id_user));

    setToken(token);
    setIdUser(id_user);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken();
    setIdUser();
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
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
