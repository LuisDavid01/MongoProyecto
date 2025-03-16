/*
    Esquema de para la colección Categorais en la base de datos
    En los esquemas deben poner todos los atributos de la base de datos para poder manipularlos.
*/

const mongoose = require('mongoose');
const CategoriasSchema = new mongoose.Schema({

    _id: { type: Number},
    Nombre: { type: String},
    Descripcion: { type: String },
    Ejemplos: [{ type: String }]
},{ collection: 'Categorias' });

module.exports = mongoose.model('Categorias', CategoriasSchema)
