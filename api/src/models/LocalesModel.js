/*
    Esquema de para la colección Locales en la base de datos
    En los esquemas deben poner todos los atributos de la base de datos para poder manipularlos.
*/

const mongoose = require('mongoose');
const LocalesSchema = new mongoose.Schema({

    _id: { type: Number},
    nombre: { type: String},
    categoria: { type: String },
    descripcion: { type: String }
},{ collection: 'Locales' });

module.exports = mongoose.model('Locales', LocalesSchema)
