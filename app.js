var express = require( 'express' );

var swig = require('swig');
var app = express(); // creates an instance of an express application

var server = app.listen(3000, function(){
	console.log("server listening");
})

var people = [
	{name: "Kayla"},
	{name: 'Theresa'}
]

swig.setDefaults({ cache: false });
 
app.engine('html', swig.renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', function(req, res){
	swig.renderFile(__dirname + '/views/index.html', people, function (err, output) {
		if (err)  throw err;
		console.log(req.method + ' ' + req.route.path + " " + res.statusCode);
		res.render('index',{title:  'Hall of Fame', people: people});
	});
	//res.send(req.method + ' ' + req.route.path + " " + res.statusCode);
})

app.use('/special/', function(req, res, next){
	console.log( "you reached the special area.");
	res.send('hi');
	next();
})

// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };
// swig.renderFile('/views/index.html', locals, function (err, output) {
//     console.log(output);
// });