const { asyncHandler } = require("../middleware/asyncHandler");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

const Login = async (req, res) => {
	const user = await User.findOne({
		where: {
			name: req.body.name,
		},
	});
	if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
	const match = await bcrypt.compare(req.body.password, user.password);
	if (!match) return res.status(400).json({ msg: "Wrong Password" });
	req.session.TestNew = user.uuid
   req.session.save()
	const session = req.session;
	const name = user.name;
	const uuid = user.uuid;
	const email = user.email;
	const role = user.role;
	res.status(200).json({ name, email, role, uuid, session });
};

const Me = async (req, res) => {
	if (!req.session.TestNew) {
		return res.status(401).json({ msg: `Mohon login ke akun Anda!` });
	}
	const user = await User.findOne({
		attributes:['uuid','name','email','role'],
		where: {
			uuid: req.session.TestNew,
		},
	});
	if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
	res.status(200).json(user);
};

const Logout = (req, res) => {
	req.session.destroy((err) => {
		if (err)
			return res.status(400).json({ msg: "Tidak dapat melakukan Logout" });
		res.status(200).json({ msg: "Berhasil Logout" });
	});
};

module.exports = { Login, Me, Logout };
