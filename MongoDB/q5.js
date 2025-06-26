db.employees.insertMany([
    { name: "Alice Johnson", 
        email: "alice@gmail.com",
        department: "Marketing",
        salary: 2800,
        location: ["San Francisco", "USA" ],
        date: Date(),
    },
    { name: "Bob Brown",
        email: "bob@gmail.com",
        department: "Sales",
        salary: 3200,
        location: ["Seattle", "USA" ],
        date: Date(),
    },

]);


//update
db.employees.updateOne(
    { name: "Alice Johnson" },
    { $set: { salary: 3000 } }
);

//update many
db.employees.updateMany(
    { department: "Sales" },
    { $inc: { salary: 200 } }
);

db.employees.updateMany(
    {date: new Date() },
    { $set: { date: Date() } }
);



db.employess.updateMany(
    {},
    {$set: {points:1}}
);

//inc
db.employees.updateMany(
    { department: "Marketing" },
    { $inc: { salary: 1000 } }
);

//rename
db.employees.updateMany(
    {},
    { $rename: { "location": "officeLocation" } }
);


//set
db.employees.updateMany(
    {},
    { $set: { isActive: true } }
);

//unset
db.employees.updateMany(    
    {},
    { $unset: { isActive: "" } }
);

//push
db.employees.updateMany(
    {},
    { $push: { skills: "Java" } }
);
//push another skill
db.employees.updateMany(
    {},
    { $push: { skills: "Python" } }
);

//pull
// This will remove "Java" from the skills array for employees with that skill
// If "Java" is not present, it will do nothing
db.employees.updateMany(
    {email: "alice@gmail.com" },
    { $pull: { skills: "Java" } }
);

//addToSet
// This will add "JavaScript" to the skills array only if it doesn't already exist
// This prevents duplicates in the skills array
db.employees.updateMany(
    {},
    { $addToSet: { skills: "JavaScript" } }
);

//pop
// This will remove the last element from the skills array
db.employees.updateMany(
    {email: "bob@gmail.com" },
    { $pop: { skills: 1 } } // 1 for last element, -1 for first element
);


//upsert
// This will insert a new document if no document matches the filter
db.employees.updateOne(
    { name: "Charlie Smith" },
    { $set: { email: "charlie@gmail.com"} },
    { upsert: true } // This option creates a new document if no match is found
);


//delete
db.employees.deleteOne({ 
    email: "charlie@gmail.com" 
}); // Delete a single document

db.employees.deleteMany({
    department: "Marketing" 
}); // Delete multiple documents


