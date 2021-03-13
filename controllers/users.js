const User = require('../models/user');

module.exports = {
  signUp: async (req, res, next) => {
    // collect validated email and password
    const { email, password } = req.value.body;

    // check if a user with that email already exists in the database
    const foundUser = await User.findOne({ email: email });
    if (foundUser) {
      return res.status(403).send({ error: 'Email is already in use' });
    }

    // create a new user
    const newUser = new User({
      email: email,
      password: password,
    });
    await newUser.save();

    // respond with a token
    res.json({ user: 'created' });
  },

  signIn: async (req, res, next) => {
    // generate a token
    console.log('UsersController.signIn() called');
  },

  secret: async (req, res, next) => {
    console.log('UsersController.secret() called');
  },
};
