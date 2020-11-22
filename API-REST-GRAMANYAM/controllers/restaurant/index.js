const express = require('express');
const create = require('../../controllers/restaurant/create');
const edit = require('../../controllers/restaurant/edit');
const list = require('../../controllers/restaurant/list');
const listOne = require('../../controllers/restaurant/listOne');
const auth = require('../../middleware/auth.js')

const app = express.Router();

app.post('/restaurantes', create);
app.get('/restaurantes', list);
app.get('/restaurantes/:id', listOne);
app.post('/restaurantes/:id', auth,  edit); 

module.exports = app;