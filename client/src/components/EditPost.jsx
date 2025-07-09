

/*import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/${id}`) // ✅ Corrected
      .then((res) => {
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [id]);

  const handleUpdate = () => {
    axios
      .put(`http://localhost:5000/api/posts/${id}`, { // ✅ Corrected
        title,
        desc,
        username: user?.username,
      })
      .then(() => navigate(`/post/${id}`))
      .catch((err) => console.error("Update error:", err));
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div className="edit-post">
      <h2>Edit Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default EditPost;*/

/*import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editpost.css";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc); // HTML content from ReactQuill
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [id]);

  const handleUpdate = () => {
    axios
      .put(`http://localhost:5000/api/posts/${id}`, {
        title,
        desc,
        username: user?.username,
      })
      .then(() => navigate(`/post/${id}`))
      .catch((err) => console.error("Update error:", err));
  };

  if (!post) return <p className="loading-text">Loading...</p>;

  return (
    <div className="edit-post-container">
      <h2 className="edit-post-heading">Edit Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="edit-post-input"
      />

      <ReactQuill
        theme="snow"
        value={desc}
        onChange={setDesc}
        className="edit-post-textarea"
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

      <button onClick={handleUpdate} className="edit-post-button">
        Update
      </button>
    </div>
  );
}

export default EditPost;*/

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editpost.css";

const categoriesList = ["sports", "business", "Technology", "food", "health", "entertainment"];

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/${id}`)
      .then((res) => {
        const data = res.data;
        setPost(data);
        setTitle(data.title);
        setDesc(data.desc);
        setCategory(data.categories?.[0] || "");
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        alert("❌ Failed to load post.");
      });
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/posts/${id}`,
        {
          title,
          desc,
          username: user?.username,
          categories: category,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("✅ Post updated!");
      navigate(`/post/${id}`);
    } catch (err) {
      console.error("🔴 Update error:", err.response?.data || err.message);
      alert("❌ Failed to update post.");
    }
  };

  if (!post) return <p className="loading-text">Loading...</p>;

  return (
    <div className="edit-post-container">
      <h1 className="edit-heading">✏️ Edit Your Post</h1>

      <input
        type="text"
        className="edit-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Edit your title..."
      />

      <div className="category-section">
        <label className="category-label">Category:</label>
        <div className="category-options">
          {categoriesList.map((cat) => (
            <label key={cat} className="category-radio">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={category === cat}
                onChange={() => setCategory(cat)}
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      <ReactQuill
        theme="snow"
        value={desc}
        onChange={setDesc}
        className="edit-quill"
        placeholder="Update your content..."
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

      <button onClick={handleUpdate} className="save-btn">
        💾 Save Changes
      </button>
    </div>
  );
}

export default EditPost;
