const mongoose = require('mongoose')

const inv = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})
module.exports = mongoose.model('inventry', inv)