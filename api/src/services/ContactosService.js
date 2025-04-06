/*
    Aqui debe ir la logica de los diferentes requerimietnos funcionales
*/
const Contactos = require('../models/ContactosModel');
 
class ContactosService {
  async createContactos(data) {
    
    const Contacto = new Contactos(data);
     
    await Contacto.save();
    return Contacto;
  }
 
  async getContactos(id) {
    if(id != 0 ){
      return await Contactos.findById(id);
    }
    return await Contactos.find();
    
  }
 
  async updateContactos(id, data) {
    return await Contactos.findByIdAndUpdate(id, data, { new: true });
  }
 
  async deleteContactos(id) {
    return await Contactos.findByIdAndDelete(id);
  }

  
}
 
module.exports = new ContactosService();