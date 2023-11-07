const { Role } = require("../models");
const { asyncHandler } = require("../middleware/asyncHandler");

const findAllRole = asyncHandler(async (req, res) => {
	const role = await Role.findAll();
	res.json(role);
});

const findRoleById = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const role = await Role.findByPk(id);

	if (role === null) {
		return res.status(404).json({
			status: "failed",
			message: `data role with id ${id} is not found`,
		});
	}
	res.json(role);
});

const createRole = asyncHandler(async (req, res) => {
	const { name } = req.body;
	const newRole = await Role.create({ name: name });
	console.log(name);
	res.status(201).json({
		status: "ok",
		data: {
			name: newRole.name,
		},
	});
});

const updateRole = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	const role = await Role.findByPk(id);

	if (!role) {
		return res.status(404).json({
			status: "failed",
			message: `data role with id ${id} is not found`,
		});
	}

	role.name = name;
	role.save();

	res.status(201).json({
		status: "ok",
		data: {
			name: role.name,
		},
	});
});

const deleteRole = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const role = await Role.findByPk(id);

	if (!role) {
		return res.status(404).json({
			status: "failed",
			message: `data role with id ${id} is not found`,
		});
	}

	role.destroy();

	res.status(201).json({
		status: "ok",
		data: {
			message: `Success delete role with ID ${id}`,
		},
	});
});

module.exports = {
	findAllRole,
	findRoleById,
	createRole,
	updateRole,
	deleteRole,
};
