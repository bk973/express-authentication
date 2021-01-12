/**App config... */
const express = require('express');
const router = require('./router');
const usersRouter = require('./router/users');
const app = express();

//middleware...
app.use('/',router);
app.use('/users/', usersRouter);

module.exports = app