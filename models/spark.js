const mongoose = require('mongoose')

const sparkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    spark: {
        type: String,
        required: true
    },
    sparkDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('spark', sparkSchema)