import React from "react";
import "./cart.css";

import { CartPriceCard, NoProduct, CartProductCard } from "components";
import { useCart } from "context";
import { getPriceCardDetails } from "utils";

export const Cart = () => {
  const authToken = localStorage.getItem("token");

  const { cart } = useCart();

  const { data, isLoading, error } = cart;  

  return (
    <div className="cart-container">
      <section className="cart-product-container">
        <h2 className="mb-3 mt-3 justify-center">
          My Cart ({authToken && data.length !== 0 ? data.length : 0})
        </h2>

        <div className="cart-product-main">
          {authToken ? (
            <>
              {isLoading && <div>Loading your Cart's Item</div>}
              {!isLoading && data.length > 0 ? (
                data.map((details) => (
                  <div key={details._id}>
                    <CartProductCard details={details} />
                  </div>
                ))
              ) : (
                <NoProduct type="cart" />
              )}
            </>
          ) : (
            <NoProduct type="cart" />
          )}
        </div>
      </section>
      {!isLoading && data.length > 0 && (
        <CartPriceCard details={getPriceCardDetails(data)} />
      )}
    </div>
  );
};
