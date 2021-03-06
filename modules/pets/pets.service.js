const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
    cats: new Queue(),
    dogs: new Queue()
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
    get() {
    // Return the pets next in line
        let cat = pets.cats.show();
        let dog = pets.dogs.show();
        return { dog, cat };
    },

    dequeue(type) {
    // Removes selected pet from queue
        if (type === 'cat') {
            return pets.cats.dequeue();
        }
        if (type === 'dog') {
            return pets.dogs.dequeue();
        }
    }
};
