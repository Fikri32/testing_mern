const express = require("express");
const {
	Login,Logout,Me
} = require("../controllers/AuthControllers.js");

const router = express.Router();

router.route("/login").post(Login);
router.route("/me").get(Me);
router.route("/logout").delete(Logout);

module.exports = router;