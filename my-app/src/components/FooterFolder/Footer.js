import React from 'react';
import './FtrStyle.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-expand-lg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="social-icons">
              <a href="https://www.facebook.com/your-username">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/your-username">
                <FaInstagram />
              </a>
              <a href="https://www.twitter.com/your-username">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="col-md-12">
            <ul className="footer-links">
              <li>
                <a href="/registration">Registration</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Football Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
