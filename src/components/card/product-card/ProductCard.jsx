import React, { useState, useEffect } from "react";
import { useCart, useWishlist } from "context";
import { Toast } from "components";
import { Link, useNavigate } from "react-router-dom";
import "styles/styles.css";
import { deleteWishlistItemApi, postCartItemApi, postWishlistApi } from "utils";
import "./productCard.css";

export const ProductCard = ({ details, cardType }) => {
  const navigate = useNavigate();

  const [authToken, setAuthToken] = useState("");
  useEffect(() => {
    setAuthToken(localStorage.getItem("token"));
  }, []);

  const {
    wishlist,
    postDataUsingApi: postWishlist,
    deleteDataUsingApi: deleteWishlist,
  } = useWishlist();

  const {
    data: wishlistData,
    error: wishlistError,
    isLoading: wishlistLoading,
  } = wishlist;

  const {
    cart,
    postDataUsingApi: postCartItem,
    deleteDataUsingApi: deleteCartItem,
  } = useCart();

  const { data: cartData, error: cartError, isLoading: cartLoading } = cart;

  const {
    img: { altText, url },
    heading,
    price: { ourPrice, originalPrice },
    badge: { type, tagline },
    _id,
    ratings,
    isInWishlist,
  } = details;

  function handleAddToWishlist() {
    if (wishlistData.findIndex((element) => element._id === _id) !== -1) {
      deleteWishlist(deleteWishlistItemApi, _id);
    } else {
      postWishlist(postWishlistApi, {
        product: { ...details, isInWishlist: true },
      });
    }
  }

  function handleAddToCart() {
    postCartItem(postCartItemApi, { product: { ...details } });
  }

  return (
    <>
      <div
        className={`card-vertical ${
          cardType === " wishlist" ? "  wishlist-card" : "popular-purchase"
        } hover-box-shadow`}
      >
        {tagline && <div className={`card-badge badge ${type}`}>{tagline}</div>}

        <img src={url} alt={altText} />
        <div className="card-body">
          <h4 className="card-header">{heading}</h4>

          <div className="price_and_rating_container">
            <div className="card-price">
              <span className="price">{ourPrice} </span>
              <strike>{originalPrice}</strike>
            </div>
            <div className="ratings">
              <span className="rating_num">{ratings}</span>
              <label htmlFor="star">&#9733; </label>
            </div>
          </div>
        </div>
        <div className="card-footer">
          {cartData.findIndex((element) => element._id === details._id) !==
          -1 ? (
            <Link to="/cart">
              <button className="btn btn-success btn-large">Go to Cart</button>
            </Link>
          ) : (
            <button
              className="btn btn-primary btn-large"
              onClick={() => {
                authToken ? handleAddToCart() : navigate("/login");
              }}
            >
              Add to Cart
            </button>
          )}

          <button
            className={`btn-card ${
              wishlistData.findIndex((element) => element._id === _id) !== -1
                ? "heart-select"
                : ""
            }`}
            onClick={() => {
              authToken ? handleAddToWishlist() : navigate("/login");
            }}
          >
            {wishlistData.findIndex((element) => element._id === _id) !== -1 ? (
              <i className="fa fa-heart"></i>
            ) : (
              <i className="far fa-heart "></i>
            )}
          </button>
        </div>
      </div>
      <Toast />
    </>
  );
};
