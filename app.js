var express = require( 'express' );
var app = express(); // creates an instance of an express application

var server = app.listen(3000, function(){
	console.log("server listening");
})

app.get('/is-anybody-in-there', function(req, res){
	res.send(req.method + ' ' + req.route.path + " " + res.statusCode);
})

app.use('/special/', function(req, res, next){
	console.log( "you reached the special area.");
	res.send('hi');
	next();
})