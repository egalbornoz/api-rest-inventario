/********************************************************************************
 *  Importaciones
 ********************************************************************************/
const { response } = require("express");
const jwt = require("jsonwebtoken");
const { estimatedDocumentCount } = require("../models/usuario");
const Usuario = require("../models/usuario");
// const { config } = require("../database");

/********************************************************************************
 *  Método para validar token recibido del header
 ********************************************************************************/
const validarJWT = async (req, res = response, next) => {
  const token = req.header("token");
  //Validar que se ha recibido un token
  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la petición ",
    });
  }
  // Validar que el token este firmado
  try {
    const cifrado = jwt.verify(token, process.env.SECRET_JWT);
    const usuario = await Usuario.findByPk(cifrado.id_usuario);
    req.usuario = usuario;
    req.token=token;
    // // // Verifico usuario exista
    if (!usuario) {
      return res.status(401).json({
        msg: "El usuario no existe",
      });
    }
    //Verificar que el usuario tenga estatus = activo
     if (!usuario.estado ===true) {
      return res.status(401).json({
        msg: "Usuario inactivo",
      });
    }
    next();
  } catch (error) {
    res.status(401).json({
      msg: "Token no válido",
    });
  }
};
/********************************************************************************
 *  Exportaciones
 ********************************************************************************/
module.exports = {
  validarJWT,
};
