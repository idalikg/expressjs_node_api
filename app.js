// modules
const express = require('express');

// init app
const app = express();
const path = require('path');
const bodyParser =  require('body-parser');

// router controllers
const routerUsers = require('./routes/users');

// settings -> views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares -> routting
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.use('/', routerUsers);

// static and public files
// app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;