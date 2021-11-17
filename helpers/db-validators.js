/********************************************************************************
 * Importaciones necesarias
 ********************************************************************************/
const { Usuario, Role } = require("../models");
/********************************************************************************
 *Validador personalizado para verificar si existe un rol en la colección Usuario
 ********************************************************************************/
const isRolValid = async (rol = "") => {
  console.log(rol);
  const existeRol = await Role.findOne({ where: { rol } });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no esta registrado en la DB`);
  }
  return true;
};
/********************************************************************************
 *Validador personalizado para verificar si existe email en la colección usuario
 ********************************************************************************/
const emailExiste = async (email = "") => {
  const existeEmail = await Usuario.findOne({ where: { email } });
  console.log(existeEmail);
  if (existeEmail) {
    throw new Error(`El correo:  ${email} y existe`);
  }
  return true;
};
/********************************************************************************
 *Validador personalizado para verificar si existe usuario en la colección usuario
 ********************************************************************************/
const existeUsuarioPorId = async (id) => {
  const existeUsuario = await Usuario.findById({ user_id: id });
  if (!existeUsuario) {
    throw new Error(`El Id no existe ${id}`);
  }
  return true;
};
/********************************************************************************
 *Validador personalizado para verificar existe categoria en la colección Categoria
 ********************************************************************************/
const existeCategoriaPorId = async (id) => {
  const existeCat = await Categoria.findById(id);
  if (!existeCat) {
    throw new Error(`La categoría no existe `);
  }
  return true;
};
/********************************************************************************
 *Validador personalizado para verificar existe producto en la colección Producto
 ********************************************************************************/
const existeProductoPorId = async (id) => {
  const existePro = await Producto.findById(id);
  if (!existePro) {
    throw new Error(`El producto no existe `);
  }
  return true;
};
/********************************************************************************
 *Validador personalizado para verificar colecciones permitidas
 ********************************************************************************/
const coleccionesPermitidas = (coleccion = "", colecciones = []) => {
  const incluida = colecciones.includes(coleccion);
  if (!incluida) {
    throw new Error(`La coleccion ${coleccion} no es permitida ${colecciones}`);
  }
  return true;
};
/********************************************************************************
 *Validador personalizado para validar colecciones registros de la coleccion
 ********************************************************************************/
const validarColeccion = async (id, coleccion) => {
  switch (coleccion) {
    case "usuarios":
      modelo = await Usuario.findById(id);
      if (!modelo) {
        return new Error(`No existe un usuario con el id ${id}`);
      }
      break;
    case "productos":
      modelo = await Producto.findById(id);
      if (!modelo) {
        return new Error(`No existe un producto con el id ${id}`);
      }
      break;

    default:
      return new Error("Falto validar esto");
      break;
  }
  //console.log(modelo)
  return modelo;
};
/********************************************************************************
 *  Exportaciones del archivo
 ********************************************************************************/
module.exports = {
  existeCategoriaPorId,
  existeProductoPorId,
  emailExiste,
  existeUsuarioPorId,
  isRolValid,
  coleccionesPermitidas,
  validarColeccion,
};
