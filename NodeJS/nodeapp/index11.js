// This code demonstrates how to implement JWT authentication and authorization in a Node.js application using Express.

import express from "express";
import jwt from "jsonwebtoken";

const SECRET = "secret";
const app = express();
app.use(express.json());

const users = [
  {
    email: "john@gmail.com",
    pass: "1234",
    role: "user",
  },
  {
    email: "cathy@gmail.com",
    pass: "1234",
    role: "admin",
  },
];

// Middleware: Authenticate JWT Token
const authenticate = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: "Token required" });

    token = token.split(" ")[1];
    const user = jwt.verify(token, SECRET);
    req.user = user; // Store the whole user object (or just role/email)
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid Token" });
  }
};

// Middleware: Authorize by role
const authorize = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ message: "Forbidden: Access is denied" });
    }
    next();
  };
};

// Login route
app.post("/login", (req, res) => {
  const { email, pass } = req.body;
  const found = users.find(
    (user) => user.email === email && user.pass === pass
  );
  if (found) {
    const { pass, ...userData } = found; // Exclude password from token
    const token = jwt.sign(userData, SECRET, { expiresIn: "1h" });
    res.status(200).json({ user: userData, token });
  } else {
    res.status(403).json({ message: "Access Denied" });
  }
});

// Protected route for admins
app.get("/users", authenticate, authorize("admin"), (req, res) => {
  res.json(users.map(({ pass, ...rest }) => rest)); // Hide passwords
});

// Start server
app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});
