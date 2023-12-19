// user.js

let users = [];

// Function to create a new user
function createUser(name, email, phoneNumber) {
  const newUser = { id: generateUserId(), name, email, phoneNumber };
  users.push(newUser);
  return newUser;
}

// Function to update a user by ID
function updateUserById(userId, updatedInfo) {
  const userIndex = findUserIndexById(userId);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedInfo };
    return users[userIndex];
  }
  return null;
}

// Function to delete a user by ID
function deleteUserById(userId) {
  const userIndex = findUserIndexById(userId);
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1)[0];
    return deletedUser;
  }
  return null;
}

// Function to get a user by ID
function getUserById(userId) {
  const userIndex = findUserIndexById(userId);
  return userIndex !== -1 ? users[userIndex] : null;
}

// Helper function to generate a unique user ID
function generateUserId() {
  return users.length + 1;
}

// Helper function to find the index of a user by ID
function findUserIndexById(userId) {
  return users.findIndex(user => user.id === userId);
}

// Exporting functions to be used in other modules
module.exports = {
  createUser,
  updateUserById,
  deleteUserById,
  getUserById,
};
