var express = require( 'express' );

var swig = require('swig');
var app = express(); // creates an instance of an express application
var routes = require('./routes');
app.use('/', routes);
var server = app.listen(3000, function(){
	console.log('server listening');
})
app.use(express.static('public'));

// var people = [
// 	{name: "Kayla"},
// 	{name: 'Theresa'}
// ]

swig.setDefaults({ cache: false });
 
showForm: true;
 //WHAT IS GOING ON HERE
app.engine('html', swig.renderFile); // map the EJS template engine to “.html” files:
app.set('views', __dirname + '/views'); // point res.render to the proper directory
app.set('view engine', 'html'); // have res.render work with html files
//app.use("/public", express.static(__dirname + '/public'));
app.get('/', function(req, res){
	swig.renderFile(__dirname + '/views/index.html?showForm=true', data, function (err, output) {
		if (err)  throw err;
		console.log(req.method + ' ' + req.route.path + " " + res.statusCode);
		res.render('index',{tweets: tweets});
	});
})
// app.get('/elephants/style.css', function(req, res){
// 	res.sendfile(__dirname + '/public/stylesheets/style.css')
// })
//TO HERE

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
//     console.log(output); //when we renderfiles, we go to the source it asks for, takes thee variables, and run a function
// });