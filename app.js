var express = require('express');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose')
var firstData = require('./routes/first-data'); //routes are defined here
var app = express(); //Create the Express app

//connect to our database
//Ideally you will obtain DB details from a config file
/*var dbName = 'movieDB';
var connectionString = 'mongodb://localhost:27017' + dbName;

mongoose.connect(connectionString);*/


//configure body-parser
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());

app.use('/api', firstData);

module.exports = app;