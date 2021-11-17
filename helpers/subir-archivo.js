/***************************************************************************
 *  Importaciones
 ****************************************************************************/
const path = require('path');
const { v4: uuidv4 } = require('uuid');

//Exyensiones válidas por defecto, si no se envía como parametrp
const validas = ['jpg', 'png', 'jpeg', 'gif'];

/***************************************************************************
 *  Función para subir archivos
 ****************************************************************************/
const subirArchivo = (files, extensionesValidas = validas, carpeta = '') => {

    return new Promise((resolve, reject) => {
       
        const { archivo } = files;

        //Se extrae la extensión de archivo 
        const nombreCortado = archivo.name.split('.');
        const extension = nombreCortado[nombreCortado.length - 1];

        // Se validan las extensiones permitidas
        if (!extensionesValidas.includes(extension)) {
            return reject(`La extensión ${extension} no es válida - ${extensionesValidas}`);
        }

        const nombreTemp = uuidv4() + '.' + extension;
        const uploadPath = path.join(__dirname, '../uploads/', carpeta, nombreTemp);
        archivo.mv(uploadPath, (err) => {
            if (err) {
                reject(err);
            }
            resolve(nombreTemp);
        });

    });


}
/***************************************************************************
 *  Exportaciones
 ****************************************************************************/

module.exports = {
    subirArchivo,
}