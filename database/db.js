/********************************************************************************
 *  Importaciones  Configuración de la Base de Datos
 ********************************************************************************/
const { Sequelize } = require("sequelize");

/********************************************************************************
 *  Método para conectarse a la db
 ********************************************************************************/
//Configuración parametros de conexión

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000,
    },
    logging: false,
  }
);

//Función de conexión y consulta
const dbConnection = async () => {
  // Conectase a la base de datos
  // Force true: DROP TABLES
  // sequelize
  //   .sync({ force: true })
  //   .then(() => {
  //     console.log("Base de datos ONLINE");
  //   })
  //   .catch((error) => {
  //     console.log("Se ha producido un error", error);
  //   });
  try {
    await sequelize.sy;
    console.log("Base de datos ONLINE");
    //  return pool;
  } catch (error) {
    throw new Error(error);
  }
};
/********************************************************************************
 *  Exportacion método dbConnection
 ********************************************************************************/
module.exports = {
  dbConnection,
  sequelize,
};
