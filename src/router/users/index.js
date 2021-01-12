/**USER'S ROUTES */
const express = require('express');
const userController = require('../../controllers/user');

const usersRouter = express.Router();
/**USER'S ROUTES */

usersRouter.get('/', (req, res)=> {
    res.send('Users')
})

usersRouter.get('/create',userController.createUser)

module.exports = usersRouter;
