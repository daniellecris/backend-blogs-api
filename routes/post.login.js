const express = require('express');
const controller = require('../src/controllers/controller.login');
const validateLogin = require('../src/middlewares/login');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, controller.loginController);

module.exports = loginRouter;