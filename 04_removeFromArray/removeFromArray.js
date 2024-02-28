const removeFromArray = function (array, valueToRemove) {

    // build a new array, avoiding provided value
    let newArray = [];

    for (const item of array) {
        if (item != valueToRemove) {
            newArray.push(item);
            console.log("Added " + item + " to the new array");
        }
    }


    return newArray;





};

// Do not edit below this line
module.exports = removeFromArray;
