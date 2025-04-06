/*
    Esquema de para la colección EventosEspeciales en la base de datos
    En los esquemas deben poner todos los atributos de la base de datos para poder manipularlos.
*/

const mongoose = require('mongoose');
const EventosEspecialesSchema = new mongoose.Schema({

    _id: { type: Number},
    id_local: { type: Number},
    nombre_evento: { type: String},
    descripcion: { type: String },
    fecha: { type: String },
    hora: { type: String }
},{ collection: 'EventosEspeciales' });

module.exports = mongoose.model('EventosEspeciales', EventosEspecialesSchema)