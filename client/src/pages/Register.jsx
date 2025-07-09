
/*import React, { useState } from 'react';
import './register.css';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    picture: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'picture' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add backend API call here
  };

  return (
    <div className="register-container">
      <div className="left-pane">
        <h1 className="logo">Blog<span className="highlight">Wave</span></h1>
        <p className="welcome-text">Welcome!</p>
      </div>

      <div className="form-pane">
        <h2 className="form-title">Sign up for an account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label className="file-upload">
            <input
              type="file"
              name="picture"
              onChange={handleChange}
              accept="image/*"
            />
            📷 Upload Picture
          </label>
          <button type="submit" className="create-btn">Create Account</button>
        </form>
        <p className="signin-link">
          Already has an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;

/*import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder='username'/>
        <input required type='email' placeholder='email'/>
        <input required type='password' placeholder='password'/>
        <button>Register</button>
        <p>this is an error</p>
        <span>Don't you have an account? <Link to="/login">Login</Link> 
        </span>  
      </form>
    </div>
  )
}

export default Register*/



/*import React from "react";
import "./register.css";
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className="register-container">
      <div className="left-section">
        <h1><span className="highlight"><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          BLOGWave
        </Link></span></h1>
        <p>Join us and share your voice!</p>
      </div>

      <div className="right-section">
        <div className="register-box">
          <h2>Create your account</h2>
          <button className="google-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" />
            Sign up with Google
          </button>
          <div className="divider">or sign up with email</div>
          <form>
            
             <input required type="name" placeholder="Username" />
            <input required type="email" placeholder="email@example.com" />
            <input required type="password" placeholder="Password" />
            <button type="submit">Register</button>
          </form>
          <p className="signin-text">Already have an account? <a href="/login">Sign in</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;*/

/*import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setIsSubmitting(true);

    try {
       const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      if (res.data) {
        window.location.replace("/");
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-container">
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
        <div className="register-box">
          <h2>Create your account</h2>
          <button className="google-btn" disabled={isSubmitting}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google"
            />
            Sign up with Google
          </button>
          <div className="divider">or sign up with email</div>

          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>

          {error && (
            <p style={{ color: "red", marginTop: "10px" }}>
              Something went wrong!
            </p>
          )}

          <p className="signin-text">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;*/

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
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
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });

      
         if (res.data) {
      // Store token and user in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user || username));

      // Redirect to home
      navigate("/");
    }
    } catch (err) {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-container">
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
        <div className="register-box">
          <h2>Create your account</h2>
          <button className="google-btn" disabled={isSubmitting}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google"
            />
            Sign up with Google
          </button>
          <div className="divider">or sign up with email</div>

          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>

          {error && (
            <p style={{ color: "red", marginTop: "10px" }}>
              Something went wrong!
            </p>
          )}

          <p className="signin-text">
            Already have an account? <Link to="/login"style={{ textDecoration: "none", color: "inherit" }}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

  
