const { Kelas } = require("../models");
const { asyncHandler } = require("../middleware/asyncHandler");

const findAllKelas = asyncHandler(async (req, res) => {
	const kelas = await Kelas.findAll();
	res.json(kelas);
});

const findKelasById = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const kelas = await Kelas.findByPk(id);

	if (kelas === null) {
		return res.status(404).json({
			status: "failed",
			message: `data kelas with id ${id} is not found`,
		});
	}
	res.json(kelas);
});

const createKelas = asyncHandler(async (req, res) => {
	const { name } = req.body;
	const newKelas = await Kelas.create({ name: name });
	console.log(name);
	res.status(201).json({
		status: "ok",
		data: {
			name: newKelas.name,
		},
	});
});

const updateKelas = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	const kelas = await Kelas.findByPk(id);

	if (!kelas) {
		return res.status(404).json({
			status: "failed",
			message: `data kelas with id ${id} is not found`,
		});
	}

	kelas.name = name;
	kelas.save();

	res.status(201).json({
		status: "ok",
		data: {
			name: kelas.name,
		},
	});
});

const deleteKelas = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const kelas = await Kelas.findByPk(id);

	if (!kelas) {
		return res.status(404).json({
			status: "failed",
			message: `data kelas with id ${id} is not found`,
		});
	}

	kelas.destroy();

	res.status(201).json({
		status: "ok",
		data: {
			message: `Success delete kelas with ID ${id}`,
		},
	});
});

module.exports = {
	findAllKelas,
	findKelasById,
	createKelas,
	updateKelas,
	deleteKelas,
};
