//Arrays

const scores = [10, 20, 30, 40, 50];
console.log(scores);
console.log(scores[0]); 
scores.push(60); 
console.log(scores); // Output: [10, 20, 30, 40, 50, 60]
console.log(scores.length); 

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}












// Array declaration
let fruits = ["Apple", "Banana", "Cherry"];
// Accessing array elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry
// Modifying array elements
fruits[1] = "Mango"; // Change Banana to Mango
console.log(fruits); // Output: ["Apple", "Mango", "Cherry"]
// Adding elements to the array
fruits.push("Orange"); // Add Orange to the end of the array
console.log(fruits); // Output: ["Apple", "Mango", "Cherry", "Orange"]
// Removing the last element from the array
fruits.pop(); // Remove Orange from the end of the array
console.log(fruits); // Output: ["Apple", "Mango", "Cherry"]
// Finding the index of an element
console.log(fruits.indexOf("Mango")); // Output: 1 (index of Mango)
// Checking if an element exists in the array
console.log(fruits.includes("Cherry")); // Output: true (Cherry is in the array)
console.log(fruits.includes("Orange")); // Output: false (Orange is not in the array)
// Looping through the array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Output each fruit
}
