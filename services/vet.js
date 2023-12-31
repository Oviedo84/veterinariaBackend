const Vet = require("../models/vet");
const { hash } = require("./security");

exports.findAll = async function(){
    const vets = await Vet.find().select("-password");
    return vets;
}

exports.findById = async function(id){
    const vets = await Vet.findOne({_id: id}, {password: 0});
    return vets;
}

exports.findByUsername = async function(username){
    const vet = await Vet.findOne({username: username});
    return vet;
}

exports.findByUsernameWithoutPassword = async function(username){
    const vet = await Vet.findOne({username: username}, {password: 0});
    return vet;
}

exports.createVet = async function(data){
    data.password = await hash(data.password);
    const vet = new Vet(data);
    return await vet.save();
}

exports.deleteById = async function(id){
    const vet = await Vet.deleteOne({_id: id});
    return vet;
}

exports.update = async function(id, data){
    if(data.password)
        data.password = await hash(data.password);
    const vet = await Vet.findOneAndUpdate({_id: id}, {
        $set: data
    }, {new: true, runValidators: true}).select("-password");
    return vet;
}