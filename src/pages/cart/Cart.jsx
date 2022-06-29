import React, { useEffect, useState } from "react";
import "./cart.css";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { CartPriceCard, NoProduct, CartProductCard, Toast } from "components";
import { useCart, useUser } from "context";
import { getPriceCardDetails } from "utils";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const [responseSummary, setResponseSummary] = useState({
    msg: false,
    id: null,
  });

  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  const { getToken: authToken } = useUser();
  const { cart } = useCart();

  const { data, isLoading, error } = cart;

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  console.log("summary", responseSummary);

  useEffect(() => {
    let id = null;
    if (responseSummary?.msg) {
      id = setTimeout(() => {
        navigate("/store");
      }, 3000);
    }
  }, [responseSummary]);

  return (
    <>
      {responseSummary?.msg && (
        <>
          <div className="checkout-msg">
            Your order has been placed successfully!
          </div>
          <Confetti
            width={width}
            height={height}
            numberOfPieces={130}
            initialVelocityY={15}
          />
        </>
      )}{" "}
      {!responseSummary.msg && (
        <div className="min-height">
          <div className="cart-container">
            <section className="cart-product-container">
              <h2 className="mb-3 mt-3 justify-center">
                My Cart ({authToken && data.length !== 0 ? data.length : 0})
              </h2>

              <div className="cart-product-main">
                {authToken ? (
                  <>
                    {data.length > 0 ? (
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

            {data.length > 0 && (
              <CartPriceCard
                details={getPriceCardDetails(data)}
                responseSummary={responseSummary}
                setResponseSummary={setResponseSummary}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};
