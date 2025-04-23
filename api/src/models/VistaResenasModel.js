const mongoose = require('mongoose');

// Esquema para la vista materializada con el total de reseñas por local
const VistaResenasSchema = new mongoose.Schema({
  _id: { type: Number, required: true },  // id_local
  total_resenas: { type: Number, required: true }, // Total de reseñas por local
  promedio_calificacion: { type: Number, required: true } // Promedio 
}, { collection: 'vista_resumen_resenas' });

module.exports = mongoose.model('VistaResenas', VistaResenasSchema);
