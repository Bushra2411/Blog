
/*import React, { useState } from "react";
import "./aboutme.css";
import Header from "../components/Header";

export default function AboutMe() {
  const [username, setUsername] = useState("waterlily");
  const [password, setPassword] = useState("password123");
  const [info, setInfo] = useState("I am a passionate blogger who loves to write about travel and lifestyle.");
  const [editing, setEditing] = useState(false);
  const [profilePic, setProfilePic] = useState("https://loremfaces.net/256/id/1.jpg");

  const handleSave = () => {
    setEditing(false);
    alert("Profile updated successfully!");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <aside className="sidebar">
          <h2 className="sidebar-title">Dashboard</h2>
          <ul className="sidebar-menu">
            <li>Profile</li>
            <li>Posts</li>
            
          </ul>
        </aside>

        <main className="main-content">
          <div className="card profile-card">
            <img
              src={profilePic}
              alt="Profile"
              className="profile-pic"
            />

            {editing ? (
              <div className="edit-form">
                <label>
                  Upload Picture:
                  <input type="file" accept="image/*" onChange={handleImageChange} />
                </label>

                <label>
                  Username:
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>
                <label>
                  Password:
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <label>
                  Info:
                  <textarea
                    value={info}
                    onChange={(e) => setInfo(e.target.value)}
                  />
                </label>
                <button className="btn primary" onClick={handleSave}>Save</button>
              </div>
            ) : (
              <div className="user-info">
                <h3>{username}</h3>
                <p><strong>Info:</strong> {info}</p>
                <button className="btn" onClick={() => setEditing(true)}>Edit Profile</button>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}*/
import React, { useState, useEffect } from "react";
import "./aboutme.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function AboutMe() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [info, setInfo] = useState("Tell us something about you...");
  const [editing, setEditing] = useState(false);
  const [profilePic, setProfilePic] = useState("https://loremfaces.net/256?id=1");

  // Load user from localStorage when component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    try {
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);

        // Only proceed if the parsed object has a username
        if (parsedUser && parsedUser.username) {
          setUser(parsedUser);
          setUsername(parsedUser.username);
          setInfo(parsedUser.info || "Tell us something about you...");
          setProfilePic(parsedUser.profilePic || "https://loremfaces.net/256?id=1");
        } else {
          setUser(null);
        }
      }
    } catch (e) {
      console.error("Invalid user data in localStorage.");
      localStorage.removeItem("user");
      setUser(null);
    }
  }, []);

  // Save updated profile data
  const handleSave = () => {
    const updatedUser = {
      ...user,
      username,
      info,
      profilePic,
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditing(false);
    alert("Profile updated successfully!");
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  // Show login message if no user
  if (!user) {
    return <p style={{ padding: "2rem" }}>Please log in to view your profile.</p>;
  }

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <aside className="sidebar">
          <h2 className="sidebar-title">Dashboard</h2>
          <ul className="sidebar-menu">
            <li>Profile</li>
            
            <li>
             <Link to="/write" style={{ textDecoration: "none", color: "inherit" }}>
      Create a new Blog
    </Link>
            </li>
          </ul>
        </aside>

        <main className="main-content">
          <div className="card profile-card">
            <img src={profilePic} alt="Profile" className="profile-pic" />

            {editing ? (
              <div className="edit-form">
                <label>
                  Upload Picture:
                  <input type="file" accept="image/*" onChange={handleImageChange} />
                </label>

                <label>
                  Username:
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>

                <label>
                  Info:
                  <textarea
                    value={info}
                    onChange={(e) => setInfo(e.target.value)}
                  />
                </label>

                <button className="btn primary" onClick={handleSave}>Save</button>
              </div>
            ) : (
              <div className="user-info">
                <h3>{username}</h3>
                <p><strong>Info:</strong> {info}</p>
                <button className="btn" onClick={() => setEditing(true)}>Edit Profile</button>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
