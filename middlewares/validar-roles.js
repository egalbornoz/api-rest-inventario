/********************************************************************************
 *  Importaciones
 ********************************************************************************/
 const { response } = require("express");
 
 /********************************************************************************
  * Middleware valida si el usuario posee rol ADMIN_ROLE
  ********************************************************************************/
 const esAdminRole = (req, res = response, netx) => {
 
    //  if (!req.usuario) {
    //      res.status(500).json({
    //          msg: 'Se quiere verificar el role sin validar el token',
    //      })
    //  }
    //  const { rol, nombre } = req.usuario;
 
    //  if (rol !== 'ADMIN_ROLE') {
    //      return res.status(401).json({
    //          msg: `${nombre} no esta autorizado (no es Admin)`
    //      });
    //  }
    //  netx();
 }
 /********************************************************************************
  *  Middleware valida si el usuario posee rol válido
  ********************************************************************************/
 const tieneRole = (...roles) => {
 
     return (req, res = response, netx) => {
         if (!req.usuario) {
             res.status(500).json({
                 msg: 'Se quiere verificar el role sin validar el token',
             });
         }
 
         if (!roles.includes(req.usuario.rol))
             return res.status(401).json({
                 msg: `el servicio requiere uno de estos roles ${roles}`
             });
         netx();
     }
 }
 /********************************************************************************
  *  Exportaciones
  ********************************************************************************/
 module.exports = {
     esAdminRole,
     tieneRole,
 }