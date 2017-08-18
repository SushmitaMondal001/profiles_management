var express = require('express');
var path = require('path');
var app = new express();
var http = require('http');
var bodyParser = require('body-parser');
//var methodOverride = require('method-override');
//var methodOverride = require('method-override');

//configuration
var db = require('./config/db');

app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(methodOverride('X-HTTP-Method-Override'));
//app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(path.join(__dirname,'public')));

require('./app/routes')(app);

app.listen(3009, function() {

	console.log('Started listening on port 3009.....!!!!! new')
})

exports = module.exports = app;        
