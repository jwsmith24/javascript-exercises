const repeatString = function (string, number) {

    // check error conditions
    if (number < 0) {
        return "ERROR";

    } else if (number == 0 || string === "") {
        return "";

    } else {
        // start the chain (accounted for in loop iterations)
        let result = string;

        for (let i = 0; i < number - 1; i++) {
            // cat the word onto existing chain
            result = result + string;
        }

        return result;

    }




};

// Do not edit below this line
module.exports = repeatString;
