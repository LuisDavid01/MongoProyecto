/*
    Esquema de para la colección Contactos en la base de datos
    En los esquemas deben poner todos los atributos de la base de datos para poder manipularlos.
*/

const mongoose = require('mongoose');
const ContactosSchema = new mongoose.Schema({

    _id: { type: Number},
    telefono: { type: String},
    correo_electronico: { type: String},
    redes_sociales: 
        {
            facebook: { type: String},
            twitter: { type: String},
            instagram: { type: String},
        }
    
},{ collection: 'Contactos' });

module.exports = mongoose.model('Contactos', ContactosSchema)