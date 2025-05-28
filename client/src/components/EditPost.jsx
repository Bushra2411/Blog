

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

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
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
        setDesc(res.data.desc);
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
      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="edit-post-textarea"
      />
      <button onClick={handleUpdate} className="edit-post-button">
        Update
      </button>
    </div>
  );
}

export default EditPost;
