const UsuariosService = require('../services/UsuariosService');
 
class UsuariosController {
 
 
  async createUsuarios(req, res) {
    try {
      const Usuarios = await UsuariosService.createUsuarios(req.body);
      res.status(201).json(Usuarios);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async getUsuarios(req, res) {
    try {
      const Usuarios = await UsuariosService.getUsuarios(req.params.id);
      if (!Usuarios) {
        return res.status(404).json({ error: 'Usuarios not found' });
      }
      res.json(Usuarios);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async updateUsuarios(req, res) {
    try {
      const Usuarios = await UsuariosService.updateUsuarios(req.params.id, req.body);
      if (!Usuarios) {
        return res.status(404).json({ error: 'Usuarios not found' });
      }
      res.json(Usuarios);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async deleteUsuarios(req, res) {
    try {
      const Usuarios = await UsuariosService.deleteUsuarios(req.params.id);
      if (!Usuarios) {
        return res.status(404).json({ error: 'Usuarios not found' });
      }
      res.json({ message: 'Usuarios deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
 
module.exports = new UsuariosController();