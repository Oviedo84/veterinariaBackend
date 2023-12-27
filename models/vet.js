const mongoose = require("mongoose");

const vetSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlenght: 8,
        required: true
    },
    admin: {
        type: Boolean,
        default: false,
        required: true
    }
});

const Vet = mongoose.model('vets', vetSchema);

module.exports = Vet;