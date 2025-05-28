/*
import React, { useEffect, useState } from 'react';
import './BusinessNewsCategory.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

function BusinessNewsCategory() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBusinessPosts = async () => {
      try {
        
       const res = await axios.get("http://localhost:5000/api/posts?category=business");

        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch business posts:", err);
      }
    };
    fetchBusinessPosts();
  }, []);

  const featuredPost = posts[0];
  //const smallPosts = posts.slice(1, 5);
  const smallPosts = posts;

  const truncateText = (text, maxLength = 80) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...more' : text;
  };

  return (
    <>
      <Header />
      <section className="business-section">
        <h2 className="business-title">Business</h2>
        <div className="business-container">

        
          <div className="small-cards-column">
            {smallPosts.map((post, index) => (
              <div className="small-card" key={index}>
                <img src={post.photo} alt={post.title} />
                <p><strong>{post.title}</strong></p>
                <p><em>By {post.username}</em></p>
                <p>{truncateText(post.desc)}</p>
              </div>
            ))}
          </div>
          {featuredPost && (
            <div className="featured-business-card">
              <img src={featuredPost.photo} alt={featuredPost.title} />
              <div className="card-content">
                <h3>{featuredPost.title}</h3>
                <p><em>By {featuredPost.username}</em></p>
                <p>{truncateText(featuredPost.desc, 200)}</p>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BusinessNewsCategory;*/

import React, { useEffect, useState } from 'react';
import './BusinessNewsCategory.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BusinessNewsCategory() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBusinessPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts?cat=business");
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch business posts:", err);
      }
    };
    fetchBusinessPosts();
  }, []);

  const getImageUrl = (photo) => {
    if (!photo) return "/default.jpg"; // fallback image
    return photo.startsWith("http") ? photo : `http://localhost:5000/images/${photo}`;
  };

  const truncateText = (text, maxLength = 80) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...more' : text;
  };

  const featuredPost = posts[0];
  const smallPosts = posts.slice(1);

  return (
    <>
      <Header />
      <section className="business-section">
        <h2 className="business-title">Business</h2>
        <div className="business-container">

          {/* Small News Cards */}
          <div className="small-cards-column">
            {smallPosts.map((post) => (
              <Link to={`/post/${post._id}`} key={post._id} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="small-card">
                  <img src={getImageUrl(post.photo)} alt={post.title} />
                  <p><strong>{post.title}</strong></p>
                  <p><em>By {post.username}</em></p>
                  <p>{truncateText(post.desc)}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Featured Large Card */}
          {featuredPost && (
            <Link to={`/post/${featuredPost._id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="featured-business-card">
                <img src={getImageUrl(featuredPost.photo)} alt={featuredPost.title} />
                <div className="card-content">
                  <h3>{featuredPost.title}</h3>
                  <p><em>By {featuredPost.username}</em></p>
                  <p>{truncateText(featuredPost.desc, 200)}</p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BusinessNewsCategory;
