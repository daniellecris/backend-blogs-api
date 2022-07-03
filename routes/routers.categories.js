const express = require('express');
const controller = require('../src/controllers/controller.category');
const validateCategory = require('../src/middlewares/category');
const { authenticateToken } = require('../src/middlewares/auth');

const categoryRouter = express.Router();

categoryRouter.post('/', validateCategory, authenticateToken, controller.categoryController);

module.exports = categoryRouter;