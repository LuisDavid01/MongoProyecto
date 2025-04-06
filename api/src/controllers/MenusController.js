/*
    Controlador para Menus
    



*/


const MenusService = require('../services/MenusService');
 
class MenusController {
 
 
  async createMenus(req, res) {
    try {
      const Menus = await MenusService.createMenus(req.body);
      res.status(201).json(Menus);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async getMenus(req, res) {
    try {
      const Menus = await MenusService.getMenus(req.params.id);
      if (!Menus) {
        return res.status(404).json({ error: 'Menus not found' });
      }
      res.json(Menus);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async updateMenus(req, res) {
    try {
      const Menus = await MenusService.updateMenus(req.params.id, req.body);
      if (!Menus) {
        return res.status(404).json({ error: 'Menus not found' });
      }
      res.json(Menus);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async deleteMenus(req, res) {
    try {
      const Menus = await MenusService.deleteMenus(req.params.id);
      if (!Menus) {
        return res.status(404).json({ error: 'Menus not found' });
      }
      res.json({ message: 'Menus deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
 
module.exports = new MenusController();