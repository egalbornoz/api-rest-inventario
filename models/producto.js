const { DataTypes } = require("sequelize");
const { TipoProducto } = require("./tipoproducto");
const { sequelize } = require("../database/db");
const { Proveedore } = require("./proveedore");
const { Unidade } = require("./unidade");
const { Almacene } = require("./almacene");


const Producto = sequelize.define("Producto", {
  id_producto: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  id_unidad: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  id_usuario: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },

  id_usuario: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  id_tipopro: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  id_proveedor: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  id_almacen: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  codigo: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
});

// // ForeignKey Producto - Unidade
Producto.belongsTo(Unidade, { foreignKey: "id_unidad" });
Unidade.hasMany(Producto, { foreignKey: "id_unidad" });

// // ForeignKey Producto - Proveedor
Producto.belongsTo(Proveedore, { foreignKey: "id_proveedor" });
Proveedore.hasMany(Producto, { foreignKey: "id_proveedor" });

// // ForeignKey Producto - Almacen
Producto.belongsTo(Almacene, { foreignKey: "id_almacen" });
Almacene.hasMany(Producto, { foreignKey: "id_almacen" });

// // ForeignKey Producto - TipoProducto
Producto.belongsTo(TipoProducto, { foreignKey: "id_tipopro" });
TipoProducto.hasMany(Producto, { foreignKey: "id_tipopro" });

module.exports = Producto;
