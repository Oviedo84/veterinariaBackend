const MedHist = require("../models/medicalhistory");

exports.getMedicalHistories = async function(patientId){
    const medHists = await MedHist.find({patient_id: patientId});
    return medHists;
}

exports.getMedicalHistory = async function(id){
    console.log(id);
    const medHist = await MedHist.findById(id);
    return medHist;
}

exports.getMedicalHistoryByDate = async function(date){
    const medHists = await MedHist.find({date: date});
    return medHists;
}

exports.createMedicalHistory = async function(data){
    const medHist = new MedHist(data);
    return await medHist.save();
}

exports.updateMedicalHistory = async function(id, data){
    const medHist = await MedHist.findOneAndUpdate({_id: id}, {
        $set: data
    }, {new: true, runValidators:true});
    return medHist;
}

exports.deleteMedicalHistory = async function(id){
    const medHist = await MedHist.deleteOne({_id: id});
    return medHist;
}