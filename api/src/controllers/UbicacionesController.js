/*
    Controlador para Ubicaciones
    



*/


const UbicacionesService = require('../services/UbicacionesService');
 
class UbicacionesController {
 
 
  async createUbicaciones(req, res) {
    try {
      const Ubicaciones = await UbicacionesService.createUbicaciones(req.body);
      res.status(201).json(Ubicaciones);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async getUbicaciones(req, res) {
    try {
      const Ubicaciones = await UbicacionesService.getUbicaciones(req.params.id);
      if (!Ubicaciones) {
        return res.status(404).json({ error: 'Ubicaciones not found' });
      }
      res.json(Ubicaciones);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async updateUbicaciones(req, res) {
    try {
      const Ubicaciones = await UbicacionesService.updateUbicaciones(req.params.id, req.body);
      if (!Ubicaciones) {
        return res.status(404).json({ error: 'Ubicaciones not found' });
      }
      res.json(Ubicaciones);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async deleteUbicaciones(req, res) {
    try {
      const Ubicaciones = await UbicacionesService.deleteUbicaciones(req.params.id);
      if (!Ubicaciones) {
        return res.status(404).json({ error: 'Ubicaciones not found' });
      }
      res.json({ message: 'Ubicaciones deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
 
module.exports = new UbicacionesController();