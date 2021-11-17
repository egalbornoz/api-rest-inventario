/******************************************************************
 *  Importaciones
 ******************************************************************/
const { Router } = require("express");
const { check } = require("express-validator");
const { route } = require("./usuarios");
const { login,usuarioAutenticado } = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares");
const router = Router();

/******************************************************************
 *  Ruta /login - endPoint
 ******************************************************************/
router.post(
  "/login",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "el password es obligatoria").not().isEmpty(),
    validarCampos,
  ],
  login
);
/******************************************************************
 *  Ruta /Obtener usuario autenticado - endPoint
 ******************************************************************/
router.get("/autenticar", validarJWT, usuarioAutenticado);
/******************************************************************
 *  Exportación Rutas - endPoints
 ******************************************************************/
module.exports = router;
