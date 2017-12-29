// modules
const express = require('express');
const morgan = require('morgan');

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

app.use(morgan('dev'));

app.use('/', routerUsers);

// Middlewares Error Handling
    // Creating a new error and pass to the next middleware
app.use((req, res, next) => {
    const error = new Error('Not found!!! :( ');
    next(error);
}); 

    // Function error handling
app.use((error, req, res, next) => {
    res.status(404).json({
        "Error": error.message 
    });
});

// static and public files
// app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;