/********************************************************************************
 * Importaciones necesarias
 ********************************************************************************/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos, validarJWT, esAdminRole, tieneRole } = require('../middlewares');
const { isRolValid, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/usuarios');
const router = Router();

/********************************************************************************
 * Rutas obtener usuarios - endPoint
 ********************************************************************************/
router.get('/', usuariosGet);

/********************************************************************************
 * Ruta para obtener  usuario por Id - endPoint
 ********************************************************************************/
// router.put('/:id', [
//     check('id', 'No es un ID válido').isMongoId(),
//     check('id').custom(existeUsuarioPorId),
//     check('rol').custom(isRolValid),
//     validarCampos,
// ], usuariosPut);
/********************************************************************************
 * Ruta para crear  usuario  - endPoint
 ********************************************************************************/
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('clave', 'La contraseña debe tener minimo 6 caracteres').isLength({ min: 6 }),
    check('email', 'El email no es válido').isEmail(),
     check('email').custom(emailExiste),
    // check('rol').custom(isRolValid),
    validarCampos
], usuariosPost);

/********************************************************************************
 * Ruta para eliminar usuario - endPoint
 ********************************************************************************/
// router.delete('/:id', [
//     validarJWT,
//     esAdminRole,
//     tieneRole('ADMIN_ROLE', 'VENTAS_ROLE'),
//     check('id', 'No es un ID válido').isMongoId(),
//     check('id').custom(existeUsuarioPorId),
//     validarCampos
// ], usuariosDelete);
/********************************************************************************
 * Exportacion de las rutas usuarios - endPoint
 ********************************************************************************/
module.exports = router;