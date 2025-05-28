
import React from 'react';
import { FaSquareFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';

function Footer() {
  return (
    <div className="footer" id='contact'>
      <div className="box">
        <div className="left">
          <div className="categories">
            <p>Categories</p>
            <div><p>Sports</p></div>
            <div><p>Business</p></div>
            <div><p>Food</p></div>
            <div><p>Technology</p></div>
            <div><p>Health</p></div>
          </div>
          <div className="contactUs">
            <div className="contact">
              <p>Contact Us</p>
              <div>Phone No. - <span>0176543210</span></div>
              <div>Email - <span>abc@gmail.com</span></div>
              <div>Address - <span>Sylhet, Bangladesh</span></div>
            </div>
            <div className="icon">
              <FaSquareFacebook />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="newsletter">
            <p>Feedback</p>
            <div className="email">
              <input type="email" placeholder="Enter Your Email Here" />
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrights">
        Copyrights &copy; 2025 BDL
      </div>
    </div>
  );
}

export default Footer;
