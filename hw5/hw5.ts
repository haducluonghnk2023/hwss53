function checkCondition<T>(
    condition: () => T,
    callback: (result: T) => void,
    delay: number = 1000
  ): void {
    setTimeout(() => {
      callback(condition());
    }, delay);
  }
  const isEven = (num: number): boolean => num % 2 === 0;

checkCondition(
  () => isEven(5),
  (result) => {
    console.log(` condition : ${result}`);
  }
);