const palindromes = function (string) {


    // gotta get rid of special characters and get to lower case:
    const newString = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // One or 0 letters is automatically a palindrome
    if (newString.length <= 1) {
        return true;
    }

    // compare from the front and the back. return false as soon as they don't match

    let leftIndex = 0;
    let rightIndex = newString.length - 1;

    while (leftIndex < rightIndex) {

        if (newString[leftIndex] !== newString[rightIndex]) {
            return false;
        }

        leftIndex++;
        rightIndex--;

    }

    // if we made it here, it's a palindrome!
    return true;



};


// Do not edit below this line
module.exports = palindromes;
