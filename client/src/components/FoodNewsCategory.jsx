
/*
import React, { useEffect, useState } from 'react';
import './FoodNewsCategory.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

function FoodNewsCategory() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchFoodPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts?category=food");
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch food posts:", err);
      }
    };
    fetchFoodPosts();
  }, []);

  const truncateText = (text, maxLength = 80) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...more' : text;
  };

  return (
    <>
      <Header />
      <section className="food-section">
        <h2 className="food-title">Food</h2>
        <div className="food-grid">
          {posts.map((item, index) => (
            <div className="food-card" key={index}>
              <img src={item.photo} alt={item.title} />
              <div className="food-card-content">
                <h3>{item.title}</h3>
                <h5><em>Post From: {item.username}</em></h5>
                <p>{truncateText(item.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default FoodNewsCategory;
*/

import React, { useEffect, useState } from 'react';
import './FoodNewsCategory.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

function stripHtmlTags(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function FoodNewsCategory() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchFoodPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts?cat=food");
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch food posts:", err);
      }
    };
    fetchFoodPosts();
  }, []);

  const getImageUrl = (photo) => {
    if (!photo) return "/default.jpg"; // fallback image
    return photo.startsWith("http") ? photo : `http://localhost:5000/images/${photo}`;
  };

  const truncateText = (html, maxLength = 80) => {
    if (!html) return '';
    const text = stripHtmlTags(html);
    return text.length > maxLength ? text.substring(0, maxLength) + '...more' : text;
  };

  return (
    <>
      <Header />
      <section className="food-section">
        <h2 className="food-title">Food</h2>
        <div className="food-grid">
          {posts.map((item) => (
            <Link
              to={`/post/${item._id}`}
              key={item._id}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="food-card">
                <img src={getImageUrl(item.photo)} alt={item.title} />
                <div className="food-card-content">
                  <h3>{item.title}</h3>
                  <h5><em>Post From: {item.username}</em></h5>
                  <p>{truncateText(item.desc)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default FoodNewsCategory;


