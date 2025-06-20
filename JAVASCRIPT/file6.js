//Objects

const student = {
    name : "Deepak",
    age : 21,
};
console.log(student);
console.log(student.name);          // Accessing property using dot notation
student.city = "Delhi";             // Adding a new property
console.log(student);               // Accessing the newly added property
delete student.age;                 // Deleting a property
console.log(student);               // Accessing the object after deletion
console.log(Object.keys(student));  // Getting all keys of the object
console.log(Object.values(student)); // Getting all values of the object

