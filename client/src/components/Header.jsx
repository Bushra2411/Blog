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

import React from 'react';
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
          <li><a href="#techNews">Technology</a></li>
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
          <button>Write</button>
          <button>Login</button>
          <button>Register</button>
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