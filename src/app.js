const express = require('express');

require('express-async-errors');
const errorMiddleware = require('./middlewares/error');
const routers = require('./routes/router');

const app = express();

app.use(express.json());

app.use(routers);

app.use(errorMiddleware);

module.exports = app;
