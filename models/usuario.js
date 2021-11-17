const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const Usuario = sequelize.define("Usuario", {
  id_usuario: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
   nombre: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  rol: {
    type: DataTypes.STRING,
    defaultValue: "USER_ROLE",
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1,
  },
});
module.exports = Usuario;
