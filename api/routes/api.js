var express = require("express");
var router = express.Router();

const { validateSignUp } = require("../../utils/inputValidations");
const { signUp } = require("../controllers/apiController");

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

router.post("/signup", validateSignUp, signUp);

router.post("/confirm", (req, res) => {
  
});

module.exports = router;
