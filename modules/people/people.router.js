const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
    const person = People.get();
    return res.json(person).status(200);
});

router.get('/people_queue', (req, res) => {
    let people = People.getAll();
    return res.json(people).status(200);
});

router.post('/', json, (req, res) => {
    const { person } = req.body;
    console.log(req);
    console.log(person);
    People.enqueue(person);
    res.status(201).json(People.getAll());
});

module.exports = router;
