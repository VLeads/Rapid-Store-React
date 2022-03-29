/**
 * @param {string} price- formatted price string eg. "₹56,990"
 * @returns numerical value eg. 569990
 */

const getNumberFromFormattedPrice = (price) => {
  return Number(price.replace(/\D/g, ""));
};
export { getNumberFromFormattedPrice };
