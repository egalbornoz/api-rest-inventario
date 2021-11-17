/******************************************************************
 *  Importaciones
 ******************************************************************/
 const { Router } = require("express");
 const { check } = require("express-validator");
 const { route } = require("./usuarios");
 const { login,usuarioAutenticado } = require("../controllers/auth");
 const { validarCampos } = require("../middlewares/validar-campos");
 const { validarJWT } = require("../middlewares");
const { inventarioGet } = require("../controllers/inventario");
 const router = Router();
 
 /******************************************************************
  *  inventario / - endPoint
  ******************************************************************/
 router.get("/",  inventarioGet);
 /******************************************************************
  *  Exportación Rutas - endPoints
  ******************************************************************/
 module.exports = router;
 