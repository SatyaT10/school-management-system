const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('schoolmanagementsystemdb', 'root', 'Satya@143', {

  host: '127.0.0.1',
  dialect: 'mysql',

});


module.exports = sequelize;
