const mongoose = require("mongoose");

const vetSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLenght: 8,
        maxLenght: 18
    },
    admin: {
        type: Boolean,
        default: false
    }
});

const Vet = mongoose.model('vets', vetSchema);

module.exports = Vet;