const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
    // Return all pets currently up for adoption.
    let pets = Pets.get();
    return res.json(pets).status(200);
});

router.delete('/', json, (req, res) => {
    // Remove a pet from adoption.
    const { type } = req.body;
    Pets.dequeue(type);
    People.dequeue(type);
    return res.status(204).end;
});

module.exports = router;
