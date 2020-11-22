const express = require('express');
const login = require('./login.js');
const register = require('./register.js');

const app = express.Router()


app.post('/register', register);
app.post('/login', login);


module.exports = app;


