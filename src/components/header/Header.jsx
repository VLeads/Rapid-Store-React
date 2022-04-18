import React from "react";
import { Toast } from "components";
import { useCart, useToast, useUser, useWishlist } from "context";
import { Link, useNavigate } from "react-router-dom";
import { ACTION_TYPE_SUCCESS } from "utils";
import logo from "assets/img/rapidstore-logo.png";
import "./header.css";

export function Header() {
  const navigate = useNavigate();

  const { getToken: authToken, setGetToken } = useUser();

  const { toastDispatch, setShowToast } = useToast();

  const { wishlist } = useWishlist();
  const { cart } = useCart();

  const logoutHandler = () => {
    setShowToast(true);
    toastDispatch({
      type: ACTION_TYPE_SUCCESS,
      payload: `✅ Successfully logged out `,
    });
    setTimeout(() => {
      setShowToast(false);
    }, 2500);
    localStorage.removeItem("token");
    setGetToken("");
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="sub-nav">
        <div className="left">
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Order Tracking</a>
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
        <Link to="/" className="navbar-logo">
          <img src={logo} className="logo" alt="rapid store" />
        </Link>
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search" />
        </div>
        <ul className="nav-links">
          <li>
            {authToken ? (
              <button className="btn btn-danger" onClick={logoutHandler}>
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            )}
          </li>
          <li>
            <Link to="/wishlist">
              <span className="badge-icon">
                {/* <span className="badge red">20+</span> */}
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
      </nav>

      <Toast />
    </>
  );
}
