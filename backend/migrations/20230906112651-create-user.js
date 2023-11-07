"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			uuid: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.literal('gen_random_uuid()'),
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			name: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			password: {
				type: Sequelize.STRING,
			},
			RoleId: {
				type: Sequelize.INTEGER,
				references: {
					model: "Roles",
					key: "id",
				},
				field: "role",
			},
			createdAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Users");
	},
};
