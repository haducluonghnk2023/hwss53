function myForEach<T>(array: T[], callback: (item: T, index: number, array: T[]) => void): void {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  myForEach(numbers, (item, index, array) => {
    console.log(`vi tri: ${index}, phan tu: ${item}, mang: ${array}`);
  });