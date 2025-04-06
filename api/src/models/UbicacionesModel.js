/*
    Esquema de para la colección Ubicaciones en la base de datos
    En los esquemas deben poner todos los atributos de la base de datos para poder manipularlos.
*/

const mongoose = require('mongoose');
const UbicacionesSchema = new mongoose.Schema({

    _id: { type: Number},
    id_local: { type: Number},
    direccion: { type: String},
    provincia: { type: String }
},{ collection: 'Ubicaciones' });

module.exports = mongoose.model('Ubicaciones', UbicacionesSchema)