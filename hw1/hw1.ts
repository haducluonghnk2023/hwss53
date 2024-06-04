type Callback = (result:number)=>void;
function calculate(a:number, b:number,callback:Callback):void {
    const result = a+b;
    callback(result); 
}
const printResult = (result: number): void => {
    console.log(`Kết quả của phép tính là: ${result}`);
}

calculate(11, 6, printResult);

