"use strict";
function displayNumbers(callback, delay) {
    let counter = 1;
    const intervalId = setInterval(() => {
        callback(counter);
        counter++;
    }, delay);
}
displayNumbers((number) => {
    console.log(number);
}, 1000);
