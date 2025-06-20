//function arguments and return 


/*
function greet(studentName){
    console.log(`Hello, ${studentName}` );
}
greet("Deepak Kumar"); // Calling the function with an argument
*/

/*
function add(a, b){
    return a + b; // Returning the sum of a and b
}
let sum = add(5, 10); // Calling the function and storing the result
console.log(`The sum is: ${sum}`); 
*/

function add(){
    console.log(arguments); // Logging all arguments passed to the function
    console.log(arguments.length);
}
add(1, 2, 3, 4, 5); // Calling the function with multiple arguments



