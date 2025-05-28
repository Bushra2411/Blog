import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState( 
    JSON.parse(localStorage.getItem("user")) || null
  );

 
  const login = async (inputs) => {
    const res = await axios.post("http://localhost:5000/api/auth/login", inputs);
    setCurrentUser(res.data.user); // << match your backend response shape
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", res.data.token); // optional
  };

  const logout = async () => {
    await axios.post("http://localhost:5000/api/auth/logout");
    setCurrentUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};