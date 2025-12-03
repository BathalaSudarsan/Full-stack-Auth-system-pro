// backend/services/userService.js
const { users, User } = require("../models/userModel");

// CREATE USER
const createUser = (name, email, passwordHash) => {
  const newUser = new User(name, email, passwordHash);
  users.push(newUser);
  return newUser;
};

// FIND BY EMAIL
const findByEmail = (email) => {
  return users.find((u) => u.email === email);
};

// FIND BY ID
const findById = (id) => {
  return users.find((u) => u.id === id);
};

module.exports = {
  createUser,
  findByEmail,
  findById,
};
