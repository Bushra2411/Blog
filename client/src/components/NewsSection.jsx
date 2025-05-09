
import React from 'react';

/*function SportsNewsCategory() {
  return (
    <div className="news" id="sportsNews">
      <div className="title"><h2>Sports News</h2></div>
      <div className="sports-content-column">
        <div className="breaking-news">
          <h3>Trending</h3>
          <img src="https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=600" alt="breaking news" />
          <h4>Star Player Injured in Training</h4>
          <p>Star player suffers a minor injury during training, casting doubt on their participation in the upcoming championship game.</p>
        </div>

        <div className="top-headlines-grid">
          <h3>Popular</h3>
          <div className="headline">
          <img src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=400&q=80" alt="headline 3" />

            <p>Team A defeats Team B in a thrilling match.</p>
          </div>
          <div className="headline">
          <img src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=400&q=80" alt="headline 2" />
            <p>Star player scores hat-trick in finals.</p>
          </div>
          <div className="headline">
          <img src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=400&q=80"alt="headline 3" />
            <p>Star player scores hat-trick in finals.</p>
          </div>
        </div>
      </div>
    </div>
  );
}*/



function SportsNewsCategory() {
  return (
    <div className="news" id="sportsNews">
      <div className="title"><h2>Sports News</h2></div>
    <div className="sports-news-layout">
      <div className="column left">
        <div className="news-card big">
          <img src="https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg" alt="Big News" />
          <h2>Star Player Injured in Training</h2>
          <p>The star player suffers a minor injury during training, casting doubt on their participation in the finals.</p>
        </div>

        <div className="news-card small">
          <img src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=400&q=80" alt="Match Recap" />
          <p>Team A defeats Team B in a thrilling match.</p>
        </div>
      </div>

      <div className="column center">
        <div className="news-card featured">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" alt="Featured" />
          <h2>Championship Finals Set to Begin This Weekend</h2>
          <p>Teams prepare for the ultimate face-off in this year’s grand championship. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, deleniti aspernatur dolor atque, rem qui reiciendis eaque dignissimos fuga at accusamus architecto? Aperiam suscipit laudantium dolore, non et facere architecto?</p>
        </div>
      </div>

      <div className="column right">
        <div className="news-card small">
          <img src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d" alt="Hat-trick 1" />
          <p>Star player scores hat-trick in finals.</p>
        </div>
        <div className="news-card small">
          <img src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d" alt="Hat-trick 2" />
          <p>Coach praises young talent after big win.</p>
        </div>
        <div className="news-card small">
          <img src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d" alt="Hat-trick 3" />
          <p>New signing already making waves in practice.</p>
        </div>
      </div>
    </div>
    </div>
  );
}



function BusinessNewsCategory() {
  return (
    <div className="news business-news" id='businessNews'>
      <div className="title"><h2>Business News</h2></div>
      <div className="business-layout">
        <div className="featured-story">
          <img src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=800&q=80" alt="featured story" />
          <h3>Market Hits Record High</h3>
          <p>The stock market saw a historic surge today, driven by tech stocks and investor optimism.</p>
        </div>
        <div className="headline-grid">
        <div className="headline-card">
          <img src="https://media.istockphoto.com/id/1475038793/photo/trade-and-finance-concept-businessman-checking-stock-market-by-his-laptop-trading-graph.jpg?s=2048x2048&w=is&k=20&c=49z0uiFsLyFqH4sKzU5fZfYKcM5J1xK-aSVBRj6lvxg=" alt="headline1" />
          <h3>Cryptocurrency sees unexpected rebound.</h3>  
        </div>
        <div className="headline-card">
           <img src="https://media.istockphoto.com/id/1471442739/photo/businessman-analyzing-business-enterprise-data-management-business-analytics-with-charts.webp?s=2048x2048&w=is&k=20&c=UfspLMc2vlfl2Ck_YmjWseuo0yYnx-YPPPaFNm22ygY=" alt="headline 2" />
          <h3>Major bank announces interest rate changes.</h3>
       </div>
       <div className="headline-card">
            <img src="https://media.istockphoto.com/id/1418476287/photo/businessman-analyzing-companys-financial-balance-sheet-working-with-digital-augmented-reality.webp?s=2048x2048&w=is&k=20&c=6TnFp1GpVfRd7ZLIl-GJAO0IAkrcBPT4xvcrvr8QcRc=" alt="headline 3" />
           <h3>Startups lead innovation in financial tech.</h3>
       </div>
      <div className="headline-card">
         <img src="https://media.istockphoto.com/id/1964367876/photo/businesswoman-analyzing-companys-business-financial-balance-sheet-working-with-digital.webp?s=2048x2048&w=is&k=20&c=7qsfS5m_hV3b3ab2PbAmquomiSH--RdtWzDqdYdbvsU=" alt="headline 4" />
         <h3>Investors eye opportunities in green energy.</h3>
      </div>
          </div>
        </div>
      </div>
  );
}

function NewsCategory({ id, title }) {
  return (
    <div className="news" id={id}>
      <div className="title"><h2>{title}</h2></div>
      <div className="newsBox"></div>
    </div>
  );
}

function NewsSection() {
  return (
    <div className="page2">
      <SportsNewsCategory />
      <BusinessNewsCategory />
    </div>
  );
}

export default NewsSection;

