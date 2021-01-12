/**App config... */
const express = require('express');
const bodyParser = require('body-parser')
const router = require('./router');
const usersRouter = require('./router/users');

//middleware...

const app = express();

app.use('/',router);
app.use('/users/', usersRouter);

module.exports = app