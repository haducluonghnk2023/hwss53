function displayNumbers(callback: (number: number) => void, delay: number): void {
    let counter: number = 1;
    const intervalId: ReturnType<typeof setInterval> = setInterval(() => {
      callback(counter);
      counter++;
    }, delay);
  }
  displayNumbers((number: number) => {
    console.log(number);
  }, 1000);