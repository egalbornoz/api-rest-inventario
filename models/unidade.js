const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const Unidade = sequelize.define("Unidade", {
  id_unidad: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  unidad: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  presentacion: {
    type: DataTypes.STRING(100),
  },
});
module.exports = {Unidade};