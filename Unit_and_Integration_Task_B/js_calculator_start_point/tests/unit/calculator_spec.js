var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('can add 1 to 4 and get 5', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(5, calculator.runningTotal)
  });

  it('can subtract 4 from 7 and get 3', function () {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal)
  });

  // it('can multiply 3 by 5 and get 15'), function () {
  //   assert.equal()
  // };

  // it('can divide 21 by 7 and get 3'), function () {
  //   assert.equal()
  // };

  // it('can concatenate multiple number button clicks'), function () {
  //   assert.equal()
  // };

  // it('can chain multiple operations together'), function () {
  //   assert.equal()
  // };

  // it('clear the running total without affecting the calculation'), function () {
  //   assert.equal()
  // };


});