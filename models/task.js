const db = require('./db')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Task = mongoose.model('Task', new Schema({title: String, isDone: Boolean}, {collection: "tasks"}));

module.exports = Task
