import React from "react";
import "./cartProductCard.css";
import { Toast } from "components";
import {
  deleteCartItemApi,
  deleteWishlistItemApi,
  postCartItemQtyApi,
  postWishlistApi,
} from "utils";
import { useCart, useWishlist } from "context";

export const CartProductCard = ({ details }) => {
  const {
    img: { altText, url },
    heading,
    price: { ourPrice, originalPrice },
    badge: { type, tagline },
    _id,
    ratings,
    isInWishlist,
    qty,
  } = details;

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

  console.log("cart", wishlistData, wishlistError, wishlistLoading);

  const { cart, postCartQty, deleteDataUsingApi: deleteCartItem } = useCart();

  const { data: cartData, error: cartError, isLoading: cartLoading } = cart;

  function handleAddToWishlist() {
    if (wishlistData.findIndex((element) => element._id === _id) !== -1) {
      deleteWishlist(deleteWishlistItemApi, _id);
    } else {
      postWishlist(postWishlistApi, {
        product: { ...details, isInWishlist: true },
      });
    }
  }

  const handleRemoveCartClick = () => {
    deleteCartItem(deleteCartItemApi, _id);
  };

  const handleQtyBtnClick = (type) => {
    postCartQty(postCartItemQtyApi, _id, type);
  };

  return (
    <div className="card-horizontal">
      <span className="cancel-btn" onClick={handleRemoveCartClick}>
        <i className="fas fa-times"></i>
      </span>
      {tagline && <div className={`card-badge badge ${type}`}>{tagline}</div>}
      <img src={url} alt={altText} />
      <div className="card-horizontal-right-part">
        <div className="card-body">
          <h4 className="card-header">{heading}</h4>
          <div className="cart-card-price-star">
            <div className="card-price">
              <span className="price">{ourPrice} </span>
              <strike> {originalPrice} </strike>
            </div>

            <div className="ratings cart-product-rating">
              <span className="rating_num">{ratings}</span>
              <label htmlFor="star">&#9733; </label>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="qty">
            Quantity:
            {qty > 1 && (
              <span
                className="circular-btn"
                onClick={() => handleQtyBtnClick("decrement")}
              >
                −
              </span>
            )}
            <span type="number" className="qty-input" placeholder="0">
              {qty}
            </span>
            <span
              className="circular-btn"
              onClick={() => handleQtyBtnClick("increment")}
            >
              +
            </span>
          </div>
          {wishlistData.findIndex((element) => element._id === _id) !== -1 ? (
            <button
              className="btn btn-info move-to-wishlist-btn"
              onClick={handleAddToWishlist}
            >
              Remove to wishlist
            </button>
          ) : (
            <button
              className="btn btn-info move-to-wishlist-btn"
              onClick={handleAddToWishlist}
            >
              Move to wishlist
            </button>
          )}
        </div>
      </div>
      <Toast />
    </div>
  );
};
