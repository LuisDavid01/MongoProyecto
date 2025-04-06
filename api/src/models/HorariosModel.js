/*
    Esquema de para la colección Menus en la base de datos
    En los esquemas deben poner todos los atributos de la base de datos para poder manipularlos.
*/

const mongoose = require('mongoose');
const HorariosSchema = new mongoose.Schema({

    _id: { type: Number},
    nombre_restaurante: { type: String},
    fecha: { type: Number},
    hora_apertura: { type: String },
    hora_cierre: { type: String },
    cierre_por_ocasion_especial: { type: Boolean}
},{ collection: 'Horarios' });

module.exports = mongoose.model('Horarios', HorariosSchema)