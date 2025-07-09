/*import axios from "axios";
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
};*/

/*import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (err) {
      console.error("Failed to parse user from localStorage:", err);
      return null;
    }
  });

  const login = async (inputs) => {
    const res = await axios.post("http://localhost:5000/api/auth/login", inputs);
    setCurrentUser(res.data.user); // ensure res.data.user exists
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", res.data.token); // optional
  };

  const logout = async () => {
    await axios.post("http://localhost:5000/api/auth/logout");
    setCurrentUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};*/




/*import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Load user from localStorage on first mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
        console.log("🔁 AuthContext: Loaded user from localStorage");
      }
    } catch (err) {
      console.error("❌ Error reading user from localStorage:", err);
      setCurrentUser(null);
    }
  }, []);

  const login = async (inputs) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", inputs, {
        withCredentials: true, // include cookies if backend uses them
      });

      const user = res.data?.user;
      const token = res.data?.token;

      if (user) {
        setCurrentUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        if (token) localStorage.setItem("token", token);
        console.log("✅ Logged in as:", user.username);
      } else {
        throw new Error("No user returned from backend");
      }
    } catch (err) {
      console.error("❌ Login failed:", err);
      throw err; // allow caller to handle error (e.g. in Login.jsx)
    }
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
    } catch (err) {
      console.warn("⚠️ Logout request failed — continuing anyway:", err);
    } finally {
      setCurrentUser(null);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      console.log("👋 Logged out");
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};*/


import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on first mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
        console.log("🔁 AuthContext: Loaded user from localStorage");
      }
    } catch (err) {
      console.error("❌ Error reading user from localStorage:", err);
      setCurrentUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (inputs) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        inputs,
        { withCredentials: true }
      );

      const user = res.data?.user;
      const token = res.data?.token;

      if (user) {
        setCurrentUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        if (token) localStorage.setItem("token", token);
        console.log("✅ Logged in as:", user.username);
      } else {
        throw new Error("No user returned from backend");
      }
    } catch (err) {
      console.error("❌ Login failed:", err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
    } catch (err) {
      console.warn("⚠️ Logout request failed — continuing anyway:", err);
    } finally {
      setCurrentUser(null);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      console.log("👋 Logged out");
    }
  };

  if (loading) {
    return <div>Loading user info...</div>;
  }

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
