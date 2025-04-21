/*
    Controlador para Locales
*/


const LocalesService = require('../services/LocalesService');
const Locales = require('../models/LocalesModel');
 
class LocalesController {
 
 
  async createLocales(req, res) {
    try {
      const Locales = await LocalesService.createLocales(req.body);
      res.status(201).json(Locales);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async getLocales(req, res) {
    try {
      const Locales = await LocalesService.getLocales(req.params.id);
      if (!Locales) {
        return res.status(404).json({ error: 'Locales not found' });
      }
      res.json(Locales);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateLocales(req, res) {
    try {
      const Locales = await LocalesService.updateLocales(req.params.id, req.body);
      if (!Locales) {
        return res.status(404).json({ error: 'Locales not found' });
      }
      res.json(Locales);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async deleteLocales(req, res) {
    try {
      const Locales = await LocalesService.deleteLocales(req.params.id);
      if (!Locales) {
        return res.status(404).json({ error: 'Locales not found' });
      }
      res.json({ message: 'Locales deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getLocalesWithResenas(req, res) {
    try {
      // Obtener el local con sus reseñas utilizando agregación
      const local = await LocalesService.getLocalesWithResenas(req.params.id);
      console.log(local);
      if (!local || local.length === 0) {
        return res.status(404).json({ error: 'Local not found' });
      }

      // Devolver el local con las reseñas asociadas
      res.json(local[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getLocalWithReservas(req, res) {
    try {
      // Obtener el local con sus reservas utilizando agregación
      const local = await LocalesService.getLocalWithReservas(req.params.id);

      if (!local || local.length === 0) {
        return res.status(404).json({ error: 'Local not found' });
      }
  
      // Devolver el local con las reservas asociadas
      res.json(local[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  
}
 
module.exports = new LocalesController();
