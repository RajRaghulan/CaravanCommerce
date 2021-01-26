const functions = require("firebase-functions");
const express = require("express");
const engines = require("consolidate");

// Initialize Express and Views Template Engine
const app = express();
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

// Rendor the main Page
app.get('/', (request, response) => {
    response.render('index', {});
});

// Rendor the User Login Page
app.get('/loginUser', (request, response) => {
    response.render('userlogin', {});
});

// Rendor the Business Login Page
app.get('/loginBusinessUser', (request, response) => {
    response.render('businesslogin', {});
});

// Authenticate User
app.get('/authenticateUser', (request, response) => {
    // Authenticate based on User Credentials
    response.render('user', {user});
});

// Authenticate Small Business User
app.get('/authenticateBusiness', (request, response) => {
    // Authenticate Business based on User Credentials

    response.render('business', {user});
});

// Add New Product
app.get('/addProduct', (request, response) => {
    // Add New Product to the Database
    
    response.send("Hello World!!!");
});

exports.app = functions.https.onRequest(app);
