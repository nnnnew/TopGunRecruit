var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	// importing model
	User = require('./api/models/userModel'),
	Problems = require('./api/models/problemsModel')
	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TopgunDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/topGunRoute'); //importing route
routes(app); //register the route

app.listen(port)

console.log('server API start on: ' + port);