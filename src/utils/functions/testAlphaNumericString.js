/**
 * @params {string}
 * @returns boolean value
 */

const testAlphaNumericString = (string) =>
  /[0-9]/.test(string) && /[a-z]/i.test(string);

export { testAlphaNumericString };
