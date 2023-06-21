const sendgrid = require("../helpers/sendgrid.helper");
const { validationResult } = require("express-validator");

module.exports = {
  signUp: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { name, email } = req.body;

      

      res.status(201).json({
        message: "Subscription Email Sent",
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
};
