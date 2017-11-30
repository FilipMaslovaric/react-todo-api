const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let tasks = [
    { key: 1, job: 'Do the washing', dateTime: "12/03/2017, 2:45:00 PM", completed: false },
    { key: 2, job: 'Walk the dog', dateTime: "11/29/2017, 6:30:00 AM", completed: true }
]

app.get('/api/tasks', (req, res) => {
    console.log('Request received!');
    res.send(tasks);
});

let currentKey = 2;
const genKey = () => ++currentKey;

app.post('/api/tasks', (req, res) => {
    console.log('Post Request successful!');
    let { key, job } = req.body;
    let dateTime = new Date();
    tasks.unshift({ key: genKey(), job: job, dateTime: dateTime, completed: false });
    res.send(tasks[0]);
});

app.listen(3001, () => console.log('Listening on port 3001!'));