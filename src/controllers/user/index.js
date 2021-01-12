/**USERS' CONTROLLER :: REQUIRES THE MODEL - FOR ACCESSING AND UPDATING DATA... */
//const User = require('../../models/user')

//user's actions - create, update, delete, etc...

const createUser = function(req, res){
      res.send('create user')
}

module.exports = {
    createUser,
}