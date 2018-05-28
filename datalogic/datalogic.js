var Sequelize = require('sequelize');

//This is the sequelize connection to the database.
module.exports = sequelize = new Sequelize('connarts_connarts', 'root', '', 
    {
    host: '127.0.0.1',
    dialect: 'mysql',
    options: {
        encrypt: true
    }
});