const reverseString = function (string) {

    if (string === "") {
        return "";
    }

    let letters = [];

    // read in the chars
    for (let i = 0; i < string.length; i++) {
        letters.push(string[i]);
    }

    let reverseString = letters.pop();

    let letterCount = letters.length;

    // pop the letters off to get the reverse
    for (let index = 0; index < letterCount; index++) {
        reverseString = reverseString + letters.pop();
    }

    return reverseString;




};

// Do not edit below this line
module.exports = reverseString;
