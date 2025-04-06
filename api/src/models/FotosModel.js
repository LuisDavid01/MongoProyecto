/*
    Esquema de para la colección Fotos en la base de datos
    En los esquemas deben poner todos los atributos de la base de datos para poder manipularlos.
*/

const mongoose = require('mongoose');
const FotosSchema = new mongoose.Schema({

    _id: { type: Number},
    id_local: { type: Number},
    ruta_imagen: { type: String}
},{ collection: 'Fotos' });

module.exports = mongoose.model('Fotos', FotosSchema)