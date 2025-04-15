const ReservasService = require('../services/ReservasService');

class ReservasController {
  async createReserva(req, res) {
    try {
      const Reserva = await ReservasService.createReserva(req.body);
      res.status(201).json(Reserva);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getReserva(req, res) {
    try {
      const Reserva = await ReservasService.getReserva(req.params.id);
      if (!Reserva) {
        return res.status(404).json({ error: 'Reserva not found' });
      }
      res.json(Reserva);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateReserva(req, res) {
    try {
      const Reserva = await ReservasService.updateReserva(req.params.id, req.body);
      if (!Reserva) {
        return res.status(404).json({ error: 'Reserva not found' });
      }
      res.json(Reserva);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteReserva(req, res) {
    try {
      const Reserva = await ReservasService.deleteReserva(req.params.id);
      if (!Reserva) {
        return res.status(404).json({ error: 'Reserva not found' });
      }
      res.json({ message: 'Reserva deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new ReservasController();
