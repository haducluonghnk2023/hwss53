"use strict";
function task1(callback) {
    console.log('Task 1 bat dau');
    setTimeout(() => {
        console.log('Task 1 hoan thanh');
        callback();
    }, 1000);
}
function task2(callback) {
    console.log('Task 2 bd');
    setTimeout(() => {
        console.log('Task 2 ht');
        callback();
    }, 1500);
}
function task3(callback) {
    console.log('Task 3 bd');
    setTimeout(() => {
        console.log('Task 3 ht');
        callback();
    }, 2000);
}
function executeTasksSequentially() {
    task1(() => {
        task2(() => {
            task3(() => {
                console.log('tat ca tasks ht');
            });
        });
    });
}
executeTasksSequentially();
