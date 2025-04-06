/*
    Aqui debe ir la logica de los diferentes requerimietnos funcionales
*/
const EventosEspeciales = require('../models/EventosEspecialesModel');
 
class EventosEspecialesService {
  async createEventosEspeciales(data) {
    
    const EventoEspecial = new EventosEspeciales(data);
     
    await EventoEspecial.save();
    return EventoEspecial;
  }
 
  async getEventosEspeciales(id) {
    if(id != 0 ){
      return await EventosEspeciales.findById(id);
    }
    return await EventosEspeciales.find();
    
  }
 
  async updateEventosEspeciales(id, data) {
    return await EventosEspeciales.findByIdAndUpdate(id, data, { new: true });
  }
 
  async deleteEventosEspeciales(id) {
    return await EventosEspeciales.findByIdAndDelete(id);
  }

  
}
 
module.exports = new EventosEspecialesService();