const Joi = require('joi'); // data validation package

module.exports = {
  validateBody: (schema) => {
    return (req, res, next) => {
      const validationResult = schema.validate(req.body);
      // if validation error, then send it out
      if (validationResult.error) {
        return res.status(400).json(validationResult.error);
      }
      // if there are no validation errors, then attach to the req object a property called value so we can access the validated fields by typing req.value.body instead of req.body. The req.body will still be there, but we'll know that by accessing req.value.body, we are actually accessing the validated values
      if (!req.value) {
        req.value = {};
      }
      req.value['body'] = validationResult.value;
      next();
    };
  },
  schemas: {
    authSchema: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(), // you can set length of password to be between such and such nnumbers - check joi package documentation
    }),
  },
};
