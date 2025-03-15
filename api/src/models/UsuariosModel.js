const mongoose = require('mongoose');
const UsuariosSchema = new mongoose.Schema({

    _id: { type: Number},
    nombre: { type: String},
    correo: { type: String },
    contraseña: { type: String },
    foto_de_perfil: { type: String }
},{ collection: 'Usuarios' });

module.exports = mongoose.model('Usuario', UsuariosSchema)