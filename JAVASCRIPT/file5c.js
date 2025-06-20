//Callback function

/*
let f1  = () => {
    console.log("This is function f1");
};

let main = (x) =>{
    x();
};

main(f1); // Passing f1 as a callback function to main
*/

/*
let main = (x) => {
    x();
}
main(() => {
    console.log("This is an anonymous function passed as a callback");
}); 
*/

function f1(x){
    console.log(x);
}
const main = () => f1("This is a function passed as an argument to f1");
main(); // Calling main which in turn calls f1 with a string argument


