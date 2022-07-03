const express = require('express');
const loginRouter = require('./post.login');

const routers = express.Router();

routers.use('/login', loginRouter);

module.exports = routers;