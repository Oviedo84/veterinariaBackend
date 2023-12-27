const mongoose = require("mongoose");

const medhistSchema = new mongoose.Schema({
    patient_id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    consulting_reason: {
        type: String,
        required: true
    },
    feeding: {
        type: String,
        required: true
    },
    deworming: {
        type: String,
        required: true
    },
    vaccines: {
        type: String, 
        required: true
    },
    mental_state: {
        type: String,
        enum: ["alerta", "delirio", "coma", "deshorientado", "coma", "estupor"],
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    physical_condition: {
        type: String,
        required: true
    },
    mocous_membranes: {
        type: String,
        enum: ["rosa", "palido", "cianotica", "ictericas"],
        required: true
    },
    tiic: {
        type: String,
        required: true
    },
    deglutition: {
        type: String,
        required: true
    },
    cough: {
        type: String,
        required: true
    },
    nodules: {
        type: String,
        required: true
    },
    heart_rate: {
        type: String,
        required: true
    },
    pulse: {
        type: String,
        required: true
    },
    breathing_freq: {
        type: String,
        required: true
    },
    lung_fields: {
        type: String,
        required: true
    },
    percussion_span: {
        type: String,
        required: true
    },
    abdominal_palpation: {
        type: String,
        required: true
    },
    dehydration: {
        type: String,
        required: true
    },
    temperature: {
        type: String,
        required: true
    },
    problem_list: {
        type: String,
        required: true
    },
    master_list: {
        type: String,
        required: true
    },
    supp_tests: {
        type: String,
        required: true
    },
    presumptive_diagnosis: {
        type: String,
        required: true
    },
    treatment: {
        type: String,
        required: true
    },
    costs: {
        type: String,
        required: true
    }
});

const MedHist = mongoose.model("medical_histories", medhistSchema);

module.exports = MedHist;