const Resenas = require('../models/ResenasModel'); // Modelo de Reseñas

class ResenasService {
  // Crear una nueva reseña
  async createResena(data) {
    const resena = new Resenas(data);
    await resena.save();
    return resena;
  }

  // Obtener una reseña por su ID
  async getResena(id) {
    if (id !== '0') {  // Si el ID no es 0, buscamos por ID
      return await Resenas.findById(id);
    }
    return await Resenas.find(); // Si el ID es 0, obtenemos todas las reseñas
  }

  // Actualizar una reseña existente
  async updateResena(id, data) {
    return await Resenas.findByIdAndUpdate(id, data, { new: true });
  }

  // Eliminar una reseña por su ID
  async deleteResena(id) {
    return await Resenas.findByIdAndDelete(id);
  }
}

module.exports = new ResenasService();
