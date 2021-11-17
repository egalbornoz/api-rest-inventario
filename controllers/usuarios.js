/********************************************************************************
 * Importaciones necesaria
 ********************************************************************************/
const { response, request, json } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/usuario");
const Producto = require("../models/producto");
const { Unidade } = require("../models/unidade");
const { Proveedore } = require("../models/proveedore");
const { Almacene } = require("../models/almacene");
const { TipoProducto } = require("../models/tipoproducto");
// const {querys,config} = require("../database");

/********************************************************************************
 * Controlador para obtener los usuarios activos con estado:true y paginados limite=?
 ********************************************************************************/
const usuariosGet = async (req = request, res = response) => {
  try {
    const usuarios = await Usuario.findAll({
      attributes: ["nombre", "email", "rol", "estado"],
    });
    // const productos = await Producto.findAll({
    //   attributes: ["codigo", "nombre"],
    //   include: [
    //     {
    //       model: TipoProducto,
    //       attributes: ["tipoproducto"],
    //     },
    //     {
    //       model: Proveedore,
    //       attributes: ["razonsocial"],
    //     },
    //     {
    //       model: Unidade,
    //       attributes: ["unidad", "presentacion"],
    //     },
    //     {
    //       model: Almacene,
    //       attributes: ["almacen"],
    //     },
    //   ],
    // });
    res.json({ usuarios });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
/********************************************************************************
 * Controlador para actualizar los usuarios
 ********************************************************************************/
const usuariosPut = async (req, res = response) => {
  // const { id } = req.params; //Id configurado en la ruta router.put('/:id', usuariosPut);
  // const { _id, contraseña, google, correo, ...resto } = req.body; // se excluyen elementos y el resto se actualiza
  // if (contraseña) {
  //   const salt = bcrypt.genSaltSync();
  //   resto.contraseña = bcrypt.hashSync(contraseña, salt);
  // }
  // const usuario = await Usuario.findByIdAndUpdate(id, resto);
  // res.json(usuario);
};
/********************************************************************************
 * Controlador crear los usuarios
 ********************************************************************************/
const usuariosPost = async (req, res = response) => {
  const { nombre, email, clave, rol } = req.body;
  const role = await Role.findOne({ where: { rol } });
  const usuario = new Usuario({ nombre, email, clave, rol_id: role.id_rol });
  console.log(nombre, email, clave, rol);
  const salt = bcrypt.genSaltSync();
  usuario.clave = bcrypt.hashSync(clave, salt);
  await usuario.save();
  res.json({
    msg: usuario,
  });
};
/********************************************************************************
 * Controlador elminar los usuarios  (Marcar estado=false)
 ********************************************************************************/
const usuariosDelete = async (req, res = response) => {
  // const { id } = req.params;
  // const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });
  // const usuarioAut = req.usuario;
  // res.json({ usuario, usuarioAut });
};
/********************************************************************************
 * Exportación de los modulos
 ********************************************************************************/
module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
};
