function delayedCallback(callback: Function, a: number): void {
    setTimeout(() => {
        callback(a);
    }, 1000); 
}


delayedCallback((data: number) => {
    console.log(` ${data}`);
}, 42);