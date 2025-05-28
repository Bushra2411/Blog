
/*import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/api/posts/${id}`, {
      data: { username: post.username } // required by backend
    }).then(() => navigate("/"));
  };

  const handleLike = () => {
    // You need to implement "like" route on backend if you haven't
    axios.put(`http://localhost:5000/api/posts/${id}/like`)
      .then(res => setPost(res.data));
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-details">
      <h2>{post.title}</h2>
      {post.photo && (
        <img
          src={`http://localhost:5000/images/${post.photo}`}
          alt={post.title}
          style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
        />
      )}
      <p>{post.desc}</p>
      <p><strong>Author:</strong> {post.username}</p>
     
      <button onClick={handleLike}>Like 👍</button>
      <button onClick={() => navigate(`/update/${id}`)}>Update ✏️</button>
      <button onClick={handleDelete}>Delete 🗑️</button>
    </div>
  );
}

export default PostDetails;*/

/*import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaThumbsUp, FaEdit, FaTrash } from "react-icons/fa";
import "./postdetails.css";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error("Failed to load post:", err));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/api/posts/${id}`, {
        data: { username: post.username },
      })
      .then(() => navigate("/"))
      .catch((err) => console.error("Failed to delete post:", err));
  };

  const handleLike = () => {
    axios
      .put(`http://localhost:5000/api/posts/${id}/like`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error("Like failed:", err));
  };

  if (!post) return <p className="loading">Loading...</p>;

  return (
    <div className="post-container">
      <div className="post-header">
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span>By {post.username}</span>
        </div>
      </div>

      {post.photo && (
        <img
          className="post-image"
          src={`http://localhost:5000/images/${post.photo}`}
          alt={post.title}
        />
      )}

      <div className="post-content">
        <p>{post.desc}</p>
      </div>

      <div className="post-actions">
        <button className="icon-btn like-btn" onClick={handleLike}>
          <FaThumbsUp /> Like
        </button>
        <button className="icon-btn edit-btn" onClick={() => navigate(`/update/${id}`)}>
          <FaEdit /> Edit
        </button>
        <button className="icon-btn delete-btn" onClick={handleDelete}>
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
}

export default PostDetails;*/

/*import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaThumbsUp, FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import "./postdetails.css";

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error("Failed to load post:", err));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/api/posts/${id}`, {
        data: { username: user?.username },
      })
      .then(() => navigate("/"))
      .catch((err) => console.error("Failed to delete post:", err));
  };

  const handleLike = () => {
    axios
      .put(`http://localhost:5000/api/posts/${id}/like`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error("Like failed:", err));
  };

  if (!post) return <p className="loading">Loading...</p>;

  return (
    <div className="post-container" style={{ position: "relative" }}>
      
      <button
        className="icon-btn close-btn"
        style={{ position: "absolute", top: "10px", right: "10px", zIndex: 1000 }}
        onClick={() => navigate(-1)}
        aria-label="Close"
      >
        <FaTimes size={20} />
      </button>

      <div className="post-header">
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span>By {post.username}</span>
        </div>
      </div>

      {post.photo && (
        <img
          className="post-image"
          src={`http://localhost:5000/images/${post.photo}`}
          alt={post.title}
        />
      )}

      <div className="post-content">
        <p>{post.desc}</p>
      </div>

      <div className="post-actions">
        <button className="icon-btn like-btn" onClick={handleLike}>
          <FaThumbsUp /> Like
        </button>

        {user?.username === post.username && (
          <>
            <button
              className="icon-btn edit-btn"
              onClick={() => navigate(`/update/${id}`)}
            >
              <FaEdit /> Edit
            </button>
            <button className="icon-btn delete-btn" onClick={handleDelete}>
              <FaTrash /> Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default PostDetails;*/


import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaThumbsUp, FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import "./postdetails.css";

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error("Failed to load post:", err));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/api/posts/${id}`, {
        data: { username: user?.username },
      })
      .then(() => navigate("/"))
      .catch((err) => console.error("Failed to delete post:", err));
  };

  const handleLike = () => {
    axios
      .put(`http://localhost:5000/api/posts/${id}/like`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error("Like failed:", err));
  };

  if (!post) return <p className="loading">Loading...</p>;

  return (
    <div className="post-container" style={{ position: "relative" }}>
      {/* Close button top-right */}
      <button
        className="icon-btn close-btn"
        style={{ position: "absolute", top: "10px", right: "10px", zIndex: 1000 }}
        onClick={() => navigate(-1)}
        aria-label="Close"
      >
        <FaTimes size={20} />
      </button>

      <div className="post-header">
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span>By {post.username}</span>
        </div>
      </div>

      {post.photo && (
        <img
          className="post-image"
          src={`http://localhost:5000/images/${post.photo}`}
          alt={post.title}
        />
      )}

      <div className="post-content">
        <p>{post.desc}</p>
      </div>

      <div className="post-actions">
        <button className="icon-btn like-btn" onClick={handleLike}>
          <FaThumbsUp /> Like
        </button>

        {user?.username === post.username && (
          <>
            <button
              className="icon-btn edit-btn"
              onClick={() => navigate(`/edit/${id}`)}  
            >
              <FaEdit /> Edit
            </button>
            <button className="icon-btn delete-btn" onClick={handleDelete}>
              <FaTrash /> Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default PostDetails;
