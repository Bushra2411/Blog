

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaThumbsUp, FaTrash, FaEdit } from "react-icons/fa";
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

  const handleLike = () => {
    if (!user) {
      alert("You need to log in to like this post.");
      return;
    }

    axios
      .put(`http://localhost:5000/api/posts/like/${id}`, {
        username: user.username,
      })
      .then((res) => {
        setPost((prevPost) => ({
          ...prevPost,
          likes: res.data.likes,
        }));
      })
      .catch((err) => console.error("Like failed:", err));
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`, {
        data: { username: user?.username }, // sending username in body
        withCredentials: true,
      });
      alert("✅ Post deleted.");
      navigate("/");
    } catch (err) {
      console.error("Delete failed:", err);
      alert("❌ You can only delete your own posts.");
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const calculateReadingTime = (text) => {
    const wordsPerMinute = 200;
    const words = text?.split(/\s+/).length || 0;
    return `${Math.ceil(words / wordsPerMinute)} min read`;
  };

  if (!post) return <p className="loading">Loading...</p>;
  const hasLiked = post.likes?.includes(user?.username);
  const isAuthor = user?.username === post.username;

  return (
    <div className="single-post-wrapper">
      <div className="post-container">
        <img
          className="full-post-image"
          src={
            post.photo
              ? `http://localhost:5000/images/${post.photo}`
              : "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          }
          alt={post.title}
        />

        <div className="post-meta-box">
          <div className="author-profile">
            <div className="circle-avatar">{post.username[0]}</div>
            <div>
              <p className="author-name">{post.username}</p>
              <p className="post-date">
                {new Date(post.createdAt).toDateString()} · {calculateReadingTime(post.desc)}
              </p>
            </div>
          </div>

          <h1 className="post-title">{post.title}</h1>

          <div
            className="post-desc"
            dangerouslySetInnerHTML={{ __html: post.desc }}
          ></div>

          <div className="post-actions">
            <button
              className={`like-button ${hasLiked ? "liked" : ""}`}
              onClick={handleLike}
            >
              <FaThumbsUp /> Like ({post.likes?.length || 0})
            </button>

            {isAuthor && (
              <>
                <button className="edit-button" onClick={handleEdit}>
                  <FaEdit /> Edit
                </button>
                <button className="delete-button" onClick={handleDelete}>
                  <FaTrash /> Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;