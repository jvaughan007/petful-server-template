const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
    let pets = Pets.get(0);
    return res.json(pets).status(200);
});

router.delete('/', json, (req, res) => {
    // Remove a pet
    const { type } = req.body;
    console.log(req.body);
    console.log(type);
    Pets.dequeue(type);
    People.dequeue();
    return res.status(200).end();
});

module.exports = router;
