// Conditional Statements in JavaScript

/*
let a = 10;
let b = 12;
if(a>b){
    console.log(`${a} is greater than ${b}`);
}
else{
    console.log(`${b} is greater than ${a}`);
}
    */


// if(a>b) console.log(`${a} is greater than ${b}`);
// else console.log(`${b} is greater than ${a}`);

/*
let c;
// let c = 0;
// let c = null; 
if(c){
    console.log("c is truthy");
}else{
    console.log("c is falsy");
}
*/

/*
let v1 = 10;
let v2 = 20;
let v3 = 30;
if(v1 > v2 && v1 > v3){
    console.log(`v1 = ${v1} is the greatest`);
}
else if(v2 > v1 && v2 > v3){
    console.log(`v2 = ${v2} is the greatest`);
}
else if(v3 > v1 && v3 > v2){
    console.log(`v3 = ${v3} is the greatest`);
}
else{
    console.log("There is no greatest value or values are equal");
}
*/

/*
// Ternary Operator Example
let x = 10;
let y = 20;

// x > y ? console.log(`x -> ${x} is greater `) : console.log(`y -> ${y} is greater `);
x > y && console.log("x is greater than y");
*/

let a
let value  = a || 10; // Bitwise OR with undefined
console.log(value); // 10 (since a is undefined, it takes the value 10)

let b = 5;
let value2 = b || 10; // Bitwise OR with defined value
console.log(value2); // 5 (since b is defined, it takes the value 5)

let c = 0;
let value3 = c || 10; // Bitwise OR with zero
console.log(value3); // 10 (since c is falsy, it takes the value 10)


let d = 15;
let value4 = d && 20; // Bitwise AND with defined value
console.log(value4); // 20 (since d is truthy, it takes the value 20)

let e = 0;
let value5 = e && 20; // Bitwise AND with zero
console.log(value5); // 0 (since e is falsy, it takes the value 0)

// ??
let f = 0;
let value6 = f ?? 10; // Nullish coalescing with zero
console.log(value6); // 0 (since f is not null or undefined, it takes the value 0)

let g = null;
let value7 = g ?? 10; // Nullish coalescing with null
console.log(value7); // 10 (since g is null, it takes the value 10)

let h = undefined;
let value8 = h ?? 10; // Nullish coalescing with undefined  
console.log(value8); // 10 (since h is undefined, it takes the value 10)


