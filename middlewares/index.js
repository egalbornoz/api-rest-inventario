//*******************************************************************************
// *  Importaciones  - Index para estructurar middlewares personalizados
//********************************************************************************/
const validaCampos = require('./validar-campos');
const validaJWT = require('./validar-jwt');
const validaRoles = require('./validar-roles.js');
const validaArchivo = require('./validar-archivo');

// ***********************************************************************************
// Exportaciones
// ***********************************************************************************
module.exports = {
    ...validaCampos,
    ...validaJWT,
    ...validaRoles,
    ...validaArchivo
}