const sumAll = function (lowerBoundInput, upperBoundInput) {


    // make sure inputs are integers
    if (lowerBoundInput === parseInt(lowerBoundInput) && upperBoundInput === parseInt(upperBoundInput)) {

        // check for negative numbers
        if (lowerBoundInput < 0 || upperBoundInput < 0) {
            return "ERROR";

        }

        let lowerBound, upperBound;

        // if upper bound comes first, swap them
        if (lowerBoundInput > upperBoundInput) {
            lowerBound = upperBoundInput;
            upperBound = lowerBoundInput;
        } else {
            lowerBound = lowerBoundInput;
            upperBound = upperBoundInput;
        }

        let sum = 0;

        for (let iterator = lowerBound; iterator <= upperBound; iterator++) {

            sum += iterator;
        }

        return sum;


    } else {
        return "ERROR";
    }


}







// Do not edit below this line
module.exports = sumAll;
