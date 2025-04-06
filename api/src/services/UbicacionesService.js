/*
    Aqui debe ir la logica de los diferentes requerimietnos funcionales
*/
const Ubicaciones = require('../models/UbicacionesModel');
 
class UbicacionesService {
  async createUbicaciones(data) {
    
    const Ubicacion = new Ubicaciones(data);
     
    await Ubicacion.save();
    return Ubicacion;
  }
 
  async getUbicaciones(id) {
    if(id != 0 ){
      return await Ubicaciones.findById(id);
    }
    return await Ubicaciones.find();
    
  }
 
  async updateUbicaciones(id, data) {
    return await Ubicaciones.findByIdAndUpdate(id, data, { new: true });
  }
 
  async deleteUbicaciones(id) {
    return await Ubicaciones.findByIdAndDelete(id);
  }

  
}
 
module.exports = new UbicacionesService();