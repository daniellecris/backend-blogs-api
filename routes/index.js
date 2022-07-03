const express = require('express');
const loginRouter = require('./post.login');
const categoryRouter = require('./routers.categories');
const userRouter = require('./routers.user');

const routers = express.Router();

routers.use('/login', loginRouter);
routers.use('/user', userRouter);
routers.use('/categories', categoryRouter);

module.exports = routers;