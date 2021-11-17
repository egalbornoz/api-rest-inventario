// *************************************************************
// Centralización de modelos en un solo archivo
// *************************************************************
const Almacene = require("./almacene");
const Despacho = require("./despacho");
const Inventario = require("./inventario");
const Producto = require("./producto");
const Proveedore = require("./proveedore");
const proyecto = require("./proyecto");
const Server = require("./server");
const TipoProducto = require("./tipoproducto");
const Unidade = require("./unidade");
const Usuario = require("./usuario");



// *************************************************************
// Exportaciones
// *************************************************************
module.exports = {
  Almacene,
  Despacho,
  Inventario,
  Producto,
  Proveedore,
  proyecto,
  Server,
  TipoProducto,
  Unidade,
  Usuario,
};
