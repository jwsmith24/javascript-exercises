const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  return array.reduce((sum, number) => sum += number, 0);
}


const multiply = function (array) {
  return array.reduce((total, number) => total = total * number, 1);
}

const power = function (number, exponent) {

  let result = number;
  for (let i = 1; i < exponent; i++) {

    result = result * number;
  }

  return result;


};

const factorial = function (number) {

  // easy cases
  if (number === 0) {
    return 1;
  }

  let iterator = number - 1;

  let total = number;

  while (iterator > 0) {

    total = total * iterator;

    iterator--;
  }

  return total;


};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
