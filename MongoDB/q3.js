
db.employess.insertMany([
  { name: "Mike Joseph", 
    email: "mike@gmail.com",
    department: "IT",
    salary: 2456,
    location: ["New York", "USA" ],
    date: new Date()
  },
  { name: "John Doe",
    email: "john@gmail.com",
    department: "HR",
    salary: 3000,
    location: ["Los Angeles", "USA" ],
    date: new Date()
  },
    { name: "Jane Smith",
        email: "jane@gmail.com",
        department: "Finance",
        salary: 3500,
        location: ["Chicago", "USA" ],
        date: new Date()
    },
    
]);


/***********************************************************************************************************************************/
//Commands
db.employees.find().skip(1)

db.employees.find().skip(1).limit(2)

db.employees.find().sort({ salary: -1 })           // Sort by salary descending
db.employees.find().sort({ salary: -1 }).limit(3)  // Top 3 by salary descending

db.employees.find({department:"IT"}) //          

db.employees.find({},{_id:0,name:1})    //

db.employees.find({},{_id:0,name:1,department:1})  //

db.employees.find({},{empName:$name})  //
