// This code demonstrates how to hash a password using bcrypt in Node.js
// Make sure to install bcrypt using `npm install bcrypt`

import bcrypt from 'bcrypt';

const pwd = "pass1234";
const hashedPwd = await bcrypt.hash(pwd, 10);
console.log(hashedPwd);

// To verify the password later, you can use:
const isMatch = await bcrypt.compare(pwd, hashedPwd);
console.log(isMatch ? "Password matches!" : "Password does not match.");

