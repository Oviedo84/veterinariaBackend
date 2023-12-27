const patientService = require("../services/patient");

exports.getPatients = async function(req, res){
    try{
        const patient = await patientService.getPatients(req.params.vetid)
        res.status(200).json(patient);
    }catch(e){
        res.status(404).json({
            message: e.message,
            messageDev: "No se han podido leer los pacientes",
            error: "ERR_READ_PATIENT",
            details: e
        });
        console.log(">>> ERROR!!!");
        console.log(e);
    }
}

exports.getPatient = async function(req, res){
    try{
        const patient = await patientService.getPatient(req.body.vetid, req.body.id);
        res.status(200).json(patient);
    }catch(e){
        res.status(404).json({
            message: e.message,
            messageDev: "No se han podido leer los pacientes",
            error: "ERR_READ_PATIENT",
            details: e
        });
        console.log(">>> ERROR!!!");
        console.log(e);
    }
}

exports.getPatientsByOwner = async function(req, res){
    try{
        const patient = await patientService.getPatientsByOwner(req.body.vetid, req.body.phone);
        res.status(200).json(patient);
    }catch(e){
        res.status(404).json({
            message: e.message,
            messageDev: "No se han podido leer los pacientes",
            error: "ERR_READ_PATIENT",
            details: e
        });
        console.log(">>> ERROR!!!");
        console.log(e);
    }
}

exports.insertPatient = async function(req, res){
    try{
        const patient = await patientService.createPatient(req.body);
        res.status(201).json(patient);
    }catch(e){
        res.status(400).json({
            message: e.message,
            messageDev: "No se han podido crear el paciente",
            error: "ERR_CREATE_PATIENT",
            details: e
        });
        console.log(">>> ERROR!!!");
        console.log(e);
    }
}

exports.updatePatient = async function(req, res){
    try{
        const patient = await patientService.updatePatient(req.params.id, req.body);
        res.status(201).json(patient);
    }catch(e){
        res.status(400).json({
            message: e.message,
            messageDev: "No se han podido actualizar el paciente",
            error: "ERR_UPDATE_PATIENT",
            details: e
        });
        console.log(">>> ERROR!!!");
        console.log(e);
    }
}

exports.deletePatient = async function(req, res){
    try{
        const patient = await patientService.deletePatient(req.params.id);
        res.status(201).json(patient);
    }catch(e){
        res.status(400).json({
            message: e.message,
            messageDev: "No se han podido eliminar el paciente",
            error: "ERR_DELETE_PATIENT",
            details: e
        });
        console.log(">>> ERROR!!!");
        console.log(e);       
    }
}