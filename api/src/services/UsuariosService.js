const Usuarios = require('../models/UsuariosModel');
 
class UsuariosService {
  async createUsuarios(data) {
 
    const Usuarios = new Usuarios(data);
    await Usuarios.save();
    return Usuarios;
  }
 
  async getUsuarios(id) {
    if(id != 0){
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

  async promerio(id) {
    
    return await Usuarios.findByIdAndDelete(id);
  }
}
 
module.exports = new UsuariosService();