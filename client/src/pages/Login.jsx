
/*import React from "react";
import "./login.css";
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="login-container">
      <div className="left-section">
        <h1><span className="highlight"><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          BLOGWave
        </Link></span></h1>
        <p>Welcome, back!</p>
      </div>

      <div className="right-section">
        <div className="login-box">
          <h2>Sign in to your account</h2>
          <button className="google-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" />
            Sign in with Google
          </button>
          <div className="divider">or sign in with email</div>
          <form>
            <input type="email" placeholder="email@example.com" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign in</button>
          </form>
          <p className="signup-text">Don't have an account? <a href="/register">Register</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;*/

/*import React, { useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    setError(null);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      console.log("Login successful:", res.data);
      // Do something with the login response, e.g. redirect or save token
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <h1>
          <span className="highlight">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              BLOGWave
            </Link>
          </span>
        </h1>
        <p>Welcome back!</p>
      </div>

      <div className="right-section">
        <div className="login-box">
          <h2>Sign in to your account</h2>

          <button className="google-btn" disabled={isFetching}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google"
            />
            Sign in with Google
          </button>

          <div className="divider">or sign in with email</div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              ref={userRef}
              required
            />
            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
            <button type="submit" disabled={isFetching}>
              {isFetching ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <p className="signup-text">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="link">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;*/


/*import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setIsSubmitting(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/"); // Redirect to home page
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
              <h1>
                <span className="highlight">
                  <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    BLOGWave
                  </Link>
                </span>
              </h1>
              <p>Join us and share your voice!</p>
            </div>

       <div className="right-section">    
      <div className="login-box">
        <h2>Sign in to your account</h2>
        
        <form onSubmit={handleSubmit}>
          <input
            required
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            Invalid email or password.
          </p>
        )}

        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
      </div> 
    </div>
  );
};

export default Login;

import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";  // adjust path
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setIsSubmitting(true);

    try {
      await login({ email, password });
      navigate("/"); // redirect after successful login
    } catch (err) {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <h1>
          <span className="highlight">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              BLOGWave
            </Link>
          </span>
        </h1>
        <p>Join us and share your voice!</p>
      </div>

      <div className="right-section">
        <div className="login-box">
          <h2>Sign in to your account</h2>

          <form onSubmit={handleSubmit}>
            <input
              required
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {error && (
            <p style={{ color: "red", marginTop: "10px" }}>
              Invalid email or password.
            </p>
          )}

          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;*/

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setIsSubmitting(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/"); // Redirect to home page
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
              <h1>
                <span className="highlight">
                  <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    BLOGWave
                  </Link>
                </span>
              </h1>
              <p>Join us and share your voice!</p>
            </div>

       <div className="right-section">    
      <div className="login-box">
        <h2>Sign in to your account</h2>
        
        <form onSubmit={handleSubmit}>
          <input
            required
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            Invalid email or password.
          </p>
        )}

        <p>
          Don't have an account? <Link to="/register" style={{ textDecoration: "none", color:"inherit"  }}>Register here</Link>
        </p>
      </div>
      </div> 
    </div>
  );
};

export default Login;
