const fs = require("fs");

module.exports = {
	development: {
		username: "postgres",
		password: "pedang2032",
		database: "tpa_spp",
		host: "127.0.0.1",
		dialect: "postgres",
		dialectOptions: {
			bigNumberStrings: true,
		},
	},
	test: {
		username: "postgres",
		password: "pedang2032",
		database: "tpa_spp",
		host: "127.0.0.1",
		dialect: "postgres",
		dialectOptions: {
			bigNumberStrings: true,
		},
	},
	
};
