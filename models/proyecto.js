const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const Proyecto = sequelize.define("Proyecto", {
  id_proyecto: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  proyecto: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

module.exports = Proyecto;
