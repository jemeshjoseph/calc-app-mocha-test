/**
 * Arithmetic operations and validation functions for the Calculator app
 */

const add = (a, b) => (+a) + (+b);
const subtract = (a, b) => (+a) - (+b);
const multiply = (a, b) => (+a) * (+b);
const divide = (a, b) => (+a) / (+b);
const validateNumbers = (a, b) => (isNaN(a) || isNaN(b)) ? false : true;

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  validateNumbers
};
