// src/pages/PostPage.jsx
/*import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SinglePost from "../components/SinglePost";

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.error("Failed to fetch post", err));
  }, [id]);

  return (
    <div className="post-page">
      {post ? <SinglePost post={post} /> : <p>Loading post...</p>}
    </div>
  );
}*/

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SinglePost from "../components/SinglePost";

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const user = JSON.parse(localStorage.getItem("user")); // ✅ read user here

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.error("Failed to fetch post", err));
  }, [id]);

  return (
    <div className="post-page">
      {post ? <SinglePost post={post} user={user} /> : <p>Loading post...</p>}
    </div>
  );
}

