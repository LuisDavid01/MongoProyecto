/*
    Aqui debe ir la logica de los diferentes requerimietnos funcionales
*/
const Fotos = require('../models/FotosModel');
 
class FotosService {
  async createFotos(data) {
    
    const Fotos = new Fotos(data);
     
    await Fotos.save();
    return Fotos;
  }
 
  async getFotos(id) {
    if(id != 0 ){
      return await Fotos.findById(id);
    }
    return await Fotos.find();
    
  }
 
  async updateFotos(id, data) {
    return await Fotos.findByIdAndUpdate(id, data, { new: true });
  }
 
  async deleteFotos(id) {
    return await Fotos.findByIdAndDelete(id);
  }

  
}
 
module.exports = new FotosService();