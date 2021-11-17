/********************************************************************************
 * Importaciones necesarias
 ********************************************************************************/
const { response, json } = require("express");
const bcrypjs = require("bcryptjs");
const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/generar-jwt");

/********************************************************************************
 * Controlador login
 ********************************************************************************/
const login = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    console.log("Consultando Usuario");
    const usuario = await Usuario.findOne({ where: { email } });
  
    if (!usuario) {
      return res.status(400).json({
        msg: "Usuario y/o contraseña no son válidos",
      });
    }
    if (usuario.estado === false) {
      return res.status(400).json({
        msg: "Usuario inactivo ",
      });
    }
    const validarPass = await bcrypjs.compare(password, usuario.password);
    if (!validarPass) {
      return res.status(400).json({
        msg: "Usuario y/o contraseña no son válidos",
      });
    }
    //Limpio el password para no enviarlo al frontend
    usuario.password = "";
    const token = await generarJWT(usuario.id_usuario, usuario.nombre);
    res.json({
      usuario,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Algo salio mal, comunicar al administrador",
    });
  }
};
/*********************************************************************************
 *   Obtiene usuario autenticado
 *********************************************************************************/
// Obtiene que usuario esta autenticado
usuarioAutenticado = async (req, res) => {
  try {
    const usuarioSeq = await Usuario.findByPk(req.usuario.id_usuario);
    usuarioSeq.password = "";
    const usuario = {
      id_usuario: usuarioSeq.id_usuario,
      nombre: usuarioSeq.nombre,
      rol: usuarioSeq.rol,
    };
    res.json({ usuario });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Algo salio mal, comunicar al administrador - usuarioAutenticado",
    });
  }
};
/********************************************************************************
 *  Eportación controladores
 ********************************************************************************/

module.exports = {
  login,
  usuarioAutenticado,
};
