const express = require('express');
const userController = require('../controllers/user.controller');

const user_router = express.Router();

user_router.get('/user', userController.listUsers);

user_router.get('/user/:id', userController.findUserByID);

user_router.post('/user', userController.createUser);

user_router.delete('/user/:id', userController.deleteUser);

module.exports = user_router;