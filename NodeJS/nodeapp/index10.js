// Example of generating a JWT in Node.js
// This code demonstrates how to generate a JWT (JSON Web Token) in Node.js
// Make sure to install jsonwebtoken using `npm install jsonwebtoken`

import jwt from 'jsonwebtoken';
const SECRET = 'your_secret_key';
const user = {
    id: 1,
    username: 'john_doe',
    email: 'john@gmail.com',
    role: 'admin'
};
const token = jwt.sign(user, SECRET, { expiresIn: '1h' });
console.log('Generated JWT:', token);

// To verify the JWT later, you can use:
const decoded = jwt.verify(token, SECRET);
console.log('Decoded JWT:', decoded);
// This will output the user information contained in the JWT
// Make sure to handle errors in production code, such as token expiration or invalid tokens
