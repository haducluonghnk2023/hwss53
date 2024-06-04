"use strict";
function calculate(a, b, callback) {
    const result = a + b;
    callback(result);
}
const printResult = (result) => {
    console.log(`Kết quả của phép tính là: ${result}`);
};
calculate(11, 6, printResult);
