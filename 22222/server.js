var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')//for serve connection
var chalk = require('chalk');
var mongoose = require('mongoose');
var logger = require('winston');
var jwt = require("jsonwebtoken");
var bcrypt = require('bcrypt');//for image show
var multer = require('multer'); // for the file upload

var app = express()

app.use(cors());

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});


var http = require('http').Server(app)
var bodyPaser = bodyParser.json()
const fs = require('fs');
var port = process.env.PORT || 8080;
var activeData = require(__dirname + '/server/Utils/database.js');

//connect to the database


// Database connection: (Change this to what your database URL is!)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/chatFactory',{ useNewUrlParser: true });
var db = mongoose.connection;
	require(__dirname + '/server/Utils/database.js')(chalk, db);


	// Models - database Schemas
	var models = {
		mongoose: mongoose,
		user: require(__dirname + '/server/models/users')(mongoose,bcrypt),
    group: require(__dirname + '/server/models/groups')(mongoose,bcrypt),
    channel: require(__dirname + '/server/models/channels')(mongoose,bcrypt),
    message: require(__dirname + '/server/models/messages')(mongoose,bcrypt)
	};
	//Controllers - database functions
	var controller = {
		user: require(__dirname + '/server/controllers/users')(models, logger,jwt,bcrypt,multer),
    group: require(__dirname + '/server/controllers/groups')(models, logger,jwt,bcrypt),
    channel: require(__dirname + '/server/controllers/channels')(models, logger,jwt,bcrypt),
    message: require(__dirname + '/server/controllers/messages')(models, logger,jwt,bcrypt)
	};


app.use(express.static(__dirname + '/dist/Chat-Factory'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyPaser);


var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Listening on %s", port)
})
//connection to the server
var io = require('socket.io').listen(server);

require(__dirname + '/server/Utils/sockets')(models, controller, app, io)
require(__dirname + '/server/Utils/routes')(models, controller, app, express, io)

setupData();

// Adding a default user, this will run each time the server starts up, but wont add duplicates
async function setupData(){
    return await controller.user.createUser({_email:"super@gmail.com",_username:"super",_password:"Super",_role: "Super",_profileImage:"/server/Utils/Download",_inChannel:[],_inGroup:[]})
}

module.exports = server;
