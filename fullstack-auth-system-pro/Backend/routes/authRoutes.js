// backend/routes/authRoutes.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const { JWT_SECRET, TOKEN_EXPIRES_IN } = require("../config");
const { createUser, findByEmail, findById } = require("../services/userService");
const authMiddleware = require("../middleware/authMiddleware");

// POST /api/auth/register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  const exists = findByEmail(email);
  if (exists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = createUser(name, email, passwordHash);

  return res.json({
    message: "Registration successful",
    user: { id: user.id, name: user.name, email: user.email },
  });
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = findByEmail(email);
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch)
    return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: TOKEN_EXPIRES_IN }
  );

  return res.json({
    message: "Login successful",
    token,
    user: { id: user.id, name: user.name, email: user.email },
  });
});

// GET /api/auth/me  (protected)
router.get("/me", authMiddleware, (req, res) => {
  const user = findById(req.user.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  return res.json({
    id: user.id,
    name: user.name,
    email: user.email,
  });
});

// DEBUG - view all users (DEV only)
router.get("/debug/users", (req, res) => {
  const { users } = require("../models/userModel");
  return res.json(users);
});

module.exports = router;
