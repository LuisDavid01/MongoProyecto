/*
    Controlador para Fotos
    



*/


const FotosService = require('../services/FotosService');
 
class FotosController {
 
 
  async createFotos(req, res) {
    try {
      const Fotos = await FotosService.createFotos(req.body);
      res.status(201).json(Fotos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async getFotos(req, res) {
    try {
      const Fotos = await FotosService.getFotos(req.params.id);
      if (!Fotos) {
        return res.status(404).json({ error: 'Fotos not found' });
      }
      res.json(Fotos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async updateFotos(req, res) {
    try {
      const Fotos = await FotosService.updateFotos(req.params.id, req.body);
      if (!Fotos) {
        return res.status(404).json({ error: 'Fotos not found' });
      }
      res.json(Fotos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async deleteFotos(req, res) {
    try {
      const Fotos = await FotosService.deleteFotos(req.params.id);
      if (!Fotos) {
        return res.status(404).json({ error: 'Fotos not found' });
      }
      res.json({ message: 'Fotos deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
 
module.exports = new FotosController();