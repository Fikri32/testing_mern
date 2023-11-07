const { User } = require("../models");

const verifyUser = async (req, res, next) => {
	if (!req.session.TestNew) {
		return res.status(401).json({ msg: `Mohon login ke akun Anda!` });
	}
	const user = await User.findOne({
		where: {
			uuid: req.session.TestNew,
		},
	});
	if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
	req.userId = user.id;
	req.role = user.role;
	next();
};

const adminOnly = async (req, res, next) => {
	const user = await User.findOne({
		where: {
			uuid: req.session.TestNew,
		},
	});
	if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
	if (user.role !== 1)
		return res.status(403).json({ msg: "Akses terlarang" });
	next();
};
module.exports = { verifyUser, adminOnly };
