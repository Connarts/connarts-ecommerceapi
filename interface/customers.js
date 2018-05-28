var sequelize = require('../datalogic/datalogic');
var Sequelize = require('sequelize');
// This is also an instance of the database table, it represents the table customers in the database.
module.exports= customers = sequelize.define('Customers', {
    ref: {Type: Sequelize.INTEGER, primaryKey: true},
    fullname: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    phone: Sequelize.STRING
},
{
    timestamps: false,
    tableName: customers
});