"use strict";
function myFindIndex(array, value, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return [i, array];
        }
    }
    return [-1, array];
}
const numbers3 = [1, 2, 3, 4, 5];
const [foundIndex, originalArray5] = myFindIndex(numbers, 3, (item) => item === 3);
console.log(foundIndex);
console.log(originalArray);
const [notFoundIndex, originalArray6] = myFindIndex(numbers, 6, (item) => item === 6);
console.log(notFoundIndex);
console.log(originalArray2);
