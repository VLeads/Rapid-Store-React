import React, { useEffect } from "react";
import { useUser, useWishlist } from "context";
import { NoProduct, ProductCard } from "components";
import { Link } from "react-router-dom";
import "./wishlist.css";

export const Wishlist = () => {
  const { wishlist } = useWishlist();
  const { data, error, isLoading } = wishlist;

  const { getToken: authToken } = useUser();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-height">
      <main className="wishlist-main">
        <h2 className="justify-center mb-3">
          Wishlist ({authToken && data.length !== 0 ? data.length : 0})
        </h2>
        <div className="wishlist-card-container">
          {data?.length > 0 ? (
            <ul className="product-list grid">
              {data?.map((details) => (
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
    </div>
  );
};
