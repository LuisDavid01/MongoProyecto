const mongoose = require('mongoose');
const VistaResena = require('../models/VistaResenasModel');
const Resena = require('../models/ResenasModel');

class VistaResenasService {

  async getVistaResenas() {
    try {
      const resenas = await VistaResena.find();
      return resenas;
    } catch (err) {
      throw new Error('Error al obtener la vista materializada: ' + err.message);
    }
  }

  // Actualizar la vista materializada de reseñas
async actualizarVistaMaterializada() {
  const pipeline = [
    {
      $group: {
        _id: "$id_local",  // Agrupar por id_local
        total_resenas: { $sum: 1 },  // Contar el número total de reseñas
        promedio_calificacion: { $avg: "$calificacion" }  // Calcular el promedio de calificación
      }
    },
    {
      $out: "vista_resumen_resenas"  // Guardar los resultados en la colección vista_resumen_resenas
    }
  ];

  try {
    // Ejecuta el pipeline de agregación para actualizar la vista
    await Resena.aggregate(pipeline);
    console.log("Vista materializada actualizada.");
  } catch (err) {
    throw new Error('Error al actualizar la vista materializada: ' + err.message);
  }
}

}

module.exports = new VistaResenasService();
