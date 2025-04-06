/*
    Controlador para Horarios
    



*/


const HorariosService = require('../services/HorariosService');
 
class HorariosController {
 
 
  async createHorarios(req, res) {
    try {
      const Horarios = await HorariosService.createHorarios(req.body);
      res.status(201).json(Horarios);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async getHorarios(req, res) {
    try {
      const Horarios = await HorariosService.getHorarios(req.params.id);
      if (!Horarios) {
        return res.status(404).json({ error: 'Horarios not found' });
      }
      res.json(Horarios);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async updateHorarios(req, res) {
    try {
      const Horarios = await HorariosService.updateHorarios(req.params.id, req.body);
      if (!Horarios) {
        return res.status(404).json({ error: 'Horarios not found' });
      }
      res.json(Horarios);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async deleteHorarios(req, res) {
    try {
      const Horarios = await HorariosService.deleteHorarios(req.params.id);
      if (!Horarios) {
        return res.status(404).json({ error: 'Horarios not found' });
      }
      res.json({ message: 'Horarios deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
 
module.exports = new HorariosController();