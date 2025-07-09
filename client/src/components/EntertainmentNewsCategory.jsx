

import React, { useEffect, useState } from 'react';
import './EntertainmentNewsCategory.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

function stripHtmlTags(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function truncateText(html, maxLength = 80) {
  if (!html) return '';
  const text = stripHtmlTags(html);
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

function EntertainmentNewsCategory() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchEntertainmentPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts?cat=entertainment");
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch entertainment posts:", err);
      }
    };
    fetchEntertainmentPosts();
  }, []);

  const getImageUrl = (photo) => {
    if (!photo) return "/default.jpg";
    return photo.startsWith("http") ? photo : `http://localhost:5000/images/${photo}`;
  };

  return (
    <>
      <Header />
      <section className="entertainment-section">
        <h2 className="entertainment-title">Entertainment</h2>
        <div className="entertainment-grid">
          {posts.map((post) => (
            <div className="entertainment-card" key={post._id}>
              <img src={getImageUrl(post.photo)} alt={post.title} />
              <div className="entertainment-card-content">
                <h3>
                  <Link to={`/post/${post._id}`} className="title-link">
                    {post.title}
                  </Link>
                </h3>
                <h5><em>Post From: {post.username}</em></h5>
                <p>
                  {truncateText(post.desc)}
                  {stripHtmlTags(post.desc || "").length > 80 && (
                    <Link to={`/post/${post._id}`} className="read-more-link">
                      Read more
                    </Link>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default EntertainmentNewsCategory;
