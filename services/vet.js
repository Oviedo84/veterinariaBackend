const Vet = require("../models/vet");

exports.findAll = async function(){
    const vets = await Vet.find();
    return vets;
}

exports.findById = async function(id){
    const vets = await Vet.find({_id: id});
    return vets;
}

exports.createVet = async function(data){
    const vet = new Vet(data);
    return await vet.save();
}

exports.deleteById = async function(id){
    const vet = await Vet.deleteOne({_id: id});
    return vet;
}

exports.update = async function(id, data){
    const vet = await Vet.findOneAndUpdate({_id: id}, {
        $set: {
            data
        }
    }, {new: true, runValidators: true});
    return vet;
}