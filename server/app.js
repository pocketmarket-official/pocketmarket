var createError = require('http-errors');
//var express = require('express');
import express from "express";

var path = require('path');
var cookieParser = require('cookie-parser');
//var logger = require('morgan');
import logger from "morgan";

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var festivalRouter = require('./routes/festival');
var storeRouter = require('./routes/store');
var cors = require('cors');
var app = express();


// CORS 설정
app.use(cors());



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/festival', festivalRouter);
app.use('/store', storeRouter);
/*
app.get('/image/:path/:id', (req, res) => {
    const filename = req.params.id;
    const path = req.params.path;
    console.log(filename + path);
    const filepath = __dirname + "/image/" + path + filename;
    res.download(filepath);
})
*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



module.exports = app;
