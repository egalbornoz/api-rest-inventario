const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const Almacene = sequelize.define("Almacene", {
  id_almacen: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  id_usuario: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  almacen: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});
module.exports = { Almacene };
