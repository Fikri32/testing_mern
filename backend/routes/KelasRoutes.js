const express = require("express");
const {
	findAllKelas,
	findKelasById,
	createKelas,
	updateKelas,
	deleteKelas,
} = require("../controllers/KelasController.js");

const router = express.Router();

router.route("/").get(findAllKelas);
router.route("/:id").get(findKelasById);
router.route("/create").post(createKelas);
router.route("/update/:id").patch(updateKelas);
router.route("/delete/:id").delete(deleteKelas);

module.exports = router;
