// backend/models/userModel.js

// This simulates a DB table/collection
let users = []; 
// Each user: { id, name, email, passwordHash }

let nextId = 1;

class User {
  constructor(name, email, passwordHash) {
    this.id = nextId++;
    this.name = name;
    this.email = email;
    this.passwordHash = passwordHash;
  }
}

module.exports = {
  users,
  User,
};
