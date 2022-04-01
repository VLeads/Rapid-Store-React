import React from "react";
import { getNumbersInLocaleFormat } from "utils";

export const CartPriceCard = ({ details }) => {
  console.log("price-card", details);

  const { totalPrice, discountPrice, items } = details;

  return (
    <section className="price-detail-container">
      <div className="card-vertical price-details">
        <h4>PRICE DETAILS</h4>
        <div className="price mt-2">
          <span className="price-heading">Price ({items})</span>
          <span className="amount">
            ₹{getNumbersInLocaleFormat(totalPrice)}
          </span>
        </div>
        <div className="price">
          <span className="price-heading">Discount</span>
          <span className="amount">
            − ₹{getNumbersInLocaleFormat(discountPrice)}
          </span>
        </div>
        <div className="price">
          <span className="price-heading">Delivery Charges</span>
          {Number(totalPrice - discountPrice) > 349 ? (
            <>
              <span className="amount">
                ₹0
                <strike>₹200</strike>
              </span>
            </>
          ) : (
            <span className="amount">₹200</span>
          )}
        </div>

        <div className="price price-total">
          <span className="price-heading bold uppercase">total amount</span>

          {Number(totalPrice - discountPrice) > 349 ? (
            <span className="amount bold uppercase">
              ₹{getNumbersInLocaleFormat(totalPrice - discountPrice)}{" "}
            </span>
          ) : (
            <span className="amount bold uppercase">
              {" "}
              ₹
              {getNumbersInLocaleFormat(
                totalPrice - discountPrice + deliveryCharges
              )}
            </span>
          )}
        </div>

        <button className="btn btn-primary order mt-3">Place Order</button>
      </div>
    </section>
  );
};
