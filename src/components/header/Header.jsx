import React from "react";
import { Toast } from "components";
import { useCart, useFilter, useToast, useUser, useWishlist } from "context";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ACTION_TYPE_SUCCESS } from "utils";
import logo from "assets/img/rapidstore-logo.png";
import "./header.css";
import { UserIcon } from "assets/icons";

export function Header() {
  const { searchTerm, setSearchTerm } = useFilter();

  const navigate = useNavigate();
  const location = useLocation();

  const { getToken: authToken, setGetToken } = useUser();

  const { toastDispatch, setShowToast } = useToast();

  const { wishlist } = useWishlist();
  const { cart } = useCart();

  const logoHandler = () => {
    navigate("/");
    setSearchTerm("");
  };

  const searchNavigateHandler = () => {
    if (location.pathname !== "/store") {
      navigate("/store");
    }
  };

  function debounce(cb, delay) {
    let timer;
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }

  return (
    <>
      <div className="sub-nav">
        <div className="left">
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <Link to="store">Store</Link>
        </div>
        <div className="right">
          <span>Need help? Call Us: 000 000 0000</span>
          <a href="#">Contact Us</a>
          <a href="https://github.com/vleads">
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/vishalk01234">
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/vishalkumar28/">
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="mailto:leader.vishalkumar@gmail.com">
            <i className="fas fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar-logo pointer-cursor" onClick={logoHandler}>
          <img src={logo} className="logo" alt="rapid store" />
        </div>
        <div className="search-box" onClick={searchNavigateHandler}>
          <i className="fas fa-search"></i>
          <input
            type="search"
            placeholder="search products and categories"
            onChange={debounce((e) => setSearchTerm(e.target.value), 1000)}
          />
        </div>
        <div>
          <ul className="nav-links ">
            <li className="store-link ">
              <Link to="/store">Explore</Link>
            </li>
            <li>
              {authToken ? (
                <Link to="/profile" className="my-icon">
                  <UserIcon />
                </Link>
              ) : (
                <Link to="/login">
                  <button className="btn btn-primary">Login</button>
                </Link>
              )}
            </li>
            <li>
              <Link to="/wishlist">
                <span className="badge-icon">
                  <span className="badge badge-count red">
                    {authToken
                      ? wishlist.data.length > 20
                        ? "20+"
                        : wishlist.data.length
                      : "0"}
                  </span>
                  <i className="far fa-heart"></i>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <span className="badge-icon">
                  <span className="badge badge-count blue">
                    {authToken
                      ? cart.data.length > 20
                        ? "20+"
                        : cart.data.length
                      : "0"}
                  </span>
                  <i className="far fa-shopping-cart"></i>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Toast />
    </>
  );
}
