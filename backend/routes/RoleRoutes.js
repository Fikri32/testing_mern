const express = require("express");
const {
	findAllRole,
	findRoleById,
	createRole,
	updateRole,
	deleteRole,
} = require("../controllers/RoleControllers.js");

const router = express.Router();

router.route("/").get(findAllRole);
router.route("/:id").get(findRoleById);
router.route("/create").post(createRole);
router.route("/update/:id").patch(updateRole);
router.route("/delete/:id").delete(deleteRole);

module.exports = router;
