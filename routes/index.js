const express = require('express');
const loginRouter = require('./post.login');
const userRouter = require('./routers.user');

const routers = express.Router();

routers.use('/login', loginRouter);
routers.use('/user', userRouter);

module.exports = routers;