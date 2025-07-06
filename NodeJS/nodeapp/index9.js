// This code demonstrates how to hash a password using bcrypt in Node.js
// Make sure to install bcrypt using `npm install bcrypt`

import bcrypt from 'bcrypt';

const pwd = "pass1234";
const hashedPwd = await bcrypt.hash(pwd, 10); // The second argument is the salt rounds, which determines the complexity of the hash
// The higher the number, the more secure the hash, but it will take longer to compute
console.log(hashedPwd);

// To verify the password later, you can use:
const isMatch = await bcrypt.compare(pwd, hashedPwd);
console.log(isMatch ? "Password matches!" : "Password does not match.");

