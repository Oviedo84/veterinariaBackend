const Patient = require("../models/patient");

exports.getPatients = async function(vetId){
    const patients = await Patient.find({vet_id: vetId});
    return patients;
}

exports.getPatient = async function(vetId, id){
    const patient = await Patient.find({_id: id, vet_id: vetId});
    return patient;
}

exports.getPatientsByOwner = async function(vetId, phone){
    const patients = await Patient.find({vet_id: vetId, phone_number: phone});
    return patients;
}

exports.createPatient = async function(data){
    const patient = new Patient(data);
    return await patient.save();
}

exports.updatePatient = async function(id, data){
    const patient = await Patient.findOneAndUpdate({_id: id}, {
        $set: data
    }, {new: true, runValidators: true});
    return patient;
}

exports.deletePatient = async function(id){
    const patient = await Patient.deleteOne({_id: id});
    return patient;
}