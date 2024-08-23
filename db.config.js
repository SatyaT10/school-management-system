const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('railway', 'root', 'SYQPyFLaEtQCtghCVuDmTDyFXOiPZrcz', {

  host: 'mysql.railway.internal',
  dialect: 'mysql',
   port: 3306,
});


module.exports = sequelize;
