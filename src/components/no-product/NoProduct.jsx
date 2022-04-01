import React from "react";
import { Link } from "react-router-dom";
import "./noProducts.css";

export const NoProduct = ({ type }) => {
  return (
    <div className="no-product-main">
      {" "}
      <div className="no-product-heading">
        No products in your {type},{" "}
        <Link to="/store" className="route-to-store">
          Add Now
        </Link>
      </div>
      <img
        src={"https://www.linkpicture.com/q/emptycart_1.webp"}
        className="img-responsive no-product-img"
      />
    </div>
  );
};
