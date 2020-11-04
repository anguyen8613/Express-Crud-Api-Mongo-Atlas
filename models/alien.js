const mongoose = require('mongoose');

const alienSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Alien', alienSchema);