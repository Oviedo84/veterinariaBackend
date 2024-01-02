const { findByUsername } = require("../services/vet");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async function(req, res){
    const { username, password } = req.body;
    const user = await findByUsername(username);

    if(!user || !bcrypt.compareSync(password, user.password)){
        return res.status(400).json({
            message: "Usuario o contraseña inválidos",
            messageDev: "No se encontró el usuario en la base de datos",
            code: "ERR_AUTH",
        });
    }

    const token = jwt.sign({id: user._id, username: user.username}, process.env.JWT_SECRET);
    res.status(200).json({
        _id: user._id,
        username: user.username,
        admin: user.admin,
        token: token
    });
}