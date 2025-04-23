const VistaResenasService = require('../services/VistaResenasService');

class VistaResenasController {

  //(total de reseñas)
  async getVistaResenas(req, res) {
    try {
      const resenas = await VistaResenasService.getVistaResenas();
      if (!resenas) {
        return res.status(404).json({ error: 'No se encontraron datos en la vista materializada' });
      }
      res.json(resenas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // actualizar la vista materializada
  async actualizarVistaMaterializada(req, res) {
    try {
      await VistaResenasService.actualizarVistaMaterializada();
      res.status(200).json({ message: 'Vista materializada actualizada correctamente' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new VistaResenasController();
