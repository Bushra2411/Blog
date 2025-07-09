/*import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import "./write.css";
//import { AuthContextProvider } from "./Context/AuthContext";

function Write() {
  const { currentUser } = useContext(AuthContext);
  const [post, setPost] = useState({
    title: "",
    desc: "",
    categories: [],
    photo: null,
  });
  const [preview, setPreview] = useState(null);

  // Log for debugging
  

  useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  console.log("🧠 From localStorage:", storedUser);
  console.log("👤 From AuthContext:", currentUser);
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
    console.log("🧪 currentUser at submit time:", currentUser);

    if (!currentUser) {
      alert("❌ Please log in to publish a post.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", post.title);
      formData.append("desc", post.desc);
      formData.append("username", currentUser.username);
      post.cat.forEach((c) => formData.append("categories", c));
      if (post.photo) formData.append("photo", post.photo);

      await axios.post("http://localhost:5000/api/posts", formData, {
        withCredentials: true,
      });

      alert("✅ Post published!");
      setPost({ title: "", desc: "", categories: [], photo: null });
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

/*import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import "./write.css";

function Write() {
  const { currentUser } = useContext(AuthContext);

  const [post, setPost] = useState({
    title: "",
    desc: "",
    categories: [],
    photo: null,
  });
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log("🧠 From localStorage:", storedUser);
    console.log("👤 From AuthContext:", currentUser);
  }, [currentUser]);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleChange = (e) => {
    const { name, value, files, options } = e.target;

    if (name === "categories") {
      const selected = Array.from(options)
        .filter((o) => o.selected)
        .map((o) => o.value);
      setPost((prev) => ({ ...prev, categories: selected }));
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
    console.log("🧪 currentUser at submit time:", currentUser);

    if (!currentUser) {
      alert("❌ Please log in to publish a post.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", post.title);
      formData.append("desc", post.desc);
      formData.append("username", currentUser.username);
      post.categories.forEach((c) => formData.append("categories", c));
      if (post.photo) formData.append("photo", post.photo);

      await axios.post("http://localhost:5000/api/posts", formData, {
        withCredentials: true,
      });

      alert("✅ Post published!");
      setPost({ title: "", desc: "", categories: [], photo: null });
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
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./write.css";

const categoriesList = [
  "Sports",
  "Business",
  "Technology",
  "Food",
  "Health",
  "Entertainment",
];

function Write() {
  const { currentUser } = useContext(AuthContext);

  const [post, setPost] = useState({
    title: "",
    desc: "",
    categories: [],
    photo: null,
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log("🧠 From localStorage:", storedUser);
    console.log("👤 From AuthContext:", currentUser);
  }, [currentUser]);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      const file = files[0];
      setPost((prev) => ({ ...prev, photo: file }));
      if (file) setPreview(URL.createObjectURL(file));
    } else {
      setPost((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDescChange = (value) => {
    setPost((prev) => ({ ...prev, desc: value }));
  };

  const handleCategoryToggle = (category) => {
    setPost((prev) => {
      const isSelected = prev.categories.includes(category);
      const newCategories = isSelected
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category];
      return { ...prev, categories: newCategories };
    });
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
      post.categories.forEach((c) => formData.append("categories", c));
      if (post.photo) formData.append("photo", post.photo);

      await axios.post("http://localhost:5000/api/posts", formData, {
        withCredentials: true,
      });

      alert("✅ Post published!");
      setPost({ title: "", desc: "", categories: [], photo: null });
      setPreview(null);
    } catch (err) {
      console.error("❌ Failed to publish post:", err);
      alert("❌ Error publishing post. Try again.");
    }
  };

  return (
    <div className="write-modern-page">
      <div className="write-modern-container">
        <h1>Create a New Blog Post</h1>
        <form onSubmit={handleSubmit} className="write-modern-form">
          <input
            name="title"
            type="text"
            placeholder="Enter a catchy title..."
            value={post.title}
            onChange={handleInputChange}
            className="input-title"
            required
          />

          <div className="checkbox-section">
            <label>Choose Categories:</label>
            <div className="checkbox-group">
              {categoriesList.map((cat) => (
                <label key={cat} className="checkbox-item">
                  <input
                    type="checkbox"
                    value={cat}
                    checked={post.categories.includes(cat)}
                    onChange={() => handleCategoryToggle(cat)}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="upload-section">
            <label htmlFor="file-upload" className="custom-file-upload">
              📁 {post.photo ? post.photo.name : "Choose Cover Image"}
            </label>
            <input
              name="photo"
              type="file"
              id="file-upload"
              accept="image/*"
              onChange={handleInputChange}
              hidden
            />
          </div>

          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Preview" />
            </div>
          )}

          <div className="quill-container">
            <ReactQuill
              theme="snow"
              value={post.desc}
              onChange={handleDescChange}
              placeholder="Write something amazing..."
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, false] }],
                  ["bold", "italic", "underline"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  [{ align: [] }],
                  ["link", "image"],
                  ["clean"],
                ],
              }}
            />
          </div>

          <button type="submit" className="publish-btn">
            🚀 Publish Post
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
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./write.css";

const categoriesList = [
  "Sports",
  "Business",
  "Technology",
  "Food",
  "Health",
  "Entertainment",
];

function Write() {
  const { currentUser } = useContext(AuthContext);

  const [post, setPost] = useState({
    title: "",
    desc: "",
    categories: [],
    photo: null,
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log("🧠 From localStorage:", storedUser);
    console.log("👤 From AuthContext:", currentUser);
  }, [currentUser]);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      const file = files[0];
      setPost((prev) => ({ ...prev, photo: file }));
      if (file) setPreview(URL.createObjectURL(file));
    } else {
      setPost((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDescChange = (value) => {
    setPost((prev) => ({ ...prev, desc: value }));
  };

  // ✅ Select only one category at a time
  const handleCategorySelect = (category) => {
    setPost((prev) => ({
      ...prev,
      categories: [category],
    }));
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
      post.categories.forEach((c) => formData.append("categories", c));
      if (post.photo) formData.append("photo", post.photo);

      await axios.post("http://localhost:5000/api/posts", formData, {
        withCredentials: true,
      });

      alert("✅ Post published!");
      setPost({ title: "", desc: "", categories: [], photo: null });
      setPreview(null);
    } catch (err) {
      console.error("❌ Failed to publish post:", err);
      alert("❌ Error publishing post. Try again.");
    }
  };

  return (
    <div className="write-modern-page">
      <div className="write-modern-container">
        <h1>Create a New Blog Post</h1>
        <form onSubmit={handleSubmit} className="write-modern-form">
          <input
            name="title"
            type="text"
            placeholder="Enter a catchy title..."
            value={post.title}
            onChange={handleInputChange}
            className="input-title"
            required
          />

          <div className="checkbox-section">
            <label>Choose One Category:</label>
            <div className="checkbox-group">
              {categoriesList.map((cat) => (
                <label key={cat} className="checkbox-item">
                  <input
                    type="checkbox"
                    value={cat}
                    checked={post.categories.includes(cat)}
                    onChange={() => handleCategorySelect(cat)}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="upload-section">
            <label htmlFor="file-upload" className="custom-file-upload">
              📁 {post.photo ? post.photo.name : "Choose Cover Image"}
            </label>
            <input
              name="photo"
              type="file"
              id="file-upload"
              accept="image/*"
              onChange={handleInputChange}
              hidden
            />
          </div>

          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Preview" />
            </div>
          )}

          <div className="quill-container">
            <ReactQuill
              theme="snow"
              value={post.desc}
              onChange={handleDescChange}
              name="desc"
              placeholder="Write something amazing..."
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, false] }],
                  ["bold", "italic", "underline"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  [{ align: [] }],
                  ["link", "image"],
                  ["clean"],
                ],
              }}
            />
          </div>

          <button type="submit" className="publish-btn">
            🚀 Publish Post
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
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./write.css";

const categoriesList = [
  ["sports"],
  ["business"],
  "Technology",
  ["food"],
  ["health"],
  ["entertainment"],
];

function Write() {
  const { currentUser } = useContext(AuthContext);

  const [post, setPost] = useState({
    title: "",
    desc: "",
    categories: [],
    photo: null,
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log("🧠 From localStorage:", storedUser);
    console.log("👤 From AuthContext:", currentUser);
  }, [currentUser]);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      const file = files[0];
      setPost((prev) => ({ ...prev, photo: file }));
      if (file) setPreview(URL.createObjectURL(file));
    } else {
      setPost((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDescChange = (value) => {
    setPost((prev) => ({ ...prev, desc: value }));
  };

  // Select only one category at a time
  const handleCategorySelect = (category) => {
    setPost((prev) => ({
      ...prev,
      categories: [category],
    }));
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
      post.categories.forEach((c) => formData.append("categories", c));
      if (post.photo) formData.append("photo", post.photo);

      await axios.post("http://localhost:5000/api/posts", formData, {
        withCredentials: true,
      });

      alert("✅ Post published!");
      setPost({ title: "", desc: "", categories: [], photo: null });
      setPreview(null);
    } catch (err) {
      console.error("❌ Failed to publish post:", err);
      alert("❌ Error publishing post. Try again.");
    }
  };

  // Show message if user not logged in (optional)
  if (!currentUser) {
    return <div>Please log in to write a post.</div>;
  }

  return (
    <div className="write-modern-page">
      <div className="write-modern-container">
        <h1>Create a New Blog Post</h1>
        <form onSubmit={handleSubmit} className="write-modern-form">
          <input
            name="title"
            type="text"
            placeholder="Enter a catchy title..."
            value={post.title}
            onChange={handleInputChange}
            className="input-title"
            required
          />

          <div className="checkbox-section">
            <label>Choose One Category:</label>
            <div className="checkbox-group">
              {categoriesList.map((cat) => (
                <label key={cat} className="checkbox-item">
                  <input
                    type="checkbox"
                    value={cat}
                    checked={post.categories.includes(cat)}
                    onChange={() => handleCategorySelect(cat)}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="upload-section">
            <label htmlFor="file-upload" className="custom-file-upload">
              📁 {post.photo ? post.photo.name : "Choose Cover Image"}
            </label>
            <input
              name="photo"
              type="file"
              id="file-upload"
              accept="image/*"
              onChange={handleInputChange}
              hidden
            />
          </div>

          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Preview" />
            </div>
          )}

          <div className="quill-container">
            <ReactQuill
              theme="snow"
              value={post.desc}
              onChange={handleDescChange}
              name="desc"
              placeholder="Write something amazing..."
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, false] }],
                  ["bold", "italic", "underline"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  [{ align: [] }],
                  ["link", "image"],
                  ["clean"],
                ],
              }}
            />
          </div>

          <button type="submit" className="publish-btn">
            🚀 Publish Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Write;

