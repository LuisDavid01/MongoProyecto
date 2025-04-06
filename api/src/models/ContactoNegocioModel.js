/*
    Esquema de para la colección ContactoNegocio en la base de datos
    En los esquemas deben poner todos los atributos de la base de datos para poder manipularlos.
*/

const mongoose = require('mongoose');
const ContactoNegocioSchema = new mongoose.Schema({

    _id: { type: Number},
    id_local: { type: Number},
    email_negocio: { type: String},
    telefono_negocio: { type: String },
    disponibilidad: { type: String }
},{ collection: 'ContactoNegocio' });

module.exports = mongoose.model('ContactoNegocio', ContactoNegocioSchema)