const removeFromArray = function (array, ...valuesToRemove) {

    // using rest parameters: valuesToRemove is now an array of all args after the first

    let newArray = [];

    for (const iterator of array) {

        if (!valuesToRemove.includes(iterator)) {
            newArray.push(iterator);
        }
    }

    return newArray;




};








// Do not edit below this line
module.exports = removeFromArray;
