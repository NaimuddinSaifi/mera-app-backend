const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    title: String,
    description: String,
});

module.exports = mongoose.model('favs', schema);