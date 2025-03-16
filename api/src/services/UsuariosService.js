/*
    Aqui debe ir la logica de los diferentes requerimietnos funcionales
*/
const Usuarios = require('../models/UsuariosModel');
 
class UsuariosService {
  async createUsuarios(data) {
    
    const Usuario = new Usuarios(data);
     
    await Usuario.save();
    return Usuario;
  }
 
  async getUsuarios(id) {
    if(id != 0 ){
      return await Usuarios.findById(id);
    }
    return await Usuarios.find();
    
  }
 
  async updateUsuarios(id, data) {
    return await Usuarios.findByIdAndUpdate(id, data, { new: true });
  }
 
  async deleteUsuarios(id) {
    return await Usuarios.findByIdAndDelete(id);
  }

  
}
 
module.exports = new UsuariosService();