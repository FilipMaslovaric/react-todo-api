const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/todo-list-db', {
    useMongoClient: true
});

mongoose.Promise = Promise;

module.exports = { mongoose, db };