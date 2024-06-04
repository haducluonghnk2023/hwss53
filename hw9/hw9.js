"use strict";
function myFilter(array, value, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }
    return [result, array];
}
const numbers2 = [1, 2, 3, 4, 5];
const [foundNumbers, originalArray1] = myFilter(numbers2, 3, (item) => item === 3);
console.log(foundNumbers);
console.log(originalArray);
const [notFoundNumbers, originalArray3] = myFilter(numbers2, 6, (item) => item === 6);
console.log(notFoundNumbers);
console.log(originalArray2);
