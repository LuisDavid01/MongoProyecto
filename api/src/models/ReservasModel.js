const mongoose = require('mongoose');

const ReservasSchema = new mongoose.Schema({
  _id: { type: Number, required: true },  
  id_usuario: { type: Number, required: true },  
  id_local: { type: Number, required: true },  
  fecha: { type: String, required: true },  
  hora: { type: String, required: true },
  numero_personas: { type: Number, required: true },
  descripcion: { type: String, required: true }
}, { collection: 'Reservas' });

module.exports = mongoose.model('Reservas', ReservasSchema);
