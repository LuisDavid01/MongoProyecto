/*
    Esquema de para la colección Menus en la base de datos
    En los esquemas deben poner todos los atributos de la base de datos para poder manipularlos.
*/

const mongoose = require('mongoose');
const MenusSchema = new mongoose.Schema({

    _id: { type: Number},
    nombre_comida: { type: String},
    precio: { type: Number},
    tipo_comida: { type: String }
},{ collection: 'Menus' });

module.exports = mongoose.model('Menus', MenusSchema)