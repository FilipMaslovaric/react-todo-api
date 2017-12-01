const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Use body parser to parse JSON objects
app.use(bodyParser.json());

// Access the Task model

let Task = require('./models/Task');

app.get('/api/tasks', (req, res) => {
    console.log('Request received!');
    Task.find()
        .then((tasks) => res.send(tasks));
});


app.post('/api/tasks', (req, res) => {
    console.log('Post request received');
    let { key, job } = req.body;
    let dateTime = new Date();
    Task.create({ job: job, dateTime: dateTime, completed: false })
        .then((task) => res.send(task));
    console.log('New Task created');
});

app.listen(3001, () => console.log('Listening on port 3001!'));