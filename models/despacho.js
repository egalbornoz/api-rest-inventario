const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const Despacho = sequelize.define("Despacho", {
  id_despacho: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  id_producto: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  id_usuario: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  id_proyecto: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  contacto: {
    type: DataTypes.STRING(200),
  },
  cantidad: {
    type: DataTypes.DECIMAL(19, 4),
  },
  observaciones: {
    type: DataTypes.STRING(500),
  },
});

module.exports = {
  Despacho,
};
