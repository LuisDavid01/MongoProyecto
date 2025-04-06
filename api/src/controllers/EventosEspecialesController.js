/*
    Controlador para EventosEspeciales
    



*/


const EventosEspecialesService = require('../services/EventosEspecialesService');
 
class EventosEspecialesController {
 
 
  async createEventosEspeciales(req, res) {
    try {
      const EventosEspeciales = await EventosEspecialesService.createEventosEspeciales(req.body);
      res.status(201).json(EventosEspeciales);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async getEventosEspeciales(req, res) {
    try {
      const EventosEspeciales = await EventosEspecialesService.getEventosEspeciales(req.params.id);
      if (!EventosEspeciales) {
        return res.status(404).json({ error: 'EventosEspeciales not found' });
      }
      res.json(EventosEspeciales);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async updateEventosEspeciales(req, res) {
    try {
      const EventosEspeciales = await EventosEspecialesService.updateEventosEspeciales(req.params.id, req.body);
      if (!EventosEspeciales) {
        return res.status(404).json({ error: 'EventosEspeciales not found' });
      }
      res.json(EventosEspeciales);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async deleteEventosEspeciales(req, res) {
    try {
      const EventosEspeciales = await EventosEspecialesService.deleteEventosEspeciales(req.params.id);
      if (!EventosEspeciales) {
        return res.status(404).json({ error: 'EventosEspeciales not found' });
      }
      res.json({ message: 'EventosEspeciales deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
 
module.exports = new EventosEspecialesController();