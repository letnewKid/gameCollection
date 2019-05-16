const User = require('../models/userModel');

const userController = {
  addUser: (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    const newUser = new User({ username, password });
    newUser.save({ username, password });
    return res.json({ user: username });

    // in the req body I want to be able to access the user name and pass work
    // before adding the user to the database make sure that the user has both a username and password
    // added user to the database
  },
  verifyUser: (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username, password }, err => {
      if (err)
        return res
          .status(404)
          .json({ user: username, verifyiedCondition: false });

      return res.json({ user: username, verifyiedCondition: true });
    });
    // checks if the username name and password fields are there
    // throw and error if it not field
  },
};

module.exports = userController;
