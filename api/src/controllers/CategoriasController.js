/*
    Controlador para Categorias
    



*/


const CategoriasService = require('../services/CategoriasService');
 
class CategoriasController {
 
 
  async createCategorias(req, res) {
    try {
      const Categorias = await CategoriasService.createCategorias(req.body);
      res.status(201).json(Categorias);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async getCategorias(req, res) {
    try {
      const Categorias = await CategoriasService.getCategorias(req.params.id);
      if (!Categorias) {
        return res.status(404).json({ error: 'Categorias not found' });
      }
      res.json(Categorias);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async updateCategorias(req, res) {
    try {
      const Categorias = await CategoriasService.updateCategorias(req.params.id, req.body);
      if (!Categorias) {
        return res.status(404).json({ error: 'Categorias not found' });
      }
      res.json(Categorias);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async deleteCategorias(req, res) {
    try {
      const Categorias = await CategoriasService.deleteCategorias(req.params.id);
      if (!Categorias) {
        return res.status(404).json({ error: 'Categorias not found' });
      }
      res.json({ message: 'Categorias deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
 
module.exports = new CategoriasController();