function myFilter<T>(array: T[], value: T, callback: (item: T) => boolean): [T[], T[]] {
    const result: T[] = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        result.push(array[i]);
      }
    }
    return [result, array];
  }
  
  const numbers2 = [1, 1,2,2, 3, 4, 5];
  
  const [foundNumbers, originalArray1] = myFilter(numbers2, 2, (item) => item === 3);
  console.log(foundNumbers);
  console.log(originalArray1); 
  
  const [notFoundNumbers, originalArray3] = myFilter(numbers2, 6, (item) => item === 6);
  console.log(notFoundNumbers); 
  console.log(originalArray3);