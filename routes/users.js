const express = require('express');
const router = require('express-promise-router')();

const { validateBody, schemas } = require('../helpers/routeHelpers');
const UsersController = require('../controllers/users');

// validateBody is middleware that validates user input using the authSchema we had defined in our routeHelpers.js, before navigating to the UsersController
router
  .route('/signup')
  .post(validateBody(schemas.authSchema), UsersController.signUp);

router.route('/signin').post(UsersController.signIn);

router.route('/secret').get(UsersController.secret);

module.exports = router;
