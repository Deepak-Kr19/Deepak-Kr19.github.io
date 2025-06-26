//indexes
db.users.createIndex({ "name": 1 });
db.users.createIndex({ "age": -1 }); 

//getIndexes
db.users.getIndexes(); // List all indexes on the collection

//dropIndex
db.users.dropIndex("name_1"); // Drop the index on "name"
// dropIndexes
db.users.dropIndexes(); // Drop all indexes on the collection   




