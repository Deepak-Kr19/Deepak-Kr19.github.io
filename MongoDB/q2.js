🗃️ DATABASE COMMANDS
show dbs                       // Show all databases
use myDatabase                 // Switch to (or create) a database
db                            // Show the current database
db.dropDatabase()             // Delete the current database


📁 COLLECTION COMMANDS
show collections               // List all collections in current database
db.createCollection("users")  // Create a new collection
db.users.drop()               // Delete a collection


📥 INSERT DOCUMENTS
db.users.insertOne({ name: "Deepak", age: 22 })
db.users.insertMany([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
])


🔍 QUERY DOCUMENTS
db.users.find()                                  // Get all documents
db.users.find().pretty()                         // Neatly formatted output
db.users.findOne({ name: "Deepak" })             // Get one matching document
db.users.find({ age: { $gt: 25 } })              // Users with age > 25


✏️ UPDATE DOCUMENTS
db.users.updateOne(
  { name: "Deepak" },
  { $set: { age: 23 } }
)

db.users.updateMany(
  { age: { $lt: 25 } },
  { $inc: { age: 1 } }
)



❌ DELETE DOCUMENTS
db.users.deleteOne({ name: "Alice" })
db.users.deleteMany({ age: { $gt: 30 } })


🔢 COUNT & SORT
db.users.countDocuments()                         // Count total documents
db.users.find().sort({ age: 1 })                  // Sort by age ascending
db.users.find().sort({ age: -1 }).limit(3)        // Top 3 by age descending



🔐 USER & AUTH (Advanced)
use admin
db.createUser({
  user: "admin",
  pwd: "pass123",
  roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
})