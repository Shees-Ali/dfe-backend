const { body } = require("express-validator");

module.exports = {
  validateSignUp: [
    body("name").notEmpty().withMessage("Name is required"),
    body("email")
      .isEmail()
      .normalizeEmail({ gmail_remove_dots: false })
      .withMessage("Invalid email"),
  ],
};
