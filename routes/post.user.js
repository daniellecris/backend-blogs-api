const express = require('express');
const controller = require('../src/controllers/controller.user');
const validateUser = require('../src/middlewares/user');

const userRouter = express.Router();

userRouter.post('/', validateUser, controller.userController);

module.exports = userRouter;