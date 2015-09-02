var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var settings = require('./app/settings');
var blog_feed = require('./app/blog_feed');

var app = express();

// Handlebars setup
require('./app/handlebars_setup');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// app other settings
app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.locals.recaptcha_public_key = settings.recaptcha.public_key;
    res.locals.blog_feed = blog_feed();
    next();
});

// connect routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/redirects'));
app.use('/screening', require('./routes/screening'));
app.use('/vendor', require('./routes/vendor'));
app.use('/insurance', require('./routes/insurance'));
app.use('/company', require('./routes/company'));
app.use('/jobs', require('./routes/jobs'));
app.use('/residential', require('./routes/residential'));
app.use('/legal', require('./routes/legal'));
app.use('/advertising', require('./routes/advertising'));
app.use('/appregister', require('./routes/appregister'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
