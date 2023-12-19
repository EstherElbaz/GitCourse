// routes.js

const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Route to create a new user
router.post('/users', controller.createUser);

// Route to update a user by ID
router.put('/users/:id', controller.updateUserById);

// Route to delete a user by ID
router.delete('/users/:id', controller.deleteUserById);

// Route to get a user by ID
router.get('/users/:id', controller.getUserById);

module.exports = router;
