const express = require("express");
const {
	findAllUser,
	findUserById,
	createUser,
	updateUser,
} = require("../controllers/UserControllers.js");
const { verifyUser, adminOnly } = require("../middleware/authMiddleware.js");
const router = express.Router();

router.route("/").get(verifyUser, adminOnly, findAllUser);
router.route("/:id").get(verifyUser, adminOnly, findUserById);
router.route("/create").post(verifyUser, adminOnly, createUser);
router.route("/update/:id").patch(verifyUser, adminOnly, updateUser);

module.exports = router;
