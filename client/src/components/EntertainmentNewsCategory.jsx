
/*import React, { useEffect, useState } from 'react';
import './EntertainmentNewsCategory.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

const EntertainmentNewsCategory = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchEntertainmentPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts?category=entertainment");
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch entertainment posts:", err);
      }
    };
    fetchEntertainmentPosts();
  }, []);

  const featured = posts[0];
  //const miniStories = posts.slice(1, 4);
  const miniStories = posts;

  const truncateText = (text, maxLength = 80) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...more' : text;
  };

  return (
    <>
      <Header />
      <section className="entertainment-wrapper">
        <h2 className="entertainment-heading">Entertainment</h2>
        <div className="entertainment-split">
          
          
          {featured && (
            <div className="featured-entertainment">
              <img src={featured.photo} alt={featured.title} />
              <div className="featured-text">
                <h3>{featured.title}</h3>
                <p><em>By {featured.username}</em></p>
                <p>{truncateText(featured.desc, 200)}</p>
              </div>
            </div>
          )}

        
          <div className="mini-stories">
            {miniStories.map((story, i) => (
              <div className="mini-story" key={i}>
                <img src={story.photo} alt={story.title} />
                <h4>{story.title}</h4>
                <p><em>Post From: {story.username}</em></p>
                <p>{truncateText(story.desc, 100)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EntertainmentNewsCategory;*/


import React, { useEffect, useState } from 'react';
import './EntertainmentNewsCategory.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EntertainmentNewsCategory = () => {
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

  const truncateText = (text, maxLength = 80) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...more' : text;
  };

  const featured = posts[0];
  const miniStories = posts.slice(1);

  return (
    <>
      <Header />
      <section className="entertainment-wrapper">
        <h2 className="entertainment-heading">Entertainment</h2>
        <div className="entertainment-split">

          {/* Featured Entertainment Post */}
          {featured && (
            <Link to={`/post/${featured._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="featured-entertainment">
                <img src={getImageUrl(featured.photo)} alt={featured.title} />
                <div className="featured-text">
                  <h3>{featured.title}</h3>
                  <p><em>By {featured.username}</em></p>
                  <p>{truncateText(featured.desc, 200)}</p>
                </div>
              </div>
            </Link>
          )}

          {/* Mini Stories */}
          <div className="mini-stories">
            {miniStories.map((story) => (
              <Link to={`/post/${story._id}`} key={story._id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="mini-story">
                  <img src={getImageUrl(story.photo)} alt={story.title} />
                  <h4>{story.title}</h4>
                  <p><em>Post From: {story.username}</em></p>
                  <p>{truncateText(story.desc, 100)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EntertainmentNewsCategory;
