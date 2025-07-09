

/*import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function getImageUrl(photo) {
  if (!photo) return "/default.jpg"; // fallback image
  return photo.startsWith("http") ? photo : `http://localhost:5000/images/${photo}`;
}

function SportsNewsCategory({ posts }) {
  const sportsPosts = posts.filter((post) =>
    post.categories?.includes("sports")
  );

  return (
    <div className="news" id="sportsNews">
      <div className="title">
        <h2>
          <Link to="/sports" style={{ textDecoration: "none", color: "inherit" }}>
            Sports News
          </Link>
        </h2>
      </div>
      <div className="sports-news-layout">
        <div className="column left">
          {sportsPosts[0] && (
            <Link to={`/post/${sportsPosts[0]._id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="news-card big">
                <img src={getImageUrl(sportsPosts[0].photo)} alt={sportsPosts[0].title} />
                <h2>{sportsPosts[0].title}</h2>
                <p>{sportsPosts[0].desc}</p>
              </div>
            </Link>
          )}
        </div>
        <div className="column center">
          {sportsPosts[1] && (
            <Link to={`/post/${sportsPosts[1]._id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="news-card featured">
                <img src={getImageUrl(sportsPosts[1].photo)} alt={sportsPosts[1].title} />
                <h2>{sportsPosts[1].title}</h2>
                <p>{sportsPosts[1].desc}</p>
              </div>
            </Link>
          )}
        </div>
        <div className="column right">
          {sportsPosts.slice(2, 5).map((post) => (
            <Link to={`/post/${post._id}`} key={post._id} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="news-card small">
                <img src={getImageUrl(post.photo)} alt={post.title} />
                <p>{post.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function BusinessNewsCategory({ posts }) {
  const businessPosts = posts.filter((post) =>
    post.categories?.includes("business")
  );

  return (
    <div className="news business-news" id="businessNews">
      <div className="title">
        <h2>
          <Link to="/business" style={{ textDecoration: "none", color: "inherit" }}>
            Business News
          </Link>
        </h2>
      </div>
      <div className="business-layout">
        {businessPosts[0] && (
          <Link to={`/post/${businessPosts[0]._id}`} className="featured-story" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={getImageUrl(businessPosts[0].photo)} alt={businessPosts[0].title} />
            <h3>{businessPosts[0].title}</h3>
            <p>{businessPosts[0].desc}</p>
          </Link>
        )}
        <div className="headline-grid">
          {businessPosts.slice(1, 5).map((post) => (
            <Link to={`/post/${post._id}`} key={post._id} className="post-link headline-card" style={{ textDecoration: "none", color: "inherit" }}>
              <img src={getImageUrl(post.photo)} alt={post.title} />
              <h3>{post.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function NewsSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts")
      .then((res) => {
        setPosts(res.data);
        console.log("Fetched posts:", res.data);
      })
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="page2">
      <SportsNewsCategory posts={posts} />
      <BusinessNewsCategory posts={posts} />
    </div>
  );
}

export default NewsSection;*/


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Helper function for image URL
function getImageUrl(photo) {
  if (!photo) return "/default.jpg"; // fallback image
  return photo.startsWith("http") ? photo : `http://localhost:5000/images/${photo}`;
}

// Sports News Component
function SportsNewsCategory({ posts }) {
  const sportsPosts = posts.filter((post) =>
    post.categories?.includes("sports")
  );

  return (
    <div className="news" id="sportsNews">
      <div className="title">
        <h2>
          <Link to="/sports" style={{ textDecoration: "none", color: "inherit" }}>
            Sports News
          </Link>
        </h2>
      </div>
      <div className="sports-news-layout">
        <div className="column left">
          {sportsPosts[0] && (
            <Link to={`/post/${sportsPosts[0]._id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="news-card big">
                <img src={getImageUrl(sportsPosts[0].photo)} alt={sportsPosts[0].title} />
                <h2>{sportsPosts[0].title}</h2>
                <p>By {sportsPosts[0].username}</p>
              </div>
            </Link>
          )}
        </div>
        <div className="column center">
          {sportsPosts[1] && (
            <Link to={`/post/${sportsPosts[1]._id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="news-card featured">
                <img src={getImageUrl(sportsPosts[1].photo)} alt={sportsPosts[1].title} />
                <h2>{sportsPosts[1].title}</h2>
                <p>By {sportsPosts[1].username}</p>
              </div>
            </Link>
          )}
        </div>
        <div className="column right">
          {sportsPosts.slice(2, 5).map((post) => (
            <Link to={`/post/${post._id}`} key={post._id} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="news-card small">
                <img src={getImageUrl(post.photo)} alt={post.title} />
                <p>{post.title}</p>
                <p>By {post.username}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Business News Component
function BusinessNewsCategory({ posts }) {
  const businessPosts = posts.filter((post) =>
    post.categories?.includes("business")
  );

  return (
    <div className="news business-news" id="businessNews">
      <div className="title">
        <h2>
          <Link to="/business" style={{ textDecoration: "none", color: "inherit" }}>
            Business News
          </Link>
        </h2>
      </div>
      <div className="business-layout">
        {businessPosts[0] && (
          <Link to={`/post/${businessPosts[0]._id}`} className="featured-story" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={getImageUrl(businessPosts[0].photo)} alt={businessPosts[0].title} />
            <h3>{businessPosts[0].title}</h3>
            <p>By {businessPosts[0].username}</p>
          </Link>
        )}
        <div className="headline-grid">
          {businessPosts.slice(1, 5).map((post) => (
            <Link to={`/post/${post._id}`} key={post._id} className="post-link headline-card" style={{ textDecoration: "none", color: "inherit" }}>
              <img src={getImageUrl(post.photo)} alt={post.title} />
              <h3>{post.title}</h3>
              <p>By {post.username}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main News Section
function NewsSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts")
      .then((res) => {
        setPosts(res.data);
        console.log("Fetched posts:", res.data);
      })
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="page2">
      <SportsNewsCategory posts={posts} />
      <BusinessNewsCategory posts={posts} />
    </div>
  );
}

export default NewsSection;
