
/*import React from 'react';

function TopHeadlines() {
  const posts = [
    {
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Medical authorities are closely monitoring a newly discovered virus variant that has shown high transmission rates in several countries...",
      
    },
    {
      image: "https://images.pexels.com/photos/3935324/pexels-photo-3935324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Medical authorities are closely monitoring a newly discovered virus variant that has shown high transmission rates in several countries..."
    },
    {
      image: "https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Medical authorities are closely monitoring a newly discovered virus variant that has shown high transmission rates in several countries..."
    },
    {
      image: "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Medical authorities are closely monitoring a newly discovered virus variant that has shown high transmission rates in several countries..."
    },
    {
      image: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Medical authorities are closely monitoring a newly discovered virus variant that has shown high transmission rates in several countries..."
    },
    {
      image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Medical authorities are closely monitoring a newly discovered virus variant that has shown high transmission rates in several countries..."
    }
  ];

  return (
    <div className="topHeadlines">
      <div className="left">
        <div className="title"><h2>Trending</h2></div>
        <div className="img" id="breakingImg">
        <a href='#'>
          <img
            src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Breaking News"
          />
          </a>
        </div>
        <div className="text" id="breakingNews">
          <div className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div className="date">May 7, 2025</div>
          <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, veritatis quibusdam, nam, molestias ad aperiam tempora quam fugiat libero perspiciatis veniam? Quasi sunt ex reiciendis accusamus fuga necessitatibus perspiciatis libero!</div>
        </div>
      </div>

      <div className="right">
        <div className="title"><h2>Popular</h2></div>
        <div className="topNews">
          {posts.map((post, index) => (
            <div key={index} className="news">
              <div className="img">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="text">
                <div className="title">
                  <a href="#"><p>{post.title}</p></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopHeadlines;*/

/*import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function TopHeadlines() {
  const [trending, setTrending] = useState(null);
  const [popular, setPopular]   = useState([]);
  const API = "http://localhost:5000/api/posts";

  function stripHtmlTags(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}
   const truncateText = (html, maxLength = 80) => {
    if (!html) return '';
    const text = stripHtmlTags(html);
    return text.length > maxLength ? text.substring(0, maxLength) + '...more' : text;
  };
  useEffect(() => {
    (async () => {
      try {
        const { data: posts } = await axios.get(API);

        // --- pick TRENDING ---
        const breaking = posts
          .filter(p => p.isBreaking)          // set by backend/editor
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];

        // fallback to newest post if no breaking flag
        setTrending(breaking || posts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )[0]);

        // --- pick POPULAR (top 6 by views) ---
        const popularPosts = [...posts]
          .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
          .slice(0, 6);

        setPopular(popularPosts);
      } catch (err) {
        console.error("Failed to load headlines:", err);
      }
    })();
  }, []);

  return (
    <div className="topHeadlines">
      <div className="left">
        <div className="title"><h2>Trending</h2></div>

        {trending ? (
          <>
            <div className="img" id="breakingImg">
              <Link to={`/post/${trending._id}`}>
                <img
                  src={`http://localhost:5000/images/${trending.photo}`}
                  alt={trending.title}
                />
              </Link>
            </div>
            <div className="text" id="breakingNews">
              <div className="title">{trending.title}</div>
              <div className="date">
                {new Date(trending.createdAt).toLocaleDateString()}
              </div>
              <div className="description">{trending.desc}</div>
            </div>
          </>
        ) : (
          <p>Loading…</p>
        )}
      </div>

  
      <div className="right">
        <div className="title"><h2>Popular</h2></div>
        <div className="topNews">
          {popular.length ? (
            popular.map((post) => (
              <div key={post._id} className="news">
                <div className="img">
                  <img
                    src={`http://localhost:5000/images/${post.photo}`}
                    alt={post.title}
                  />
                </div>
                <div className="text">
                  <div className="title">
                    <Link
                      to={`/post/${post._id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <p>{post.title}</p>
                      
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading…</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopHeadlines;
*/



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function TopHeadlines() {
  const [trending, setTrending] = useState(null);
  const [popular, setPopular] = useState([]);
  const API = "http://localhost:5000/api/posts";

  // Remove HTML tags from content
  function stripHtmlTags(html) {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  // Truncate long text
  const truncateText = (html, maxLength = 100) => {
    if (!html) return '';
    const text = stripHtmlTags(html);
    return text.length > maxLength ? text.substring(0, maxLength) + '...more' : text;
  };

  useEffect(() => {
    (async () => {
      try {
        const { data: posts } = await axios.get(API);

        // --- pick TRENDING ---
        const breaking = posts
          .filter(p => p.isBreaking)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];

        setTrending(
          breaking ||
          posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0]
        );

        // --- pick POPULAR ---
        const popularPosts = [...posts]
          .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
          .slice(0, 6);

        setPopular(popularPosts);
      } catch (err) {
        console.error("Failed to load headlines:", err);
      }
    })();
  }, []);

  return (
    <div className="topHeadlines">
     
      <div className="left">
        <div className="title"><h2>Trending</h2></div>

        {trending ? (
          <>
            <div className="img" id="breakingImg">
              <Link to={`/post/${trending._id}`}>
                      <img
                  src={`http://localhost:5000/images/${trending.photo}`}
                  alt={trending.title}
                />


              </Link>
            </div>

            <Link to={`/post/${trending._id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="text" id="breakingNews">
                <div className="title">{trending.title}</div>
                <div className="date">
                  {new Date(trending.createdAt).toLocaleDateString()}
                </div>
                <div className="description">
                  {truncateText(trending.desc)}
                </div>
              </div>
            </Link>
          </>
        ) : (
          <p>Loading…</p>
        )}
      </div>

      
      <div className="right">
        <div className="title"><h2>Popular</h2></div>
        <div className="topNews">
          {popular.length ? (
            popular.map((post) => (
              <div key={post._id} className="news">
                <div className="img">
                  <img
                    src={`http://localhost:5000/images/${post.photo}`}
                    alt={post.title}
                  />
                </div>
                <div className="text">
                  <div className="title">
                    <Link
                      to={`/post/${post._id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <p>{post.title}</p>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading…</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopHeadlines;