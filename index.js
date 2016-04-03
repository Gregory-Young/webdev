// bring in the Express module
var express = require('express');
// create a new instance of express
var app = express();
var path =require('path');


// ** Routes ** //
// routes will go here
//app.use below are for images
app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/main.html'))
});

app.use(express.static('public'));

app.get('/about', function(req, res){
	res.sendFile(path.join(__dirname + '/about.html'))
});

app.use(express.static('public'));

app.get('/blog', function(req, res){
	res.sendFile(path.join(__dirname + '/blog.html'))
});

app.use(express.static('public'));

app.get('/portfolio', function(req, res){
	res.sendFile(path.join(__dirname + '/portfolio.html'))
});
// Start the server. Listen for traffic on port 3000
app.listen(3000, function () {
    // Print out a message to the console
    console.log('Listening on port 3000!');
});
