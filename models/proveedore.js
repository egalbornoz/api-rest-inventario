const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const Proveedore = sequelize.define("Proveedore", {
  id_proveedor: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  razonsocial: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  ruc: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
});
module.exports = { Proveedore };
