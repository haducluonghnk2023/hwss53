"use strict";
function delayedCallback(callback, a) {
    setTimeout(() => {
        callback(a);
    }, 1000);
}
delayedCallback((data) => {
    console.log(` ${data}`);
}, 42);
