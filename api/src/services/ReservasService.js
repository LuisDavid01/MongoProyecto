const Reservas = require('../models/ReservasModel'); // Modelo de Reservas

class ReservasService {
  // Crear una nueva reseña
  async createReserva(data) {
    const Reserva = new Reservas(data);
    await Reserva.save();
    return Reserva;
  }

  // Obtener una reseña por su ID
  async getReserva(id) {
    if (id !== '0') {  // Si el ID no es 0, buscamos por ID
      return await Reservas.findById(id);
    }
    return await Reservas.find(); // Si el ID es 0, obtenemos todas las Reservas
  }

  // Actualizar una reseña existente
  async updateReserva(id, data) {
    return await Reservas.findByIdAndUpdate(id, data, { new: true });
  }

  // Eliminar una reseña por su ID
  async deleteReserva(id) {
    return await Reservas.findByIdAndDelete(id);
  }
}

module.exports = new ReservasService();
