const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const Inventario = sequelize.define("Inventario", {
  id_inventario: {
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
  disponible: {
    type: DataTypes.DECIMAL(19, 4),
  },
  transito: {
    type: DataTypes.DECIMAL(19, 4),
  },
  reserva: {
    type: DataTypes.DECIMAL(19, 4),
  },
  stock_max: {
    type: DataTypes.DECIMAL(19, 4),
  },
  stock_min: {
    type: DataTypes.DECIMAL(19, 4),
  },
});

module.exports = {
  Inventario,
};
