"use strict";
function myFind(array, value, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return [array[i], array];
        }
    }
    return [null, array];
}
const numbers1 = [1, 2, 3, 4, 5];
const [foundNumber, originalArray] = myFind(numbers1, 3, (item) => item === 1);
console.log(foundNumber);
console.log(originalArray);
const [notFoundNumber, originalArray2] = myFind(numbers1, 6, (item) => item === 10);
console.log(notFoundNumber);
console.log(originalArray2);
