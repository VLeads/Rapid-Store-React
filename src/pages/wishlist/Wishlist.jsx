import React from "react";
import { useUser, useWishlist } from "context";
import { NoProduct, ProductCard } from "components";
import { Link } from "react-router-dom";
import "./wishlist.css";

export const Wishlist = () => {
  const { wishlist } = useWishlist();
  const { data, error, isLoading } = wishlist;

  const { getToken: authToken } = useUser();

  return (
    <main className="wishlist-main">
      <h2 className="justify-center mb-3">
        Wishlist ({authToken && data.length !== 0 ? data.length : 0})
      </h2>
      {isLoading && (
        <div className="loading_heading">Loading your Wishlist's Item</div>
      )}
      <div className="wishlist-card-container">
        {data.length > 0 ? (
          <ul className="product-list grid ">
            {data.map((details) => (
              <li key={details._id}>
                <ProductCard details={details} cardType={"wishlist"} />
              </li>
            ))}
          </ul>
        ) : (
          <NoProduct type="wishlist" />
        )}
      </div>
    </main>
  );
};
