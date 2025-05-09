
import React from 'react';

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
          <img
            src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Breaking News"
          />
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

export default TopHeadlines;
