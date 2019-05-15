const User = require('../models/userModel');

const userController = {
  addUser: (req, res) => {
    // in the req body I want to be able to access the user name and pass work
    // before adding the user to the database make sure that the user has both a username and password
    // added user to the database
  },
  loginUser: (req, res) => {
    // checks if the username name and password fields are there
    // throw and error if it not field
  },
};

module.exports = userController;
