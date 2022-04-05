/**
 * getNumberInLocaleFormat - function to convert a
 *                      number in a locale format
 *
 * @param {number} number - number to convert in string     eg. 25449
 * @returns string representation of the given number
 *          in the locale format eg. "25,449"
 */

const getNumbersInLocaleFormat = (number) => number.toLocaleString();

export { getNumbersInLocaleFormat };
