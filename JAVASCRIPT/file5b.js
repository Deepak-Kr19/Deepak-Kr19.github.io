//Arrow functions

/*
function greet(){
    console.log("This is normal function");
}
greet(); // Calling the normal function
*/

/*
// Arrow function
const greet = () => {
    console.log("This is an arrow function");
}
greet(); // Calling the arrow function
*/

//NOTE: hoisting cannot be applied in arrow functions

/*
// Arrow function with parameters
const greet = (name) => {
    console.log(`Hello, ${name}`);
}
*/

/*
const add  = (a, b) => {
    return a + b; 
}
const sum = add(5, 10); // Calling the function and storing the result
console.log(`The sum is: ${sum}`);
*/

//spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combinedArray = [...arr1, ...arr2]; // Combining two arrays using spread operator
// console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

const add = () => {
    console.log(...args); // Logging all arguments passed to the function
    console.log(...args.length); // Logging the number of arguments
}
add(1, 2, 3, 4, 5);