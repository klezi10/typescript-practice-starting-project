function add(n1: number, n2: number): number {
    return n1 + n2;
}

//void return type - doesn't return anything
function printResult(num: number) {
    console.log('Result: ' + num);
}

console.log(printResult(add(5, 12))); //undefined

//function types
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8))