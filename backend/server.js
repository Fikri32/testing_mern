const express = require("express");
const cors = require("cors");
const session = require("express-session");
const dotenv = require("dotenv");
const db = require("./config/db");
const SequelizeStore = require("connect-session-sequelize");

dotenv.config();
const bodyParser = require("body-parser");

const userRoutes = require("./routes/UserRoutes.js");
const roleRoutes = require("./routes/RoleRoutes.js");
const kelasRoutes = require("./routes/KelasRoutes.js");
const authRoutes = require("./routes/AuthRoutes.js");

const app = express();
const port = process.env.PORT;

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
	db: db.sequelizeDB,
});

app.use(
	session({
		secret: process.env.SESS_SECRET,
		resave: false,
		saveUninitialized: true,
		store: store,
		cookie: {
			secure: "auto",
		},
	})
);

app.use(
	cors({
		credentials: true,
		origin: "http://localhost:3000",
	})
);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("API is running ...");
});

app.use("/api/users", userRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/kelas", kelasRoutes);
app.use("/api/auth", authRoutes);

// store.sync();

app.listen(port, () => console.log(`Server running on port ${port}`));
