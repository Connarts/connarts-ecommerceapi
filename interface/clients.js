var sequelize = require('../datalogic/datalogic');
var Sequelize = require('sequelize');
//Interfaces are the instances or model of a database. this is the table client
//as an instance.
module.exports = clients = sequelize.define('clients', {
    brandname: Sequelize.STRING,
    email: Sequelize.STRING,
    logo: Sequelize.STRING,
    password:  Sequelize.STRING,
    location:  Sequelize.STRING
}, {
    timestamps: false,
    tableName: 'clients'
});