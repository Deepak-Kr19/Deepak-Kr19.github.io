//command
db.employees.find({department: {$eq: "IT"}})

db.employees.find({salary: {$gt: 3000}})     //gt -> greater than,  gte->greater than equal to

db.employees.find({salary: {$lte: 3000}})     //lte -> less than and equal to


db.employees.find({salary: {$ne: 3000}})      //ne -> not equal to

db.employees.find({salary: {$ne: 3000}, department:{$eq:"IT"}, name:1})



