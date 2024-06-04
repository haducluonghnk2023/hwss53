"use strict";
function checkCondition(condition, callback, delay = 1000) {
    setTimeout(() => {
        callback(condition());
    }, delay);
}
const isEven = (num) => num % 2 === 0;
checkCondition(() => isEven(5), (result) => {
    console.log(` condition : ${result}`);
});
