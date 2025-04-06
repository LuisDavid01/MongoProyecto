/*
    Aqui debe ir la logica de los diferentes requerimietnos funcionales
*/
const Horarios = require('../models/HorariosModel');
 
class HorariosService {
  async createHorarios(data) {
    
    const Horario = new Horarios(data);
     
    await Horario.save();
    return Horario;
  }
 
  async getHorarios(id) {
    if(id != 0 ){
      return await Horarios.findById(id);
    }
    return await Horarios.find();
    
  }
 
  async updateHorarios(id, data) {
    return await Horarios.findByIdAndUpdate(id, data, { new: true });
  }
 
  async deleteHorarios(id) {
    return await Horarios.findByIdAndDelete(id);
  }

  
}
 
module.exports = new HorariosService();