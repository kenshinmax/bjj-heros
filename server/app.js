var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require("morgan"); 

var index = require('./routes/index');
var users = require('./routes/users');
var items = require('./routes/items');
var heroes = require('./routes/heroes');
var locations = require('./routes/locations');

var app = express();
var cors = require('cors');
app.use(morgan("common"));

app.use(cors({  
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.text({ type: 'text/html' }))
app.use(bodyParser.text({ type: 'text/xml' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.json({ type: 'application/*+json' }))


app.use('/', index);
app.use('/items', items);
app.use('heroes', heroes);
app.use('/locations', locations);
//app.use('/items/*', express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/heros');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Heros DB connected!');
})

module.exports = app;