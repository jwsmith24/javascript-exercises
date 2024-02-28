

// F to C: x degrees C = (x * 9/5 + 32) degrees F 
const convertToCelsius = function (degrees) {

  if (tempIsValid(degrees)) {

    let conversion = ((degrees - 32) / (9 / 5));


    let roundedNumber = Math.round(conversion * 10) / 10;

    return roundedNumber;

  } else {

    return "ERROR";
  }




};

// C to F: x degrees F = (x - 32) * 5/9 degrees C
const convertToFahrenheit = function (degrees) {

  if (tempIsValid(degrees)) {

    let conversion = (degrees * (9 / 5)) + 32;


    let roundedNumber = Math.round(conversion * 10) / 10;

    return roundedNumber;

  } else {

    return "ERROR";
  }


};

function tempIsValid(degrees) {

  return (degrees == parseFloat(degrees) || degrees == parseInt(degrees));

}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
