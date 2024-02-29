


// const fibonacci = function (fibIndex) {

//     if (fibIndex < 0) {
//         return "OOPS";
//     }
//     if (fibIndex == 0) {
//         return 0;
//     }

//     let previous = 0;
//     let current = 1;

//     let index = 1;

//     while (index < fibIndex) {

//         let next = previous + current;
//         previous = current;
//         current = next;

//         index++;

//     }


//     return current;


// };



const fibonacci = function (fibIndex) {

    let targetIndex;

    if (typeof fibIndex !== 'number') {
        targetIndex = parseInt(fibIndex);

    } else {
        targetIndex = fibIndex;
    }

    if (targetIndex < 0) return "OOPS";
    if (targetIndex === 0) return 0;
    if (targetIndex === 1) return 1;


    const fib = [0, 1];

    for (let i = 2; i <= targetIndex; i++) {

        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[targetIndex];
}

// Do not edit below this line
module.exports = fibonacci;
