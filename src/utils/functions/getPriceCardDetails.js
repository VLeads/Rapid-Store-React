import React from "react";
import { getNumberFromFormattedPrice } from "./getNumbersFromFormattedPrice";

/**
 * @param {object} details-cart product details
 * @returns an object having structure {items, totalPrice, discountPrice, deliveryCharges}
 * */

export const getPriceCardDetails = (data) => {
  let priceCardDetails = {
    items: 0,
    totalPrice: 0,
    discountPrice: 0,
    deliveryCharges: 200,
  };

  priceCardDetails = data.reduce(
    (acc, curr) => ({
      ...acc,
      items: acc.items + curr.qty,
      totalPrice:
        acc.totalPrice +
        getNumberFromFormattedPrice(curr.price.originalPrice) * curr.qty,
      discountPrice:
        acc.discountPrice +
        curr.qty *
          (getNumberFromFormattedPrice(curr.price.originalPrice) -
            getNumberFromFormattedPrice(curr.price.ourPrice)),
    }),
    priceCardDetails
  );

  return priceCardDetails;
};
