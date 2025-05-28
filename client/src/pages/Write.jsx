/*import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext"; // adjust path if needed
import "./write.css";

function Write() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const [post, setPost] = useState({
    title: "",
    desc: "",
    categories: [],
    photo: null,
  });

  const [preview, setPreview] = useState(null); // for image preview

  const handleChange = (e) => {
    const { name, value, files, options } = e.target;

    if (name === "categories") {
      const selected = Array.from(options)
        .filter((o) => o.selected)
        .map((o) => o.value);
      setPost((p) => ({ ...p, categories: selected }));
    } else if (name === "photo") {
      const file = files[0];
      setPost((p) => ({ ...p, photo: file }));
      setPreview(URL.createObjectURL(file)); // set preview
    } else {
      setPost((p) => ({ ...p, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      alert("Please log in first to be able to publish a post.");
      return;
    }

    try {
      const data = new FormData();
      data.append("title", post.title);
      data.append("desc", post.desc);
      data.append("username", currentUser.username);
      post.categories.forEach((c) => data.append("categories[]", c));
      if (post.photo) data.append("photo", post.photo);
      console.log(post);
for (let pair of data.entries()) {
  console.log(`${pair[0]}: ${pair[1]}`);
}
      await axios.post(`http://localhost:5000/api/posts`, data, {
        withCredentials: true,
      });

      alert("✅ Post published!");
      setPost({
        title: "",
        desc: "",
        categories: [],
        photo: null,
      });
      setPreview(null);
    } catch (err) {
      console.error(err);
      alert("❌ Error publishing post");
    }
  };

  return (
    <div className="write-page">
      <div className="write-container">
        <h1 className="write-title">Create New Post</h1>

        <form className="write-form" onSubmit={handleSubmit}>
          <input
            name="title"
            type="text"
            placeholder="Post Title"
            className="write-input"
            value={post.title}
            onChange={handleChange}
            required
          />

          <select
            name="categories"
            multiple
            className="write-select"
            value={post.categories}
            onChange={handleChange}
            required
          >
            <option value="sports">Sports</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="food">Food</option>
            <option value="health">Health</option>
            <option value="entertainment">Entertainment</option>
          </select>

          <div className="write-upload">
            <label htmlFor="file-upload">Upload Image</label>
            <input
              name="photo"
              type="file"
              id="file-upload"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Preview" width="100%" />
            </div>
          )}

          <textarea
            name="desc"
            placeholder="Write your post here..."
            className="write-textarea"
            rows="10"
            value={post.desc}
            onChange={handleChange}
            required
          />

          <button className="write-submit" type="submit">
            Publish Post
          </button>
        </form>
      </div>
    </div>
  );
}
export default Write;*/

/*import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import "./write.css";

function Write() {
  const { currentUser } = useContext(AuthContext);
  const [post, setPost] = useState({
    title: "",
    desc: "",
    cat: [],
    photo: null,
  });
  const [preview, setPreview] = useState(null);

  // Clean up preview URL on unmount
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleChange = (e) => {
    const { name, value, files, options } = e.target;

    if (name === "cat") {
      const selected = Array.from(options)
        .filter((o) => o.selected)
        .map((o) => o.value);
      setPost((prev) => ({ ...prev, cat: selected }));
    } else if (name === "photo") {
      const file = files[0];
      setPost((prev) => ({ ...prev, photo: file }));
      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    } else {
      setPost((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      alert("Please log in to publish a post.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", post.title);
      formData.append("desc", post.desc);
      formData.append("username", currentUser.username);
      post.cat.forEach((category) => formData.append("cat", category));
      if (post.photo) {
        formData.append("photo", post.photo);
      }

      await axios.post("http://localhost:5000/api/posts", formData, {
        withCredentials: true,
      });

      alert("✅ Post published!");

      // Reset form
      setPost({
        title: "",
        desc: "",
        cat: [],
        photo: null,
      });
      setPreview(null);
    } catch (err) {
      console.error("❌ Failed to publish post:", err);
      alert("❌ Error publishing post. Try again.");
    }
  };

  return (
    <div className="write-page">
      <div className="write-container">
        <h1 className="write-title">Create New Post</h1>

        <form className="write-form" onSubmit={handleSubmit}>
          <input
            name="title"
            type="text"
            placeholder="Post Title"
            className="write-input"
            value={post.title}
            onChange={handleChange}
            required
          />

          <select
            name="cat"
            multiple
            className="write-select"
            value={post.cat}
            onChange={handleChange}
            required
          >
            <option value="sports">Sports</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="food">Food</option>
            <option value="health">Health</option>
            <option value="entertainment">Entertainment</option>
          </select>

          <div className="write-upload">
            <label htmlFor="file-upload">Upload Image</label>
            <input
              name="photo"
              type="file"
              id="file-upload"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Preview" width="100%" />
            </div>
          )}

          <textarea
            name="desc"
            placeholder="Write your post here..."
            className="write-textarea"
            rows="10"
            value={post.desc}
            onChange={handleChange}
            required
          />

          <button className="write-submit" type="submit">
            Publish Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Write;*/

import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import "./write.css";

function Write() {
  const { currentUser } = useContext(AuthContext);
  const [post, setPost] = useState({
    title: "",
    desc: "",
    cat: [],
    photo: null,
  });
  const [preview, setPreview] = useState(null);

  // Log for debugging
  useEffect(() => {
    console.log("👤 Current user in Write.js:", currentUser);
  }, [currentUser]);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleChange = (e) => {
    const { name, value, files, options } = e.target;

    if (name === "cat") {
      const selected = Array.from(options)
        .filter((o) => o.selected)
        .map((o) => o.value);
      setPost((prev) => ({ ...prev, cat: selected }));
    } else if (name === "photo") {
      const file = files[0];
      setPost((prev) => ({ ...prev, photo: file }));
      if (file) setPreview(URL.createObjectURL(file));
    } else {
      setPost((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      alert("❌ Please log in to publish a post.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", post.title);
      formData.append("desc", post.desc);
      formData.append("username", currentUser.username);
      post.cat.forEach((c) => formData.append("cat", c));
      if (post.photo) formData.append("photo", post.photo);

      await axios.post("http://localhost:5000/api/posts", formData, {
        withCredentials: true,
      });

      alert("✅ Post published!");
      setPost({ title: "", desc: "", cat: [], photo: null });
      setPreview(null);
    } catch (err) {
      console.error("❌ Failed to publish post:", err);
      alert("❌ Error publishing post. Try again.");
    }
  };

  return (
    <div className="write-page">
      <div className="write-container">
        <h1 className="write-title">Create New Post</h1>
        <form className="write-form" onSubmit={handleSubmit}>
          <input
            name="title"
            type="text"
            placeholder="Post Title"
            className="write-input"
            value={post.title}
            onChange={handleChange}
            required
          />
          <select
            name="cat"
            multiple
            className="write-select"
            value={post.cat}
            onChange={handleChange}
            required
          >
            <option value="sports">Sports</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="food">Food</option>
            <option value="health">Health</option>
            <option value="entertainment">Entertainment</option>
          </select>

          <div className="write-upload">
            <label htmlFor="file-upload">Upload Image</label>
            <input
              name="photo"
              type="file"
              id="file-upload"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Preview" width="100%" />
            </div>
          )}

          <textarea
            name="desc"
            placeholder="Write your post here..."
            className="write-textarea"
            rows="10"
            value={post.desc}
            onChange={handleChange}
            required
          />

          <button className="write-submit" type="submit">
            Publish Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Write;
