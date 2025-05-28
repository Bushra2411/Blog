/*import React from 'react';

import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';

function Header() {
 
  return (
    <div className="header">
      <div className="logo">BLOG</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#sportsNews">Sports</a>
          </li>
          <li><a href="#businessNews">Business</a></li>
          <li><a href="#techNews">Contact</a></li>
        </ul>
        <div className="bar">
          <FaBarsStaggered className="open" />
          <FaXmark className="close" />
        </div>
      </nav>
    </div>
  );
}

export default Header;*/

/*import React from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';

function Header() {
  return (
    <div className="header">
      <div className="logo">BLOG</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#sportsNews">Sports</a></li>
          <li><a href="#businessNews">Business</a></li>
          <li><a href="/aboutme">AboutMe</a></li>
          <li><a href="#contact">Contact</a></li>

          <li className="dropdown">
            <a href="#">More ▾</a>
            <ul className="dropdown-menu">
              <li><a href="#food">Food</a></li>
              <li><a href="#health">Health</a></li>
              <li><a href="#entertainment">Entertainment</a></li>
            </ul>
          </li>
        </ul>

        <div className="buttons">
  <Link to="/write"><button>Write</button></Link>
  <Link to="/login"><button>Login</button></Link>
  <Link to="/register"><button>Register</button></Link>
</div>

        <div className="bar">
          <FaBarsStaggered className="open" />
          <FaXmark className="close" />
        </div>
      </nav>
    </div>
  );
}

export default Header;*/

/*import React from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';

function Header() {
  return (
    <div className="header">
      <div className="logo">
         <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          BLOG
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#sportsNews">Sports</a></li>
          <li><a href="#businessNews">Business</a></li>
          <li><Link to="/aboutme">AboutMe</Link></li>
          <li><a href="#contact">Contact</a></li>

          <li className="dropdown">
            <a href="#">More ▾</a>
            <ul className="dropdown-menu">
              <li><a href="#food">Food</a></li>
              <li><a href="#health">Health</a></li>
              <li><a href="#entertainment">Entertainment</a></li>
            </ul>
          </li>
        </ul>

        <div className="buttons">
          <Link to="/write"><button>Write</button></Link>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/register"><button>Register</button></Link>
        </div>

        <div className="bar">
          <FaBarsStaggered className="open" />
          <FaXmark className="close" />
        </div>
      </nav>
    </div>
  );
}

export default Header;*/

/*import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          BLOG
        </Link>
      </div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#sportsNews">Sports</a></li>
          <li><a href="#businessNews">Business</a></li>
          <li><Link to="/aboutme">AboutMe</Link></li>
          <li><a href="#contact">Contact</a></li>

          <li className="dropdown">
            <a href="#">More ▾</a>
            <ul className="dropdown-menu">
              <li><a href="#food">Food</a></li>
              <li><a href="#health">Health</a></li>
              <li><a href="#entertainment">Entertainment</a></li>
            </ul>
          </li>
        </ul>

        <div className="buttons">
          <Link to="/write"><button>Write</button></Link>
          {!isLoggedIn ? (
            <>
              <Link to="/login"><button>Login</button></Link>
              <Link to="/register"><button>Register</button></Link>
            </>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
        </div>

        <div className="bar">
          <FaBarsStaggered className="open" />
          <FaXmark className="close" />
        </div>
      </nav>
    </div>
  );
}

export default Header;*/

/*import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user"); // or "token"
    setUser(loggedInUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // or "token"
    setUser(null);
    navigate("/login");
  };

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/business">Business</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>

        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;*/

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  /*const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login"; // or use navigate("/login")
};*/


  return (
    <div className="header">
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          BLOG
        </Link>
      </div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#sportsNews">Sports</a></li>
          <li><a href="#businessNews">Business</a></li>
          <li><Link to="/aboutme">AboutMe</Link></li>
          <li><a href="#contact">Contact</a></li>

          <li className="dropdown">
            <a href="#">More ▾</a>
            <ul className="dropdown-menu">
              {/*<li><a href="#food">Food</a></li>*/}
               <li><Link to="/food">Food</Link></li>
              <li><a href="#health">Health</a></li>
              {/*<li><a href="#entertainment">Entertainment</a></li>*/}
              <li><Link to="/enter">Entertainment</Link></li>
            </ul>
          </li>
        </ul>

        <div className="buttons">
          <Link to="/write"><button>Write</button></Link>
          {!isLoggedIn ? (
            <>
              <Link to="/login"><button>Login</button></Link>
              <Link to="/register"><button>Register</button></Link>
            </>
          ) : (
            <button onClick={() => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login";
}}>
  Logout
</button>
          )}
        </div>

        <div className="bar">
          <FaBarsStaggered className="open" />
          <FaXmark className="close" />
        </div>
      </nav>
    </div>
  );
}

export default Header;
