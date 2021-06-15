const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
});

module.exports = mongoose.model('user', userSchema);