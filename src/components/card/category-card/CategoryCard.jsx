import React from "react";
import "styles/styles.css";

export const CategoryCard = ({ details }) => {
  const {
    _id,
    img: { url, altText },
    name,
  } = details;
  return (
    <div className="card-vertical category-card">
      <img src={url} alt={altText} loading="lazy" />
      <div className="card-body">
        <h4 className="justify-center m-2">{name}</h4>
      </div>
      <div className="card-footer justify-center">
        <button className="btn btn-primary">View Deals</button>
      </div>
    </div>
  );
};
