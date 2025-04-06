/*
    Aqui debe ir la logica de los diferentes requerimietnos funcionales
*/
const ContactoNegocio = require('../models/ContactoNegocioModel');
 
class ContactoNegocioService {
  async createContactoNegocio(data) {
    
    const Contacto = new ContactoNegocio(data);
     
    await Contacto.save();
    return Contacto;
  }
 
  async getContactoNegocio(id) {
    if(id != 0 ){
      return await ContactoNegocio.findById(id);
    }
    return await ContactoNegocio.find();
    
  }
 
  async updateContactoNegocio(id, data) {
    return await ContactoNegocio.findByIdAndUpdate(id, data, { new: true });
  }
 
  async deleteContactoNegocio(id) {
    return await ContactoNegocio.findByIdAndDelete(id);
  }

  
}
 
module.exports = new ContactoNegocioService();