const express = require('express');
const controller = require('../src/controllers/controller.user');
const validateUser = require('../src/middlewares/user');
const { authenticateToken } = require('../src/middlewares/auth');

const userRouter = express.Router();

userRouter.post('/', validateUser, controller.userController);
userRouter.get('/', authenticateToken, controller.usersController);

module.exports = userRouter;