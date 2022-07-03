const express = require('express');
const { authenticateToken } = require('../src/middlewares/auth');
const loginRouter = require('./post.login');
const categoryRouter = require('./routers.categories');
const postRouter = require('./routers.post');
const userRouter = require('./routers.user');

const routers = express.Router();

routers.use('/login', loginRouter);
routers.use('/user', userRouter);
routers.use('/categories', categoryRouter);
routers.use('/post', authenticateToken, postRouter);

module.exports = routers;