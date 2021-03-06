import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer__item">
          <h4>Account</h4>
          <ul className="footer__list">
            <li className="footer__list-item">
              <Link to="/profile">My Account</Link>
            </li>
            <li className="footer__list-item">
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li className="footer__list-item">
              <Link to="/cart">My Cart</Link>
            </li>
          </ul>
        </div>
        <div className="footer__item">
          <h4>Help</h4>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="#">FAQ</a>
            </li>
            <li className="footer__list-item">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer__item">
          <h4>Contact Us</h4>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="https://www.linkedin.com/in/vishalkumar28/">LinkedIn</a>
            </li>
            <li className="footer__list-item">
              <a href="https://github.com/vleads">Github</a>
            </li>
            <li className="footer__list-item">
              <a href="https://twitter.com/vishalk01234">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-rights">
        &copy; 2022 Rapid Store. All Rights Reserved
      </p>
    </footer>
  );
};

export { Footer };
