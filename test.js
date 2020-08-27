/**
 * test.js file contains all the unit tests for arithmetic and validation operations.
 * It uses Mocha testing framework and chai.js library for assertion module.
 */

const operations = require('./operations.js');
const assert = require('chai').assert;

// Root Suite
describe('Calculator App Testing', function () {

  // Inner test suite 1
  describe('Arithmetic Operations', function () {
    it('should correctly calculate the sum of 5 and 6', function () {
      assert.equal(operations.add(5, 6), 11);
    });

    it('should correctly calculate the sum of -10 and -6', function () {
      assert.equal(operations.add(-10, -6), -16);
    });

    it('should correctly calculate the sum of -10 and 6', function () {
      assert.equal(operations.add(-10, 6), -4);
    });

    it('should correctly calculate the difference of 5 and 6', function () {
      assert.equal(operations.subtract(5, 6), -1);
    });

    it('should correctly calculate the difference of -10 and -6', function () {
      assert.equal(operations.subtract(-10, -6), -4);
    });

    it('should correctly calculate the difference of -10 and 6', function () {
      assert.equal(operations.subtract(-10, 6), -16);
    });

    it('should correctly calculate the product of 5 and 6', function () {
      assert.equal(operations.multiply(5, 6), 30);
    });

    it('should correctly calculate the product of -10 and -6', function () {
      assert.equal(operations.multiply(-10, -6), 60);
    });

    it('should correctly calculate the product of -10 and 6', function () {
      assert.equal(operations.multiply(-10, 6), -60);
    });

    it('should correctly calculate the quotient of 10 and 5', function () {
      assert.equal(operations.divide(10, 5), 2);
    });

    it('should correctly calculate the quotient of -10 and -5', function () {
      assert.equal(operations.divide(-10, -5), 2);
    });

    it('should correctly calculate the quotient of -10 and 5', function () {
      assert.equal(operations.divide(-10, 5), -2);
    });
  });

  // Inner test suite 2
  describe('Validation Function', function () {
    it('indicates failure when a string is used instead of a number', function () {
      assert.equal(operations.validateNumbers('abcd', 5), false);
      assert.equal(operations.validateNumbers(5, 'abcd'), false);
    });

    it('indicates failure when all the inputs are strings instead of numbers', function () {
      assert.equal(operations.validateNumbers('abcd', 'xyz'), false);
    });

    it('indicates success when the inputs are all numbers', function () {
      assert.equal(operations.validateNumbers(2, 8), true);
    });
  });
});