const vetService = require("../services/vet");

exports.getVet = async function(req, res){
    try{
        const vet = await vetService.findAll();
        res.status(200).json(vet);
    }catch(e){
        res.status(404).json({
            message: e.message,
            messageDev: "No se han podido leer los veterinarios",
            error: "ERR_READ_USER",
            details: e
        });
        console.log(">>> ERROR!!!");
        console.log(e);
    }
}

exports.getVetId = async function(req, res){
    try{
        const vet = await vetService.findById(req.params.id);
        res.status(200).json(vet);
    }catch(e){
        res.status(404).json({
            message: e.message,
            messageDev: "No se han podido leer los veterinarios",
            error: "ERR_READ_USER",
            details: e
        });
        console.log(">>> ERROR!!!");
        console.log(e);
    }
}

exports.insertVet = async function(req, res){
    try{
        const vet = await vetService.createVet(req.body);
        res.status(201).json(vet);
    }catch(e){
        res.status(400).json({
            message: e.message,
            messageDev: "No se han podido crear el veterinario",
            error: "ERR_CREATE_USER",
            details: e
        });
        console.log(">>> ERROR!!!");
        console.log(e);
    }
}

exports.updateVet = async function (req, res){
    try{
        const vet = await vetService.update(req.params.id, req.body);
        res.status(201).json(vet);
    }catch(e){
        res.status(400).json({
            message: e.message,
            messageDev: "No se han podido actualizar el veterinario",
            error: "ERR_UPDATE_USER",
            details: e
        });
        console.log(">>> ERROR!!!");
        console.log(e);
    }
}

exports.deleteVet = async function(req, res){
    try{
        const vet = await vetService.deleteById(req.params.id);
        res.status(201).json(vet);
    }catch(e){
        res.status(400).json({
            message: e.message,
            messageDev: "No se han podido eliminar el veterinario",
            error: "ERR_DELETE_USER",
            details: e
        });
        console.log(">>> ERROR!!!");
        console.log(e);
    }
}

exports.getVetProfile = function(req, res){
    const { user } = req;
    res.status(200).json(user);
}