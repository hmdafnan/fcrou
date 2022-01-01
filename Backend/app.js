var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const establishConnection = require('./utils/mongooseConnection');
var indexRouter = require('./routes/index');
var employeesRouter = require('./routes/employeesRouter');
var softwareRouter = require('./routes/softwareRouter');
var productRouter = require('./routes/productRouter');
var tallyPriceRouter = require('./routes/tallyPriceRouter');
var softwareRouter = require('./routes/softwareRouter');
var contactUsRouter = require('./routes/contactUsRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
establishConnection();

app.use('/', indexRouter);

app.use('/products', productRouter);
app.use('/softwares', softwareRouter);
app.use('/tallyPrices', tallyPriceRouter);
app.use('/softwares', softwareRouter);
app.use('/contactus', contactUsRouter);
app.use('/employees', employeesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
