const express = require('express');
const cors = require('cors');
const app = express();
const { CLIENT_ORIGIN } = require('../../config.js');

app.use(
    cors({
        origin: CLIENT_ORIGIN || 'http://localhost:3000'
    })
);

app.use('/people', require('../people/people.router'));
app.use('/pets', require('../pets/pets.router'));

module.exports = app;
