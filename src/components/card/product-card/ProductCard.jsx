import React from "react";
import "styles/styles.css";

export const ProductCard = ({ details }) => {
  const {
    img: { altText, url },
    heading,
    price: { ourPrice, originalPrice },
    badge: { type, tagline },
    _id,
  } = details;

  return (
    <div className="card-vertical popular-purchase hover-box-shadow">
      <div className={`card-badge badge ${type}`}>{tagline}</div>
      <img src={url} alt={altText} />
      <div className="card-body">
        <h4 className="card-header">{heading}</h4>
        <p className="card-price">
          <span className="price">{ourPrice} </span>
          <strike>{originalPrice}</strike>
        </p>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary">Add to Cart</button>
        <button className="btn-card">
          <i className="far fa-heart"></i>
        </button>
        <button className="btn-card">
          <i className="fas fa-share-alt"></i>
        </button>
      </div>
    </div>
  );
};
