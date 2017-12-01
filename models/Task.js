const {mongoose, db} = require('../server-db');
const Task = mongoose.model('Task', {
    job: String,
    dateTime: String,
    completed: Boolean
});

module.exports = Task;