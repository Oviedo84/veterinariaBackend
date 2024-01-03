const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    vet_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    specie: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        enum: ['macho', 'hembra'],
        required: true
    },
    picture: {
        type: String
    },
    owner_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        minlenght: 10,
        maxlenght: 10,
        required: true
    }
});

const Patient = mongoose.model('patients', patientSchema);

module.exports = Patient;