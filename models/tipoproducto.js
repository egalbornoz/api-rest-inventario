const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const TipoProducto = sequelize.define("Tipoproducto", {
  id_tipopro: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  tipoproducto: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});
module.exports = {TipoProducto};
