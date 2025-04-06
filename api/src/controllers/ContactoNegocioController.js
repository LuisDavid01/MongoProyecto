/*
    Controlador para ContactoNegocio
    



*/


const ContactoNegocioService = require('../services/ContactoNegocioService');
 
class ContactoNegocioController {
 
 
  async createContactoNegocio(req, res) {
    try {
      const ContactoNegocio = await ContactoNegocioService.createContactoNegocio(req.body);
      res.status(201).json(ContactoNegocio);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async getContactoNegocio(req, res) {
    try {
      const ContactoNegocio = await ContactoNegocioService.getContactoNegocio(req.params.id);
      if (!ContactoNegocio) {
        return res.status(404).json({ error: 'ContactoNegocio not found' });
      }
      res.json(ContactoNegocio);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async updateContactoNegocio(req, res) {
    try {
      const ContactoNegocio = await ContactoNegocioService.updateContactoNegocio(req.params.id, req.body);
      if (!ContactoNegocio) {
        return res.status(404).json({ error: 'ContactoNegocio not found' });
      }
      res.json(ContactoNegocio);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async deleteContactoNegocio(req, res) {
    try {
      const ContactoNegocio = await ContactoNegocioService.deleteContactoNegocio(req.params.id);
      if (!ContactoNegocio) {
        return res.status(404).json({ error: 'ContactoNegocio not found' });
      }
      res.json({ message: 'ContactoNegocio deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
 
module.exports = new ContactoNegocioController();