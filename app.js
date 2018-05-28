var express  = require('express');
var bodyParser = require('body-parser');
var getclients = require('./bizlogic/getclients');
var brandByName =  require('./bizlogic/findabrand');
var getAllBrand = require('./bizlogic/numberofbrands');
var brandByLocation = require('./bizlogic/getbrandbylocation');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Method', 'GET,PUT,POST');
    res.header('Access-Control-Allow-Headers', 'contentType, Content-Type, Accept');
    next();
});

app.listen(8080, function(){
    console.log('Server Started on port 8080');
});


//This are the rest calls, that would be called from the backend code of the users, through javascript, php, angular
//react, etc.
app.get('/api/v1/getallclients', function(req, res){
    getclients.getAllClients(req, res);
});

app.get('/api/v1/getbrandbyname/:name?', function(req, res){
    brandByName.getABrandByName(req,res);
});
app.get('/api/v1/getnumberofbrands', function(req,res){
    getAllBrand.getNumberofBrands(req,res);
});
app.get('/api/v1/brandbylocation/:location?', function(req, res){
    brandByLocation.getByLocation(req,res);
});