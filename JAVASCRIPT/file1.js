//Introduction to JavaScript Data Types

let studentName = "John Doe";
let age = 30;
let isEnrolled = true;
let score
let city = null;

console.log("Student Name:", studentName);
console.log(typeof studentName); // string
console.log(typeof score); // undefined
console.log(typeof city); // object (null is considered an object in JavaScript)
console.log(typeof age); // number
let strAge = String(age);
console.log(typeof strAge); // string
let rating = "5"
console.log(typeof rating); // string
let strRating = Number(rating);
console.log(typeof strRating); // number
let flag = "true";
let boolFlag = Boolean(flag);
console.log(typeof boolFlag); // boolean