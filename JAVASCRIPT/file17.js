// This code demonstrates a closure in JavaScript.
// It defines a function `main` that returns another function `sub`. The `sub` // function has access to the variable `b` defined in `main`, even after `main` has finished executing.
//// The `sub` function returns the value of `b`, which is `1` in this case. When `main` is called, it returns the `sub` function, which can then be called to get the value of `b`.
//         console.log(value.name); 



function main(){
    let b=1
    function sub(){
        return b;
    }
    return sub;
}
let f1 = main();
console.log(f1());