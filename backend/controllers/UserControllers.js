const { User } = require("../models");
const { asyncHandler } = require("../middleware/asyncHandler");
const bcrypt = require("bcryptjs");

const findAllUser = asyncHandler(async (req, res) => {
	const data = await User.findAll();
	res.json(data);
});
const findUserById = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const data = await User.findByPk(id);
	if (data === null) {
		return res.status(404).json({
			status: "failed",
			message: `data user with id ${id} is not found`,
		});
	}
	res.json(data);
});

const createUser = asyncHandler(async (req, res) => {
	const { name, email, password, role } = req.body;
	const newUser = await User.create({
		name: name,
		email: email,
		password: bcrypt.hashSync(password, 8),
		role: role,
	});
	res.status(201).json({
		status: "ok",
		data: {
			name: newUser.name,
		},
	});
});

const updateUser = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const { name, email, password, role } = req.body;
	const data = await User.findByPk(id);
	if (!data) {
		return res.status(404).json({
			status: "failed",
			message: `data User with id ${id} is not found`,
		});
	}

	data.name = name;
	data.email = email;
	data.password = bcrypt.hashSync(password, 8);
	data.role = role;
	data.save();

	res.status(201).json({
		status: "ok",
		data: {
			name: data.name,
		},
	});
});

module.exports = { findAllUser, findUserById, createUser, updateUser };
