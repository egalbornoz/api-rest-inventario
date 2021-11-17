/********************************************************************************
 *  Importación JWT
 ********************************************************************************/
const jwt = require('jsonwebtoken');

/********************************************************************************
 *  Metodo para generar JWT
 ********************************************************************************/
const generarJWT = (id_usuario=0,nombre='') => {
    return new Promise((resolve, reject) => {

        const payload = {id_usuario,nombre};
        jwt.sign(payload, process.env.SECRET_JWT,{
            expiresIn: '24h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            } else {
                resolve(token);
            }
        })
    });

};
/********************************************************************************
 *  Exportaciones
 ********************************************************************************/
module.exports = {
    generarJWT,
}