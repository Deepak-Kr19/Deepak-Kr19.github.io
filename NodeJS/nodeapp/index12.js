// let name = process.argv[2];
// console.log("hello " + name);

/*
let name1 = process.argv[2];
let name2 = process.argv[3];
console.log(`hello ${name1} and ${name2}`);
*/

// let name = process.argv[2] ||  "Deeapk";
// console.log(`hello ${name}`);



import express from 'express';
const app = express();
const port = process.argv[2] || 8080;
app.listen(port, () => {
    console.log(`server starting on port ${port}`);
});
app.get('/', (req, res) => {
    res.send(`Hello World from port ${port}`);
});

