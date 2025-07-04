//aggregate
db.employees.aggregate([
    { $match: {department: "IT"} }, // Filter documents
    { $project: { name: 1, salary: 1 } }, // Select fields
    { $sort: { salary: -1 } }, // Sort by salary descending
    { $limit: 3 } // Limit to top 3 results

]);


//group
db.employees.aggregate([
    { $group: { _id: "$department", totalSalary: { $sum: "$salary" } } }, // Group by department
    { $sort: { totalSalary: -1 } } // Sort by total salary descending
]);


//project
db.employees.aggregate([
    { $project: { name: 1, salary: 1, department: 1 } } // Select specific fields

]);

db.employees.aggregate([
    { $project: {
        _id: 0, // Exclude _id field
        name: 1, // Include name field
        salary: 1, // Include salary field
        bonus: { $multiply: ["$salary", 2] } 
    }},
]);

//display name,email,salary of employees in IT department
db.employees.aggregate([
    { $match: { department: "IT" } }, // Filter for IT department
    { $project: {
        name: 1,
        email: 1,
        salary: 1
    }},
]);


//display annual salary of all employees
db.employees.aggregate([
    { $project: {
        name: 1,
        annualSalary: {$multiply: ["$salary", 12]}
    }},
]);


//display employees with salary greater than 3000 and show CTC instead of salary field
db.employees.aggregate([
    { $match: { salary: { $gt: 3000 } } }, // Filter for salary > 3000
    { $project: {
        name: 1,
        CTC: { $multiply: ["$salary", 12] } // Calculate CTC as annual salary
    }},
]);





// MongoDB commands for various operations
// Create a new collection named "students"
db.createCollection("students");
// Insert documents into the "students" collection
db.students.insertMany([
    { name: "Alice Johnson", age: 22, courses: ["Math", "Science"] },
    { name: "Bob Brown", age: 23, courses: ["English", "History"] },
    { name: "Charlie Smith", age: 21, courses: ["Art", "Music"] }
]);
// Find all documents in the "students" collection
db.students.find().pretty();
// Find one document in the "students" collection
db.students.findOne({ name: "Alice Johnson" });
// Count the number of documents in the "students" collection
db.students.countDocuments();
// Delete a document from the "students" collection
db.students.deleteOne({ name: "Charlie Smith" });
// Delete multiple documents from the "students" collection
db.students.deleteMany({ age: { $lt: 23 } });   
// Update a document in the "students" collection
db.students.updateOne(
    { name: "Bob Brown" },
    { $set: { age: 24 } }
);
// Update multiple documents in the "students" collection
db.students.updateMany(
    { age: { $gt: 22 } },
    { $inc: { age: 1 } }
);  
// Rename a field in the "students" collection
db.students.updateMany(
    {},
    { $rename: { "courses": "subjects" } }
);  

db.students.aggregate([
    {$group: {
        _id: null, // Group all documents together
        AvgAge: {$avg: "$age" }
    }}
]);

db.students.updateOne(
    {name: "Alice Johnson"},
    { $set: { age: 24 } }
)

db.students.updateMany(
    {},
    {$push: {courses: "Chemistry"}},
    { upsert: true } // Create the field if it doesn't exist
);

//increment age of all students by 1
db.students.updateMany(
    {},
    { $inc: { age: 1 } }
);



//collection name is address
db.address.insertMany([
    {studentId:ObjectId('685cdd629e7d47da299f990c'), city: "New York", state: "NY"},
    {studentId:ObjectId('685cddcd9e7d47da299f990d'), city: "Los Angeles", state: "CA"},
    {studentId:ObjectId('685cddcd9e7d47da299f990e'), city: "Chicago", state: "IL"},
    {studentId:ObjectId('685cddcd9e7d47da299f990f'), city: "Houston", state: "TX"}
]);


//joins
db.students.aggregate([
    {
        $lookup: {
            from: "address", // Collection to join
            localField: "_id", // Field from the students collection
            foreignField: "studentId", // Field from the address collection
            as: "addressInfo" // Output array field
        }
    },
    {
        $unwind: "$addressInfo" // Flatten the array
    },
    {
        $project: {
            name: 1,
            "addressInfo.city": 1,
            "addressInfo.state": 1
        }
    }
]);

