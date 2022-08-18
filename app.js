var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var testRouter = require('./routes/test');
const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb+srv://new_user:OJnOhgmkgfee5U25@cluster0.nl7pp.mongodb.net/testdb2?retryWrites=true&w=majority');
}

main().then(res => {
  console.log("Database connected!")
}).catch(err => console.log(err));


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/test', testRouter);


module.exports = app;
