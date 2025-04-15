const ResenasService = require('../services/ResenasService');

class ResenasController {
  async createResena(req, res) {
    try {
      const resena = await ResenasService.createResena(req.body);
      res.status(201).json(resena);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getResena(req, res) {
    try {
      const resena = await ResenasService.getResena(req.params.id);
      if (!resena) {
        return res.status(404).json({ error: 'Resena not found' });
      }
      res.json(resena);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateResena(req, res) {
    try {
      const resena = await ResenasService.updateResena(req.params.id, req.body);
      if (!resena) {
        return res.status(404).json({ error: 'Resena not found' });
      }
      res.json(resena);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteResena(req, res) {
    try {
      const resena = await ResenasService.deleteResena(req.params.id);
      if (!resena) {
        return res.status(404).json({ error: 'Resena not found' });
      }
      res.json({ message: 'Resena deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new ResenasController();
