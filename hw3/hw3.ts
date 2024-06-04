function processArray(arr:number[],callback:Function){
    for (const value of arr) {
        console.log(`phan tu thu ${value}`);
        
    }

}
processArray([1,2,3,4,5,6,7],(num:number)=>num)