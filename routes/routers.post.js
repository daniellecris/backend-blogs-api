const express = require('express');
const controller = require('../src/controllers/controller.blogPost');
const { authenticateToken } = require('../src/middlewares/auth');

const postRouter = express.Router();

postRouter.get('/', authenticateToken, controller.postController);
postRouter.get('/:id', authenticateToken, controller.postControllerId);

module.exports = postRouter;