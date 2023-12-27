const MedHist = require("../services/medicalhistory");

exports.getMedicalHistory = async function(req, res){
    try{
        const medHist = await MedHist.getMedicalHistories(req.params.patientid);
        res.status(200).json(medHist)
    }catch(e){
        res.status(404).json({
            message: e.message,
            messageDev: "No se han podido leer las historias medicas",
            error: "ERR_READ_MEDICAL_HISTORY",
            details: e
        });
        console.log(">>> ERROR!!!");
        console.log(e);
    }
}

exports.getMedicalHistoryById = async function(req, res){
    try{
        const medHist = await MedHist.getMedicalHistory(req.params.id);
        res.status(200).json(medHist)
    }catch(e){
        res.status(404).json({
            message: e.message,
            messageDev: "No se han podido leer las historias medicas",
            error: "ERR_READ_MEDICAL_HISTORY",
            details: e
        });
        console.log(">>> ERROR!!!");
        console.log(e);
    }
}

exports.getMedicalHistoryByDate = async function(req, res){
    try{
        const medHist = await MedHist.getMedicalHistoryByDate(req.body.date);
        res.status(200).json(medHist)
    }catch(e){
        res.status(404).json({
            message: e.message,
            messageDev: "No se han podido leer las historias medicas",
            error: "ERR_READ_MEDICAL_HISTORY",
            details: e
        });
        console.log(">>> ERROR!!!");
        console.log(e);
    }
}

exports.insertMedicalHistory = async function(req, res){
    try{
        const medHist = await MedHist.createMedicalHistory(req.body);
        res.status(201).json(medHist);
    }catch(e){
        res.status(400).json({
            message: e.message,
            messageDev: "No se han podido crear la historia medica",
            error: "ERR_CREATE_MEDICAL_HISTORY",
            details: e
        });
        console.log(">>> ERROR!!!");
        console.log(e);
    }
}

exports.updateMedicalHistory = async function(req, res){
    try{
        const medHist = await MedHist.updateMedicalHistory(req.params.id, req.body);
        res.status(201).json(medHist);
    }catch(e){
        res.status(400).json({
            message: e.message,
            messageDev: "No se han podido actualizar la historia medica",
            error: "ERR_CREATE_MEDICAL_HISTORY",
            details: e
        });
        console.log(">>> ERROR!!!");
        console.log(e);
    }
}

exports.deleteMedicalHistory = async function(req, res){
    try{
        const medHist = await MedHist.deleteMedicalHistory(req.params.id);
        res.status(201).json(medHist);
    }catch(e){
        res.status(400).json({
            message: e.message,
            messageDev: "No se han podido eliminar la historia medica",
            error: "ERR_CREATE_MEDICAL_HISTORY",
            details: e
        });
        console.log(">>> ERROR!!!");
        console.log(e);
    }
}