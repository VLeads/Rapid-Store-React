import { AddressFormModal } from "components";
import { useCart } from "context";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getNumbersInLocaleFormat } from "utils";

export const CartPriceCard = ({
  details,
  responseSummary,
  setResponseSummary,
}) => {
  const [addressModalShow, setAddressModalShow] = useState(false);
  const [finalPrice, setFinalPrice] = useState(0);

  const { totalPrice, discountPrice, items } = details;

  let deliveryCharges = 200;

  const calculateFinalPrice = () => {
    let grandTotal =
      Number(totalPrice - discountPrice) > 349
        ? totalPrice - discountPrice
        : totalPrice - discountPrice + deliveryCharges;

    setFinalPrice(grandTotal);
  };

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
          <span className="amount text-red">
            − ₹{getNumbersInLocaleFormat(discountPrice)}
          </span>
        </div>
        <div className="price">
          <span className="price-heading">Delivery Charges</span>
          {Number(totalPrice - discountPrice) > 349 ? (
            <>
              <span className="amount text-red">
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
            <span className="amount bold uppercase text-primary">
              ₹{getNumbersInLocaleFormat(totalPrice - discountPrice)}{" "}
            </span>
          ) : (
            <span className="amount bold uppercase text-primary">
              {" "}
              ₹
              {getNumbersInLocaleFormat(
                totalPrice - discountPrice + deliveryCharges
              )}
            </span>
          )}
        </div>

        <button
          className="btn btn-primary order mt-3"
          onClick={() => {
            setAddressModalShow(true);
            calculateFinalPrice();
          }}
        >
          Checkout
        </button>
      </div>

      <AddressFormModal
        show={addressModalShow}
        onHide={() => setAddressModalShow(false)}
        responseSummary={responseSummary}
        setResponseSummary={setResponseSummary}
        finalPrice={finalPrice}
      />
    </section>
  );
};
