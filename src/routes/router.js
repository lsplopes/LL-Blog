const express = require('express');

const authRouter = require('./auth.routes');
const userRouter = require('./user.routes');

const routers = express.Router();

// rota pública
routers.use('/login', authRouter);
routers.use('/user', userRouter);

module.exports = routers;
