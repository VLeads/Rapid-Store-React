import React from "react";
import "styles/styles.css";
import "./productCard.css";

export const ProductCard = ({ details }) => {
  const {
    img: { altText, url },
    heading,
    price: { ourPrice, originalPrice },
    badge: { type, tagline },
    _id,
    ratings,
  } = details;

  return (
    <div className="card-vertical popular-purchase hover-box-shadow">
      {tagline && <div className={`card-badge badge ${type}`}>{tagline}</div>}
      {/* <div className="card-ratingContainer">
        <div className="ratings">
          <span className="rating_num">{ratings}</span>
          <label for="star">&#9733; </label>
        </div>
      </div> */}
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
            <label for="star">&#9733; </label>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary">Add to Cart</button>
        <button className="btn-card">
          <i className="far fa-heart"></i>
        </button>
        {/* <button className="btn-card">
          <i className="fas fa-share-alt"></i>
        </button> */}
      </div>
    </div>
  );
};
