const mongoose = require('mongoose');

const ResenasSchema = new mongoose.Schema({
  _id: { type: Number, required: true },  
  id_usuario: { type: Number, required: true },  
  id_local: { type: Number, required: true },  
  calificacion: { type: Number, required: true },  
  comentario: { type: String, required: true } 
}, { collection: 'Resenas' });

module.exports = mongoose.model('Resenas', ResenasSchema);
