const { Sequelize } = require('sequelize');
const config = require('./config'); // Sesuaikan dengan path ke file konfigurasi Anda

const sequelizeDB = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
    dialectOptions: config.development.dialectOptions,
  }
);

module.exports = {sequelizeDB}