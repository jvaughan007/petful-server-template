const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
    // Return all the people currently in the queue.
    let person = People.get();
    return res.json(person).status(200);
});

router.get('/all', (req, res) => {
    let people = People.getAll();
    return res.json(people).status(200);
});

router.post('/', json, (req, res) => {
    // Add a new person to the queue.
    const { person } = req.body;
    People.enqueue(person);
    res.status(200).end;
});

module.exports = router;
